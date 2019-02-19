(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{205:function(module,exports,__webpack_require__){__webpack_require__(206),__webpack_require__(286),module.exports=__webpack_require__(287)},287:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(2),__webpack_require__(3),__webpack_require__(4);var _storybook_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(48),_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(204),req=__webpack_require__(371);Object(_storybook_html__WEBPACK_IMPORTED_MODULE_3__.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module),Object(_storybook_html__WEBPACK_IMPORTED_MODULE_3__.addDecorator)(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_4__.withNotes)}.call(this,__webpack_require__(63)(module))},371:function(module,exports,__webpack_require__){var map={"./Alert/src/alert.stories.js":372,"./Button/src/button.stories.js":491};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=371},372:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(48),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(126),__webpack_require__(88));__webpack_require__(489);Object(_storybook_html__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Alert",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("Plain card with long text",function(){return'\n   <fw-alert title="Plain card">\n   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n   </fw-alert>\n    '}).add("Plain card with short text",function(){return'\n   <fw-alert title="Plain card">\n   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\n   </fw-alert>\n    '}).add("Plain card with no title",function(){return"\n   <fw-alert>\n   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.\n   </fw-alert>\n    "})}.call(this,__webpack_require__(63)(module))},489:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var global,factory;__webpack_require__(0),__webpack_require__(45),__webpack_require__(110),__webpack_require__(78),__webpack_require__(201),__webpack_require__(26),__webpack_require__(27),__webpack_require__(80),__webpack_require__(14),__webpack_require__(12),__webpack_require__(2),__webpack_require__(11),__webpack_require__(3),__webpack_require__(4),__webpack_require__(202),__webpack_require__(65),__webpack_require__(79);function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _wrapNativeSuper(Class){var _cache="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(Class){function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}if(null===Class||(fn=Class,-1===Function.toString.call(fn).indexOf("[native code]")))return Class;var fn;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function");if(void 0!==_cache){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}return Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,Class)})(Class)}function _construct(){return(_construct=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(Parent,args,Class){var a=[null];a.push.apply(a,args);var instance=new(Function.bind.apply(Parent,a));return Class&&_setPrototypeOf(instance,Class.prototype),instance}).apply(null,arguments)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}global=void 0,factory=function(){function noop(){}function assign(tar,src){for(var k in src)tar[k]=src[k];return tar}function append(target,node){target.appendChild(node)}function insert(target,node,anchor){target.insertBefore(node,anchor)}function detachNode(node){node.parentNode.removeChild(node)}function createElement(name){return document.createElement(name)}function createText(data){return document.createTextNode(data)}function setAttribute(node,attribute,value){null==value?node.removeAttribute(attribute):node.setAttribute(attribute,value)}function setAttributes(node,attributes){for(var key in attributes)"style"==key?node.style.cssText=attributes[key]:key in node?node[key]=attributes[key]:setAttribute(node,key,attributes[key])}function blankObject(){return Object.create(null)}function callAll(fns){for(;fns&&fns.length;)fns.shift()()}function create_if_block(component,ctx){var div,text;return{c:function(){div=createElement("div"),text=createText(ctx.title),div.className="title"},m:function(target,anchor){insert(target,div,anchor),append(div,text)},p:function(changed,ctx){changed.title&&function(text,data){text.data=""+data}(text,ctx.title)},d:function(detach){detach&&detachNode(div)}}}var Alert=function(_HTMLElement){function Alert(){var _this,self,call,options=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Alert),self=this,_this=!(call=_getPrototypeOf(Alert).call(this))||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call,function(component,options){component._handlers=blankObject(),component._slots=blankObject(),component._bind=options._bind,component._staged={},component.options=options,component.root=options.root||component,component.store=options.store||component.root.store,options.root||(component._beforecreate=[],component._oncreate=[],component._aftercreate=[])}(_assertThisInitialized(_assertThisInitialized(_this)),options),_this._state=assign({},options.data),_this._intro=!0,_this._slotted=options.slots||{},_this.attachShadow({mode:"open"}),_this.shadowRoot.innerHTML="<style>.fw-alert{width:350px;border-radius:2px;position:relative;padding:10px 20px;font-size:12px;color:#6F7C87;background-color:#FFFFFF;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;box-shadow:inset 0 1px 1px 0 rgba(0,0,0,0.5),\n\t\t    0 0 1px 0 rgba(0,0,0,0.1),\n\t\t    0 1px 3px 0 rgba(0,0,0,0.1),\n\t\t    0 24px 19px 2px rgba(0,0,0,0.06)}.title{color:#183247;font-size:14px;font-weight:600;padding-bottom:5px}.close{position:absolute;top:10px;right:15px;font-size:18px;font-weight:600;cursor:pointer}</style>",_this._fragment=function(component,ctx){function click_handler(){component.close()}for(var div1,text0,slot,text1,div0,if_block=ctx.title&&create_if_block(0,ctx),div1_levels=[{class:"fw-alert"},ctx.props],div1_data={},i=0;i<div1_levels.length;i+=1)div1_data=assign(div1_data,div1_levels[i]);return{c:function(){var event,handler,options;div1=createElement("div"),if_block&&if_block.c(),text0=createText("\n\t"),slot=createElement("slot"),text1=createText("\n  "),(div0=createElement("div")).textContent="✗",this.c=noop,event="click",handler=click_handler,div0.addEventListener(event,handler,options),div0.className="close",setAttributes(div1,div1_data)},m:function(target,anchor){insert(target,div1,anchor),if_block&&if_block.m(div1,null),append(div1,text0),append(div1,slot),append(div1,text1),append(div1,div0)},p:function(changed,ctx){ctx.title?if_block?if_block.p(changed,ctx):((if_block=create_if_block(0,ctx)).c(),if_block.m(div1,text0)):if_block&&(if_block.d(1),if_block=null),setAttributes(div1,function(levels,updates){for(var update={},to_null_out={},accounted_for={},i=levels.length;i--;){var o=levels[i],n=updates[i];if(n){for(var key in o)key in n||(to_null_out[key]=1);for(var key in n)accounted_for[key]||(update[key]=n[key],accounted_for[key]=1);levels[i]=n}else for(var key in o)accounted_for[key]=1}for(var key in to_null_out)key in update||(update[key]=void 0);return update}(div1_levels,[{class:"fw-alert"},changed.props&&ctx.props]))},d:function(detach){var event,handler,options;detach&&detachNode(div1),if_block&&if_block.d(),event="click",handler=click_handler,div0.removeEventListener(event,handler,options)}}}(_assertThisInitialized(_assertThisInitialized(_this)),_this._state),_this._fragment.c(),_this._fragment.m(_this.shadowRoot,null),options.target&&_this._mount(options.target,options.anchor),_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Alert,_wrapNativeSuper(HTMLElement)),Constructor=Alert,staticProps=[{key:"observedAttributes",get:function(){return["type","title"]}}],(protoProps=[{key:"connectedCallback",value:function(){var _this2=this;Object.keys(this._slotted).forEach(function(key){_this2.appendChild(_this2._slotted[key])})}},{key:"attributeChangedCallback",value:function(attr,oldValue,newValue){var obj,key,value;this.set((value=newValue,(key=attr)in(obj={})?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj))}},{key:"type",get:function(){return this.get().type},set:function(value){this.set({type:value})}},{key:"title",get:function(){return this.get().title},set:function(value){this.set({title:value})}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Alert;var Constructor,protoProps,staticProps}();return assign(Alert.prototype,{destroy:function(detach){this.destroy=noop,this.fire("destroy"),this.set=noop,this._fragment.d(!1!==detach),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(eventName,data){var handlers=eventName in this._handlers&&this._handlers[eventName].slice();if(handlers)for(var handler,i=0;i<handlers.length;i+=1)if(!(handler=handlers[i]).__calling)try{handler.__calling=!0,handler.call(this,data)}finally{handler.__calling=!1}},on:function(eventName,handler){var handlers=this._handlers[eventName]||(this._handlers[eventName]=[]);return handlers.push(handler),{cancel:function(){var index=handlers.indexOf(handler);~index&&handlers.splice(index,1)}}},set:function(newState){var component;this._set(assign({},newState)),this.root._lock||((component=this.root)._lock=!0,callAll(component._beforecreate),callAll(component._oncreate),callAll(component._aftercreate),component._lock=!1)},_recompute:noop,_set:function(newState){var oldState=this._state,changed={},dirty=!1;for(var key in newState=assign(this._staged,newState),this._staged={},newState)this._differs(newState[key],oldState[key])&&(changed[key]=dirty=!0);dirty&&(this._state=assign(assign({},oldState),newState),this._recompute(changed,this._state),this._bind&&this._bind(changed,this._state),this._fragment&&(this.fire("state",{changed:changed,current:this._state,previous:oldState}),this._fragment.p(changed,this._state),this.fire("update",{changed:changed,current:this._state,previous:oldState})))},_stage:function(newState){assign(this._staged,newState)},_mount:function(target,anchor){this._fragment[this._fragment.i?"i":"m"](target,anchor||null)},_differs:function(a,b){return a==a?a!==b||a&&"object"===_typeof(a)||"function"==typeof a:b==b}}),assign(Alert.prototype,{close:function(){this.parentNode.removeChild(this)}}),assign(Alert.prototype,{_mount:function(target,anchor){target.insertBefore(this,anchor)}}),customElements.define("fw-alert",Alert),Alert},"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&void 0!==module?module.exports=factory():"function"==typeof define&&__webpack_require__(203)?define(factory):global.Alert=factory()}).call(this,__webpack_require__(63)(module))},491:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(48),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(126),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(88);__webpack_require__(492);Object(_storybook_html__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Button",module).addDecorator(Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.withActions)("click fw-button")).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("with text",function(){return"\n    <style>\n      html{\n        --theme-color: #ffa801;\n      }\n    </style>\n    <fw-button>\n      Hello World\n    </fw-button>\n    "}).add("disabled state",function(){return'\n    <style>\n      html{\n        --theme-color: #ffa801;\n      }\n    </style>\n    <fw-button disabled type="submit" name="hello" onClick="console.log(\'asdasdasd\')">\n        Disabled\n    </fw-button>\n    '}).add("large button",function(){return'\n    <style>\n      html{\n        --theme-color: #ffa801;\n      }\n    </style>\n    <fw-button size="large">\n      Hello World\n    </fw-button>\n    '}).add("icon button",function(){return'\n    <style>\n      html{\n        --theme-color: #ffa801;\n      }\n    </style>\n    <fw-button size="icon">\n      H\n    </fw-button>\n    '})}.call(this,__webpack_require__(63)(module))},492:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var global,factory;__webpack_require__(0),__webpack_require__(45),__webpack_require__(110),__webpack_require__(78),__webpack_require__(201),__webpack_require__(26),__webpack_require__(27),__webpack_require__(80),__webpack_require__(14),__webpack_require__(12),__webpack_require__(19),__webpack_require__(202),__webpack_require__(2),__webpack_require__(11),__webpack_require__(3),__webpack_require__(4),__webpack_require__(65),__webpack_require__(79);function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _wrapNativeSuper(Class){var _cache="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(Class){function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}if(null===Class||(fn=Class,-1===Function.toString.call(fn).indexOf("[native code]")))return Class;var fn;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function");if(void 0!==_cache){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}return Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,Class)})(Class)}function _construct(){return(_construct=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(Parent,args,Class){var a=[null];a.push.apply(a,args);var instance=new(Function.bind.apply(Parent,a));return Class&&_setPrototypeOf(instance,Class.prototype),instance}).apply(null,arguments)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}global=void 0,factory=function(){function noop(){}function assign(tar,src){for(var k in src)tar[k]=src[k];return tar}function createElement(name){return document.createElement(name)}function setAttribute(node,attribute,value){null==value?node.removeAttribute(attribute):node.setAttribute(attribute,value)}function setAttributes(node,attributes){for(var key in attributes)"style"==key?node.style.cssText=attributes[key]:key in node?node[key]=attributes[key]:setAttribute(node,key,attributes[key])}function blankObject(){return Object.create(null)}function callAll(fns){for(;fns&&fns.length;)fns.shift()()}var Button=function(_HTMLElement){function Button(){var _this,self,call,options=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Button),self=this,_this=!(call=_getPrototypeOf(Button).call(this))||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call,function(component,options){component._handlers=blankObject(),component._slots=blankObject(),component._bind=options._bind,component._staged={},component.options=options,component.root=options.root||component,component.store=options.store||component.root.store,options.root||(component._beforecreate=[],component._oncreate=[],component._aftercreate=[])}(_assertThisInitialized(_assertThisInitialized(_this)),options),_this._state=assign({},options.data),_this._recompute({},_this._state),_this._intro=!0,_this._slotted=options.slots||{},_this.attachShadow({mode:"open"}),_this.shadowRoot.innerHTML='<style>:host([disabled]){cursor:not-allowed;pointer-events:none}.fw-button{padding:8px 18px;border:1px solid var(--theme-color, #02b875);color:#fff;border-radius:2px;background-color:var(--theme-color, #02b875);font-size:12px;font-weight:600;letter-spacing:0.5px;line-height:14px;text-align:center;text-transform:uppercase;box-shadow:inset 0 -1px 0 0 rgba(0, 0, 0, 0.12),\n\t\t      0 0 1px 0 rgba(24, 50, 71, 0.6), 0 1px 0 0 var(--theme-color, #02b875)}.fw-button:hover:not([disabled]){cursor:pointer;background-color:var(--theme-color, #02b875);filter:brightness(90%)}.fw-button:disabled{opacity:0.2;cursor:not-allowed}.fw-button[size="large"]{min-width:220px}.fw-button[size="icon"]{width:30px;height:30px;padding:0}</style>',_this._fragment=function(component,ctx){for(var button,slot,button_levels=[{class:"fw-button"},ctx.props],button_data={},i=0;i<button_levels.length;i+=1)button_data=assign(button_data,button_levels[i]);return{c:function(){button=createElement("button"),slot=createElement("slot"),this.c=noop,setAttributes(button,button_data)},m:function(target,anchor){(function(target,node,anchor){target.insertBefore(node,anchor)})(target,button,anchor),function(target,node){target.appendChild(node)}(button,slot)},p:function(changed,ctx){setAttributes(button,function(levels,updates){for(var update={},to_null_out={},accounted_for={},i=levels.length;i--;){var o=levels[i],n=updates[i];if(n){for(var key in o)key in n||(to_null_out[key]=1);for(var key in n)accounted_for[key]||(update[key]=n[key],accounted_for[key]=1);levels[i]=n}else for(var key in o)accounted_for[key]=1}for(var key in to_null_out)key in update||(update[key]=void 0);return update}(button_levels,[{class:"fw-button"},changed.props&&ctx.props]))},d:function(detach){var node;detach&&(node=button).parentNode.removeChild(node)}}}(_assertThisInitialized(_assertThisInitialized(_this)),_this._state),_this._fragment.c(),_this._fragment.m(_this.shadowRoot,null),options.target&&_this._mount(options.target,options.anchor),_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Button,_wrapNativeSuper(HTMLElement)),Constructor=Button,staticProps=[{key:"observedAttributes",get:function(){return["disabled","type","name","size"]}}],(protoProps=[{key:"connectedCallback",value:function(){var _this2=this;Object.keys(this._slotted).forEach(function(key){_this2.appendChild(_this2._slotted[key])})}},{key:"attributeChangedCallback",value:function(attr,oldValue,newValue){var obj,key,value;this.set((value=newValue,(key=attr)in(obj={})?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj))}},{key:"disabled",get:function(){return this.get().disabled},set:function(value){this.set({disabled:value})}},{key:"type",get:function(){return this.get().type},set:function(value){this.set({type:value})}},{key:"name",get:function(){return this.get().name},set:function(value){this.set({name:value})}},{key:"size",get:function(){return this.get().size},set:function(value){this.set({size:value})}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Button;var Constructor,protoProps,staticProps}();return assign(Button.prototype,{destroy:function(detach){this.destroy=noop,this.fire("destroy"),this.set=noop,this._fragment.d(!1!==detach),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(eventName,data){var handlers=eventName in this._handlers&&this._handlers[eventName].slice();if(handlers)for(var handler,i=0;i<handlers.length;i+=1)if(!(handler=handlers[i]).__calling)try{handler.__calling=!0,handler.call(this,data)}finally{handler.__calling=!1}},on:function(eventName,handler){var handlers=this._handlers[eventName]||(this._handlers[eventName]=[]);return handlers.push(handler),{cancel:function(){var index=handlers.indexOf(handler);~index&&handlers.splice(index,1)}}},set:function(newState){var component;this._set(assign({},newState)),this.root._lock||((component=this.root)._lock=!0,callAll(component._beforecreate),callAll(component._oncreate),callAll(component._aftercreate),component._lock=!1)},_recompute:noop,_set:function(newState){var oldState=this._state,changed={},dirty=!1;for(var key in newState=assign(this._staged,newState),this._staged={},newState)this._differs(newState[key],oldState[key])&&(changed[key]=dirty=!0);dirty&&(this._state=assign(assign({},oldState),newState),this._recompute(changed,this._state),this._bind&&this._bind(changed,this._state),this._fragment&&(this.fire("state",{changed:changed,current:this._state,previous:oldState}),this._fragment.p(changed,this._state),this.fire("update",{changed:changed,current:this._state,previous:oldState})))},_stage:function(newState){assign(this._staged,newState)},_mount:function(target,anchor){this._fragment[this._fragment.i?"i":"m"](target,anchor||null)},_differs:function(a,b){return a==a?a!==b||a&&"object"===_typeof(a)||"function"==typeof a:b==b}}),assign(Button.prototype,{_mount:function(target,anchor){target.insertBefore(this,anchor)}}),Button.prototype._recompute=function(changed,state){this._differs(state.props,state.props=function(state){return Object.keys(state).forEach(function(key){state[key]=""===state[key]?key:state[key]}),state}(function(src,prop){var tar={};for(var k in src)k===prop||(tar[k]=src[k]);return tar}(state,"props")))&&(changed.props=!0)},customElements.define("fw-button",Button),Button},"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&void 0!==module?module.exports=factory():"function"==typeof define&&__webpack_require__(203)?define(factory):global.Button=factory()}).call(this,__webpack_require__(63)(module))}},[[205,1,2]]]);
//# sourceMappingURL=main.cbc1b055226e8aa3ec03.bundle.js.map