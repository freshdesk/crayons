System.register(["./index-c04bc24f.system.js"],(function(a){"use strict";var t,i;return{setters:[function(a){t=a.r;i=a.i}],execute:function(){var e=':host{font-family:var(--fw-font-family, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;--size:3rem}.avatar{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:calc(var(--size) * 0.5);font-weight:400;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle}.avatar__initials{line-height:1;font-weight:600;font-size:32px;text-align:center;text-transform:uppercase}.avatar__image{position:absolute;inset-block-start:0;inset-inline-start:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.avatar--dark{background-color:#527fa5;color:#fff}.avatar--dark--initials{border:2px solid rgba(18, 52, 77, 0.16)}.avatar--light{background-color:#dff0ff;color:#12344d}.avatar--light--initials{border:2px solid #bedbf5}.avatar--circle{border-radius:50%}.avatar--rounded{border-radius:4px}.avatar--square{border-radius:0}.avatar--xxlarge{width:96px;height:96px}.avatar--xxlarge .avatar__initials{font-size:32px}.avatar--xlarge{width:72px;height:72px}.avatar--xlarge .avatar__initials{font-size:24px}.avatar--large{width:56px;height:56px}.avatar--large .avatar__initials{font-size:20px}.avatar--medium{width:40px;height:40px}.avatar--medium .avatar__initials{font-size:16px}.avatar--small{width:32px;height:32px}.avatar--small .avatar__initials{font-size:14px}.avatar--xsmall{width:24px;height:24px}.avatar--xsmall .avatar__initials{font-size:12px}.avatar--xxsmall{width:20px;height:20px}.avatar--xxsmall .avatar__initials{font-size:10px}';var r=a("fw_avatar",function(){function a(a){t(this,a);this.shape="circle";this.name="";this.size="large";this.mode="dark"}a.prototype.getInitials=function(){var a="";if(this.initials){a=this.initials}else if(this.name.trim().length>0){var t=this.name.trim().split(" ");if(t.length===1){a=t.shift().charAt(0)}else if(t.length>1){a=t.shift().charAt(0)+t.pop().charAt(0)}}return a};a.prototype.render=function(){var a="avatar \n    avatar--"+this.shape+"\n    avatar--"+this.size+"\n    avatar--"+this.mode+"\n    ";if(!this.image){a+=" avatar--"+this.mode+"--initials"}return i("div",{class:a,"aria-label":this.alt},this.image?i("img",{part:"image",class:"avatar__image",src:this.image,alt:this.alt}):i("div",{part:"initials",class:"avatar__initials"},this.getInitials()))};return a}());r.style=e}}}));