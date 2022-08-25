import {
  Component,
  Element,
  Event,
  EventEmitter,
  Listen,
  Method,
  Prop,
  State,
  h,
  Watch,
  Fragment,
} from '@stencil/core';
import { range, uniq } from 'lodash-es';
import { TranslationController } from '../../global/Translation';
import { handleKeyDown, renderHiddenField, validateEmail } from '../../utils';
import {
  changeEmittable,
  clearInput,
  closeDropdown,
  expandHandler,
  focusHandler,
  fwChangeHandler,
  hideListHandler,
  initializeComponent,
  innerClickHandler,
  innerFocusHandler,
  innerOnBlur,
  isValueEqual,
  openDropdown,
  optionsWatcher,
  renderInput,
  valueExists,
} from '../../utils/select-utils';

@Component({
  tag: 'fw-email-select',
  styleUrl: 'email-select.scss',
  shadow: true,
})
export class EmailHeaderCustomComponentsSelectField {
  @Element() host: HTMLElement;
  private selectInput?: HTMLInputElement;
  private fwListOptions?: HTMLFwListOptionsElement;
  private popover?: HTMLFwPopoverElement;
  private tagContainer: HTMLElement;
  private singleValueLabel: HTMLElement;
  private tagArrowKeyCounter = 0;
  private hostId;
  private resizeObserver;

  // Functions shared from utils **Do not remove any variables here as they are being accessed from utils**
  private fwChangeHandler;
  private expandHandler;
  private initializeComponent;
  private renderInput;
  private clearInput;
  private isValueEqual;
  private valueExists;
  private optionsWatcher;
  private focusHandler;
  private blurHandler;
  private hideListHandler;
  private changeEmittable;
  private closeDropdown;
  private openDropdown;
  private innerOnBlur;
  private innerFocusHandler;
  private innerClickHandler;

  private innerOnFocus = (e: Event) => {
    if (this.changeEmittable()) {
      this.innerFocusHandler();
      this.focusedValues = [];
    }
  };

  private innerOnClick = () => {
    this.innerClickHandler(!this.multiple);
    this.focusedValues = [];
  };

  /**
   * If the dropdown is shown or not
   */
  @State() isExpanded = false;
  @State() hasFocus = false;
  @State() searchValue;
  @State() dataSource;
  @State() selectedOptionsState = [];
  @State() isLoading = false;
  @State() focusedOptionId = '';
  @State() focusedValues = [];
  @State() addTooltip = false;

  /**
   * Value of the option that is displayed as the default selection, in the list box. Must be a valid value corresponding to the fw-select-option components used in Select.
   */
  @Prop({ mutable: true }) value: any;

  /**
   * Name of the component, saved as part of form data.
   */
  @Prop() name = '';

  /**
   * Text displayed in the list box before an option is selected.
   */
  @Prop() placeholder?: string | null;

  /**
   * If true, the user cannot modify the default value selected. If the attribute's value is undefined, the value is set to true.
   */
  @Prop() readonly = false;

  /**
   * Enables selection of multiple options. If the attribute’s value is undefined, the value is set to false.
   */
  @Prop() multiple = false;

  /**
   * Works with `multiple` enabled. Configures the maximum number of options that can be selected with a multi-select component.
   */
  @Prop() max = Number.MAX_VALUE;

  /**
   * The data for the select component, the options will be of type array of fw-select-options.
   */
  @Prop() options: any;

  /**
   * Filter function which takes in filterText and dataSource and return a Promise.
   * Where filter text is the text to filter the value in dataSource array.
   * The returned promise should contain the array of options to be displayed.
   */
  @Prop() search;

  /**
   * Array of the options that is displayed as the default selection, in the list box. Must be a valid option corresponding to the fw-select-option components used in Select.
   */
  @Prop({ reflect: true, mutable: true }) selectedOptions = [];

  /**
   * Whether clicking on the already selected option disables it.
   */
  @Prop() allowDeselect = false;

  /**
   * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
   */
  @Prop() disabled = false;

  /**
   * Debounce timer for the search promise function.
   */
  @Prop() debounceTimer = 300;

  /**
   * Maximum number of emails allowed.
   */
  @Prop() maxEmailsAllowed = 50;

  // Events
  /**
   * Triggered when a value is selected or deselected from the list box options.
   */
  @Event() fwChange: EventEmitter;
  /**
   * Triggered when the list box comes into focus.
   */
  @Event() fwFocus: EventEmitter;
  /**
   * Triggered when the list box loses focus.
   */
  @Event() fwBlur: EventEmitter;

  @Listen('fwHide')
  onDropdownClose(e) {
    if (e.composedPath()[0].id === 'list-items-popover') {
      this.hideListHandler();
    }
  }

  @Listen('fwShow')
  onDropdownOpen(e) {
    if (e.composedPath()[0].id === 'list-items-popover') {
      this.isExpanded = true;
    }
  }

  @Listen('fwLoading')
  onLoading(event) {
    this.isLoading = event.detail.isLoading;
    if (this.multiple && !this.isLoading && !this.readonly) {
      this.selectInput.value.trim() && this.openDropdown();
    }
  }

  @Listen('fwChange')
  fwSelectedHandler(selectedItem) {
    this.fwChangeHandler(selectedItem, true);
    if (
      selectedItem.composedPath()[0].tagName === 'FW-LIST-OPTIONS' &&
      this.multiple
    ) {
      this.selectInput?.focus();
    }
  }

  // Listen to Tag close in case of multi-select
  @Listen('fwClosed')
  fwCloseHandler(ev) {
    this.setSelectedOptions(
      this.selectedOptionsState.filter((_, index) => index !== ev.detail.index)
    );
    this.focusOnTagContainer();
  }

  @Listen('keydown')
  onKeyDown(ev) {
    switch (ev.key) {
      case 'ArrowDown':
        this.innerOnClick();
        this.fwListOptions.setFocus();
        ev.preventDefault();
        ev.stopPropagation();
        break;
      case 'Delete':
      case 'Backspace':
        if (this.focusedValues.length > 0) {
          // delete focused values
          this.setSelectedOptions(
            this.selectedOptionsState.filter(
              (_, index) => !this.focusedValues.includes(index)
            )
          );
          this.focusedValues = [];
        }
        break;
      case 'ArrowLeft':
        if (this.multiple && this.selectInput.value === '') {
          this.focusOnTagContainer();
        }
        break;
      case 'Escape':
        this.innerOnBlur(ev);
        this.closeDropdown();
        break;
      case 'Tab':
        this.focusedValues = [];
        this.closeDropdown();
        break;
      case 'a':
      case 'A':
        if (
          ((ev.ctrlKey || ev.metaKey) && !this.searchValue) ||
          this.focusedValues.length > 0
        ) {
          this.tagContainer?.focus();
          this.focusedValues = this.selectedOptionsState.reduce(
            (arr, option, i) => (!option.disabled && arr.push(i), arr),
            []
          );
        }
        break;
    }
  }

  @Listen('fwFocus')
  onOptionFocus(event) {
    this.focusHandler(event);
  }

  @Listen('fwBlur')
  onOptionBlur(event) {
    this.blurHandler(event);
  }

  @Watch('dataSource')
  optionsChangedHandler() {
    this.renderInput();
  }

  @Watch('options')
  onOptionsChange(newValue) {
    this.optionsWatcher(newValue);
  }

  @Watch('selectedOptions')
  onSelectedOptionsChange(newValue) {
    this.setSelectedOptions(newValue);
  }

  @Method()
  async getSelectedItem(): Promise<any> {
    return this.fwListOptions.getSelectedOptions();
  }

  @Method()
  async setSelectedValues(values: string | string[]): Promise<any> {
    this.fwListOptions.setSelectedValues(values);
    this.renderInput();
  }

  @Method()
  async setSelectedOptions(options: any[]): Promise<any> {
    this.fwListOptions.setSelectedOptions(options);
    this.renderInput();
  }

  @Method()
  async setFocus(): Promise<any> {
    this.hasFocus = true;
    this.selectInput?.focus();
  }

  tagContainerKeyDown = (ev) => {
    switch (ev.key) {
      case 'Escape':
        this.innerOnBlur(ev);
        this.closeDropdown();
        break;
      case 'Delete':
      case 'Backspace':
        if (this.focusedValues.length > 0) {
          // delete focused values
          this.setSelectedOptions(
            this.selectedOptionsState.filter(
              (_, index) => !this.focusedValues.includes(index)
            )
          );
          this.focusedValues = [];
        }
        break;
      case 'ArrowLeft':
        if (this.tagArrowKeyCounter - 1 >= 0) {
          if (
            !this.selectedOptionsState[this.tagArrowKeyCounter - 1].disabled
          ) {
            this.tagArrowKeyCounter--;
            this.focusOnTag(this.tagArrowKeyCounter);
          }
        } else {
          this.tagArrowKeyCounter = 0;
        }
        ev.stopImmediatePropagation();
        break;
      case 'ArrowRight':
        this.tagArrowKeyCounter++;
        if (this.tagArrowKeyCounter >= this.value.length) {
          this.selectInput?.focus();
        } else {
          this.focusOnTag(this.tagArrowKeyCounter);
        }
        ev.stopImmediatePropagation();
        break;
    }
  };

  focusOnTagContainer() {
    if (this.tagContainer) {
      if (!this.selectedOptionsState[this.value.length - 1].disabled) {
        this.tagArrowKeyCounter = this.value.length - 1;
        this.focusOnTag(this.tagArrowKeyCounter);
      }
    }
  }

  focusOnTag(index) {
    if (!this.selectedOptionsState[index].disabled) {
      this.focusedValues = [index];
      this.tagContainer.focus();
    }
  }

  onInput() {
    this.searchValue = this.selectInput.value;
    if (this.selectInput.value.trim()) {
      !this.multiple && this.openDropdown();
    } else {
      // Clear selected value in case of single select.
      this.multiple || this.setSelectedValues('');
      this.closeDropdown();
    }
    this.focusedValues = [];
  }

  onClickTag(e, index) {
    e.stopPropagation();
    this.tagContainer.focus();
    if (!this.selectedOptionsState[index].disabled) {
      const focusedIndex = this.focusedValues.indexOf(index);
      if (focusedIndex === -1) {
        if (e.ctrlKey || e.metaKey) {
          this.focusedValues = [...this.focusedValues, index];
        } else if (e.shiftKey && this.focusedValues.length > 0) {
          this.focusedValues = uniq([
            ...this.focusedValues,
            ...range(
              this.focusedValues[this.focusedValues.length - 1],
              index + 1
            ),
          ]);
        } else {
          this.focusedValues = [index];
        }
      } else if (e.ctrlKey || e.metaKey) {
        this.focusedValues = this.focusedValues.filter(
          (_, index) => index !== focusedIndex
        );
      }
    }
  }

  renderTags() {
    if (this.multiple && Array.isArray(this.value)) {
      return this.selectedOptionsState.map((option, index) => {
        if (this.isValueEqual(this.value, option)) {
          const optionState =
            option.error || index >= this.maxEmailsAllowed ? 'error' : 'normal';
          return (
            <fw-tag
              index={index}
              isFocused={this.focusedValues.includes(index)}
              class={option.disabled ? 'tag-disabled' : 'tag-default'}
              state={optionState}
              variant='avatar'
              graphicsProps={option.graphicsProps}
              text={option.value}
              disabled={option.disabled}
              value={option.value}
              focusable={false}
              closable={!option.disabled}
              onClick={(e) => this.onClickTag(e, index)}
              showEllipsisOnOverflow
            />
          );
        }
      });
    }
  }

  renderLabel(value) {
    return (
      <span class='single-select-value'>
        {value?.text} &lt;{value?.subText}&gt;
      </span>
    );
  }

  renderSingleValue(value) {
    if (value) {
      return (
        <span class={`single-value-tag ${this.readonly ? 'readonly' : ''}`}>
          <fw-avatar
            size='xsmall'
            image={value?.graphicsProps?.image}
          ></fw-avatar>
          <div class='ellipsis' ref={(el) => (this.singleValueLabel = el)}>
            {this.addTooltip ? (
              <fw-tooltip
                trigger='hover'
                content={`${value?.text} <${value?.subText}>`}
              >
                {this.renderLabel(value)}
              </fw-tooltip>
            ) : (
              this.renderLabel(value)
            )}
          </div>
        </span>
      );
    }
  }

  onClickOutside(e) {
    if (
      !e.composedPath().includes(this.host) &&
      this.focusedValues.length > 0
    ) {
      this.focusedValues = [];
    }
  }

  connectedCallback() {
    // Bind util methods with component instance to access state, props and methods
    this.fwChangeHandler = fwChangeHandler.bind(this);
    this.expandHandler = expandHandler.bind(this);
    this.initializeComponent = initializeComponent.bind(this);
    this.renderInput = renderInput.bind(this);
    this.clearInput = clearInput.bind(this);
    this.isValueEqual = isValueEqual.bind(this);
    this.valueExists = valueExists.bind(this);
    this.optionsWatcher = optionsWatcher.bind(this);
    this.focusHandler = focusHandler.bind(this);
    this.hideListHandler = hideListHandler.bind(this);
    this.changeEmittable = changeEmittable.bind(this);
    this.closeDropdown = closeDropdown.bind(this);
    this.openDropdown = openDropdown.bind(this);
    this.innerOnBlur = innerOnBlur.bind(this);
    this.innerFocusHandler = innerFocusHandler.bind(this);
    this.innerClickHandler = innerClickHandler.bind(this);
  }

  componentWillLoad() {
    // Initialize options, selectedOptions, value from slot/props.
    this.initializeComponent();
    // Add event listener to track clicks outside the element to blur selected tags
    document.addEventListener('mouseup', this.onClickOutside.bind(this));
  }

  componentDidLoad() {
    this.renderInput();
  }

  componentDidRender = () => {
    const elLabel = this.singleValueLabel;
    if (elLabel && !this.resizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        if (elLabel.offsetWidth > 0) {
          this.addTooltip =
            elLabel.offsetWidth < elLabel.scrollWidth ? true : false;
        }
      });
      this.resizeObserver.observe(elLabel);
    }
  };

  disconnectedCallback() {
    this.host.removeEventListener('focus', this.setFocus);
    document.removeEventListener('mouseup', this.onClickOutside.bind(this));
    this.removeResizeObserver();
  }

  private removeResizeObserver = () => {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  };

  @Watch('isExpanded')
  expandWatcher(expanded: boolean): void {
    if (!this.multiple) {
      this.expandHandler(expanded);
    }
  }

  render() {
    const { host, name, value } = this;

    renderHiddenField(host, name, value);
    return (
      <div
        aria-disabled={this.disabled}
        class={{
          'email-select-container': true,
          'has-focus': this.hasFocus,
        }}
      >
        {/* NOTE:: aria-controls is added to div based on ARIA 1.0 but from ARIA 1.1 version this should be
        moved to the input REF- https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html */}
        <div
          class={{ 'select-container': true }}
          role='combobox'
          aria-controls={`${this.hostId}-listbox`}
          aria-haspopup='listbox'
          aria-expanded={this.isExpanded}
          aria-owns={`${this.hostId}-listbox`}
        >
          <fw-popover
            id='list-items-popover'
            distance='8'
            trigger='manual'
            ref={(popover) => (this.popover = popover)}
            placement='bottom'
            boundary={this.host.parentElement}
            hoist
          >
            <div
              slot='popover-trigger'
              class={{
                'input-container': this.multiple && !this.readonly,
                'select-disabled': this.disabled,
              }}
              onClick={() => !this.readonly && this.innerOnClick()}
              onKeyDown={handleKeyDown(this.innerOnClick, true)}
              role='button'
              tabIndex={-1}
            >
              {this.readonly ? (
                this.renderSingleValue(this.selectedOptionsState[0])
              ) : !this.multiple ? (
                <fw-button
                  class='single-value-button'
                  color='text'
                  disabled={this.disabled}
                  show-caret-icon
                >
                  {this.renderSingleValue(this.selectedOptionsState[0])}
                </fw-button>
              ) : (
                <Fragment>
                  <div class='input-container-inner'>
                    {this.multiple && (
                      <div
                        class='tag-container'
                        onFocus={this.focusOnTagContainer}
                        ref={(tagContainer) =>
                          (this.tagContainer = tagContainer)
                        }
                        onKeyDown={this.tagContainerKeyDown}
                        role='listbox'
                        aria-multiselectable='true'
                        tabIndex={-1}
                      >
                        {this.renderTags()}
                      </div>
                    )}
                    <input
                      ref={(selectInput) => (this.selectInput = selectInput)}
                      class={{
                        'multiple-select': this.multiple,
                      }}
                      autoComplete='off'
                      disabled={this.disabled}
                      name={this.name}
                      id={this.name}
                      placeholder={
                        this.valueExists() ? '' : this.placeholder || ''
                      }
                      readOnly={this.readonly}
                      value=''
                      aria-autocomplete='list'
                      aria-activedescendant={this.focusedOptionId}
                      onInput={() => this.onInput()}
                      onFocus={(e) => this.innerOnFocus(e)}
                      onBlur={(e) => this.innerOnBlur(e)}
                      aria-describedby={`hint-${this.name} error-${this.name}`}
                    />
                  </div>
                  {this.isLoading && <fw-spinner size='small'></fw-spinner>}
                </Fragment>
              )}
            </div>
            <fw-list-options
              ref={(fwListOptions) => (this.fwListOptions = fwListOptions)}
              id={`${this.hostId}-listbox`}
              role='listbox'
              aria-labelledby={`${this.hostId}-label`}
              debounceTimer={this.debounceTimer}
              search={this.search}
              selectedOptions={this.selectedOptions}
              variant='avatar'
              filter-text={this.searchValue}
              options={this.dataSource}
              value={this.value}
              multiple={this.multiple}
              max={this.max}
              disabled={this.disabled}
              allowDeselect={this.allowDeselect}
              slot='popover-content'
              validateNewOption={(value) => !validateEmail(value)}
              formatCreateLabel={(label) =>
                TranslationController.t('emailSelect.createLabel', {
                  label,
                })
              }
              isCreatable
            ></fw-list-options>
          </fw-popover>
        </div>
      </div>
    );
  }
}
