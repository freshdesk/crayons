var __awaiter=this&&this.__awaiter||function(e,n,t,s){function r(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,a){function o(e){try{d(s.next(e))}catch(n){a(n)}}function i(e){try{d(s["throw"](e))}catch(n){a(n)}}function d(e){e.done?t(e.value):r(e.value).then(o,i)}d((s=s.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},s,r,a,o;return o={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function i(e){return function(n){return d([e,n])}}function d(o){if(s)throw new TypeError("Generator is already executing.");while(t)try{if(s=1,r&&(a=o[0]&2?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;if(r=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:t.label++;return{value:o[1],done:false};case 5:t.label++;r=o[1];o=[0];continue;case 7:o=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){t.label=o[1];break}if(o[0]===6&&t.label<a[1]){t.label=a[1];a=o;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(o);break}if(a[2])t.ops.pop();t.trys.pop();continue}o=n.call(e,t)}catch(i){o=[6,i];r=0}finally{s=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./index-c04bc24f.system.js"],(function(e,n){"use strict";var t,s,r;return{setters:[function(e){t=e.g;s=e.f;r=e.e}],execute:function(){var a=function(e,n,t){var s=e.get(n);if(!s){e.set(n,[t])}else if(!s.includes(t)){s.push(t)}};var o=function(e,n){var t;return function(){var s=[];for(var r=0;r<arguments.length;r++){s[r]=arguments[r]}if(t){clearTimeout(t)}t=setTimeout((function(){t=0;e.apply(void 0,s)}),n)}};var i=function(e){return!("isConnected"in e)||e.isConnected};var d=o((function(e){for(var n=0,t=e.keys();n<t.length;n++){var s=t[n];e.set(s,e.get(s).filter(i))}}),2e3);var u=function(){if(typeof t!=="function"){return{}}var e=new Map;return{dispose:function(){return e.clear()},get:function(n){var s=t();if(s){a(e,n,s)}},set:function(n){var t=e.get(n);if(t){e.set(n,t.filter(s))}d(e)},reset:function(){e.forEach((function(e){return e.forEach(s)}));d(e)}}};var c=function(e,n){if(n===void 0){n=function(e,n){return e!==n}}var t=new Map(Object.entries(e!==null&&e!==void 0?e:{}));var s={dispose:[],get:[],set:[],reset:[]};var r=function(){t=new Map(Object.entries(e!==null&&e!==void 0?e:{}));s.reset.forEach((function(e){return e()}))};var a=function(){s.dispose.forEach((function(e){return e()}));r()};var o=function(e){s.get.forEach((function(n){return n(e)}));return t.get(e)};var i=function(e,r){var a=t.get(e);if(n(r,a,e)){t.set(e,r);s.set.forEach((function(n){return n(e,r,a)}))}};var d=typeof Proxy==="undefined"?{}:new Proxy(e,{get:function(e,n){return o(n)},ownKeys:function(e){return Array.from(t.keys())},getOwnPropertyDescriptor:function(){return{enumerable:true,configurable:true}},has:function(e,n){return t.has(n)},set:function(e,n,t){i(n,t);return true}});var u=function(e,n){s[e].push(n);return function(){l(s[e],n)}};var c=function(n,t){var s=u("set",(function(e,s){if(e===n){t(s)}}));var r=u("reset",(function(){return t(e[n])}));return function(){s();r()}};var f=function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}var t=e.reduce((function(e,n){if(n.set){e.push(u("set",n.set))}if(n.get){e.push(u("get",n.get))}if(n.reset){e.push(u("reset",n.reset))}if(n.dispose){e.push(u("dispose",n.dispose))}return e}),[]);return function(){return t.forEach((function(e){return e()}))}};var m=function(e){var n=t.get(e);s.set.forEach((function(t){return t(e,n,n)}))};return{state:d,get:o,set:i,on:u,onChange:c,use:f,dispose:a,reset:r,forceUpdate:m}};var l=function(e,n){var t=e.indexOf(n);if(t>=0){e[t]=e[e.length-1];e.length--}};var f=function(e,n){var t=c(e,n);t.use(u());return t};var m=["af","ar","ar-DZ","ar-EG","ar-MA","ar-SA","ar-TN","az","be","bg","bn","bs","ca","cs","cy","da","de","de-AT","el","en-AU","en-CA","en-GB","en-IE","en-IN","en-NZ","en-US","en-ZA","eo","es","et","eu","fa-IR","fi","fr","fr-CA","fr-CH","fy","gd","gl","gu","he","hi","hr","ht","hu","hy","id","is","it","ja","ja-Hira","ka","kk","km","kn","ko","lb","lt","lv","mk","mn","ms","mt","nb","nl","nl-BE","nn","pl","pt","pt-BR","ro","ru","sk","sl","sq","sr","sr-Latn","sv","ta","te","th","tr","ug","uk","uz","uz-Cyrl","vi","zh-CN","zh-HK","zh-TW"];var j={ar:"ar-AR",bg:"bg-BG",bs:"bs-BA",ca:"ca-ES",cs:"cs-CZ",da:"da-DK",de:"de-DE",el:"el-GR",en:"en-US",es:"es-ES",et:"et-EE",fi:"fi-FI",fil:"fil-PH",fr:"fr-FR",he:"he-IL",hr:"hr-HR",hu:"hu-HU",id:"id-ID",is:"is-IS",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lt:"lt-LT",lv:"lv-LV",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",sr:"sr-SP",sc:"sv-SE",th:"th-TH",tr:"tr-TR",uk:"uk-UA",vi:"vi-VN",zh:"zh-CN"};function x(e){switch(e){case"../../../node_modules/date-fns/esm/locale/af/index.js":return n.import("./index-c1f35b55-a96bc737.system.js");case"../../../node_modules/date-fns/esm/locale/ar/index.js":return n.import("./index-55b4dccc-ed7d5132.system.js");case"../../../node_modules/date-fns/esm/locale/ar-DZ/index.js":return n.import("./index-2b546b5c-8d020723.system.js");case"../../../node_modules/date-fns/esm/locale/ar-EG/index.js":return n.import("./index-b8f63777-0ffb9b9a.system.js");case"../../../node_modules/date-fns/esm/locale/ar-MA/index.js":return n.import("./index-d1eda047-0d2526a4.system.js");case"../../../node_modules/date-fns/esm/locale/ar-SA/index.js":return n.import("./index-730163d8-1b3b3bcc.system.js");case"../../../node_modules/date-fns/esm/locale/ar-TN/index.js":return n.import("./index-2810c9f4-1b4f5537.system.js");case"../../../node_modules/date-fns/esm/locale/az/index.js":return n.import("./index-8e5c84a4-580a76c5.system.js");case"../../../node_modules/date-fns/esm/locale/be/index.js":return n.import("./index-837330e9-1d80df34.system.js");case"../../../node_modules/date-fns/esm/locale/bg/index.js":return n.import("./index-983c1802-2cf53b91.system.js");case"../../../node_modules/date-fns/esm/locale/bn/index.js":return n.import("./index-33de7831-10efff82.system.js");case"../../../node_modules/date-fns/esm/locale/bs/index.js":return n.import("./index-8ac3e95f-7b143a24.system.js");case"../../../node_modules/date-fns/esm/locale/ca/index.js":return n.import("./index-684e1555-1a2a600f.system.js");case"../../../node_modules/date-fns/esm/locale/cs/index.js":return n.import("./index-41702bdf-afa64b38.system.js");case"../../../node_modules/date-fns/esm/locale/cy/index.js":return n.import("./index-82298bef-e0467841.system.js");case"../../../node_modules/date-fns/esm/locale/da/index.js":return n.import("./index-ec58303b-4f7aeec5.system.js");case"../../../node_modules/date-fns/esm/locale/de/index.js":return n.import("./index-331d1c4c-93c63d70.system.js");case"../../../node_modules/date-fns/esm/locale/de-AT/index.js":return n.import("./index-768e86c6-e6685848.system.js");case"../../../node_modules/date-fns/esm/locale/el/index.js":return n.import("./index-26117e04-bf0a33f2.system.js");case"../../../node_modules/date-fns/esm/locale/en-AU/index.js":return n.import("./index-95cffb6f-9e0e3a28.system.js");case"../../../node_modules/date-fns/esm/locale/en-CA/index.js":return n.import("./index-48b60b02-c68300ef.system.js");case"../../../node_modules/date-fns/esm/locale/en-GB/index.js":return n.import("./index-4416cefa-44bf3402.system.js");case"../../../node_modules/date-fns/esm/locale/en-IE/index.js":return n.import("./index-e78efbb7-827b0c49.system.js");case"../../../node_modules/date-fns/esm/locale/en-IN/index.js":return n.import("./index-05337dad-b7b1df85.system.js");case"../../../node_modules/date-fns/esm/locale/en-NZ/index.js":return n.import("./index-b05280c7-228edf18.system.js");case"../../../node_modules/date-fns/esm/locale/en-US/index.js":return n.import("./index-0a3e36e3-4e1958aa.system.js");case"../../../node_modules/date-fns/esm/locale/en-ZA/index.js":return n.import("./index-be4c1942-a8107863.system.js");case"../../../node_modules/date-fns/esm/locale/eo/index.js":return n.import("./index-c7c62dd3-1f79df4d.system.js");case"../../../node_modules/date-fns/esm/locale/es/index.js":return n.import("./index-aa9aadba-f401e438.system.js");case"../../../node_modules/date-fns/esm/locale/et/index.js":return n.import("./index-e6eb9903-6eaff358.system.js");case"../../../node_modules/date-fns/esm/locale/eu/index.js":return n.import("./index-ea6d2b12-d27d3338.system.js");case"../../../node_modules/date-fns/esm/locale/fa-IR/index.js":return n.import("./index-ec985de9-9042df2a.system.js");case"../../../node_modules/date-fns/esm/locale/fi/index.js":return n.import("./index-34d75a8c-cdc98035.system.js");case"../../../node_modules/date-fns/esm/locale/fr/index.js":return n.import("./index-b7e908df-0929dd43.system.js");case"../../../node_modules/date-fns/esm/locale/fr-CA/index.js":return n.import("./index-52c4641b-b4f0a116.system.js");case"../../../node_modules/date-fns/esm/locale/fr-CH/index.js":return n.import("./index-d70b8f49-f6b39a3e.system.js");case"../../../node_modules/date-fns/esm/locale/fy/index.js":return n.import("./index-b9061eb7-71406186.system.js");case"../../../node_modules/date-fns/esm/locale/gd/index.js":return n.import("./index-e472e5cb-c9efba4b.system.js");case"../../../node_modules/date-fns/esm/locale/gl/index.js":return n.import("./index-554ccad4-d510079e.system.js");case"../../../node_modules/date-fns/esm/locale/gu/index.js":return n.import("./index-717b67e6-0bff1353.system.js");case"../../../node_modules/date-fns/esm/locale/he/index.js":return n.import("./index-852fb809-79ae6d11.system.js");case"../../../node_modules/date-fns/esm/locale/hi/index.js":return n.import("./index-bf058ee4-bf817a0a.system.js");case"../../../node_modules/date-fns/esm/locale/hr/index.js":return n.import("./index-51b559f3-7e0df472.system.js");case"../../../node_modules/date-fns/esm/locale/ht/index.js":return n.import("./index-e9979144-16697619.system.js");case"../../../node_modules/date-fns/esm/locale/hu/index.js":return n.import("./index-d487bab9-187ad021.system.js");case"../../../node_modules/date-fns/esm/locale/hy/index.js":return n.import("./index-8a4815d7-c16a6f34.system.js");case"../../../node_modules/date-fns/esm/locale/id/index.js":return n.import("./index-6b66290c-00486cb5.system.js");case"../../../node_modules/date-fns/esm/locale/is/index.js":return n.import("./index-28e752fb-456d6357.system.js");case"../../../node_modules/date-fns/esm/locale/it/index.js":return n.import("./index-ada3684d-62120f9c.system.js");case"../../../node_modules/date-fns/esm/locale/ja/index.js":return n.import("./index-33a3a969-fa4c39ec.system.js");case"../../../node_modules/date-fns/esm/locale/ja-Hira/index.js":return n.import("./index-7b81f999-8c540f87.system.js");case"../../../node_modules/date-fns/esm/locale/ka/index.js":return n.import("./index-b46441aa-972d25db.system.js");case"../../../node_modules/date-fns/esm/locale/kk/index.js":return n.import("./index-6b6ba7ab-2ffe87b4.system.js");case"../../../node_modules/date-fns/esm/locale/km/index.js":return n.import("./index-d6302b4f-409cf788.system.js");case"../../../node_modules/date-fns/esm/locale/kn/index.js":return n.import("./index-b962a12d-475e31fe.system.js");case"../../../node_modules/date-fns/esm/locale/ko/index.js":return n.import("./index-58dc4b63-96f2ca2b.system.js");case"../../../node_modules/date-fns/esm/locale/lb/index.js":return n.import("./index-a2248962-596cd3e0.system.js");case"../../../node_modules/date-fns/esm/locale/lt/index.js":return n.import("./index-42b1d084-2f248f44.system.js");case"../../../node_modules/date-fns/esm/locale/lv/index.js":return n.import("./index-95cc22c6-2c4551f1.system.js");case"../../../node_modules/date-fns/esm/locale/mk/index.js":return n.import("./index-a2b2dfee-c26f4549.system.js");case"../../../node_modules/date-fns/esm/locale/mn/index.js":return n.import("./index-c0d846a9-9f1f0af8.system.js");case"../../../node_modules/date-fns/esm/locale/ms/index.js":return n.import("./index-a1168380-375b11b3.system.js");case"../../../node_modules/date-fns/esm/locale/mt/index.js":return n.import("./index-84921e63-bfef7ec1.system.js");case"../../../node_modules/date-fns/esm/locale/nb/index.js":return n.import("./index-d0b6c3fb-05bdd455.system.js");case"../../../node_modules/date-fns/esm/locale/nl/index.js":return n.import("./index-5bb6c3b1-60ad5f60.system.js");case"../../../node_modules/date-fns/esm/locale/nl-BE/index.js":return n.import("./index-f57a6136-f1c7c051.system.js");case"../../../node_modules/date-fns/esm/locale/nn/index.js":return n.import("./index-9f4cc23d-1bcd7b23.system.js");case"../../../node_modules/date-fns/esm/locale/pl/index.js":return n.import("./index-abdc2455-a08cb643.system.js");case"../../../node_modules/date-fns/esm/locale/pt/index.js":return n.import("./index-29f5075b-86d343b7.system.js");case"../../../node_modules/date-fns/esm/locale/pt-BR/index.js":return n.import("./index-903bcef3-f7362232.system.js");case"../../../node_modules/date-fns/esm/locale/ro/index.js":return n.import("./index-d1f23fd1-1429a36c.system.js");case"../../../node_modules/date-fns/esm/locale/ru/index.js":return n.import("./index-98d2f6f7-bc113dda.system.js");case"../../../node_modules/date-fns/esm/locale/sk/index.js":return n.import("./index-128fc42c-97fd3ffb.system.js");case"../../../node_modules/date-fns/esm/locale/sl/index.js":return n.import("./index-006f5f4f-32273fc1.system.js");case"../../../node_modules/date-fns/esm/locale/sq/index.js":return n.import("./index-193e6e0b-4fbd4209.system.js");case"../../../node_modules/date-fns/esm/locale/sr/index.js":return n.import("./index-e6931836-e5d07d40.system.js");case"../../../node_modules/date-fns/esm/locale/sr-Latn/index.js":return n.import("./index-2bd8df02-b66d260f.system.js");case"../../../node_modules/date-fns/esm/locale/sv/index.js":return n.import("./index-de819536-f3bdbac7.system.js");case"../../../node_modules/date-fns/esm/locale/ta/index.js":return n.import("./index-c678bacb-995cd287.system.js");case"../../../node_modules/date-fns/esm/locale/te/index.js":return n.import("./index-4d7fe58b-dd8c216c.system.js");case"../../../node_modules/date-fns/esm/locale/th/index.js":return n.import("./index-50b0b946-a4a22f35.system.js");case"../../../node_modules/date-fns/esm/locale/tr/index.js":return n.import("./index-ee196718-8aec4681.system.js");case"../../../node_modules/date-fns/esm/locale/ug/index.js":return n.import("./index-83cf4990-2b852ec5.system.js");case"../../../node_modules/date-fns/esm/locale/uk/index.js":return n.import("./index-025d82f0-a99206d7.system.js");case"../../../node_modules/date-fns/esm/locale/uz/index.js":return n.import("./index-6d382fb4-5fb95616.system.js");case"../../../node_modules/date-fns/esm/locale/uz-Cyrl/index.js":return n.import("./index-6cc1dcbc-efbebde5.system.js");case"../../../node_modules/date-fns/esm/locale/vi/index.js":return n.import("./index-87d9e489-a4a2fb48.system.js");case"../../../node_modules/date-fns/esm/locale/zh-CN/index.js":return n.import("./index-e98c8c7d-04b5b8c6.system.js");case"../../../node_modules/date-fns/esm/locale/zh-HK/index.js":return n.import("./index-6b112f79-5029436b.system.js");case"../../../node_modules/date-fns/esm/locale/zh-TW/index.js":return n.import("./index-63b92600-6482acf6.system.js");default:return new Promise((function(n,t){(typeof queueMicrotask==="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}function b(e){switch(e){case"../i18n/en-US.json":return n.import("./en-US-5f487237-7498da5e.system.js");default:return new Promise((function(n,t){(typeof queueMicrotask==="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}function p(e){if(e===void 0){e=document.body}var n=e.closest("[lang]");if(!n)return undefined;var t=n.lang;if(!t)return undefined;if(t.indexOf("-")!==-1){t=t.split("-")[0]}if(t.indexOf("_")!==-1){t=t.split("_")[0]}return t}function h(){if(typeof window==="undefined"||typeof window.navigator==="undefined"){return undefined}var e=window.navigator.languages&&window.navigator.languages.length>0?window.navigator.languages[0]:null;e=e||window.navigator.language;if(typeof e==="undefined"){return"en"}if(e.indexOf("-")!==-1){e=e.split("-")[0]}if(e.indexOf("_")!==-1){e=e.split("_")[0]}return e}function y(){var e=p()||h();return e||"en"}function _(e,n){if(n===void 0){n={}}if(!e)return"";return e===null||e===void 0?void 0:e.split(".").reduce((function(e,n){return e?e[n]:undefined}),n)}function v(e,n){return Object.entries(n).reduce((function(e,n){var t=n[0],s=n[1];return e.replace(new RegExp("{{[  ]*"+t+"[  ]*}}","gm"),String(g(s)))}),e)}function g(e){return typeof e==="function"?e():e}function w(e){var n=e.key,t=e.values,s=e.obj,r=e.lang,a=e.context;var o;var i=(o=_(n,s))!==null&&o!==void 0?o:n;return t?v(i,t):i}var k=function(){function e(){var e=this;this.requests=new Map;var n=f({lang:"",globalStrings:null,customTranslations:{}}),t=n.state,s=n.onChange;this.state=t;this.onChange=s;this.langCodeMapping=j;this.onChange("lang",(function(n){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:this.fetchTranslations(n);return[4,this.fetchDateLangModule(n)];case 1:e.sent();return[2]}}))}))}));this.onChange("customTranslations",(function(n){return __awaiter(e,void 0,void 0,(function(){var e,t,s,r;return __generator(this,(function(a){switch(a.label){case 0:t=this.state.lang||y();if(!!this.state.globalStrings)return[3,2];return[4,this.fetchTranslations(t)];case 1:a.sent();a.label=2;case 2:s=((e=n)===null||e===void 0?void 0:e[t])||{};r=Object.assign(Object.assign({},this.state.globalStrings),s);this.state.globalStrings=r;return[2]}}))}))}));if("MutationObserver"in window){var r=new MutationObserver((function(n){return __awaiter(e,void 0,void 0,(function(){var e;return __generator(this,(function(t){if(n[0].attributeName==="lang"){e=document.documentElement.getAttribute("lang");if(e!==n[0].oldValue){this.state.lang=e}}return[2]}))}))}));r.observe(document.documentElement,{attributes:true,attributeFilter:["lang"],attributeOldValue:true})}this.initialize()}e.prototype.initialize=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,Promise.all([this.fetchTranslations(),this.fetchDateLangModule()]).catch((function(e){return console.error("Error occurred in intialising i18n lib "+e.message)}))];case 1:e.sent();return[2]}}))}))};e.prototype.setLang=function(e){this.state.lang=e};e.prototype.getLang=function(){return this.state.lang};e.prototype.getDateLangModule=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4,this.fetchDateLangModule(e||this.state.lang)];case 1:return[2,n.sent()]}}))}))};e.prototype.fetchTranslations=function(e){return __awaiter(this,void 0,void 0,(function(){var n,t;var s=this;return __generator(this,(function(r){n=e||y();t=n.includes("-")?n:j[""+n]||"en-US";this.state.lang=n;return[2,this.fetchDefaultTranslations(t).then((function(e){var t;var r=((t=s.state.customTranslations)===null||t===void 0?void 0:t[n])||{};var a=Object.assign(Object.assign({},e),r);s.state.globalStrings=a;return a}))]}))}))};e.prototype.fetchDefaultTranslations=function(e){var n=this;var t=this.requests.get(e);if(!t){t=b("../i18n/"+e+".json").then((function(e){return e.default})).then((function(e){return e})).catch((function(){return __awaiter(n,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:console.warn("Error loading config for lang: "+e+" from pre-defined set. defaulting to en-US translation");return[4,this.fetchDefaultTranslations("en-US")];case 1:return[2,n.sent()]}}))}))}));this.requests.set(e,t)}return t};e.prototype.fetchDateLangModule=function(e){return __awaiter(this,void 0,void 0,(function(){var n,t,s,r;var a=this;return __generator(this,(function(o){n=e||y();t=this.requests.get("date_"+n);if(!t){s=n;r=m.indexOf(s);if(r>=0){s=m[r]}else{s=s.includes("-")?s.split("-")[0]:s}if(s==="en")s="en-US";t=x("../../../node_modules/date-fns/esm/locale/"+s+"/index.js").then((function(e){return e.default})).then((function(e){return e})).catch((function(e){return __awaiter(a,void 0,void 0,(function(){var n;return __generator(this,(function(t){switch(t.label){case 0:console.warn("Error loading date lang module for : "+s+" from date-fns set",e);return[4,this.fetchDateLangModule("en-US").catch((function(e){console.error(" Error in fetching default date lang module ",e.message);return{}}))];case 1:n=t.sent();return[2,n]}}))}))}));this.requests.set("date_"+n,t)}return[2,t]}))}))};e.prototype.setTranslations=function(e){this.state.customTranslations=e};e.prototype.t=function(e,n,t){if(e===void 0){e=""}var s;return(s=w({key:e,values:n,obj:this.state.globalStrings,lang:this.state.lang,context:t}))!==null&&s!==void 0?s:e};e.prototype.i18n=function(e){var n=this;var t=e===void 0?{}:e,s=t.keyName,a=s===void 0?"":s;return function(e,t){r.cmpWillLoad=true;var s=n;var o=e.componentWillLoad;e.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e;var n=this;return __generator(this,(function(r){switch(r.label){case 0:if(!!s.state.globalStrings)return[3,2];return[4,s.fetchTranslations(s.state.lang||y())];case 1:r.sent();r.label=2;case 2:e=true;if(!this[t]){this[t]=w({key:a,values:null,obj:s.state.globalStrings,lang:s.state.lang,context:null});e=false}s.onChange("globalStrings",(function(){return __awaiter(n,void 0,void 0,(function(){return __generator(this,(function(n){if(!e){this[t]=w({key:a,values:null,obj:s.state.globalStrings,lang:s.state.lang,context:null})}return[2]}))}))}));return[2,o&&o.call(this)]}}))}))}}};return e}();var S=e("T",new k);var E=e("i",S.i18n.bind(S))}}}));