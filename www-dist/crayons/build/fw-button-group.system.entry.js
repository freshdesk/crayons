System.register(["./index-c04bc24f.system.js"],(function(t){"use strict";var o,e,n,s;return{setters:[function(t){o=t.r;e=t.i;n=t.k;s=t.j}],execute:function(){var r=':host{font-family:var(--fw-font-family, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}';var i=t("fw_button_group",function(){function t(t){o(this,t);this.label=""}t.prototype.componentDidLoad=function(){this.handleSlotChange()};t.prototype.handleSlotChange=function(){if(!this.host)return;var t=this.host.querySelectorAll("fw-button");t.forEach((function(o,e){o.classList.add("fw-button-group__button");o.classList.toggle("fw-button-group__button--first",e===0);o.classList.toggle("fw-button-group__button--inner",e>0&&e<t.length-1);o.classList.toggle("fw-button-group__button--last",e===t.length-1)}))};t.prototype.render=function(){return e(n,{"aria-label":this.label},e("slot",{onSlotchange:this.handleSlotChange}))};Object.defineProperty(t.prototype,"host",{get:function(){return s(this)},enumerable:false,configurable:true});return t}());i.style=r}}}));