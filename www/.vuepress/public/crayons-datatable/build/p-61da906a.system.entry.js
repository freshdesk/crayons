var __awaiter=this&&this.__awaiter||function(t,e,n,o){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{u(o.next(t))}catch(e){i(e)}}function c(t){try{u(o["throw"](t))}catch(e){i(e)}}function u(t){t.done?n(t.value):r(t.value).then(a,c)}u((o=o.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(t){return function(e){return u([t,e])}}function u(a){if(o)throw new TypeError("Generator is already executing.");while(n)try{if(o=1,r&&(i=a[0]&2?r["return"]:a[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;if(r=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(c){a=[6,c];r=0}finally{o=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-3214ba63.system.js"],(function(t){"use strict";var e,n,o;return{setters:[function(t){e=t.r;n=t.h;o=t.e}],execute:function(){function r(t){if(!Object.prototype.hasOwnProperty.call(window,"fwRemoveToast"))window.addEventListener("fwRemoveToast",c);var e=document.querySelector(".fw-toast-stack."+t.position);var n;if(e){n=e}else{n=document.createElement("div");n.className="fw-toast-stack "+t.position;n.style.cssText="position: fixed;\n      z-index: 950;\n      top: 10px;\n      "+a(t.position)+"\n      background-color: $color-milk;\n      max-width: 100%;\n      max-height: 100%;";document.body.appendChild(n)}return n}function i(t,e,n){if(t===void 0){t={}}var o=u(t,n);var r;if(t.contentref){var i=document.querySelector(t.contentref);r=i.cloneNode(true);o.content=""}else{r=document.createElement("fw-toast-message")}console.log(o.actionLinkText);Object.entries(o).map((function(t){var e=t[0],n=t[1];if(n)r.setAttribute(s(e),n)}));e.appendChild(r)}function a(t){switch(t){case"top-left":return"left: 10px;";case"top-right":return"right: 10px;";case"top-center":return"left: calc(50% - 200px);"}}function c(t){var e=t.target;document.querySelectorAll(".fw-toast-stack").forEach((function(t){if(t.contains(e)){t.removeChild(e)}}))}function u(t,e){if(t===void 0){t={}}var n,o,r,i,a,c;var u=Object.assign({},{timeout:(n=t.timeout)!==null&&n!==void 0?n:e.timeout,type:(o=t.type)!==null&&o!==void 0?o:e.type,content:(r=t.content)!==null&&r!==void 0?r:e.content,actionLinkText:(i=t.actionLinkText)!==null&&i!==void 0?i:e.actionLinkText,sticky:(a=t.sticky)!==null&&a!==void 0?a:e.sticky,pauseOnHover:(c=t.pauseOnHover)!==null&&c!==void 0?c:e.pauseOnHover,open:true});return u}function s(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()}var l=t("fw_toast",function(){function t(t){e(this,t);this.position="top-center";this.timeout=4e3;this.type="warning";this.actionLinkText="";this.sticky=false}t.prototype.componentWillLoad=function(){this.toastContainer=r(this)};t.prototype.trigger=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){i(t,this.toastContainer,this);return[2]}))}))};t.prototype.render=function(){return n(o,null,n("slot",null))};return t}())}}}));