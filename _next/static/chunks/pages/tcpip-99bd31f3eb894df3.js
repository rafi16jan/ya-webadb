(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{185:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tcpip",function(){return s(4693)}])},4693:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return L}});var n=s(4471),r=s(2093),a=s(4992),t=s(2150),o=s(6174),l=s(4665),c=s(2013),d=s(9321),p=(0,o.L)(function(e){if(null==e.children)return null;e.block,e.className;var i=e.as,s=(e.variant,e.nowrap,(0,l._T)(e,["block","className","as","variant","nowrap"])),n=(0,c.FJ)(e,{root:void 0===i?"span":i});return(0,c.Yb)(n.root,(0,l.pi)({},(0,d.pq)(s,d.iY)))},{displayName:"Text",styles:function(e,i){var s=e.as,n=e.className,r=e.block,a=e.nowrap,t=e.variant,o=i.fonts,l=i.semanticColors,c=o[t||"medium"];return{root:[c,{color:c.color||l.bodyText,display:r?"td"===s?"table-cell":"block":"inline",mozOsxFontSmoothing:c.MozOsxFontSmoothing,webkitFontSmoothing:c.WebkitFontSmoothing},a&&{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},n]}}}),f=s(7742),m=s(3126),g=s(6323),v=s(6779),u=s(9614),h=s.n(u),b=s(3370),x=s(5629),w=s(1001),k=s(97);let B=new class{get commandBarItems(){return[{key:"refresh",disabled:!w.d.device,iconProps:{iconName:k.PJ.ArrowClockwise},text:"Refresh",onClick:this.queryInfo},{key:"apply",disabled:!w.d.device,iconProps:{iconName:k.PJ.Save},text:"Apply",onClick:this.applyServicePort}]}constructor(){this.initial=!0,this.visible=!1,this.serviceListenAddresses=void 0,this.servicePortEnabled=!1,this.servicePort="",this.persistPortEnabled=!1,this.persistPort=void 0,this.queryInfo=(0,k.FW)(async e=>{if(!w.d.device){(0,g.z)(()=>{this.serviceListenAddresses=void 0,this.servicePortEnabled=!1,this.servicePort="",this.persistPortEnabled=!1,this.persistPort=void 0});return}let i=await w.d.device.getProp("service.adb.listen_addrs"),s=await w.d.device.getProp("service.adb.tcp.port"),n=await w.d.device.getProp("persist.adb.tcp.port");e.aborted||(0,g.z)(()=>{this.serviceListenAddresses=""!==i?i.split(","):void 0,s?(this.servicePortEnabled=!i&&"0"!==s,this.servicePort=s):(this.servicePortEnabled=!1,this.servicePort="5555"),n?(this.persistPortEnabled=!i&&!s,this.persistPort=n):(this.persistPortEnabled=!1,this.persistPort=void 0)})}),this.applyServicePort=async()=>{w.d.device&&(B.servicePortEnabled?await w.d.device.tcpip.setPort(Number.parseInt(B.servicePort,10)):await w.d.device.tcpip.disable())},(0,g.ky)(this,{initial:!1,queryInfo:!1,applyServicePort:!1}),(0,g.EH)(()=>{w.d.device?this.initial&&this.visible&&(this.initial=!1,this.queryInfo()):this.initial=!0})}},P=()=>{var e;(0,b.useEffect)(()=>((0,g.z)(()=>{B.visible=!0}),()=>{(0,g.z)(()=>{B.visible=!1})}));let i=(0,b.useCallback)((e,i)=>{(0,g.z)(()=>{B.servicePortEnabled=!!i})},[]),s=(0,b.useCallback)((e,i)=>{void 0!==i&&(0,g.z)(()=>B.servicePort=i)},[]);return(0,n.jsxs)(r.K,{...k.LE,children:[(0,n.jsx)(h(),{children:(0,n.jsx)("title",{children:"ADB over WiFi - Android Web Toolbox"})}),(0,n.jsx)(x.X3,{items:B.commandBarItems}),(0,n.jsx)(a.v,{children:(0,n.jsx)(t.c,{children:(0,n.jsxs)(p,{children:["For WebADB to wirelessly connect to your device,",(0,n.jsx)(x.dL,{href:"https://github.com/yume-chan/ya-webadb/discussions/245#discussioncomment-384030",spaceBefore:!0,spaceAfter:!0,children:"extra software"}),"is required."]})})}),(0,n.jsx)(a.v,{children:(0,n.jsx)(t.c,{children:(0,n.jsx)(p,{children:"Your device will disconnect after changing ADB over WiFi config."})})}),(0,n.jsxs)(a.v,{children:[(0,n.jsx)(f.Z,{inlineLabel:!0,label:"service.adb.listen_addrs",disabled:!0,checked:!!B.serviceListenAddresses,onText:"Enabled",offText:"Disabled"}),null===(e=B.serviceListenAddresses)||void 0===e?void 0:e.map(e=>(0,n.jsx)(m.n,{disabled:!0,value:e,styles:{root:{width:300}}},e))]}),(0,n.jsxs)(a.v,{children:[(0,n.jsx)(f.Z,{inlineLabel:!0,label:"service.adb.tcp.port",checked:B.servicePortEnabled,disabled:!w.d.device||!!B.serviceListenAddresses,onText:"Enabled",offText:"Disabled",onChange:i}),(0,n.jsx)(m.n,{disabled:!w.d.device||!!B.serviceListenAddresses,value:B.servicePort,styles:{root:{width:300}},onChange:s})]}),(0,n.jsxs)(a.v,{children:[(0,n.jsx)(f.Z,{inlineLabel:!0,label:"persist.adb.tcp.port",disabled:!0,checked:B.persistPortEnabled,onText:"Enabled",offText:"Disabled"}),B.persistPort&&(0,n.jsx)(m.n,{disabled:!0,value:B.persistPort,styles:{root:{width:300}}})]})]})};var L=(0,v.Pi)(P)},2150:function(e,i,s){"use strict";s.d(i,{c:function(){return C}});var n,r,a,t,o,l=s(1449),c=s(4665),d=s(3370),p=s(2),f=s(9321),m=s(9026),g=s(8804),v=s(7109),u=s(5620),h=s(7761),b=s(8127),x=s(3731),w=((n={})[h.f.info]="Info",n[h.f.warning]="Info",n[h.f.error]="ErrorBadge",n[h.f.blocked]="Blocked2",n[h.f.severeWarning]="Warning",n[h.f.success]="Completed",n),k=(0,p.y)(),B=function(e){switch(e){case h.f.blocked:case h.f.error:case h.f.severeWarning:return"assertive"}return"polite"},P=function(e){switch(e){case h.f.blocked:case h.f.error:case h.f.severeWarning:return"alert"}return"status"},L=d.forwardRef(function(e,i){var s=(0,b.k)(!1),n=s[0],r=s[1].toggle,a=(0,x.M)("MessageBar"),t=e.actions,o=e.className,l=e.children,p=e.overflowButtonAriaLabel,L=e.dismissIconProps,S=e.styles,y=e.theme,E=e.messageBarType,M=void 0===E?h.f.info:E,N=e.onDismiss,W=void 0===N?void 0:N,C=e.isMultiline,T=void 0===C||C,j=e.truncated,A=e.dismissButtonAriaLabel,I=e.messageBarIconProps,_=e.role,D=e.delayedRender,z=e.expandButtonProps,q=(0,f.pq)(e,f.iY,["className","role"]),F=k(S,{theme:y,messageBarType:M||h.f.info,onDismiss:void 0!==W,actions:void 0!==t,truncated:j,isMultiline:T,expandSingleLine:n,className:o}),H=t?d.createElement("div",{className:F.actions},t):null,J=W?d.createElement(v.h,{disabled:!1,className:F.dismissal,onClick:W,iconProps:L||{iconName:"Clear"},title:A,ariaLabel:A}):null;return d.createElement("div",(0,c.pi)({ref:i,className:F.root},t||W?{"aria-describedby":a,role:"region"}:{}),d.createElement("div",{className:F.content},d.createElement("div",{className:F.iconContainer,"aria-hidden":!0},I?d.createElement(u.J,(0,c.pi)({},I,{className:(0,m.i)(F.icon,I.className)})):d.createElement(u.J,{iconName:w[M],className:F.icon})),d.createElement("div",{className:F.text,id:a,role:_||P(M),"aria-live":B(M)},d.createElement("span",(0,c.pi)({className:F.innerText},q),void 0===D||D?d.createElement(g.U,null,d.createElement("span",null,l)):d.createElement("span",null,l))),!T&&!H&&j&&d.createElement("div",{className:F.expandSingleLine},d.createElement(v.h,(0,c.pi)({disabled:!1,className:F.expand,onClick:r,iconProps:{iconName:n?"DoubleChevronUp":"DoubleChevronDown"},ariaLabel:p,"aria-expanded":n},z))),!T&&H,!T&&J&&d.createElement("div",{className:F.dismissSingleLine},J),T&&J),T&&H)});L.displayName="MessageBar";var S=s(5858),y={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},E=((r={})[h.f.error]="errorBackground",r[h.f.blocked]="errorBackground",r[h.f.success]="successBackground",r[h.f.warning]="warningBackground",r[h.f.severeWarning]="severeWarningBackground",r[h.f.info]="infoBackground",r),M=((a={})[h.f.error]="errorIcon",a[h.f.blocked]="errorIcon",a[h.f.success]="successIcon",a[h.f.warning]="warningIcon",a[h.f.severeWarning]="severeWarningIcon",a[h.f.info]="infoIcon",a),N=((t={})[h.f.error]="#ff0000",t[h.f.blocked]="#ff0000",t[h.f.success]="#bad80a",t[h.f.warning]="#fff100",t[h.f.severeWarning]="#ff0000",t[h.f.info]="WindowText",t),W=((o={})[h.f.error]="#e81123",o[h.f.blocked]="#e81123",o[h.f.success]="#107c10",o[h.f.warning]="#966400",o[h.f.severeWarning]="#d83b01",o[h.f.info]="WindowText",o),C=(0,l.z)(L,function(e){var i,s,n,r,a,t=e.theme,o=e.className,l=e.onDismiss,d=e.truncated,p=e.isMultiline,f=e.expandSingleLine,m=e.messageBarType,g=void 0===m?h.f.info:m,v=t.semanticColors,u=t.fonts,b=(0,S.sK)(0,S.mV),x=(0,S.Cn)(y,t),w={fontSize:S.ld.xSmall,height:10,lineHeight:"10px",color:v.messageText,selectors:((i={})[S.qJ]=(0,c.pi)((0,c.pi)({},(0,S.xM)()),{color:"WindowText"}),i)},k=[(0,S.GL)(t,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":w,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[x.root,u.medium,g===h.f.error&&x.error,g===h.f.blocked&&x.blocked,g===h.f.severeWarning&&x.severeWarning,g===h.f.success&&x.success,g===h.f.warning&&x.warning,p?x.multiline:x.singleline,!p&&l&&x.dismissalSingleLine,!p&&d&&x.expandingSingleLine,{background:v[E[g]],boxSizing:"border-box",color:v.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:((s={".ms-Link":{color:v.messageLink,selectors:{":hover":{color:v.messageLinkHovered}}}})[S.qJ]=(0,c.pi)((0,c.pi)({},(0,S.xM)()),{background:"transparent",border:"1px solid "+N[g],color:"WindowText"}),s[S.bO]={border:"1px solid "+W[g]},s)},p&&{flexDirection:"column"},o],content:[x.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[x.iconContainer,{fontSize:S.ld.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:v[M[g]],selectors:((n={})[S.qJ]=(0,c.pi)((0,c.pi)({},(0,S.xM)()),{color:"WindowText"}),n)},text:[x.text,(0,c.pi)((0,c.pi)({minWidth:0,display:"flex",flexGrow:1,margin:8},u.small),{selectors:((r={})[S.qJ]=(0,c.pi)({},(0,S.xM)()),r)}),!l&&{marginRight:12}],innerText:[x.innerText,{lineHeight:16,selectors:{"& span a:last-child":{paddingLeft:4}}},d&&{overflow:"visible",whiteSpace:"pre-wrap"},!p&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!p&&!d&&{selectors:((a={})[b]={overflow:"visible",whiteSpace:"pre-wrap"},a)},f&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:x.dismissSingleLine,expandSingleLine:x.expandSingleLine,dismissal:[x.dismissal,k],expand:[x.expand,k],actions:[p?x.actions:x.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",forcedColorAdjust:"auto",MsHighContrastAdjust:"auto",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},p&&{marginBottom:8},l&&!p&&{marginRight:0}]}},void 0,{scope:"MessageBar"})},7761:function(e,i,s){"use strict";var n,r;s.d(i,{f:function(){return n}}),(r=n||(n={}))[r.info=0]="info",r[r.error=1]="error",r[r.blocked=2]="blocked",r[r.severeWarning=3]="severeWarning",r[r.success=4]="success",r[r.warning=5]="warning"}},function(e){e.O(0,[126,774,888,179],function(){return e(e.s=185)}),_N_E=e.O()}]);
//# sourceMappingURL=tcpip-99bd31f3eb894df3.js.map