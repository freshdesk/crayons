System.register([],(function(t){"use strict";return{execute:function(){t({a:n,c:e});function e(t){if(!Object.prototype.hasOwnProperty.call(window,"fwRemoveToast"))window.addEventListener("fwRemoveToast",i);var e=document.querySelector(".fw-toast-stack."+t.position);var n;if(e){n=e}else{n=document.createElement("div");n.className="fw-toast-stack "+t.position;n.style.cssText="position: fixed;\n      z-index: 950;\n      top: 10px;\n      "+o(t.position)+"\n      background-color: $color-milk;\n      max-width: 100%;\n      max-height: 100%;";document.body.appendChild(n)}return n}function n(t,e,n){if(t===void 0){t={}}var o=c(t,n);var i;if(t.contentref){var a=document.querySelector(t.contentref);i=a.cloneNode(true);o.content=""}else{i=document.createElement("fw-toast-message")}console.log(o.actionLinkText);Object.entries(o).map((function(t){var e=t[0],n=t[1];if(n)i.setAttribute(r(e),n)}));e.appendChild(i)}function o(t){switch(t){case"top-left":return"left: 10px;";case"top-right":return"right: 10px;";case"top-center":return"left: calc(50% - 200px);"}}function i(t){var e=t.target;document.querySelectorAll(".fw-toast-stack").forEach((function(t){if(t.contains(e)){t.removeChild(e)}}))}function c(t,e){if(t===void 0){t={}}var n,o,i,c,r,a;var s=Object.assign({},{timeout:(n=t.timeout)!==null&&n!==void 0?n:e.timeout,type:(o=t.type)!==null&&o!==void 0?o:e.type,content:(i=t.content)!==null&&i!==void 0?i:e.content,actionLinkText:(c=t.actionLinkText)!==null&&c!==void 0?c:e.actionLinkText,sticky:(r=t.sticky)!==null&&r!==void 0?r:e.sticky,pauseOnHover:(a=t.pauseOnHover)!==null&&a!==void 0?a:e.pauseOnHover,open:true});return s}function r(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()}}}}));