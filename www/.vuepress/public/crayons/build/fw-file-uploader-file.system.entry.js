System.register(["./index-c04bc24f.system.js","./Translation-ab48b861.system.js"],(function(e){"use strict";var i,t,n,o;return{setters:[function(e){i=e.r;t=e.h;n=e.i},function(e){o=e.T}],execute:function(){var s=':host{font-family:var(--fw-font-family, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}.files-content{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:300px;margin-top:7px}.files-content-icon{width:14px;height:14px;margin:3px 0px}.files-content-file{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-box-sizing:border-box;box-sizing:border-box}.files-content-file-name{font-weight:600;font-size:14px;line-height:20px;color:#12344d}.files-content-file-remove{text-decoration:none;font-weight:600;color:#2c5cc5;margin-top:5px;font-size:12px;line-height:20px;background:transparent;border:none;display:inline-block;padding:0px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.files-content-file-remove:hover,.files-content-file-remove:focus{cursor:pointer}';var l=e("fw_file_uploader_file",function(){function e(e){i(this,e);this.fwRemoveFile=t(this,"fwRemoveFile",7);this.fileId=null;this.name=""}e.prototype.remove=function(){this.fwRemoveFile.emit({fileId:this.fileId})};e.prototype.render=function(){var e=this;return n("div",{class:"files-content"},n("div",{class:"files-content-icon"},n("fw-icon",{name:"checkbox",size:14,color:"#00a886"})),n("div",{class:"files-content-file"},n("span",{class:"files-content-file-name"},this.name),n("button",{class:"files-content-file-remove",onClick:function(){return e.remove()}},o.t("fileUploader.remove"))))};return e}());l.style=s}}}));