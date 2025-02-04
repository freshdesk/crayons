import { r as registerInstance, i as h } from './index-44c267ce.js';

const modalContentCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex:1;flex:1;overflow-y:auto;font-size:14px;font-weight:400;color:#12344d;line-height:20px}.content{-webkit-padding-after:32px;padding-block-end:32px;padding-inline:32px;-webkit-padding-before:12px;padding-block-start:12px;overflow:visible;-webkit-box-sizing:border-box;box-sizing:border-box}";

let ModalContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * render the slot content directly
   * @returns {JSX.Element}
   */
  render() {
    return (h("div", { class: 'content' }, h("slot", null)));
  }
};
ModalContent.style = modalContentCss;

export { ModalContent as fw_modal_content };
