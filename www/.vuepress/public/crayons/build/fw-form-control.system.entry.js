var __awaiter=this&&this.__awaiter||function(e,t,r,i){function s(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function n(e){try{l(i.next(e))}catch(t){o(t)}}function a(e){try{l(i["throw"](e))}catch(t){o(t)}}function l(e){e.done?r(e.value):s(e.value).then(n,a)}l((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,s,o,n;return n={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function a(e){return function(t){return l([e,t])}}function l(n){if(i)throw new TypeError("Generator is already executing.");while(r)try{if(i=1,s&&(o=n[0]&2?s["return"]:n[0]?s["throw"]||((o=s["return"])&&o.call(s),0):s.next)&&!(o=o.call(s,n[1])).done)return o;if(s=0,o)n=[n[0]&2,o.value];switch(n[0]){case 0:case 1:o=n;break;case 4:r.label++;return{value:n[1],done:false};case 5:r.label++;s=n[1];n=[0];continue;case 7:n=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(n[0]===6||n[0]===2)){r=0;continue}if(n[0]===3&&(!o||n[1]>o[0]&&n[1]<o[3])){r.label=n[1];break}if(n[0]===6&&r.label<o[1]){r.label=o[1];o=n;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(n);break}if(o[2])r.ops.pop();r.trys.pop();continue}n=t.call(e,r)}catch(a){n=[6,a];s=0}finally{i=o=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t){for(var r=0,i=t.length,s=e.length;r<i;r++,s++)e[s]=t[r];return e};System.register(["./index-c04bc24f.system.js","./index-9bc87f21.system.js","./Translation-ab48b861.system.js"],(function(e){"use strict";var t,r,i,s,o;return{setters:[function(e){t=e.r;r=e.i;i=e.j},function(e){s=e.a},function(e){o=e.T}],execute:function(){var n=':host{font-family:var(--fw-font-family, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.error{color:#d72d30;font-weight:400;font-size:12px;line-height:20px;padding-top:4px;-webkit-padding-start:2px;padding-inline-start:2px}label{font-size:12px;color:#475867;font-weight:600;margin-bottom:4px;-webkit-padding-start:2px;padding-inline-start:2px;display:block}label.required::after{content:"*";position:relative;display:inline-block;top:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.hint{font-weight:400;font-size:12px;color:#475867;line-height:20px;padding-top:4px;-webkit-padding-start:2px;padding-inline-start:2px}.form-control-container{margin:1em 0em}';var a=["input","select","textarea"];var l=e("fw_form_control",function(){function e(e){t(this,e);this.type="TEXT";this.required=false;this.hint="";this.placeholder="";this.choices=[];this.fieldProps={};this.touched=false;this.error="";this.hasSlot=false}e.prototype.renderControl=function(){var e,t,i,s,n,a,l,h;var c=this;var d,u,p,f,b,v,m,g,y,x,O,w,j,P,C,k,_,q,L,S;if(this.hasSlot)return null;if(!this.name)return null;var E;switch(this.type){case"TEXT":case"NUMBER":case"DECIMAL":case"EMAIL":case"TEL":case"URL":{var R=this.type==="DECIMAL"?"number":(d=this.type)===null||d===void 0?void 0:d.toLowerCase();var T=Object.assign(Object.assign(Object.assign(Object.assign({},this.fieldProps),{name:this.name,placeholder:this.placeholder,label:this.label,required:this.required,type:R}),(u=this.controlProps)===null||u===void 0?void 0:u.inputProps(this.name,R)),(e={state:this.touched&&this.error&&"error"||"normal"},e["hint-text"]=this.hint,e["error-text"]=o.t(this.error,{field:this.label||this.name}),e));E=r("fw-input",Object.assign({},T,{ref:function(e){return c.crayonsControlRef=e}}));break}case"PARAGRAPH":{var T=Object.assign(Object.assign(Object.assign(Object.assign({},this.fieldProps),{name:this.name,placeholder:this.placeholder,label:this.label,required:this.required}),(p=this.controlProps)===null||p===void 0?void 0:p.inputProps(this.name,(f=this.type)===null||f===void 0?void 0:f.toLowerCase())),(t={state:this.touched&&this.error&&"error"||"normal"},t["hint-text"]=this.hint,t["error-text"]=o.t(this.error,{field:this.label||this.name}),t));E=r("fw-textarea",Object.assign({},T,{ref:function(e){return c.crayonsControlRef=e}}))}break;case"DATE":{var T=Object.assign(Object.assign(Object.assign(Object.assign({},this.fieldProps),{name:this.name,placeholder:this.placeholder,label:this.label,required:this.required}),(b=this.controlProps)===null||b===void 0?void 0:b.inputProps(this.name,(v=this.type)===null||v===void 0?void 0:v.toLowerCase())),(i={state:this.touched&&this.error&&"error"||"normal"},i["hint-text"]=this.hint,i["error-text"]=o.t(this.error,{field:this.label||this.name}),i));E=r("fw-datepicker",Object.assign({},T,{readonly:true,ref:function(e){return c.crayonsControlRef=e}}))}break;case"CHECKBOX":{var T=Object.assign(Object.assign(Object.assign(Object.assign({},this.fieldProps),{name:this.name,placeholder:this.placeholder,label:"",required:this.required}),(m=this.controlProps)===null||m===void 0?void 0:m.checkboxProps(this.name,(g=this.type)===null||g===void 0?void 0:g.toLowerCase())),(s={state:this.touched&&this.error&&"error"||"normal"},s["hint-text"]=this.hint,s["error-text"]=o.t(this.error,{field:this.label||this.name}),s));E=r("fw-checkbox",Object.assign({},T,{ref:function(e){return c.crayonsControlRef=e}}),this.label)}break;case"RADIO":{var A=(y=this.controlProps)===null||y===void 0?void 0:y.radioProps(this.name,(x=this.type)===null||x===void 0?void 0:x.toLowerCase());var I=Object.assign(Object.assign(Object.assign({},this.fieldProps),(n={name:this.name,placeholder:this.placeholder,label:this.label,required:this.required,"allow-empty":true,state:this.touched&&this.error&&"error"||"normal"},n["hint-text"]=this.hint,n["error-text"]=o.t(this.error,{field:this.label||this.name}),n)),A);E=r("fw-radio-group",Object.assign({},I,{ref:function(e){return c.crayonsControlRef=e}}),(O=this.choices)===null||O===void 0?void 0:O.map((function(e){var t=e[I.optionValuePath]||e.value;var i=e[I.optionLabelPath]||e.value;return r("fw-radio",{name:c.name,value:t,state:c.touched&&c.error?"error":"normal"},i)})))}break;case"DROPDOWN":case"MULTI_SELECT":{var A=(w=this.controlProps)===null||w===void 0?void 0:w.selectProps(this.name,(j=this.type)===null||j===void 0?void 0:j.toLowerCase());var T=Object.assign(Object.assign({},this.fieldProps),(a={name:this.name,placeholder:this.placeholder,label:this.label,required:this.required,multiple:this.type==="MULTI_SELECT",state:this.touched&&this.error&&"error"||"normal"},a["hint-text"]=this.hint,a["error-text"]=o.t(this.error,{field:this.label||this.name}),a));T=Object.assign(Object.assign(Object.assign({},T),A),{options:this.choices});E=r("fw-select",Object.assign({},T,{ref:function(e){return c.crayonsControlRef=e}}))}break;case"RELATIONSHIP":{var A=(P=this.controlProps)===null||P===void 0?void 0:P.selectProps(this.name,(C=this.type)===null||C===void 0?void 0:C.toLowerCase());var T=Object.assign(Object.assign({},this.fieldProps),(l={name:this.name,placeholder:this.placeholder,label:this.label,required:this.required,state:this.touched&&this.error&&"error"||"normal"},l["hint-text"]=this.hint,l["error-text"]=o.t(this.error,{field:this.label||this.name}),l));if(Array.isArray(A.value)&&typeof A.value[0]==="object"){T.selectedOptions=A.value}if(((k=T.selectedOptions)===null||k===void 0?void 0:k.length)>0){(_=this.crayonsControlRef)===null||_===void 0?void 0:_.setSelectedOptions(T.selectedOptions)}else if(!A.value){(q=this.crayonsControlRef)===null||q===void 0?void 0:q.setSelectedOptions([])}T.noDataText=o.t("search.startTyping");E=r("fw-select",Object.assign({},T,{ref:function(e){return c.crayonsControlRef=e}}))}break;case"TIME":{var T=Object.assign(Object.assign(Object.assign(Object.assign({},this.fieldProps),{name:this.name,placeholder:this.placeholder,label:this.label,required:this.required}),(L=this.controlProps)===null||L===void 0?void 0:L.inputProps(this.name,(S=this.type)===null||S===void 0?void 0:S.toLowerCase())),(h={state:this.touched&&this.error&&"error"||"normal"},h["hint-text"]=this.hint,h["error-text"]=o.t(this.error,{field:this.label||this.name}),h));E=r("fw-timepicker",Object.assign({},T,{ref:function(e){return c.crayonsControlRef=e}}))}break}return E};e.prototype.componentWillLoad=function(){this.handleSlotChange()};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r,i;return __generator(this,(function(s){switch(s.label){case 0:if(!!this.hasSlot)return[3,2];return[4,(t=(e=this.crayonsControlRef)===null||e===void 0?void 0:e.setFocus)===null||t===void 0?void 0:t.call(e)];case 1:s.sent();return[3,3];case 2:(i=(r=this.slotElement)===null||r===void 0?void 0:r.focus)===null||i===void 0?void 0:i.call(r);s.label=3;case 3:return[2]}}))}))};e.prototype.handleSlotChange=function(){var e;this.hasSlot=s(this.el);this.slotElement=(e=__spreadArray([],this.el.querySelectorAll("*")).filter((function(e){var t;return a.includes((t=e===null||e===void 0?void 0:e.tagName)===null||t===void 0?void 0:t.toLowerCase())})))===null||e===void 0?void 0:e[0]};e.prototype.render=function(){return r("div",{class:"form-control-container"},this.renderControl(),this.hasSlot&&r("label",{htmlFor:this.name,class:{label:true,required:this.required}},this.label),r("slot",null),this.hasSlot&&!(this.touched&&this.error)&&r("div",{class:"hint",id:"hint-"+this.name},this.hint),this.hasSlot&&this.touched&&this.error&&r("div",{class:"error",id:"error-"+this.name},o.t(this.error,{field:this.label||this.name})))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return e}());l.style=n}}}));