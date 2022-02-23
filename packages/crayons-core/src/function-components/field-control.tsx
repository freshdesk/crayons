import { h, FunctionalComponent } from '@stencil/core';

export interface FieldControlProps {
  /** The input id, used to map the input to the label */
  inputId: string;

  /** The label id, used to map the label to the input */
  labelId?: string;

  /** The label text (if the label slot isn't used) */
  label?: string;

  /** Whether or not a label slot has been provided. */
  hasLabelSlot?: boolean;

  /** The hint text id, used to map the input to the hint text */
  hintTextId?: string;

  /** The hint text (if the hint-text slot isn't used) */
  hintText?: string;

  /** Whether or not a hint text slot has been provided. */
  hasHintTextSlot?: boolean;

  /** The error text id, used to map the input to the error text */
  errorTextId?: string;

  /** The invalid text (if the error-text slot isn't used) */
  errorText?: string;

  /** Whether or not a error text slot has been provided. */
  hasErrorTextSlot?: boolean;

  /** The warning text id, used to map the input to the warning text */
  warningTextId?: string;

  /** The warning text (if the warning-text slot isn't used) */
  warningText?: string;

  /** Whether or not a warning text slot has been provided. */
  hasWarningTextSlot?: boolean;

  /** Whether or not the invalid text should be shown instead of the help text */
  state?: 'normal' | 'warning' | 'error';

  /** Whether or not to display a required indicator should be shown (asterisk) */
  required?: boolean;
}

const FieldControl: FunctionalComponent<FieldControlProps> = (
  props,
  children
) => {
  const hasLabel = !!props.label;
  const hasHintText = props.hintText ? true : props.hasHintTextSlot;
  const hasErrorText = props.errorText ? true : props.hasErrorTextSlot;
  const hasWarningText = props.warningText ? true : props.hasWarningTextSlot;

  const showHintText = props.state === 'normal' ? true : false;
  const showErrorText = props.state === 'error' ? true : false;
  const showWarningText = props.state === 'warning' ? true : false;

  return (
    <div
      class={{
        'field-control': true,
        'field-control-has-label': hasLabel,
        'field-control-has-hint-text': hasHintText,
        'field-control-has-error-text': hasErrorText,
        'field-control-has-warning-text': hasWarningText,
      }}
    >
      {hasLabel && (
        <label
          id={props.labelId}
          class={{ 'field-control-label': true, 'required': props.required }}
          htmlFor={props.inputId}
          aria-hidden={hasLabel ? 'false' : 'true'}
        >
          {props.label}
        </label>
      )}

      <div class='field-control-input'>{children}</div>

      {showHintText && (
        <div
          id={props.hintTextId}
          class='field-control-hint-text'
          aria-hidden={hasHintText ? 'false' : 'true'}
        >
          <slot name='hint-text'>{props.hintText}</slot>
        </div>
      )}

      {showErrorText && (
        <div
          id={props.errorTextId}
          class='field-control-error-text'
          aria-hidden={hasErrorText ? 'false' : 'true'}
        >
          <div class='text'>
            <slot name='error-text'>{props.errorText}</slot>
          </div>
        </div>
      )}

      {showWarningText && (
        <div
          id={props.warningTextId}
          class='field-control-warning-text'
          aria-hidden={hasWarningText ? 'false' : 'true'}
        >
          <slot name='warning-text'>{props.warningText}</slot>
        </div>
      )}
    </div>
  );
};

export default FieldControl;
