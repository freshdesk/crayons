System.register(["./index-a0541978.system.js","./index-b19d5e29.system.js"],(function(e){"use strict";var t,o,r,n,i;return{setters:[function(e){t=e.r;o=e.f;r=e.h;n=e.g},function(e){i=e.h}],execute:function(){var s=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.tag{line-height:1.4;border-radius:4px;background-color:#ebeff3;border:none;font-size:12px;color:#12344d;margin:2px;display:inline-block;width:auto;font-weight:500;word-break:break-all;padding:3px 0 4px 8px}.tag .remove-btn{opacity:1;color:#264966;padding:3px 8px 5px;font-size:16px;border-radius:4px;line-height:normal;position:relative;right:0;margin-left:4px;height:100%}.tag .remove-btn:hover,.tag .remove-btn:focus{background-color:#cfd7df;cursor:pointer}.tag .remove-btn.disabled{color:#447093;background-color:#ebeff3;cursor:not-allowed}';var a=e("fw_tag",function(){function e(e){var r=this;t(this,e);this.fwClosed=o(this,"fwClosed",7);this.removeTag=function(){if(r.disabled){return}var e=r,t=e.value,o=e.text;r.fwClosed.emit({value:t,text:o})}}e.prototype.render=function(){var e=this;return r("div",{class:"tag"},this.text,r("span",{role:"button",tabindex:"0",class:{"remove-btn":true,disabled:this.disabled},onClick:function(){return e.removeTag()},onKeyDown:i(this.removeTag)},"×"))};Object.defineProperty(e.prototype,"host",{get:function(){return n(this)},enumerable:false,configurable:true});return e}());a.style=s}}}));