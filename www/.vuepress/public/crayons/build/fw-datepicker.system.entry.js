var __awaiter=this&&this.__awaiter||function(t,e,a,i){function n(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,s){function o(t){try{l(i.next(t))}catch(e){s(e)}}function r(t){try{l(i["throw"](t))}catch(e){s(e)}}function l(t){t.done?a(t.value):n(t.value).then(o,r)}l((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var a={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,n,s,o;return o={next:r(0),throw:r(1),return:r(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function r(t){return function(e){return l([t,e])}}function l(o){if(i)throw new TypeError("Generator is already executing.");while(a)try{if(i=1,n&&(s=o[0]&2?n["return"]:o[0]?n["throw"]||((s=n["return"])&&s.call(n),0):n.next)&&!(s=s.call(n,o[1])).done)return s;if(n=0,s)o=[o[0]&2,s.value];switch(o[0]){case 0:case 1:s=o;break;case 4:a.label++;return{value:o[1],done:false};case 5:a.label++;n=o[1];o=[0];continue;case 7:o=a.ops.pop();a.trys.pop();continue;default:if(!(s=a.trys,s=s.length>0&&s[s.length-1])&&(o[0]===6||o[0]===2)){a=0;continue}if(o[0]===3&&(!s||o[1]>s[0]&&o[1]<s[3])){a.label=o[1];break}if(o[0]===6&&a.label<s[1]){a.label=s[1];s=o;break}if(s&&a.label<s[2]){a.label=s[2];a.ops.push(o);break}if(s[2])a.ops.pop();a.trys.pop();continue}o=e.call(t,a)}catch(r){o=[6,r];n=0}finally{i=s=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./index-c04bc24f.system.js","./index-10664e89.system.js","./index-9bc87f21.system.js","./field-control-3422d0ba.system.js","./Translation-ab48b861.system.js"],(function(t){"use strict";var e,a,i,n,s,o,r,l,h,d,c,u,p,f,m,v,y,g,D,w,b,x,k,M;return{setters:[function(t){e=t.r;a=t.h;i=t.i;n=t.j},function(t){s=t.f;o=t.a;r=t.s;l=t.g;h=t.p;d=t.i;c=t.b;u=t.c;p=t.d;f=t.e;m=t.h;v=t.j;y=t.k},function(t){g=t.g;D=t.h;w=t.a;b=t.r},function(t){x=t.F},function(t){k=t.T;M=t.i}],execute:function(){var F=':host{font-family:var(--fw-font-family, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.field-control{position:relative}.field-control-label{display:block;font-size:12px;color:var(--fw-label-color, #475867);font-weight:600;margin-bottom:4px;-webkit-padding-start:2px;padding-inline-start:2px;line-height:20px}.field-control-label.required::after{content:"*";position:relative;display:inline-block;top:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.field-control-hint-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;margin-top:4px;margin-bottom:0;color:var(--fw-hint-color, #acb6be);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-error-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;margin-top:4px;margin-bottom:0;color:var(--fw-error-color, #d72d30);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-warning-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;margin-top:4px;margin-bottom:0;color:var(--fw-warning-color, #f8ab59);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host{display:block;position:relative;--fw-icon-size:14px}:host *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdp-container,.mdp-range-container{width:264px;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;padding:16px;overflow:hidden}.mdpc-footer{padding:4px;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:end;justify-content:flex-end;background:#f5f7f9}.mdpc-footer fw-button{margin:4px}.mdp-range-container{width:536px}.mdpc-head{--fw-select-margin-bottom:16px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.mdpc-body{float:left;width:100%}.body-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:justify;justify-content:space-between}.body-container .mdpc-body{width:232px;padding:0 8px;position:relative}.body-container .mdpc-body-right{width:232px;padding:0 8px}.body-container .mdpc-body-right::after{content:"";position:absolute;top:0;right:251px;-webkit-border-end:1px solid #ebeff3;border-inline-end:1px solid #ebeff3;height:100%}.btns{display:inherit;position:absolute;right:14px}.mdpch-button,.mdpch-button-right{width:12px;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;bottom:6px;right:14px}.mdpchb-inner:hover,.mdpchb-inner:focus{cursor:pointer;background:#ebeff3}.mdpchb-inner{height:20px;width:20px;position:absolute;margin-top:-11px}.mdpch-button-right .mdpchb-inner{inset-inline-start:12px}.mdpchbi-left-arrow,.mdpchbi-left-arrows,.mdpchbi-left-arrows::after,.mdpchbi-right-arrow,.mdpchbi-right-arrows,.mdpchbi-right-arrows::after{display:block;width:6px;height:6px;-webkit-border-start:2px solid #183247;border-inline-start:2px solid #183247;border-bottom:2px solid #183247;position:absolute}.mdpchbi-left-arrow,.mdpchbi-left-arrows,.mdpchbi-right-arrow,.mdpchbi-right-arrows{-webkit-transform:rotate(45deg);transform:rotate(45deg);inset-inline-start:50%;top:50%;-webkit-margin-start:-2px;margin-inline-start:-2px;margin-top:-4px}.mdpchbi-right-arrow,.mdpchbi-right-arrows{-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-margin-start:-4px;margin-inline-start:-4px}.mdpchbi-left-arrows::after,.mdpchbi-right-arrows::after{content:"";inset-inline-start:3px;top:-5px}.mdpchbi-left-arrows{-webkit-margin-start:-5px;margin-inline-start:-5px}.mdpchbi-right-arrows{-webkit-margin-start:-2px;margin-inline-start:-2px}.mdpch-container,.mdpch-container-right{min-width:50%}.mdpch-container-right{-webkit-padding-start:16px;padding-inline-start:16px}.mdpchc-year{--fw-button-min-width:74px;float:left;height:30px;font-size:16px;color:#475867;text-align:center;width:74px;--fw-popover-max-height:146px;--fw-popover-min-width:170px}.mdpchc-month{--fw-button-min-width:65px;float:left;font-size:16px;color:#475867;text-align:center;width:65px;--fw-popover-max-height:146px;--fw-popover-min-width:170px}.mdpchc-month fw-select .input-container-inner input{width:98%}.c-container,.c-day-container,.cc-body,.cc-head,.cch-name,.cdc-day,.cdc-day span{position:relative;display:block;float:left;-webkit-box-sizing:border-box;box-sizing:border-box}.c-container{width:100%;height:100%}.cc-head{height:30px;width:100%}.cch-name{width:14.285%;height:30px;line-height:30px;font-weight:700;color:#475867;font-size:13px;text-align:center}.cc-body{height:210px;width:100%}.c-day-container{width:14.285%;height:11.185%;margin-top:10px}.cdc-day{width:100%;height:100%;font-size:12px;font-weight:300;color:#475867;text-align:center}.cdc-day span:hover,.cdc-day span:focus{cursor:pointer;background:#ebeff3}.cdc-day span{width:24px;height:22px;font-size:14px;margin-top:-11px;-webkit-margin-start:-13px;margin-inline-start:-13px;inset-inline-start:50%;top:50%;font-weight:400;border-radius:10%;line-height:20px;color:#12344d}.c-day-container.disabled{pointer-events:none}.date-input{width:200px}.icon-calendar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:4px 0px}.icon-calendar .separator{border-inline-start-width:1px;border-inline-start-style:solid;height:20px;margin:0px 4px}.date-icon{display:-ms-flexbox;display:flex;width:24px;height:24px;border-radius:4px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:#ebeff3}.range-date-input{width:235px}.c-day-container.disabled .cdc-day span{color:#92a2b1;background:#fff !important}.c-day-container.highlight:not(.disabled) .cdc-day span{border:1px solid #cfd7df}.c-day-container.highlight-blue:not(.disabled) .cdc-day span{background:#2c5cc5;color:#f5f7f9}.c-day-container.start-day .cdc-day{-webkit-margin-start:10px;margin-inline-start:10px}.c-day-container.start-day .cdc-day span{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.c-day-container.end-day .cdc-day{-webkit-margin-start:-10px;margin-inline-start:-10px}.c-day-container.end-day .cdc-day span{-webkit-transform:translateX(10px);transform:translateX(10px)}.c-day-container.highlight-range:not(.disabled) .cdc-day{background:#e4f2fd}';var S=undefined&&undefined.__decorate||function(t,e,a,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,a):i,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(t,e,a,i);else for(var r=t.length-1;r>=0;r--)if(o=t[r])s=(n<3?o(s):n>3?o(e,a,s):o(e,a))||s;return n>3&&s&&Object.defineProperty(e,a,s),s};var C=["S","M","T","W","T","F","S"];var P=[{value:"Jan",text:"January"},{value:"Feb",text:"February"},{value:"Mar",text:"March"},{value:"Apr",text:"April"},{value:"May",text:"May"},{value:"Jun",text:"June"},{value:"Jul",text:"July"},{value:"Aug",text:"August"},{value:"Sep",text:"September"},{value:"Oct",text:"October"},{value:"Nov",text:"November"},{value:"Dec",text:"December"}];var E=function(t){if(!t){return{longMonthNames:P.map((function(t){return t.text})),shortMonthNames:P.map((function(t){return t.value}))}}var e=[];var a=[];for(var i=0;i<=11;i++){e.push(t.localize.month(i,{width:"abbreviated"}));a.push(t.localize.month(i))}return{longMonthNames:a,shortMonthNames:e}};var T=function(t){if(!t)return C;return Array.from(Array(7)).map((function(e,a){return s(o(r(new Date),a),"EEEEE",{locale:t})}))};var N=t("fw_datepicker",function(){function t(t){var i=this;e(this,t);this.fwChange=a(this,"fwChange",7);this.fwBlur=a(this,"fwBlur",7);this.firstFocusElement=null;this.lastFocusElement=null;this.hasHintTextSlot=false;this.hasWarningTextSlot=false;this.hasErrorTextSlot=false;this.mode="single date";this.name="";this.updateText="";this.cancelText="";this.required=false;this.state="normal";this.minYear=1970;this.maxYear=(new Date).getFullYear();this.readonly=false;this.showFooter=true;this.clearInput=false;this.hintText="";this.warningText="";this.errorText="";this.label="";this.escapeHandler=null;this.isDisplayFormatSet=false;this.isPlaceholderSet=false;this.getSupportedYears=function(){var t=[];if(+i.maxYear<+i.minYear)i.maxYear=+i.minYear;var e=+i.minYear;while(e<=+i.maxYear){t.push(e.toString());e++}return t};this.getDayDetails=function(t){var e=t.index-t.firstDay;var a=t.index%7;var n=t.month-1;var s=Number(t.year);if(n<0){n=11;s--}var o=l(new Date(s,n))||0;var r=(e<0?o+e:e%t.numberOfDays)+1;var h=i._getValidDateInMonth(e,t);var d=new Date(t.year,t.month,r).valueOf();return{date:r,day:a,month:h,timestamp:d}};this.getMonthDetails=function(t,e){var a=new Date(t,e).getDay();var n=l(new Date(t,e))||0;var s=[];var o=6;var r;var h=0;var d=7;for(var c=0;c<o;c++){for(var u=0;u<d;u++){r=i.getDayDetails({index:h,numberOfDays:n,firstDay:a,year:t,month:e});s.push(r);h++}}return s};this.setMonth=function(t){var e=Number(i.year);var a=i.month+t;if(a===-1){a=11;e--}else if(a===12){a=0;e++}i.year=e.toString();i.month=a;i.toMonth=i.month===11?0:i.month+1;i.toYear=i.toMonth===0?i.yearCalculation(i.year,1):i.year;i.monthDetails=i.getMonthDetails(e,a);i.nextMonthDetails=i.month===11?i.getMonthDetails(i.yearCalculation(i.year,1),0):i.getMonthDetails(i.year,i.month+1)};this.isCurrentDay=function(t){return t.timestamp===i.todayTimestamp};this.isSelectedDay=function(t){var e=t.date,a=t.timestamp;if(i.mode!=="range"){var n=h(i.value,i.displayFormat,new Date,{locale:i.langModule});var s=d(n);return s?e===i.selectedDay&&c(n)===c(a)&&u(n)===u(a):e===i.selectedDay}return a===i.startDate||a===i.endDate};this.handleDateHover=function(t){if(i.startDate&&!i.endDate){if(i.startDate>t.timestamp){i.endDate=i.startDate;i.startDate=undefined}i.dateHovered=t.timestamp}else if(!i.startDate&&i.endDate){if(i.endDate<t.timestamp){i.startDate=i.endDate;i.endDate=undefined}i.dateHovered=t.timestamp}};this.isInRange=function(t){var e=t.timestamp;var a=i.endDate;var n=i.startDate;return n&&a&&e>=n&&e<=a};this.onDateClick=function(t,e){var a=e.date,n=e.timestamp;if(i.showSingleDatePicker()){i.selectedDay=a;if(!i.showFooter){i.updateValueAndEmitEvent(t);i.showDatePicker=false;i.host.shadowRoot.querySelector("fw-popover").hide()}}else if(i.showDateRangePicker()){i.handleRangeSelection(n);if(!i.showFooter){if(i.startDate&&i.endDate){i.updateValueAndEmitEvent(t);i.showDatePicker=false;i.host.shadowRoot.querySelector("fw-popover").hide()}}i.dateHovered=""}};this.handleInputClear=function(t){i.clearInputValue();i.emitEvent(t,undefined)};this.handlePopoverClose=function(t){var e,a;if(((e=t.target)===null||e===void 0?void 0:e.tagName)==="FW-SELECT")return;if(i.mode==="range"){if(i.value){var n=((a=i.value)===null||a===void 0?void 0:a.split(k.t("datepicker.to")))||[],s=n[0],o=n[1];s=s===null||s===void 0?void 0:s.trim();o=o===null||o===void 0?void 0:o.trim();var r=p(new Date(i.startDate));var l=p(new Date(i.endDate));var d=p(h(s,i.displayFormat,new Date,{locale:i.langModule}));var c=p(h(o,i.displayFormat,new Date,{locale:i.langModule}));if(r!==d){i.startDate=h(s,i.displayFormat,new Date,{locale:i.langModule}).valueOf()}if(l!==c){i.endDate=h(o,i.displayFormat,new Date,{locale:i.langModule}).valueOf()}}else if(!i.startDate&&!i.endDate){i.startDate=i.endDate=undefined}}else{if(i.value){var u=p(h(i.value,i.displayFormat,new Date,{locale:i.langModule}));if(i.selectedDay!==u){i.selectedDay=u}}else i.selectedDay=undefined}};this.onBlur=function(t){return __awaiter(i,void 0,void 0,(function(){var e,a,i,n;return __generator(this,(function(s){t.stopImmediatePropagation();if(((n=(i=(a=(e=t)===null||e===void 0?void 0:e.detail)===null||a===void 0?void 0:a.event)===null||i===void 0?void 0:i.relatedTarget)===null||n===void 0?void 0:n.tagName)!=="SPAN"){this.fwBlur.emit({event:t,name:this.name})}return[2]}))}))}}t.prototype.makeDatePickerInert=function(){var t=this;if(!this.madeInert){var e=g(this.host);if(e.length){this.firstFocusElement=e[0];this.lastFocusElement=e[e.length-1];this.lastFocusElement.addEventListener("keydown",(function(e){!e.shiftKey&&e.keyCode===9&&t.focusElement(t.firstFocusElement)}));this.firstFocusElement.addEventListener("keydown",(function(e){e.shiftKey&&e.keyCode===9&&t.focusElement(t.lastFocusElement)}))}if(this.firstFocusElement){this.focusElement(this.firstFocusElement)}this.madeInert=true}this.escapeHandler=function(e){if(e.keyCode===27){t.showDatePicker=false;t.host.shadowRoot.querySelector("fw-popover").hide()}}.bind(this);document.addEventListener("keydown",this.escapeHandler)};t.prototype.emitEvent=function(t,e){this.fwChange.emit({event:t,name:this.name,value:e})};t.prototype.focusElement=function(t){t.focus()};t.prototype.disconnectedCallback=function(){var t;document.removeEventListener("keydown",this.escapeHandler);(t=this.host.shadowRoot)===null||t===void 0?void 0:t.removeEventListener("slotchange",this.handleSlotChange)};t.prototype.formatDate=function(t){if(!t)return t;return this.displayFormat?f(h(t,this.displayFormat,new Date,{locale:this.langModule})):f(new Date(t))};t.prototype.getValue=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.mode==="range"){return[2,{fromDate:this.startDate&&s(h(this.startDate,this.displayFormat,new Date,{locale:this.langModule}),this.displayFormat,{locale:this.langModule})||undefined,toDate:this.endDate&&s(h(this.endDate,this.displayFormat,new Date,{locale:this.langModule}),this.displayFormat,{locale:this.langModule})||undefined}]}return[2,this.displayFormat?this.value&&s(h(this.value,this.displayFormat,new Date,{locale:this.langModule}),this.displayFormat,{locale:this.langModule})||undefined:this.value&&f(new Date(this.value))||undefined]}))}))};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(a){if(this.nativeInput){(e=(t=this.nativeInput).setFocus)===null||e===void 0?void 0:e.call(t)}return[2]}))}))};t.prototype.clearValue=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.clearInputValue();return[2]}))}))};t.prototype.handleKeyDown=function(t){switch(t.code){case"Enter":this.host.shadowRoot.querySelector("fw-popover").show();break;case"ArrowDown":t.preventDefault()}this.makeDatePickerInert()};t.prototype.displayDatePicker=function(){this.showDatePicker=true};t.prototype.handleButtonClick=function(t){var e=t.composedPath()[0].classList.value.includes("update-range-value");var a=t.composedPath()[0].classList.value.includes("update-date-value");if(e){if(this.startDate&&this.endDate){this.updateValueAndEmitEvent(t)}}else if(a){if(this.selectedDay){this.updateValueAndEmitEvent(t)}}if(t.path[0].innerText===this.cancelText&&!this.value){if(this.mode==="range"){this.startDate=this.endDate=undefined}else{this.selectedDay=undefined}}if(t.path[0].innerText===this.cancelText){this.handlePopoverClose(t)}if(t.path[0].innerText===this.updateText||t.path[0].innerText===this.cancelText){this.showDatePicker=false;this.host.shadowRoot.querySelector("fw-popover").hide()}};t.prototype.handleInputChanges=function(t){t.stopImmediatePropagation();if(t.composedPath()[0].classList.value.includes("range-date-input")){var e=t.path[0].value;if(!e){this.value=undefined}var a=(e===null||e===void 0?void 0:e.split(k.t("datepicker.to")))||[],i=a[0],n=a[1];i=i===null||i===void 0?void 0:i.trim();n=n===null||n===void 0?void 0:n.trim();if(!m(i,this.displayFormat,{locale:this.langModule})||!m(n,this.displayFormat,{locale:this.langModule}))return;var o=h(i,this.displayFormat,new Date,{locale:this.langModule});var r=h(n,this.displayFormat,new Date,{locale:this.langModule});var l=d(o);var f=d(r);if(!l||!f){return}var v=u(h(i,this.displayFormat,new Date,{locale:this.langModule}));if(v<this.minYear||v>this.maxYear){return}this.year=v;this.month=c(h(i,this.displayFormat,new Date,{locale:this.langModule}));this.startDate=h(i,this.displayFormat,new Date,{locale:this.langModule}).valueOf();this.endDate=h(n,this.displayFormat,new Date,{locale:this.langModule}).valueOf();this.toMonth=this.month===11?0:this.month+1;this.toYear=this.toMonth===0?this.yearCalculation(this.year,1):this.year}else{var e=t.path[0].value;if(!e){this.value=undefined}if(!m(e,this.displayFormat,{locale:this.langModule}))return;var y=h(e,this.displayFormat,new Date,{locale:this.langModule});var g=d(y);if(!g){return}var v=u(h(e,this.displayFormat,new Date,{locale:this.langModule}));if(v<this.minYear||v>this.maxYear){return}this.year=v;this.month=c(h(e,this.displayFormat,new Date,{locale:this.langModule}));this.selectedDay=p(h(e,this.displayFormat,new Date,{locale:this.langModule}));this.value=s(new Date(this.year,this.month,this.selectedDay),this.displayFormat,{locale:this.langModule})}};t.prototype.handleMonthYearDropDownSelection=function(t){if(t.path[0].tagName!=="FW-DATEPICKER"){t.stopImmediatePropagation()}var e=t.detail&&t.detail.value;if(!e){return}if(this.mode==="range"){this.handleDateRangeDropDownUpdate(t,e);this.nextMonthDetails=this.getMonthDetails(this.toYear,this.toMonth)}else{this.handleSingleDateDropDownUpdate(t,e)}this.monthDetails=this.getMonthDetails(this.year,this.month)};t.prototype.handleSingleDateDropDownUpdate=function(t,e){var a=t.composedPath()[0].classList.value.includes("single-month-selector");var i=t.composedPath()[0].classList.value.includes("single-year-selector");if(a){this.month=this.shortMonthNames.indexOf(e)}else if(i){this.year=e}};t.prototype.handleDateRangeDropDownUpdate=function(t,e){var a=t.composedPath()[0].classList.value.includes("from-month-selector");var i=t.composedPath()[0].classList.value.includes("from-year-selector");var n=t.composedPath()[0].classList.value.includes("to-month-selector");var s=t.composedPath()[0].classList.value.includes("to-year-selector");if(a){this.month=this.shortMonthNames.indexOf(e);if(this.month===11){this.toMonth=0;this.toYear=this.yearCalculation(this.year,1)}else{this.toMonth=this.month+1}}else if(i){this.year=e;this.toYear=this.month===11?this.yearCalculation(this.year,1):this.year}else if(n){this.toMonth=this.shortMonthNames.indexOf(e);if(this.toMonth===0){this.month=11;this.year=this.yearCalculation(this.toYear,-1)}else{this.month=this.toMonth-1}}else if(s){this.toYear=e;this.year=this.toMonth===0?this.yearCalculation(this.toYear,-1):this.toYear}};t.prototype.yearCalculation=function(t,e){var a=Number(t)+e;return a.toString()};t.prototype.handleLocaleChange=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(a){switch(a.label){case 0:e=this;return[4,k.getDateLangModule(t)];case 1:e.langModule=a.sent();return[2]}}))}))};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,a,i,n,o,n,r,l;var h=this;return __generator(this,(function(f){switch(f.label){case 0:a=this;return[4,k.getDateLangModule(this.locale)];case 1:a.langModule=f.sent();if(this.displayFormat){this.isDisplayFormatSet=true}if(this.placeholder){this.isPlaceholderSet=true}this.handleSlotChange();this.displayFormat=this.displayFormat||((e=(t=this.langModule)===null||t===void 0?void 0:t.formatLong)===null||e===void 0?void 0:e.date({width:"short"}));this.placeholder=this.placeholder||this.displayFormat;i=k.onChange.bind(k);i("lang",(function(t){return __awaiter(h,void 0,void 0,(function(){var e,a,i,n;return __generator(this,(function(s){switch(s.label){case 0:i=this;return[4,k.getDateLangModule(t)];case 1:i.langModule=s.sent();this.displayFormat=this.isDisplayFormatSet?this.displayFormat:(a=(e=this.langModule)===null||e===void 0?void 0:e.formatLong)===null||a===void 0?void 0:a.date({width:"short"});this.placeholder=this.isPlaceholderSet?this.placeholder:this.displayFormat;if(this.mode==="range")this.placeholder=this.isPlaceholderSet?this.placeholder:this.displayFormat+" "+k.t("datepicker.to")+" "+this.displayFormat;n=E(this.langModule);this.shortMonthNames=n.shortMonthNames;this.longMonthNames=n.longMonthNames;this.weekDays=T(this.langModule);return[2]}}))}))}));if(this.mode==="range"){n=new Date;if(this.fromDate&&!d(v(this.fromDate))||this.toDate&&!d(v(this.toDate))){this.year=u(n);this.month=c(n)}else{o=new Date(this.fromDate);this.year=this.fromDate?u(o):u(n);this.month=this.fromDate?c(o):c(n)}}else{n=new Date;if(this.value&&!d(v(this.value))){this.year=u(n);this.month=c(n);this.selectedDay=p(n)}else{r=new Date(this.value);this.year=this.value?u(r):u(n);this.month=this.value?c(r):c(n);this.selectedDay=this.value&&p(r)}}this.toMonth=this.month===11?0:this.month+1;this.toYear=this.toMonth===0?this.yearCalculation(this.year,1):this.year;this.monthDetails=this.getMonthDetails(this.year,this.month);this.todayTimestamp=y(new Date).valueOf();l=E(this.langModule);this.shortMonthNames=l.shortMonthNames;this.longMonthNames=l.longMonthNames;this.weekDays=T(this.langModule);this.value=this.value?s(new Date(this.value),this.displayFormat,{locale:this.langModule}):this.value;this.setInitialValues();return[2]}}))}))};t.prototype.setInitialValues=function(){this.nextMonthDetails=this.month===11?this.getMonthDetails(this.yearCalculation(this.year,1),0):this.getMonthDetails(this.year,this.month+1);if(this.mode==="range")this.placeholder=this.isPlaceholderSet?this.placeholder:this.displayFormat+" "+k.t("datepicker.to")+" "+this.displayFormat;this.supportedYears=this.getSupportedYears();this.startDate=this.fromDate!==undefined?h(this.fromDate,this.displayFormat,new Date,{locale:this.langModule}).valueOf():undefined;this.endDate=this.toDate!==undefined?h(this.toDate,this.displayFormat,new Date,{locale:this.langModule}).valueOf():undefined;if(this.mode==="range"&&this.startDate&&this.endDate){var t=s(new Date(this.startDate),this.displayFormat,{locale:this.langModule});var e=s(new Date(this.endDate),this.displayFormat,{locale:this.langModule});this.value=t+" to "+e}};t.prototype.watchValueChanged=function(t){if(!t){this.startDate=undefined;this.endDate=undefined;this.selectedDay=undefined;this.value=undefined;var e=new Date;this.year=u(e);this.month=c(e);this.monthDetails=this.getMonthDetails(this.year,this.month)}else{if(this.mode!=="range"){var e=new Date;e.setMonth(this.month);e.setFullYear(this.year);e.setDate(this.selectedDay);this.value=s(e,this.displayFormat,{locale:this.langModule})}else{var a=s(new Date(this.startDate),this.displayFormat,{locale:this.langModule});var i=s(new Date(this.endDate),this.displayFormat,{locale:this.langModule});this.value=a+" to "+i}}};t.prototype._getValidDateInMonth=function(t,e){if(this.minDate!==undefined&&this.maxDate!==undefined){if(t<0){return-1}var a=new Date(this.minDate);var i=new Date(this.maxDate);var n=new Date(e.year,e.month,t+1);var s=a.valueOf()<=n.valueOf()&&n.valueOf()<=i.valueOf();return!s?-1:t>=e.numberOfDays?1:0}return t<0?-1:t>=e.numberOfDays?1:0};t.prototype.handleKeyUp=function(t,e){if(t.code==="Enter"){if(t.composedPath().find((function(t){return t.classList&&t.classList.value==="mdp-range-container"}))){this.onDateClick(t,e);this.startDateFormatted=s(new Date(this.startDate),this.displayFormat,{locale:this.langModule});this.endDateFormatted=s(new Date(this.endDate),this.displayFormat,{locale:this.langModule});if(this.startDate&&this.endDate){this.value=this.startDateFormatted+" to "+this.endDateFormatted;this.emitEvent(t,{fromDate:this.formatDate(this.startDateFormatted),toDate:this.formatDate(this.endDateFormatted)});this.showDatePicker=false;this.host.shadowRoot.querySelector("fw-popover").hide()}}else{this.onDateClick(t,e);this.value=s(new Date(this.year,this.month,this.selectedDay),this.displayFormat,{locale:this.langModule});this.emitEvent(t,this.formatDate(this.value));this.showDatePicker=false;this.host.shadowRoot.querySelector("fw-popover").hide()}}};t.prototype.isHoverInRange=function(t){var e=t.timestamp;var a=this,i=a.startDate,n=a.endDate,s=a.dateHovered;var o=i&&s&&e<=s&&e>=i;var r=n&&s&&e>=s&&e<=n;return o||r};t.prototype.updateValueAndEmitEvent=function(t){if(this.showSingleDatePicker()){this.value=s(new Date(this.year,this.month,this.selectedDay),this.displayFormat,{locale:this.langModule});this.emitEvent(t,this.formatDate(this.value))}else if(this.showDateRangePicker()){this.startDateFormatted=s(this.startDate,this.displayFormat,{locale:this.langModule});this.endDateFormatted=s(this.endDate,this.displayFormat,{locale:this.langModule});this.fromDate=this.startDateFormatted;this.toDate=this.endDateFormatted;this.value=this.startDateFormatted+" to "+this.endDateFormatted;this.emitEvent(t,{fromDate:this.formatDate(this.startDateFormatted),toDate:this.formatDate(this.endDateFormatted)})}};t.prototype.clearInputValue=function(){if(this.mode!=="range"){if(this.selectedDay){this.selectedDay=undefined}}else{if(this.startDate&&this.endDate){this.startDate=this.endDate=undefined}}this.value=undefined};t.prototype.handleRangeSelection=function(t){if(this.startDate&&this.endDate){this.endDate=undefined;this.startDate=t}else if(this.startDate&&!this.endDate){if(t>this.startDate){this.endDate=t}else if(t<this.startDate){this.endDate=this.startDate;this.startDate=t}}else if(!this.startDate&&this.endDate){this.startDate=t}else if(!this.startDate&&!this.endDate){this.startDate=t}};t.prototype.getCellStyle=function(t){var e="c-day-container";if(t.month!==0){e+=" disabled"}if(this.isCurrentDay(t)){e+=" highlight"}if(this.isSelectedDay(t)||t.timestamp===this.dateHovered){e+=" highlight-blue"}if(this.isInRange(t)||this.isHoverInRange(t)){e+=" highlight-range"}if(t.timestamp===this.startDate){e+=" start-day"}if(t.timestamp===this.endDate){e+=" end-day"}if(this.startDate&&this.dateHovered<this.startDate&&t.timestamp===this.dateHovered){e+=" start-day"}else if(this.endDate&&this.dateHovered<this.endDate&&t.timestamp===this.dateHovered){e+=" start-day"}else if(this.startDate&&this.dateHovered>this.startDate&&t.timestamp===this.dateHovered){e+=" end-day"}return e};t.prototype.renderCalendar=function(t){var e=this;var a=t.map((function(t,a){return i("div",{class:e.getCellStyle(t),key:a},i("div",{class:"cdc-day"},i("span",{role:"button",tabindex:t.month===-1||t.month===1?"-1":"0",onClick:function(a){return e.onDateClick(a,t)},onMouseOver:function(){return e.handleDateHover(t)},onFocus:function(){return e.handleDateHover(t)},onKeyDown:D((function(){return e.handleDateHover(t)})),onKeyUp:function(a){return e.handleKeyUp(a,t)}},t.date)))}));return i("div",{class:"c-container"},i("div",{class:"cc-head"},this.weekDays.map((function(t,e){return i("div",{key:e,class:"cch-name"},t)}))),i("div",{class:"cc-body"},a))};t.prototype.showSingleDatePicker=function(){return this.showDatePicker&&this.mode!=="range"};t.prototype.showDateRangePicker=function(){return this.showDatePicker&&this.mode==="range"};t.prototype.handleSlotChange=function(){this.hasHintTextSlot=w(this.host,"hint-text");this.hasWarningTextSlot=w(this.host,"warning-text");this.hasErrorTextSlot=w(this.host,"error-text")};t.prototype.renderNavButtons=function(){var t=this;return i("div",{class:"btns"},i("div",{class:"mdpch-button"},i("div",{role:"button",tabindex:"0",class:"mdpchb-inner",onClick:function(){return t.setMonth(-1)},onKeyDown:D((function(){return t.setMonth(-1)}))},i("span",{class:"mdpchbi-left-arrow"}))),i("div",{class:"mdpch-button-right"},i("div",{role:"button",tabindex:"0",class:"mdpchb-inner",onClick:function(){return t.setMonth(1)},onKeyDown:D((function(){return t.setMonth(1)}))},i("span",{class:"mdpchbi-right-arrow"}))))};t.prototype.renderSupportedYears=function(){var t=this;return this.supportedYears.map((function(e,a){return i("fw-select-option",{value:e,key:a,selected:+e===+t.year},e)}))};t.prototype.renderFooter=function(){return i("div",{class:"mdpc-footer"},i("fw-button",{color:"secondary",class:"close-date-picker"},this.cancelText),i("fw-button",{color:"primary",class:this.mode==="range"?"update-range-value":"update-date-value"},this.updateText))};t.prototype.render=function(){var t=this;var e=this,a=e.host,n=e.name,s=e.value;b(a,n,s);return i(x,{inputId:this.name,label:this.label,labelId:this.label+"-"+this.name,state:this.state,hintTextId:"hint-"+this.name,hintText:this.hintText,hasHintTextSlot:this.hasHintTextSlot,errorTextId:"error-"+this.name,errorText:this.errorText,hasErrorTextSlot:this.hasErrorTextSlot,warningTextId:"warning-"+this.name,warningText:this.warningText,hasWarningTextSlot:this.hasWarningTextSlot,required:this.required},i("fw-popover",{"same-width":"false",distance:"8",placement:"bottom-start",fallbackPlacements:["top-start"],"hide-on-tab":"false",onFwHide:this.handlePopoverClose},i("div",{role:"combobox","aria-controls":"datepicker","aria-expanded":this.showDatePicker,tabindex:"-1",onClick:function(){return t.showDatePicker=true},onKeyUp:function(){return t.showDatePicker=true},slot:"popover-trigger",style:{display:"inline-flex",alignItems:"center"}},i("fw-input",{value:this.value,name:this.name,class:(this.mode==="range"?"range-":"")+"date-input",placeholder:this.placeholder,required:this.required,onFwBlur:this.onBlur,ref:function(e){return t.nativeInput=e},state:this.state,readonly:this.readonly,clearInput:this.clearInput,onFwInputClear:this.handleInputClear},i("div",{class:"icon-calendar",slot:"input-suffix"},i("div",{class:"separator",style:{borderLeftColor:this.state==="error"?"#d72d30":"#ebeff3"}}),i("span",{class:"date-icon"},i("fw-icon",{name:"calendar",style:{"--fw-icon-color":this.state==="error"&&"#d72d30"}}))))),this.showSingleDatePicker()?i("div",{id:"datepicker",class:"datepicker",slot:"popover-content"},i("div",{class:"mdp-container"},i("div",{class:"mdpc-head"},i("div",{class:"mdpch-container"},i("span",{class:"mdpchc-month"},i("fw-select",{class:"first single-month-selector",readonly:true,value:this.shortMonthNames[this.month],"same-width":"false",variant:"button","options-placement":"bottom-start",options:this.longMonthNames.map((function(e,a){return{value:t.shortMonthNames[a],key:a,selected:e===t.longMonthNames[t.month],text:e}})),allowDeselect:false})),i("span",{class:"mdpchc-year"},i("fw-select",{class:"last single-year-selector",readonly:true,value:this.year,"same-width":"false","options-placement":"bottom",variant:"button","allow-deselect":"false"},this.renderSupportedYears()))),this.renderNavButtons()),i("div",{class:"mdpc-body"},this.renderCalendar(this.monthDetails))),this.showFooter&&this.renderFooter()):"",this.showDateRangePicker()?i("div",{id:"datepicker",class:"daterangepicker",slot:"popover-content"},i("div",{class:"mdp-range-container"},i("div",{class:"mdpc-head"},i("div",{class:"mdpch-container"},i("span",{class:"mdpchc-month"},i("fw-select",{class:"first from-month-selector",readonly:true,value:this.shortMonthNames[this.month],"same-width":"false",variant:"button","options-placement":"bottom-start",options:this.longMonthNames.map((function(e,a){return{value:t.shortMonthNames[a],key:a,selected:e===t.longMonthNames[t.month],text:e}})),allowDeselect:false})),i("span",{class:"mdpchc-year"},i("fw-select",{class:"last from-year-selector",readonly:true,value:this.year,"same-width":"false","options-placement":"bottom",variant:"button","allow-deselect":"false"},this.renderSupportedYears()))),i("div",{class:"mdpch-container-right"},i("span",{class:"mdpchc-month"},i("fw-select",{class:"first to-month-selector",readonly:true,"same-width":"false",variant:"button",value:this.shortMonthNames[this.toMonth],"options-placement":"bottom-start",options:this.longMonthNames.map((function(e,a){return{value:t.shortMonthNames[a],key:a,selected:e===t.longMonthNames[t.toMonth],text:e}})),allowDeselect:false})),i("span",{class:"mdpchc-year"},i("fw-select",{class:"last to-year-selector",readonly:true,value:this.toYear,"same-width":"false","options-placement":"bottom",variant:"button","allow-deselect":"false"},this.renderSupportedYears()))),this.renderNavButtons()),i("div",{class:"body-container"},i("div",{class:"mdpc-body"},this.renderCalendar(this.monthDetails)),i("div",{class:"mdpc-body mdpc-body-right"},this.renderCalendar(this.nextMonthDetails)))),this.showFooter&&this.renderFooter()):""))};Object.defineProperty(t.prototype,"host",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{locale:["handleLocaleChange"],value:["watchValueChanged"]}},enumerable:false,configurable:true});return t}());S([M({keyName:"datepicker.update"})],N.prototype,"updateText",void 0);S([M({keyName:"datepicker.cancel"})],N.prototype,"cancelText",void 0);N.style=F}}}));