import { Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'fw-select',
  styleUrl: 'select.scss',
  shadow: true,
})
export class Select {
  @Element() host: HTMLElement;
  private select?: HTMLDivElement;
  private selectInput?: HTMLInputElement;
  private selectList?: HTMLUListElement;
  /**
   * If the dropdown is shown or not
   */
  @State() isExpanded = false;
  @State() options = [];
  @State() filteredOptions = [];
  @State() hasFocus = false;
  /**
   * Label displayed on the interface, for the component.
   */
  @Prop() label = '';
  /**
   * Value of the option that is displayed as the default selection, in the input control.
   */
  @Prop({ mutable: true }) value: any;
  /**
   * Name of the component, saved as part of form data.
   */
  @Prop() name = '';
  /**
   * The type of control to display. The default type is text.
   */
  @Prop() type: 'text' | 'number' = 'text';
  /**
   * Text displayed in the control before an option is selected.
   */
  @Prop() placeholder?: string | null;
  /**
   * The state of the control. Color changes accordingly
   */
  @Prop() state: 'normal' | 'warning' | 'error' = 'normal';
  /**
   * This text will be displayed below the input box indicating the state/hint
   */
  @Prop() stateText = '';
  /**
   * If true, the user cannot modify the value.
   */
  @Prop() readonly = false;
  /**
   * Specifies the input control as a mandatory field. If the attribute’s value is undefined, the value is set to true.
   */
  @Prop() required = false;
  /**
   * If true, the user must select some value. The default wont be shown
   */
  @Prop() forceSelect = true;
  /**
   * Indicates that this control is disabled
   */
  @Prop() disabled = false;
  /**
   * Enables selection of multiple options. If the attribute’s value is undefined, the value is set to true.
   */
  @Prop() multiple = false;

  // Events
  @Event() fwChange: EventEmitter;
  @Event() fwFocus: EventEmitter;
  @Event() fwBlur: EventEmitter;

  private innerOnFocus = (e: Event) => {
    this.hasFocus = true;
    this.fwFocus.emit(e);
  }

  private innerOnClick = () => {
    this.filteredOptions = this.options;
    this.selectList.style.display = 'block';
    this.selectList.style.width = String(this.select.clientWidth) + 'px';
    this.isExpanded = true;
  }

  private innerOnBlur = (e: Event) => {
    this.selectList.style.display = 'none';
    this.isExpanded = false;
    this.fwBlur.emit(e);
  }

  @Watch('value')
  keyChanged(newValue, oldValue) {
    if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
      this.options = this.options.map(option => {
        option.selected = Array.isArray(this.value)
          ? this.value.includes(option.value)
          : this.value === option.value;
        return option;
      });
      this.fwChange.emit({ value: this.value });
    }
  }

  @Listen('fwSelected')
  fwSelectedHandler(selectedItem) {
    this.options = this.options.map(option => {
      if (selectedItem.detail.value === option.value) {
        option.selected = selectedItem.detail.selected;
      } else if (!this.multiple) {
        option.selected = false;
      }
      return option;
    });
    this.selectList.style.display = 'none';
    selectedItem.stopPropagation();
  }

  @Watch('options')
  optionsChangedHandler() {

    this.renderInput();
  }

  @Listen('fwClosed')
  fwCloseHandler(ev) {
    this.options = this.options.map(option => {
      if (option.value === ev.detail.value) {
        option.selected = false;
      }
      return option;
    });
  }
  @Listen('keydown')
  onKeyDonw(ev) {
    switch (ev.key) {
      case 'ArrowDown' :
        this.innerOnClick();
        break;
      case 'Escape' :
        this.innerOnBlur(ev);
        break;
    }
  }

  onInput() {
    const value = this.selectInput.value.toLowerCase();
    this.filteredOptions = value !== ''
      ? this.options.filter(option => option.text.toLowerCase().startsWith(value))
      : this.options;
    this.renderInput();
  }

  renderTags() {
    if (this.multiple) {
      return this.options
        .filter(option => option.selected)
        .map(option => <fw-tag text={option.text} value={option.value}/>);
    }
  }

  renderInput() {
    const selectedOptions = this.options.filter(option => option.selected);
    if (selectedOptions.length > 0) {
      this.value = this.multiple ? selectedOptions.map(option => option.value) : selectedOptions[0].value || '';
      this.selectInput.value = this.multiple ? '' : selectedOptions[0].text || '';
    }
  }

  renderDropdown() {
    return this.filteredOptions.map(option =>
      (<fw-select-option
        value={option.value}
        selected={option.selected}
        html={option.isHtml}
        htmlContent={option.htmlContent}
        >{option.text}
      </fw-select-option>)
    );
  }

  componentWillLoad() {

    const selectOptions = Array.from(this.host.querySelectorAll('fw-select-option'));

    const options = selectOptions.map(option => {
      return {
        isHtml: option.html,
        text: option.html ? option.optionText : option.textContent,
        value: option.value,
        selected: option.selected,
        htmlContent: option.html ? option.innerHTML : '',
      };
    });

    this.options = options;
    this.filteredOptions = this.options;
    this.host.innerHTML = '';
  }

  componentDidLoad() {
    this.renderInput();
  }

  @Method()
  async getSelectedItem(): Promise<any> {
    return this.options.filter(option => option.selected);
  }

  render() {

    return (
      <Host
        aria-disabled={this.disabled}
        class={{
          'has-focus': this.hasFocus,
        }}
      >
        {this.label !== '' ? <label class={{ 'required': this.required }}> {this.label} </label> : ''}
        <div class="select-container">
          <div class="input-container"
            ref={select => this.select = select}
            onClick={() => this.innerOnClick()}>
            <div class={{
              'input-container-inner': true,
              [this.state]: true,
            }}>
              {this.renderTags()}
              <input
                ref={selectInput => this.selectInput = selectInput}
                class={{
                  'multiple-select' : this.multiple,
                }}
                autoComplete="off"
                disabled={this.disabled}
                name={this.name}
                placeholder={this.placeholder || ''}
                readOnly={this.readonly}
                required={this.required}
                type={this.type}
                value=""
                onInput={() => this.onInput()}
                onFocus={e => this.innerOnFocus(e)}
                onBlur={e => this.innerOnBlur(e)}
              />
              <span class={{ 'dropdown-status-icon': true, 'expanded': this.isExpanded }}></span>
            </div>
          </div>
          <ul tabindex="0" ref={ul => this.selectList = ul}>
            {this.renderDropdown()}
          </ul>
          {this.stateText !== '' ?
            <span class="help-block">{this.stateText}</span> : ''}
        </div>
      </Host>
    );
  }
}
