import{c as t}from"./p-79178ffe.js";function o(t){Object.prototype.hasOwnProperty.call(window,"fwRemoveToast")||window.addEventListener("fwRemoveToast",e);const o=document.querySelector(`.fw-toast-stack.${t.position}`);let n;return o?n=o:(n=document.createElement("div"),n.className=`fw-toast-stack ${t.position}`,n.style.cssText=`position: fixed;\n      z-index: 950;\n      top: 10px;\n      ${function(t){switch(t){case"top-left":return"left: 10px;";case"top-right":return"right: 10px;";case"top-center":return"left: calc(50% - 200px);"}}(t.position)}\n      background-color: $color-milk;\n      max-width: 100%;\n      max-height: 100%;`,document.body.appendChild(n)),n}function n(o={},n,e){const c=function(t={},o){var n,e,c,i,s,a;return Object.assign({},{timeout:null!==(n=t.timeout)&&void 0!==n?n:o.timeout,type:null!==(e=t.type)&&void 0!==e?e:o.type,content:null!==(c=t.content)&&void 0!==c?c:o.content,actionLinkText:null!==(i=t.actionLinkText)&&void 0!==i?i:o.actionLinkText,sticky:null!==(s=t.sticky)&&void 0!==s?s:o.sticky,pauseOnHover:null!==(a=t.pauseOnHover)&&void 0!==a?a:o.pauseOnHover,open:!0})}(o,e);let i;if(o.contentref){const n=document.querySelector(o.contentref);i=t(n,!0,!0),c.content=""}else i=document.createElement("fw-toast-message");Object.entries(c).map((([t,o])=>{o&&i.setAttribute(t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),o)})),n.appendChild(i)}function e(t){const o=t.target;document.querySelectorAll(".fw-toast-stack").forEach((t=>{t.contains(o)&&t.removeChild(o)}))}export{n as a,o as c}