import{r as t,h as n,e as o}from"./p-8c82131c.js";function e(t){const n=t.target;document.querySelectorAll(".fw-toast-stack").forEach((t=>{t.contains(n)&&t.removeChild(n)}))}let s=class{constructor(n){t(this,n),this.position="top-center",this.timeout=4e3,this.type="warning",this.actionLinkText="",this.sticky=!1}componentWillLoad(){this.toastContainer=function(t){Object.prototype.hasOwnProperty.call(window,"fwRemoveToast")||window.addEventListener("fwRemoveToast",e);const n=document.querySelector(`.fw-toast-stack.${t.position}`);let o;return n?o=n:(o=document.createElement("div"),o.className=`fw-toast-stack ${t.position}`,o.style.cssText=`position: fixed;\n      z-index: 950;\n      top: 10px;\n      ${function(t){switch(t){case"top-left":return"left: 10px;";case"top-right":return"right: 10px;";case"top-center":return"left: calc(50% - 200px);"}}(t.position)}\n      background-color: $color-milk;\n      max-width: 100%;\n      max-height: 100%;`,document.body.appendChild(o)),o}(this)}async trigger(t){!function(t={},n,o){const e=function(t={},n){var o,e,s,c,i,l;return Object.assign({},{timeout:null!==(o=t.timeout)&&void 0!==o?o:n.timeout,type:null!==(e=t.type)&&void 0!==e?e:n.type,content:null!==(s=t.content)&&void 0!==s?s:n.content,actionLinkText:null!==(c=t.actionLinkText)&&void 0!==c?c:n.actionLinkText,sticky:null!==(i=t.sticky)&&void 0!==i?i:n.sticky,pauseOnHover:null!==(l=t.pauseOnHover)&&void 0!==l?l:n.pauseOnHover,open:!0})}(t,o);let s;if(t.contentref){const n=document.querySelector(t.contentref);s=n.cloneNode(!0),e.content=""}else s=document.createElement("fw-toast-message");console.log(e.actionLinkText),Object.entries(e).map((([t,n])=>{n&&s.setAttribute(t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),n)})),n.appendChild(s)}(t,this.toastContainer,this)}render(){return n(o,null,n("slot",null))}};export{s as fw_toast}