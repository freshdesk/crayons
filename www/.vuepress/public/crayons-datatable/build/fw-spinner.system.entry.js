System.register(["./index-a0541978.system.js"],(function(e){"use strict";var t,n,r;return{setters:[function(e){t=e.r;n=e.h;r=e.e}],execute:function(){var s=':host{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (prefers-reduced-motion: reduce){.spinner{-webkit-animation:none;animation:none}}@media screen and (prefers-reduced-motion: reduce) and (prefers-reduced-motion: reduce){.spinner .path{-webkit-animation:none;animation:none}}.spinner{-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;z-index:2}@media screen and (prefers-reduced-motion: reduce){.spinner .path{stroke:var(--spinner-color, #2c5cc5);stroke-linecap:round;-webkit-animation:none;animation:none}}.spinner .path{stroke:var(--spinner-color, #2c5cc5);stroke-linecap:round;-webkit-animation:dash 1s ease-in-out infinite;animation:dash 1s ease-in-out infinite}@-webkit-keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124}}';var i=e("fw_spinner",function(){function e(e){t(this,e);this.size="default";this.color="";this.sizeMap={small:12,default:16,medium:24,large:32}}e.prototype.getSize=function(){return this.sizeMap[this.size]||16};e.prototype.render=function(){var e=this.getSize();return n(r,null,n("svg",{class:"spinner "+this.size,style:{width:e+"px",height:e+"px","--spinner-color":""+this.color},viewBox:"0 0 50 50"},n("circle",{class:"path",cx:"25",cy:"25",r:"18",fill:"none","stroke-width":"8"})))};return e}());i.style=s}}}));