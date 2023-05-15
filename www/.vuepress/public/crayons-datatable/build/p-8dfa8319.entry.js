import{r as t,c as i,h as s,g as e}from"./p-8c82131c.js";import{i as n}from"./p-a5f3811d.js";let o=class{constructor(s){t(this,s),this.fwSubmit=i(this,"fwSubmit",7),this.fwOpen=i(this,"fwOpen",7),this.fwClose=i(this,"fwClose",7),this.firstFocusElement=null,this.lastFocusElement=null,this.icon="",this.size="standard",this.submitText="OK",this.cancelText="Cancel",this.submitDisabled=!1,this.submitColor="primary",this.hideFooter=!1,this.isOpen=!1,this.accessibilityAdded=!1,this.escapeHandler=null}componentWillLoad(){this.modalTitle||(this.modalTitle=this.el.querySelector("fw-modal-title"),this.modalTitle&&(this.modalTitle.close=this.close.bind(this))),this.modalFooter||(this.modalFooter=this.el.querySelector("fw-modal-footer"),this.modalFooter&&(this.modalFooter.submit=this.submit.bind(this),this.modalFooter.close=this.close.bind(this))),this.modalContent||(this.modalContent=this.el.querySelector("fw-modal-content"))}visibilityChange(t){t?(this.addAccesibilityEvents(),this.fwOpen.emit()):(this.removeAccesibilityEvents(),this.fwClose.emit())}async close(){return this.isOpen=!1,!0}async open(){return this.isOpen=!0,!0}submit(){this.fwSubmit.emit()}addAccesibilityEvents(){if(!this.accessibilityAdded){const t=(()=>{let t=[];const i=(s,e=!0)=>{e&&(t=[]),(s=s.shadowRoot?s.shadowRoot:s).querySelectorAll("*").forEach((s=>{n(s)?t.push(s):"SLOT"===s.nodeName?s.assignedElements({flatten:!0}).forEach((t=>i(t,!1))):s.shadowRoot&&i(s,!1)}))};return i(this.el),t})();if(t.length&&(this.firstFocusElement=t[0],this.lastFocusElement=t[t.length-1],this.lastFocusElement.addEventListener("keydown",(t=>{!t.shiftKey&&9===t.keyCode&&this.focusElement(this.firstFocusElement)})),this.firstFocusElement.addEventListener("keydown",(t=>{t.shiftKey&&9==t.keyCode&&this.focusElement(this.lastFocusElement)}))),this.firstFocusElement){const t=this.el.shadowRoot.querySelector(".modal");t&&t.addEventListener("animationend",(()=>{this.isOpen&&this.focusElement(this.firstFocusElement)}))}this.accessibilityAdded=!0}this.escapeHandler=(t=>{27===t.keyCode&&(this.isOpen=!1)}).bind(this),document.addEventListener("keydown",this.escapeHandler)}removeAccesibilityEvents(){this.escapeHandler&&(document.removeEventListener("keydown",this.escapeHandler),this.escapeHandler=null)}focusElement(t){setTimeout((()=>t.focus()),1)}renderIcon(){return s("fw-icon",{class:"icon",name:this.icon,size:16})}renderTitle(){return s("fw-modal-title",{icon:this.icon,titleText:this.titleText,description:this.description,close:this.close.bind(this)})}renderContent(){return s("div",{class:"content"},s("slot",null))}renderFooter(){return s("fw-modal-footer",{submitText:this.submitText,cancelText:this.cancelText,submitDisabled:this.submitDisabled,submitColor:this.submitColor,submit:this.submit.bind(this),close:this.close.bind(this)})}render(){return s("div",{class:{"modal-container":!0,visible:this.isOpen}},s("div",{class:{modal:!0,[this.size]:!0},"aria-modal":"true"},this.modalTitle?"":this.renderTitle(),this.modalContent?s("slot",null):this.renderContent(),this.hideFooter||this.modalFooter?"":this.renderFooter()))}get el(){return e(this)}static get watchers(){return{isOpen:["visibilityChange"]}}};o.style=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{font-family:-apple-system, blinkmacsystemfont, Segoe UI, roboto, oxygen, ubuntu, cantarell, Open Sans, Helvetica Neue, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.modal-container{height:100vh;width:100vw;position:fixed;top:0;right:0;bottom:0;left:0;display:none;z-index:990;background-color:rgba(18, 52, 77, 0.5);-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all 0.3s linear;transition:all 0.3s linear}.modal{position:relative;max-height:70vh;background:#fff;border-radius:4px;display:-ms-flexbox;display:flex;z-index:999;-ms-flex-direction:column;flex-direction:column;-webkit-animation:"modal-entry" 0.5s 1;animation:"modal-entry" 0.5s 1}.modal .content{padding:0 32px 32px;height:100%;width:auto;overflow:auto}.standard{width:512px}.small{width:424px}.large{width:800px}.visible{display:-ms-flexbox;display:flex}@-webkit-keyframes modal-entry{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes modal-entry{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}';export{o as fw_modal}