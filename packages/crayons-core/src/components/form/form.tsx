/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Component,
  Prop,
  State,
  Element,
  h,
  Method,
  Watch,
} from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';
import {
  FormValues,
  FormTouched,
  FormErrors,
  FormUtils,
  FormProps,
  FormSubmit,
} from './form-declaration';
import {
  validateYupSchema,
  prepareDataForValidation,
  yupToFormErrors,
  generateDynamicInitialValues,
  generateDynamicValidationSchema,
  serializeForm,
} from './form-util';
import { debounce } from '../../utils';
import EventStore from '../../utils/event-store';

@Component({
  tag: 'fw-form',
  shadow: true,
})
export class Form {
  @Element() el!: any;

  private controls: any;
  private fields: any;

  /**
   * Initial field values of the form. It is an object with keys pointing to field name
   */
  @Prop() initialValues?: any = {};

  /** Validate the form's values with an async function.
   * Should return a Promise which resolves to an errors object.
   * The keys in the errors object must match with the field names.
   */
  @Prop() validate?: any;

  /**
   * Schema to render Dynamic Form. Contains an array of fields pointing to each form control.
   * Please see the usage reference for examples.
   */
  @Prop() formSchema?: any = {};

  /**
   * YUP based validation schema for handling validation
   */
  @Prop() validationSchema?: any = {};

  /** Tells Form to validate the form on each input's onInput event */
  @Prop() validateOnInput? = true;
  /** Tells Form to validate the form on each input's onBlur event */
  @Prop() validateOnBlur? = true;

  /** The number of milliseconds to delay before doing validation on Input */
  @Prop() wait = 400;

  /**
   * Id to uniquely identify the Form. If not set, a random Id will be generated.
   */
  @Prop() formId = uuidv4();

  @State() values: FormValues = {} as any;
  @State() touched: FormTouched<FormValues> = {} as any;
  @State() errors: FormErrors<FormValues> = {} as any;

  @State() formValidationSchema;
  @State() formInitialValues;

  private debouncedHandleInput: any;
  private handleInputSubscriber: any;
  private handleBlurSubscriber: any;
  private handleChangeSubscriber: any;

  async componentWillLoad() {
    this.debouncedHandleInput = debounce(this.handleInput, this, this.wait);

    this.handleInputSubscriber = EventStore.subscribe(
      `${this.formId}::handleInput`,
      this.debouncedHandleInput
    );
    this.handleBlurSubscriber = EventStore.subscribe(
      `${this.formId}::handleBlur`,
      this.handleBlur
    );
    this.handleChangeSubscriber = EventStore.subscribe(
      `${this.formId}::handleChange`,
      this.handleInput
    );

    await this.handleFormSchemaAndInitialValuesChange(
      this.formSchema,
      this.initialValues
    );
  }

  @Watch('formSchema')
  async formSchemaHandler(formSchema) {
    await this.handleFormSchemaAndInitialValuesChange(
      formSchema,
      this.initialValues
    );
  }

  @Watch('initialValues')
  async initialValuesHandler(initialValues) {
    await this.handleFormSchemaAndInitialValuesChange(
      this.formSchema,
      initialValues
    );
  }

  async handleFormSchemaAndInitialValuesChange(formSchema, initialValues) {
    this.fields = formSchema?.fields?.reduce((acc, field) => {
      return { ...acc, [field.name]: field };
    }, {});

    this.formValidationSchema =
      generateDynamicValidationSchema(formSchema, this.validationSchema) || {};
    this.formInitialValues =
      generateDynamicInitialValues(formSchema, initialValues) || {};

    this.values = this.formInitialValues;

    const initialValuesKeys = Object.keys(initialValues);

    for (const field of Object.keys(this.formInitialValues)) {
      this.errors[field] = null;
      if (initialValuesKeys?.includes(field)) this.touched[field] = true;
      else this.touched[field] = false;
    }

    await this.handleValidation();
  }

  // get Form Controls and pass props to children
  componentDidLoad() {
    this.controls = this.getFormControls();
    this.passPropsToChildren(this.controls);
    // adding a timeout since this lifecycle method is called before its child in React apps.
    // Bug with react wrapper.
    setTimeout(() => {
      this.setFocusOnError();
    }, 10);
  }

  // pass props to form-control children
  componentWillUpdate() {
    if (!this.controls || !this.controls.length) {
      this.controls = this.getFormControls();
    }
    this.passPropsToChildren(this.controls);
  }

  handleSlotChange() {
    this.controls = this.getFormControls();
  }

  disconnectedCallback() {
    this.handleChangeSubscriber?.unsubscribe();
    this.handleInputSubscriber?.unsubscribe();
    this.handleBlurSubscriber?.unsubscribe();
  }

  handleSubmit = async (event: Event): Promise<FormSubmit> => {
    event?.preventDefault();
    event?.stopPropagation();

    let isValid = false,
      touchedState = {};

    await this.handleValidation();

    const keys = [...Object.keys(this.values), ...Object.keys(this.errors)];

    keys.forEach(
      (k: string) => (touchedState = { ...touchedState, [k]: true })
    );
    // on clicking submit, mark all fields as touched
    this.touched = { ...this.touched, ...touchedState };

    isValid = !this.errors || Object.keys(this.errors).length === 0;
    if (!isValid) {
      this.setFocusOnError();
    }

    let serializedValues = { ...this.values };

    if (this.formSchema && Object.keys(this.formSchema).length > 0) {
      serializedValues = serializeForm(serializedValues, this.fields);
    }

    return { values: serializedValues, errors: this.errors, isValid };
  };

  handleReset = async (event?: Event): Promise<void> => {
    event?.preventDefault();
    event?.stopPropagation();
    this.values = this.formInitialValues;

    let touchedState = {};
    const initialValuesKeys = Object.keys(this.initialValues);

    initialValuesKeys.forEach(
      (k: string) => (touchedState = { ...touchedState, [k]: true })
    );
    this.touched = touchedState;

    if (initialValuesKeys && initialValuesKeys.length > 0) {
      await this.handleValidation();
      this.setFocusOnError();
    }
  };

  handleValidation = async () => {
    let validationErrors = {};

    // run validations against validationSchema if present
    if (
      this.formValidationSchema &&
      Object.keys(this.formValidationSchema).length
    ) {
      const pr = validateYupSchema(
        prepareDataForValidation(this.values),
        this.formValidationSchema
      );
      try {
        await pr;
        validationErrors = {}; // reset errors if no errors from validation
      } catch (err) {
        validationErrors = yupToFormErrors(err);
      }
    }

    // run validations with validate function if passed as prop and merge with the errors from the above step
    if (this.validate && typeof this.validate === 'function') {
      try {
        validationErrors = {
          ...validationErrors,
          ...((await this.validate(this.values)) || {}),
        };
      } catch (err) {
        console.error(`Error in calling validate function ${err.message}`);
        validationErrors = { ...validationErrors };
      }
    }

    this.errors = validationErrors;
  };

  handleInput = async ({ field, value }) => {
    this.values = { ...this.values, [field]: value };

    /** Validate, if user wants to validateOnInput */
    if (this.validateOnInput) {
      this.touched = { ...this.touched, [field]: true };
      await this.handleValidation();
    }
  };

  handleBlur = async ({ field, value }) => {
    this.values = { ...this.values, [field]: value };

    /** Validate, if user wants to validateOnBlur */
    if (this.validateOnBlur) {
      this.touched = { ...this.touched, [field]: true };
      await this.handleValidation();
    }
  };

  setFocus = (field) => {
    const control = this.controls?.find((control) => control.name === field);
    control?.setFocus();
  };

  setFocusOnError = () => {
    const firstErrorField = Object.keys(this.errors || {})
      .sort((a, b) => {
        return this.fields?.[a]?.position - this.fields?.[b]?.position;
      })
      .find((field) => {
        return this.touched[field] === true;
      });

    if (firstErrorField) this.setFocus(firstErrorField);
  };

  private getFormControls() {
    const children = Array.from([
      ...this.el.shadowRoot.querySelectorAll('*'),
      ...this.el.querySelectorAll('*'),
    ]).filter((el: HTMLElement) =>
      ['fw-form-control'].includes(el.tagName.toLowerCase())
    );
    return children;
  }

  private passPropsToChildren(controls) {
    controls?.forEach((control: any) => {
      this.passPropsToChild(control);
    });
  }

  private passPropsToChild(control: any) {
    const error = this.errors[control.name];
    const touched = this.touched[control.name];
    control.controlProps = this.composedUtils();
    control.error = error || '';
    control.touched = touched || false;
  }

  private composedUtils = (): FormUtils => {
    const inputProps = (field: string) => ({
      'value': this.values[field],
      'form-id': this.formId,
    });

    const radioProps = (field: string) => ({
      'value': this.values[field],
      'form-id': this.formId,
    });

    const checkboxProps = (field: string) => ({
      'checked': !!this.values[field],
      'form-id': this.formId,
    });

    const selectProps = (field: string, inputType) => ({
      'value':
        inputType === 'multi_select'
          ? this.values[field] || []
          : this.values[field] || '',
      'form-id': this.formId,
    });

    const formProps: FormProps = {
      action: 'javascript:void(0);',
      onSubmit: this.handleSubmit,
      onReset: this.handleReset,
    };

    return {
      inputProps,
      selectProps,
      checkboxProps,
      radioProps,
      formProps,
    };
  };

  @Method()
  async setFieldValue(
    field: string,
    value: any,
    shouldValidate = true
  ): Promise<void> {
    this.values = { ...this.values, [field]: value };

    if (shouldValidate) {
      this.touched = { ...this.touched, [field]: true };
      await this.handleValidation();
    }
  }

  @Method()
  async setFieldErrors(errorObj: FormErrors<FormValues>): Promise<void> {
    Object.entries(errorObj)?.forEach(([field, value]) => {
      this.errors = { ...this.errors, [field]: value as string };
      this.touched = { ...this.touched, [field]: true };
    });
    this.setFocusOnError();
  }

  @Method()
  async doSubmit(e) {
    return this.handleSubmit(e);
  }

  @Method()
  async doReset(e) {
    this.handleReset(e);
  }

  render() {
    const utils: FormUtils = this.composedUtils();

    return (
      <form id={`form-${this.formId}`} {...utils.formProps}>
        {this.formSchema && Object.keys(this.formSchema).length > 0 ? (
          this.formSchema?.fields
            ?.sort((a, b) => a.position - b.position)
            .map((field) => {
              return (
                <fw-form-control
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  label={field.label}
                  required={field.required}
                  hint={field.hint}
                  placeholder={field.placeholder}
                  choices={field.choices}
                  fieldProps={field}
                  controlProps={utils}
                ></fw-form-control>
              );
            })
        ) : (
          <slot onSlotchange={() => this.handleSlotChange()}></slot>
        )}
      </form>
    );
  }
}
