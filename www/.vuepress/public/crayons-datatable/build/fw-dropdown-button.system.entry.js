var __spreadArray=this&&this.__spreadArray||function(o,n){for(var t=0,e=n.length,r=o.length;t<e;t++,r++)o[r]=n[t];return o};System.register(["./index-a0541978.system.js","./index-b19d5e29.system.js"],(function(o){"use strict";var n,t,e,r,i;return{setters:[function(o){n=o.r;t=o.f;e=o.h;r=o.g},function(o){i=o.h}],execute:function(){var d=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{--dropdown-min-height:100px;--dropdown-min-width:200px;--dropdown-max-height:200px;--dropdown-max-width:480px;--dropdown-font-size:$font-size-14}@-webkit-keyframes dropdown-fade{0%{opacity:0;-webkit-transform:translateY(-10%);transform:translateY(-10%)}50%{opacity:0.7;-webkit-transform:translateY(-5%);transform:translateY(-5%)}100%{opacity:1;-webkit-transform:translateY(0%);transform:translateY(0%)}}@keyframes dropdown-fade{0%{opacity:0;-webkit-transform:translateY(-10%);transform:translateY(-10%)}50%{opacity:0.7;-webkit-transform:translateY(-5%);transform:translateY(-5%)}100%{opacity:1;-webkit-transform:translateY(0%);transform:translateY(0%)}}.dropdown-container{position:relative;display:inline-block}.dropdown-container .btn-container{display:-ms-flexbox;display:flex}.dropdown-container .btn-container .dropdown-state{cursor:pointer;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:4px;border-bottom-right-radius:4px;width:30px;height:30px;margin-left:-10px}.dropdown-container .btn-container .dropdown-state .state-icon{padding:5px 10px}.dropdown-container .btn-container .dropdown-state--primary{background-color:#264966;color:#fff;border:1px solid #12344d;background-image:-webkit-gradient(linear, left top, left bottom, from(#264966), to(#12344d));background-image:linear-gradient(to bottom, #264966, #12344d)}.dropdown-container .btn-container .dropdown-state--primary:active{border:1px solid #264966}.dropdown-container .btn-container .dropdown-state--primary:hover:not([disabled]),.dropdown-container .btn-container .dropdown-state--primary:focus:not([disabled]){background-color:#12344d;background-image:none}.dropdown-container .btn-container .dropdown-state--secondary{background-color:#f3f5f7;color:#12344d;border:1px solid #cfd7df;background-image:-webkit-gradient(linear, left top, left bottom, from(#fff), to(#f3f5f7));background-image:linear-gradient(to bottom, #fff, #f3f5f7)}.dropdown-container .btn-container .dropdown-state--secondary:active{border:1px solid #ebeff3}.dropdown-container .btn-container .dropdown-state--secondary:hover:not([disabled]),.dropdown-container .btn-container .dropdown-state--secondary:focus:not([disabled]){background-color:#f3f5f7;background-image:none}.dropdown-container .btn-container .dropdown-state--danger{color:#fff;background-color:#d72d30;border:1px solid #c82124;background-image:-webkit-gradient(linear, left top, left bottom, from(#d72d30), to(#c82124));background-image:linear-gradient(to bottom, #d72d30, #c82124)}.dropdown-container .btn-container .dropdown-state--danger:hover:not([disabled]),.dropdown-container .btn-container .dropdown-state--danger:focus:not([disabled]){background-color:#c82124;background-image:none}.dropdown-container .btn-container .dropdown-state.disabled{cursor:not-allowed;opacity:0.4}.dropdown-container .btn-container .dropdown-state:focus{border:1px solid #2c5cc5;-webkit-box-shadow:0 0 0 1px #2c5cc5;box-shadow:0 0 0 1px #2c5cc5;outline:none}.dropdown-container .btn-container .dropdown-state:active{-webkit-box-shadow:inset 0 0 4px 0 rgba(0, 0, 0, 0.25);box-shadow:inset 0 0 4px 0 rgba(0, 0, 0, 0.25)}.dropdown-container .btn-container .down-arrow{padding-left:10px}@media screen and (prefers-reduced-motion: reduce){.dropdown-container .dropdown-menu{-webkit-animation:none;animation:none}}.dropdown-container .dropdown-menu{background-color:#fff;min-width:var(--dropdown-min-width);max-width:var(--dropdown-max-width);min-height:var(--dropdown-min-height);max-height:var(--dropdown-max-height);padding:10px;border-radius:5px;position:absolute;top:17px;-webkit-box-shadow:rgba(0, 0, 0, 0.176) 0 6px 12px 0;box-shadow:rgba(0, 0, 0, 0.176) 0 6px 12px 0;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll;list-style:none;border:1px solid rgba(0, 0, 0, 0.15);-webkit-animation:dropdown-fade 0.15s;animation:dropdown-fade 0.15s;display:none;z-index:999}.dropdown-container .dropdown-menu--open{display:block}.dropdown-container .dropdown-menu--search{border-bottom-left-radius:0;border-bottom-right-radius:0}.dropdown-container .dropdown-menu .search-list{overflow-y:scroll;max-height:calc(var(--dropdown-max-height) - 105px)}.dropdown-container .dropdown-menu .dropdown-item-wrapper{width:100%}.dropdown-container .dropdown-menu .dropdown-item-wrapper .dropdown-item{padding:5px 25px 8px 10px;color:var(--btn-secondary-color);font-size:var(--dropdown-font-size);font-weight:500;cursor:pointer;background:transparent;border-radius:5px;text-decoration:none;border:0;text-align:left;width:inherit}.dropdown-container .dropdown-menu .dropdown-item-wrapper .dropdown-item:hover,.dropdown-container .dropdown-menu .dropdown-item-wrapper .dropdown-item:focus{background:var(--bg-color-hover)}.dropdown-container .dropdown-menu .searchable-item{margin-left:5px;display:-ms-flexbox;display:flex}.dropdown-container .dropdown-menu .searchable-item .dropdown-item{cursor:default;padding-top:0;padding-bottom:10px;padding-left:0}.dropdown-container .dropdown-menu .searchable-item .dropdown-item:hover,.dropdown-container .dropdown-menu .searchable-item .dropdown-item:focus{background-color:transparent}.dropdown-container .dropdown-menu .search-btn-grp{margin-top:5px;display:-ms-flexbox;display:flex}.dropdown-container .dropdown-menu .search-btn-grp fw-button{margin-right:5px;cursor:pointer}';var a=o("fw_dropdown_button",function(){function o(o){var e=this;n(this,o);this.fwOptionClick=t(this,"fwOptionClick",7);this.fwOptionsAdd=t(this,"fwOptionsAdd",7);this.color="primary";this.split=false;this.disabled=false;this.searchable=false;this.value=undefined;this.placeholder="";this.options=[];this.optionInput="";this.filteredOptions=[];this.isDropdownOpen=false;this.handleDropdownToggle=function(){if(!e.disabled){e.isDropdownOpen=!e.isDropdownOpen}}}o.prototype.setInitialState=function(o){if(o){if(this.options.length===0){this.isDropdownOpen=false}}if(!o){if(this.searchable){this.filteredOptions=this.options;this.dropdownInput.value=""}}};o.prototype.setDropdownOptions=function(){if(this.options.length===0){this.options=Array.from(this.host.querySelectorAll("[slot=dropdown-options] option")).map((function(o){return{id:o.id,value:o.getAttribute("value"),label:o.textContent}}))}if(this.searchable){this.filteredOptions=this.options}};o.prototype.setSearchInput=function(){var o=this;this.optionInput=this.dropdownInput.value;this.filteredOptions=this.optionInput!==""?this.options.filter((function(n){return n.label.toLowerCase().includes(o.optionInput.toLowerCase())})):this.options};o.prototype.handleCheckboxChange=function(o){if(o.target.checked){this.value=__spreadArray(__spreadArray([],this.value||[]),[this.options.find((function(n){var t=n.value;return t===o.target.id})).value])}else{this.value=this.value.filter((function(n){return n!==o.target.id}))}};o.prototype.handleAddClick=function(){this.fwOptionsAdd.emit({value:this.value});this.handleDropdownToggle()};o.prototype.handleOptionClick=function(o){if(!this.searchable){this.value=o.value;this.fwOptionClick.emit({value:this.value,label:o.label});this.handleDropdownToggle()}};o.prototype.render=function(){var o=this;var n=function(){var n=["secondary","link","text"].includes(o.color)?"#12344d":"#fff";var t=8;var r=o.isDropdownOpen?"up":"down";return e("fw-icon",{name:"chevron-"+r,color:n,size:t}," ")};var t=function(){var n=function(){return e("fw-input",{placeholder:o.placeholder,"icon-left":"search",ref:function(n){return o.dropdownInput=n},onInput:function(){return o.setSearchInput()}})};var t=function(){return e("div",{class:"search-btn-grp"},e("fw-button",{id:"addBtn",size:"small",color:"primary",onClick:function(){return o.handleAddClick()}}," ","Add"," "),e("fw-button",{id:"cancelBtn",size:"small",color:"secondary",onClick:function(){return o.handleDropdownToggle()}}," ","Cancel"," "))};var r=o.searchable?o.filteredOptions:o.options;return e("ul",{class:"dropdown-menu "+(o.isDropdownOpen?"dropdown-menu--open":"")},o.searchable?e(n,null):"",e("div",{class:o.searchable?"search-list":""},r.map((function(n){var t=e("li",{class:"dropdown-item-wrapper"},e("button",{key:n.id||n.value,onClick:function(){return o.handleOptionClick(n)},class:"dropdown-item",onKeyDown:i((function(){return o.handleOptionClick(n)}))}," ",n.label," "));var r=e("fw-checkbox",{id:n.value,checked:(o.value||[]).includes(n.value),onFwChange:function(n){return o.handleCheckboxChange(n)}});return o.searchable?e("div",{class:"searchable-item"}," ",r," ",t," "):t}))),o.searchable?t():"")};var r=function(){return!o.split?e("span",{class:"down-arrow"},e(n,null)):""};var d=function(){var t="\n        dropdown-state\n        "+("dropdown-state--"+o.color.toLowerCase())+"\n        "+(o.disabled?"disabled":"")+"\n      ";return o.split?e("div",{role:"button",tabindex:"0",onClick:function(){return o.handleDropdownToggle()},class:t,onKeyDown:i(o.handleDropdownToggle)},e("div",{class:"state-icon"},e(n,null))):""};return e("div",{class:"dropdown-container"},e("div",{class:"btn-container"},e("fw-button",{color:this.color,disabled:this.disabled,onClick:function(){return o.handleDropdownToggle()}},this.label,e(r,null)),e(d,null)),e(t,null))};o.prototype.componentWillLoad=function(){var o=this;document.addEventListener("click",(function(n){var t=n.target;var e=o.isDropdownOpen&&o.host!==t&&!o.host.contains(t);if(e){o.isDropdownOpen=false}}));this.setDropdownOptions()};Object.defineProperty(o.prototype,"host",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(o,"watchers",{get:function(){return{isDropdownOpen:["setInitialState"]}},enumerable:false,configurable:true});return o}());a.style=d}}}));