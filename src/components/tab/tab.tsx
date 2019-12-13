import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'fw-tab',
  styleUrl: 'tab.scss',
  shadow: true,
})

export class Tab {
  /**
   * The Title
   */
  @Prop() title: string;

  /**
   * The Message
   */
  @Prop() message: string;

}
