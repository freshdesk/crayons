import { Component, Host, h, Element, Prop } from '@stencil/core';

import { observeRTL } from '../../utils';

@Component({
  tag: 'fw-button-group',
  styleUrl: 'button-group.scss',
  shadow: true,
})
export class ButtonGroup {
  @Prop({ mutable: true }) label = '';
  @Element() host: HTMLElement;
  private rtlObserver: any = null;

  connectedCallback() {
    this.rtlObserver = observeRTL(this.host.shadowRoot);
  }
  componentDidLoad() {
    this.handleSlotChange();
  }
  disconnectedCallback() {
    this.rtlObserver?.destroy();
  }
  handleSlotChange() {
    if (!this.host) return;
    const slottedElements = this.host.querySelectorAll('fw-button');
    slottedElements.forEach((button, index) => {
      button.classList.add('fw-button-group__button');
      button.classList.toggle('fw-button-group__button--first', index === 0);
      button.classList.toggle(
        'fw-button-group__button--inner',
        index > 0 && index < slottedElements.length - 1
      );
      button.classList.toggle(
        'fw-button-group__button--last',
        index === slottedElements.length - 1
      );
    });
  }
  render() {
    return (
      <Host aria-label={this.label}>
        <slot onSlotchange={this.handleSlotChange}></slot>
      </Host>
    );
  }
}
