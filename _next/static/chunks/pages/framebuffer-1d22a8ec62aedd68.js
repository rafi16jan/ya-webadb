(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[390],{1525:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/framebuffer",function(){return n(8239)}])},8239:function(e,t,n){"use strict";n.r(t);var o=n(3363),i=n.n(o),r=n(5202),a=n(4546),c=n(6165),s=n(6885),u=n(2782),l=n(6393),f=n(9346),h=n(6929),d=n(3685);function m(e,t,n,o,i,r,a){try{var c=e[r](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(o,i)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.width=0,this.height=0,this.imageData=void 0,this.demoModeVisible=!1,(0,c.ky)(this,{toggleDemoModeVisible:c.aD.bound})}var t,n,o;return t=e,(n=[{key:"setImage",value:function(e){this.width=e.width,this.height=e.height,this.imageData=new ImageData(e.data,e.width,e.height)}},{key:"toggleDemoModeVisible",value:function(){this.demoModeVisible=!this.demoModeVisible}}])&&b(t.prototype,n),o&&b(t,o),e}());t.default=(0,s.Pi)((function(){var e,t=(0,l.useRef)(null),n=(0,l.useCallback)((e=i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h.CO.device){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,window.performance.now(),e.next=6,h.CO.device.framebuffer();case 6:t=e.sent,window.performance.now(),p.setImage(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),h.CO.showErrorDialog((n=e.t0,(null!=(o=Error)&&"undefined"!==typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](n):n instanceof o)?e.t0.message:"".concat(e.t0)));case 14:case"end":return e.stop()}var n,o}),e,null,[[2,11]])})),function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function a(e){m(r,o,i,a,c,"next",e)}function c(e){m(r,o,i,a,c,"throw",e)}a(void 0)}))}),[]);(0,l.useEffect)((function(){return(0,c.EH)((function(){var e=t.current;e&&p.imageData&&(e.width=p.width,e.height=p.height,e.getContext("2d").putImageData(p.imageData,0,0))}))}),[]);var o=(0,c.Fl)((function(){return[{key:"start",disabled:!h.CO.device,iconProps:{iconName:"Camera"},text:"Capture",onClick:n},{key:"Save",disabled:!p.imageData,iconProps:{iconName:"Save"},text:"Save",onClick:function(){var e=t.current;if(e){var n=e.toDataURL(),o=document.createElement("a");o.href=n,o.download="Screenshot of ".concat(h.CO.device.name,".png"),o.click()}}}]})),s=(0,c.Fl)((function(){return[{key:"DemoMode",iconProps:{iconName:"Personalize"},checked:p.demoModeVisible,text:"Demo Mode Settings",onClick:p.toggleDemoModeVisible},{key:"info",iconProps:{iconName:"Info"},iconOnly:!0,tooltipHostProps:{content:"Use ADB FrameBuffer command to capture a full-size, high-resolution screenshot.",calloutProps:{calloutMaxWidth:250}}}]}));return(0,r.jsxs)(a.K,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){g(e,t,n[t])}))}return e}({},d.LE,{children:[(0,r.jsx)(u.default,{children:(0,r.jsx)("title",{children:"Screen Capture - WebADB"})}),(0,r.jsx)(f.X3,{items:o.get(),farItems:s.get()}),(0,r.jsxs)(a.K,{horizontal:!0,grow:!0,styles:{root:{height:0}},children:[(0,r.jsx)(f.wM,{width:p.width,height:p.height,children:(0,r.jsx)("canvas",{ref:t,style:{display:"block"}})}),(0,r.jsx)(f.Uv,{style:{display:p.demoModeVisible?"block":"none"}})]})]}))}))},2782:function(e,t,n){e.exports=n(6906)}},function(e){e.O(0,[888,179],(function(){return t=1525,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=framebuffer-1d22a8ec62aedd68.js.map