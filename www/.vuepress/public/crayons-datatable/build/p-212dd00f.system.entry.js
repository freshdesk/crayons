var __awaiter=this&&this.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{l(o.next(e))}catch(t){i(t)}}function s(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?n(e.value):r(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return l([e,t])}}function l(a){if(o)throw new TypeError("Generator is already executing.");while(n)try{if(o=1,r&&(i=a[0]&2?r["return"]:a[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;if(r=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(s){a=[6,s];r=0}finally{o=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-3214ba63.system.js"],(function(e){"use strict";var t,n,o,r,i;return{setters:[function(e){t=e.r;n=e.c;o=e.h;r=e.e;i=e.g}],execute:function(){var a=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{margin:0}.alert{position:relative;display:-ms-flexbox;display:flex;width:100%;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:inherit;padding:8px 6px;background-color:transparent}.alert--success{background:#e0f5f1;border:1px solid #b4e5da}.alert--success .alert__message{border-left:1px solid #b4e5da}.alert--warning{background:#fef1e1;border:1px solid #fedcb3}.alert--warning .alert__message{border-left:1px solid #fedcb3}.alert--info{background:#e5f2fd;border:1px solid #bbdcfe}.alert--info .alert__message{border-left:1px solid #bbdcfe}.alert--error{border:1px solid #ffd0d6;background:#ffecf0}.alert--error .alert__message{border-left:1px solid #ffd0d6}.alert__icon{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-item-align:start;align-self:flex-start;margin-right:8px}.alert__message{padding-left:12px;-ms-flex:1 1 auto;flex:1 1 auto;color:#12344d;font-size:14px;font-weight:400;line-height:20px}.alert__message ::slotted(a){font-weight:500;color:#365dbe;text-decoration:none}.alert__close{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-item-align:start;align-self:flex-start;padding-right:6px;padding-left:12px;cursor:pointer}';var s={error:"alert",warning:"info",info:"info",success:"success"};var l={error:"#e43538",warning:"#c7502f",info:"#264966",success:"#00795b"};var f=e("fw_inline_message",function(){function e(e){t(this,e);this.fwShow=n(this,"fwShow",7);this.fwHide=n(this,"fwHide",7);this.closable=true;this.type="info";this.duration=Infinity;this.open=true}e.prototype.startAutoHide=function(){var e=this;clearTimeout(this.autoHideTimeout);if(this.open&&this.duration<Infinity){this.autoHideTimeout=setTimeout((function(){return e.hide()}),this.duration)}};e.prototype.handleOpen=function(){if(this.open){this.host.style.display="flex";this.fwShow.emit();if(this.duration<Infinity){this.startAutoHide()}}else{clearTimeout(this.autoHideTimeout);this.host.style.display="none";this.fwHide.emit()}};e.prototype.handleDurationChange=function(){this.startAutoHide()};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.open){return[2]}this.open=true;return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(!this.open){return[2]}this.open=false;return[2]}))}))};e.prototype.connectedCallback=function(){this.host.style.display=this.open?"flex":"none"};e.prototype.disconnectedCallback=function(){clearTimeout(this.autoHideTimeout)};e.prototype.handleKeyUp=function(e){if(e.code==="Enter"){e.preventDefault();this.hide()}};e.prototype.handleClose=function(){this.hide()};e.prototype.render=function(){var e=this;return o(r,{role:"alert","aria-hidden":this.open?"false":"true"},o("div",{class:"alert "+"alert--"+this.type},o("span",{class:"alert__icon"},o("fw-icon",{name:s[this.type],color:l[this.type]})),o("span",{class:"alert__message"},o("slot",null)),this.closable&&o("span",{class:"alert__close",role:"button",tabindex:"0",onKeyUp:function(t){return e.handleKeyUp(t)},onClick:function(){return e.handleClose()}},o("fw-icon",{name:"cross",color:"#12344d",size:8}))))};Object.defineProperty(e.prototype,"host",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{open:["handleOpen"],duration:["handleDurationChange"]}},enumerable:false,configurable:true});return e}());f.style=a}}}));