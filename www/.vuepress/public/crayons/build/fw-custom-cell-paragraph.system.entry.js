System.register(["./index-c04bc24f.system.js","./Translation-ab48b861.system.js"],(function(t){"use strict";var e,o,a,r,n;return{setters:[function(t){e=t.r;o=t.i;a=t.k;r=t.j},function(t){n=t.T}],execute:function(){var i=':host{font-family:var(--fw-font-family, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.paragraph-container{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.paragraph-container .paragraph-text{overflow:hidden;margin:0px}.paragraph-container .paragraph-text.open{margin-bottom:15px}.paragraph-container .paragraph-toggle{position:absolute;display:block;bottom:-19px;right:5px;height:15px;text-decoration:none;background-color:#f5f7f9;padding:2px 8px;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;border-radius:4px;border:1px solid #cfd7df}.paragraph-container .paragraph-toggle:hover,.paragraph-container .paragraph-toggle:focus{cursor:pointer}.paragraph-container .paragraph-toggle fw-icon{display:inline}';var s=t("fw_custom_cell_paragraph",function(){function t(t){e(this,t);this.text="";this.maxHeight="60px";this.showToggle=false;this.hide=true;this.toggleParaButton=null}t.prototype.textChangeHandler=function(){this.showToggleOnTextChange()};t.prototype.componentDidLoad=function(){this.showToggleOnTextChange()};t.prototype.onFocus=function(){if(this.toggleParaButton){this.toggleParaButton.focus()}else{this.el.parentElement.setAttribute("tabindex","0");this.el.parentElement.focus()}};t.prototype.showToggleOnTextChange=function(){var t=this.el.getBoundingClientRect().height;if(t>=parseInt(this.maxHeight)){this.showToggle=true}else{this.showToggle=false}};t.prototype.toggleParagraph=function(){this.hide=!this.hide;if(this.hide){this.maxHeight="60px"}else{this.maxHeight="none"}};t.prototype.render=function(){var t=this;var e=o("p",{class:{"paragraph-text":true,open:this.showToggle},style:{maxHeight:this.maxHeight}},this.text);return o(a,{onFocus:function(){return t.onFocus()}},o("div",{class:"paragraph-container"},this.showToggle&&this.hide?o("fw-tooltip",{content:this.text,hoist:true,placement:"bottom-start",fallbackPlacements:["top-start"]},e):e,this.showToggle&&o("fw-tooltip",{content:this.hide?n.t("datatable.show"):n.t("datatable.hide"),hoist:true,placement:"bottom-start",fallbackPlacements:["top-start"]},o("div",{class:"paragraph-toggle",role:"button",tabIndex:0,onKeyUp:function(e){return(e.code==="Space"||e.code==="Enter")&&t.toggleParagraph()},onClick:function(){return t.toggleParagraph()},ref:function(e){return t.toggleParaButton=e}},this.hide?o("fw-icon",{name:"more-horizontal",library:"system",size:10}):o("fw-icon",{name:"chevron-up",library:"system",size:8})))))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{text:["textChangeHandler"]}},enumerable:false,configurable:true});return t}());s.style=i}}}));