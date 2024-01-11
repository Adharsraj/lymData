import{r as f,t as E,P as k,g as He,h as me,i as We,j as t,k as qe,U as Ue,H as Ve,N as Ye,F as Ke}from"./index-eed8e2c7.js";function $e(e){var n,s,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(s=$e(e[n]))&&(r&&(r+=" "),r+=s);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function V(){for(var e,n,s=0,r="";s<arguments.length;)(e=arguments[s++])&&(n=$e(e))&&(r&&(r+=" "),r+=n);return r}const G=e=>typeof e=="number"&&!isNaN(e),J=e=>typeof e=="string",M=e=>typeof e=="function",X=e=>J(e)||M(e)?e:null,fe=e=>f.isValidElement(e)||J(e)||M(e)||G(e);function Ze(e,n,s){s===void 0&&(s=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${s}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(n,s)})})}function ee(e){let{enter:n,exit:s,appendPosition:r=!1,collapse:o=!0,collapseDuration:l=300}=e;return function(a){let{children:c,position:v,preventExitTransition:x,done:w,nodeRef:h,isIn:d}=a;const i=r?`${n}--${v}`:n,u=r?`${s}--${v}`:s,y=f.useRef(0);return f.useLayoutEffect(()=>{const m=h.current,p=i.split(" "),T=S=>{S.target===h.current&&(m.dispatchEvent(new Event("d")),m.removeEventListener("animationend",T),m.removeEventListener("animationcancel",T),y.current===0&&S.type!=="animationcancel"&&m.classList.remove(...p))};m.classList.add(...p),m.addEventListener("animationend",T),m.addEventListener("animationcancel",T)},[]),f.useEffect(()=>{const m=h.current,p=()=>{m.removeEventListener("animationend",p),o?Ze(m,w,l):w()};d||(x?p():(y.current=1,m.className+=` ${u}`,m.addEventListener("animationend",p)))},[d]),E.createElement(E.Fragment,null,c)}}function Ce(e,n){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:n}:{}}const K={list:new Map,emitQueue:new Map,on(e,n){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(n),this},off(e,n){if(n){const s=this.list.get(e).filter(r=>r!==n);return this.list.set(e,s),this}return this.list.delete(e),this},cancelEmit(e){const n=this.emitQueue.get(e);return n&&(n.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(n=>{const s=setTimeout(()=>{n(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(s)})}},Z=e=>{let{theme:n,type:s,...r}=e;return E.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${s})`,...r})},he={info:function(e){return E.createElement(Z,{...e},E.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return E.createElement(Z,{...e},E.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return E.createElement(Z,{...e},E.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return E.createElement(Z,{...e},E.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return E.createElement("div",{className:"Toastify__spinner"})}};function Qe(e){const[,n]=f.useReducer(i=>i+1,0),[s,r]=f.useState([]),o=f.useRef(null),l=f.useRef(new Map).current,a=i=>s.indexOf(i)!==-1,c=f.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:a,getToast:i=>l.get(i)}).current;function v(i){let{containerId:u}=i;const{limit:y}=c.props;!y||u&&c.containerId!==u||(c.count-=c.queue.length,c.queue=[])}function x(i){r(u=>i==null?[]:u.filter(y=>y!==i))}function w(){const{toastContent:i,toastProps:u,staleId:y}=c.queue.shift();d(i,u,y)}function h(i,u){let{delay:y,staleId:m,...p}=u;if(!fe(i)||function(O){return!o.current||c.props.enableMultiContainer&&O.containerId!==c.props.containerId||l.has(O.toastId)&&O.updateId==null}(p))return;const{toastId:T,updateId:S,data:g}=p,{props:b}=c,N=()=>x(T),_=S==null;_&&c.count++;const C={...b,style:b.toastStyle,key:c.toastKey++,...Object.fromEntries(Object.entries(p).filter(O=>{let[H,A]=O;return A!=null})),toastId:T,updateId:S,data:g,closeToast:N,isIn:!1,className:X(p.className||b.toastClassName),bodyClassName:X(p.bodyClassName||b.bodyClassName),progressClassName:X(p.progressClassName||b.progressClassName),autoClose:!p.isLoading&&(B=p.autoClose,F=b.autoClose,B===!1||G(B)&&B>0?B:F),deleteToast(){const O=Ce(l.get(T),"removed");l.delete(T),K.emit(4,O);const H=c.queue.length;if(c.count=T==null?c.count-c.displayedToast:c.count-1,c.count<0&&(c.count=0),H>0){const A=T==null?c.props.limit:1;if(H===1||A===1)c.displayedToast++,w();else{const $=A>H?H:A;c.displayedToast=$;for(let I=0;I<$;I++)w()}}else n()}};var B,F;C.iconOut=function(O){let{theme:H,type:A,isLoading:$,icon:I}=O,z=null;const q={theme:H,type:A};return I===!1||(M(I)?z=I(q):f.isValidElement(I)?z=f.cloneElement(I,q):J(I)||G(I)?z=I:$?z=he.spinner():(L=>L in he)(A)&&(z=he[A](q))),z}(C),M(p.onOpen)&&(C.onOpen=p.onOpen),M(p.onClose)&&(C.onClose=p.onClose),C.closeButton=b.closeButton,p.closeButton===!1||fe(p.closeButton)?C.closeButton=p.closeButton:p.closeButton===!0&&(C.closeButton=!fe(b.closeButton)||b.closeButton);let P=i;f.isValidElement(i)&&!J(i.type)?P=f.cloneElement(i,{closeToast:N,toastProps:C,data:g}):M(i)&&(P=i({closeToast:N,toastProps:C,data:g})),b.limit&&b.limit>0&&c.count>b.limit&&_?c.queue.push({toastContent:P,toastProps:C,staleId:m}):G(y)?setTimeout(()=>{d(P,C,m)},y):d(P,C,m)}function d(i,u,y){const{toastId:m}=u;y&&l.delete(y);const p={content:i,props:u};l.set(m,p),r(T=>[...T,m].filter(S=>S!==y)),K.emit(4,Ce(p,p.props.updateId==null?"added":"updated"))}return f.useEffect(()=>(c.containerId=e.containerId,K.cancelEmit(3).on(0,h).on(1,i=>o.current&&x(i)).on(5,v).emit(2,c),()=>{l.clear(),K.emit(3,c)}),[]),f.useEffect(()=>{c.props=e,c.isToastActive=a,c.displayedToast=s.length}),{getToastToRender:function(i){const u=new Map,y=Array.from(l.values());return e.newestOnTop&&y.reverse(),y.forEach(m=>{const{position:p}=m.props;u.has(p)||u.set(p,[]),u.get(p).push(m)}),Array.from(u,m=>i(m[0],m[1]))},containerRef:o,isToastActive:a}}function Le(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Se(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Ge(e){const[n,s]=f.useState(!1),[r,o]=f.useState(!1),l=f.useRef(null),a=f.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=f.useRef(e),{autoClose:v,pauseOnHover:x,closeToast:w,onClick:h,closeOnClick:d}=e;function i(g){if(e.draggable){g.nativeEvent.type==="touchstart"&&g.nativeEvent.preventDefault(),a.didMove=!1,document.addEventListener("mousemove",p),document.addEventListener("mouseup",T),document.addEventListener("touchmove",p),document.addEventListener("touchend",T);const b=l.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=b.getBoundingClientRect(),b.style.transition="",a.x=Le(g.nativeEvent),a.y=Se(g.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=b.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=b.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function u(g){if(a.boundingRect){const{top:b,bottom:N,left:_,right:C}=a.boundingRect;g.nativeEvent.type!=="touchend"&&e.pauseOnHover&&a.x>=_&&a.x<=C&&a.y>=b&&a.y<=N?m():y()}}function y(){s(!0)}function m(){s(!1)}function p(g){const b=l.current;a.canDrag&&b&&(a.didMove=!0,n&&m(),a.x=Le(g),a.y=Se(g),a.delta=e.draggableDirection==="x"?a.x-a.start:a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),b.style.transform=`translate${e.draggableDirection}(${a.delta}px)`,b.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function T(){document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",T);const g=l.current;if(a.canDrag&&a.didMove&&g){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return o(!0),void e.closeToast();g.style.transition="transform 0.2s, opacity 0.2s",g.style.transform=`translate${e.draggableDirection}(0)`,g.style.opacity="1"}}f.useEffect(()=>{c.current=e}),f.useEffect(()=>(l.current&&l.current.addEventListener("d",y,{once:!0}),M(e.onOpen)&&e.onOpen(f.isValidElement(e.children)&&e.children.props),()=>{const g=c.current;M(g.onClose)&&g.onClose(f.isValidElement(g.children)&&g.children.props)}),[]),f.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||m(),window.addEventListener("focus",y),window.addEventListener("blur",m)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",m))}),[e.pauseOnFocusLoss]);const S={onMouseDown:i,onTouchStart:i,onMouseUp:u,onTouchEnd:u};return v&&x&&(S.onMouseEnter=m,S.onMouseLeave=y),d&&(S.onClick=g=>{h&&h(g),a.canCloseOnClick&&w()}),{playToast:y,pauseToast:m,isRunning:n,preventExitTransition:r,toastRef:l,eventHandlers:S}}function Me(e){let{closeToast:n,theme:s,ariaLabel:r="close"}=e;return E.createElement("button",{className:`Toastify__close-button Toastify__close-button--${s}`,type:"button",onClick:o=>{o.stopPropagation(),n(o)},"aria-label":r},E.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},E.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Xe(e){let{delay:n,isRunning:s,closeToast:r,type:o="default",hide:l,className:a,style:c,controlledProgress:v,progress:x,rtl:w,isIn:h,theme:d}=e;const i=l||v&&x===0,u={...c,animationDuration:`${n}ms`,animationPlayState:s?"running":"paused",opacity:i?0:1};v&&(u.transform=`scaleX(${x})`);const y=V("Toastify__progress-bar",v?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":w}),m=M(a)?a({rtl:w,type:o,defaultClassName:y}):V(y,a);return E.createElement("div",{role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:m,style:u,[v&&x>=1?"onTransitionEnd":"onAnimationEnd"]:v&&x<1?null:()=>{h&&r()}})}const Je=e=>{const{isRunning:n,preventExitTransition:s,toastRef:r,eventHandlers:o}=Ge(e),{closeButton:l,children:a,autoClose:c,onClick:v,type:x,hideProgressBar:w,closeToast:h,transition:d,position:i,className:u,style:y,bodyClassName:m,bodyStyle:p,progressClassName:T,progressStyle:S,updateId:g,role:b,progress:N,rtl:_,toastId:C,deleteToast:B,isIn:F,isLoading:P,iconOut:O,closeOnClick:H,theme:A}=e,$=V("Toastify__toast",`Toastify__toast-theme--${A}`,`Toastify__toast--${x}`,{"Toastify__toast--rtl":_},{"Toastify__toast--close-on-click":H}),I=M(u)?u({rtl:_,position:i,type:x,defaultClassName:$}):V($,u),z=!!N||!c,q={closeToast:h,type:x,theme:A};let L=null;return l===!1||(L=M(l)?l(q):f.isValidElement(l)?f.cloneElement(l,q):Me(q)),E.createElement(d,{isIn:F,done:B,position:i,preventExitTransition:s,nodeRef:r},E.createElement("div",{id:C,onClick:v,className:I,...o,style:y,ref:r},E.createElement("div",{...F&&{role:b},className:M(m)?m({type:x}):V("Toastify__toast-body",m),style:p},O!=null&&E.createElement("div",{className:V("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},O),E.createElement("div",null,a)),L,E.createElement(Xe,{...g&&!z?{key:`pb-${g}`}:{},rtl:_,theme:A,delay:c,isRunning:n,isIn:F,closeToast:h,hide:w,type:x,style:S,className:T,controlledProgress:z,progress:N||0})))},te=function(e,n){return n===void 0&&(n=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:n}},et=ee(te("bounce",!0));ee(te("slide",!0));ee(te("zoom"));ee(te("flip"));const Re=f.forwardRef((e,n)=>{const{getToastToRender:s,containerRef:r,isToastActive:o}=Qe(e),{className:l,style:a,rtl:c,containerId:v}=e;function x(w){const h=V("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":c});return M(l)?l({position:w,rtl:c,defaultClassName:h}):V(h,X(l))}return f.useEffect(()=>{n&&(n.current=r.current)},[]),E.createElement("div",{ref:r,className:"Toastify",id:v},s((w,h)=>{const d=h.length?{...a}:{...a,pointerEvents:"none"};return E.createElement("div",{className:x(w),style:d,key:`container-${w}`},h.map((i,u)=>{let{content:y,props:m}=i;return E.createElement(Je,{...m,isIn:o(m.toastId),style:{...m.style,"--nth":u+1,"--len":h.length},key:`toast-${m.key}`},y)}))}))});Re.displayName="ToastContainer",Re.defaultProps={position:"top-right",transition:et,autoClose:5e3,closeButton:Me,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Oe,ge=new Map,Ae=[];K.on(2,e=>{Oe=e.containerId||e,ge.set(Oe,e),Ae.forEach(n=>{K.emit(0,n.content,n.options)}),Ae=[]}).on(3,e=>{ge.delete(e.containerId||e),ge.size===0&&K.off(0).off(1).off(5)});var tt=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},ye.apply(this,arguments)}function nt(e,n){if(e==null)return{};var s={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(n.indexOf(o)>=0)&&(s[o]=e[o]);return s}function Q(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rt(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,xe(e,n)}function xe(e,n){return xe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},xe(e,n)}var ne=function(e){rt(n,e);function n(){var r;return r=e.call(this)||this,r.handleExpired=r.handleExpired.bind(Q(r)),r.handleErrored=r.handleErrored.bind(Q(r)),r.handleChange=r.handleChange.bind(Q(r)),r.handleRecaptchaRef=r.handleRecaptchaRef.bind(Q(r)),r}var s=n.prototype;return s.getCaptchaFunction=function(o){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[o]:this.props.grecaptcha[o]:null},s.getValue=function(){var o=this.getCaptchaFunction("getResponse");return o&&this._widgetId!==void 0?o(this._widgetId):null},s.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},s.execute=function(){var o=this.getCaptchaFunction("execute");if(o&&this._widgetId!==void 0)return o(this._widgetId);this._executeRequested=!0},s.executeAsync=function(){var o=this;return new Promise(function(l,a){o.executionResolve=l,o.executionReject=a,o.execute()})},s.reset=function(){var o=this.getCaptchaFunction("reset");o&&this._widgetId!==void 0&&o(this._widgetId)},s.forceReset=function(){var o=this.getCaptchaFunction("reset");o&&o()},s.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},s.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},s.handleChange=function(o){this.props.onChange&&this.props.onChange(o),this.executionResolve&&(this.executionResolve(o),delete this.executionReject,delete this.executionResolve)},s.explicitRender=function(){var o=this.getCaptchaFunction("render");if(o&&this._widgetId===void 0){var l=document.createElement("div");this._widgetId=o(l,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(l)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},s.componentDidMount=function(){this.explicitRender()},s.componentDidUpdate=function(){this.explicitRender()},s.handleRecaptchaRef=function(o){this.captcha=o},s.render=function(){var o=this.props;o.sitekey,o.onChange,o.theme,o.type,o.tabindex,o.onExpired,o.onErrored,o.size,o.stoken,o.grecaptcha,o.badge,o.hl,o.isolated;var l=nt(o,tt);return f.createElement("div",ye({},l,{ref:this.handleRecaptchaRef}))},n}(f.Component);ne.displayName="ReCAPTCHA";ne.propTypes={sitekey:k.string.isRequired,onChange:k.func,grecaptcha:k.object,theme:k.oneOf(["dark","light"]),type:k.oneOf(["image","audio"]),tabindex:k.number,onExpired:k.func,onErrored:k.func,size:k.oneOf(["compact","normal","invisible"]),stoken:k.string,hl:k.string,badge:k.oneOf(["bottomright","bottomleft","inline"]),isolated:k.bool};ne.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var De={exports:{}},j={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=typeof Symbol=="function"&&Symbol.for,je=R?Symbol.for("react.element"):60103,Te=R?Symbol.for("react.portal"):60106,re=R?Symbol.for("react.fragment"):60107,oe=R?Symbol.for("react.strict_mode"):60108,se=R?Symbol.for("react.profiler"):60114,ae=R?Symbol.for("react.provider"):60109,ie=R?Symbol.for("react.context"):60110,Ne=R?Symbol.for("react.async_mode"):60111,ce=R?Symbol.for("react.concurrent_mode"):60111,le=R?Symbol.for("react.forward_ref"):60112,de=R?Symbol.for("react.suspense"):60113,ot=R?Symbol.for("react.suspense_list"):60120,ue=R?Symbol.for("react.memo"):60115,pe=R?Symbol.for("react.lazy"):60116,st=R?Symbol.for("react.block"):60121,at=R?Symbol.for("react.fundamental"):60117,it=R?Symbol.for("react.responder"):60118,ct=R?Symbol.for("react.scope"):60119;function D(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case je:switch(e=e.type,e){case Ne:case ce:case re:case se:case oe:case de:return e;default:switch(e=e&&e.$$typeof,e){case ie:case le:case pe:case ue:case ae:return e;default:return n}}case Te:return n}}}function Fe(e){return D(e)===ce}j.AsyncMode=Ne;j.ConcurrentMode=ce;j.ContextConsumer=ie;j.ContextProvider=ae;j.Element=je;j.ForwardRef=le;j.Fragment=re;j.Lazy=pe;j.Memo=ue;j.Portal=Te;j.Profiler=se;j.StrictMode=oe;j.Suspense=de;j.isAsyncMode=function(e){return Fe(e)||D(e)===Ne};j.isConcurrentMode=Fe;j.isContextConsumer=function(e){return D(e)===ie};j.isContextProvider=function(e){return D(e)===ae};j.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===je};j.isForwardRef=function(e){return D(e)===le};j.isFragment=function(e){return D(e)===re};j.isLazy=function(e){return D(e)===pe};j.isMemo=function(e){return D(e)===ue};j.isPortal=function(e){return D(e)===Te};j.isProfiler=function(e){return D(e)===se};j.isStrictMode=function(e){return D(e)===oe};j.isSuspense=function(e){return D(e)===de};j.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===re||e===ce||e===se||e===oe||e===de||e===ot||typeof e=="object"&&e!==null&&(e.$$typeof===pe||e.$$typeof===ue||e.$$typeof===ae||e.$$typeof===ie||e.$$typeof===le||e.$$typeof===at||e.$$typeof===it||e.$$typeof===ct||e.$$typeof===st)};j.typeOf=D;De.exports=j;var lt=De.exports,Ee=lt,dt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ut={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pt={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ze={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_e={};_e[Ee.ForwardRef]=pt;_e[Ee.Memo]=ze;function Ie(e){return Ee.isMemo(e)?ze:_e[e.$$typeof]||dt}var mt=Object.defineProperty,ft=Object.getOwnPropertyNames,ke=Object.getOwnPropertySymbols,ht=Object.getOwnPropertyDescriptor,gt=Object.getPrototypeOf,Pe=Object.prototype;function Be(e,n,s){if(typeof n!="string"){if(Pe){var r=gt(n);r&&r!==Pe&&Be(e,r,s)}var o=ft(n);ke&&(o=o.concat(ke(n)));for(var l=Ie(e),a=Ie(n),c=0;c<o.length;++c){var v=o[c];if(!ut[v]&&!(s&&s[v])&&!(a&&a[v])&&!(l&&l[v])){var x=ht(n,v);try{mt(e,v,x)}catch{}}}}return e}var yt=Be;const xt=He(yt);function ve(){return ve=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},ve.apply(this,arguments)}function vt(e,n){if(e==null)return{};var s={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(n.indexOf(o)>=0)&&(s[o]=e[o]);return s}function bt(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}var W={},wt=0;function jt(e,n){return n=n||{},function(r){var o=r.displayName||r.name||"Component",l=function(c){bt(v,c);function v(w,h){var d;return d=c.call(this,w,h)||this,d.state={},d.__scriptURL="",d}var x=v.prototype;return x.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+wt++),this.__scriptLoaderID},x.setupScriptURL=function(){return this.__scriptURL=typeof e=="function"?e():e,this.__scriptURL},x.asyncScriptLoaderHandleLoad=function(h){var d=this;this.setState(h,function(){return d.props.asyncScriptOnLoad&&d.props.asyncScriptOnLoad(d.state)})},x.asyncScriptLoaderTriggerOnScriptLoaded=function(){var h=W[this.__scriptURL];if(!h||!h.loaded)throw new Error("Script is not loaded.");for(var d in h.observers)h.observers[d](h);delete window[n.callbackName]},x.componentDidMount=function(){var h=this,d=this.setupScriptURL(),i=this.asyncScriptLoaderGetScriptLoaderID(),u=n,y=u.globalName,m=u.callbackName,p=u.scriptId;if(y&&typeof window[y]<"u"&&(W[d]={loaded:!0,observers:{}}),W[d]){var T=W[d];if(T&&(T.loaded||T.errored)){this.asyncScriptLoaderHandleLoad(T);return}T.observers[i]=function(_){return h.asyncScriptLoaderHandleLoad(_)};return}var S={};S[i]=function(_){return h.asyncScriptLoaderHandleLoad(_)},W[d]={loaded:!1,observers:S};var g=document.createElement("script");g.src=d,g.async=!0;for(var b in n.attributes)g.setAttribute(b,n.attributes[b]);p&&(g.id=p);var N=function(C){if(W[d]){var B=W[d],F=B.observers;for(var P in F)C(F[P])&&delete F[P]}};m&&typeof window<"u"&&(window[m]=function(){return h.asyncScriptLoaderTriggerOnScriptLoaded()}),g.onload=function(){var _=W[d];_&&(_.loaded=!0,N(function(C){return m?!1:(C(_),!0)}))},g.onerror=function(){var _=W[d];_&&(_.errored=!0,N(function(C){return C(_),!0}))},document.body.appendChild(g)},x.componentWillUnmount=function(){var h=this.__scriptURL;if(n.removeOnUnmount===!0)for(var d=document.getElementsByTagName("script"),i=0;i<d.length;i+=1)d[i].src.indexOf(h)>-1&&d[i].parentNode&&d[i].parentNode.removeChild(d[i]);var u=W[h];u&&(delete u.observers[this.asyncScriptLoaderGetScriptLoaderID()],n.removeOnUnmount===!0&&delete W[h])},x.render=function(){var h=n.globalName,d=this.props;d.asyncScriptOnLoad;var i=d.forwardedRef,u=vt(d,["asyncScriptOnLoad","forwardedRef"]);return h&&typeof window<"u"&&(u[h]=typeof window[h]<"u"?window[h]:void 0),u.ref=i,f.createElement(r,u)},v}(f.Component),a=f.forwardRef(function(c,v){return f.createElement(l,ve({},c,{forwardedRef:v}))});return a.displayName="AsyncScriptLoader("+o+")",a.propTypes={asyncScriptOnLoad:k.func},xt(a,r)}}var be="onloadcallback",Tt="grecaptcha";function we(){return typeof window<"u"&&window.recaptchaOptions||{}}function Nt(){var e=we(),n=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return e.enterprise?"https://"+n+"/recaptcha/enterprise.js?onload="+be+"&render=explicit":"https://"+n+"/recaptcha/api.js?onload="+be+"&render=explicit"}const Et=jt(Nt,{callbackName:be,globalName:Tt,attributes:we().nonce?{nonce:we().nonce}:{}})(ne),_t=()=>{var I,z,q;const[n,s]=f.useState(!0),[r,o]=f.useState(!1),[l,a]=f.useState(!1);f.useEffect(()=>{me.fromTo("#arrowbottom",{x:0,y:70,rotate:0},{x:0,y:100,rotate:0,delay:1,duration:1.5,repeat:-1,yoyo:!0}),me.from("h6 div",1.5,{yPercent:100,ease:"power4.inOut",stagger:{amount:.5}}),me.to("h6",1.5,{clipPath:"polygon(0 0,100% 0,100% 100%,0% 100%)",ease:"power4.inOut",stagger:{amount:.5}})},[]);const c=["ddrive conversion","bbuild to scale","iinspire action"],[v,x]=f.useState(""),[w,h]=f.useState(!0);let d=0,i=0;f.useEffect(()=>{const L=()=>{d<c.length?i<c[d].length?(x(Y=>Y+c[d].charAt(i)),i++,setTimeout(L,40)):setTimeout(()=>{h(!1),setTimeout(U,500)},1e3):(d=0,setTimeout(L,0))},U=()=>{i>0?(x(Y=>Y.slice(0,-1)),i--,setTimeout(U,20)):(h(!0),d++,setTimeout(L,500))};L()},[]);const u={writingMode:"vertical-lr",textOrientation:"mixed",whiteSpace:"nowrap",transform:"rotate(180deg)"},y="6a52d261df06839eb8e33a439c651d09",m="Ernakulam",[p,T]=f.useState(null);f.useEffect(()=>{We.get(`https://api.openweathermap.org/data/2.5/weather?q=${m}&appid=${y}&units=imperial`).then(L=>{console.log(L);const U=((L.data.main.temp-32)*5/9).toFixed(2),Y={...L.data,main:{...L.data.main,temp:U}};T(Y)}).catch(L=>{console.error("Error fetching weather data:",L)})},[]);const[S,g]=f.useState(new Date);f.useEffect(()=>{const L=setInterval(()=>{g(new Date)},1e3);return()=>{clearInterval(L)}},[]);const b=S.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),[N,_]=f.useState({name:"",company:"",email:"",phoneNumber:"",message:""}),C=()=>{_({name:"",company:"",email:"",phoneNumber:"",message:""})},[B,F]=f.useState(null),[P,O]=f.useState(""),H=L=>{F(L),O("")},A=async L=>{if(L.preventDefault(),!N.name||!N.email){O("Please fill out all required fields.");return}if(!B){O("Please complete the CAPTCHA.");return}o(!0),console.log(N);try{await qe.send("service_w4ox98s","template_95dbo87",{from_name:N.name,to_name:"LYMData",from_email:N.email,to_email:"info@lymdata.com",company_name:N.company,phone_number:N.phoneNumber,message:N.message},"_h7dmU_ZWC9dc_ISz"),o(!1),a(!0),C(),console.log("Form submitted successfully")}catch(U){console.error("Error submitting form:",U)}},$=L=>{const{name:U,value:Y}=L.target;_({...N,[U]:Y})};return t.jsxs("div",{className:"bg-[#F4F4F4]",children:[t.jsx("div",{className:"max-w-[1640px]  mx-auto p-4  text-[#040404] overflow-hidden",children:t.jsxs("div",{className:" md:px-20",children:[t.jsxs("div",{className:"relative flex flex-col justify-center items-center h-screen xl:mt-[-40px] font-aeonic",children:[t.jsx("span",{className:" text-gray-300 opacity-50 font-extrabold absolute xl:text-[700px] xl:ml-48  md:text-[400px] text-[200px]  overflow-hidden  ",children:"Hello"}),t.jsx("h1",{className:" z-10 xl:text-[200px] md:text-8xl text-[60px] w-full animate-slide-up font-bold",children:"Let's talk"}),t.jsxs("h2",{className:"flex  z-10   w-full gap-4 animate-slide-up xl:px-3 xl:mt-2",children:[t.jsx("div",{className:" z-10 ",onClick:()=>window.open("https://www.linkedin.com/company/lymdata-labs","_blank"),children:t.jsx("svg",{onClick:()=>window.open("https://www.linkedin.com/company/lymdata-labs","_blank"),className:"z-10 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"currentColor",children:t.jsx("path",{"fill-rule":"evenodd",d:"M27.83 2H4.09C2.93 2 2 2.93 2 4.02v23.96C2 29.07 2.93 30 4.1 30h23.8c1.17 0 2.1-.93 2.1-2.02V4.02A2.2 2.2 0 0 0 27.83 2ZM6.1 12.5h4.11v13.38h-4.1V12.5Zm2.1-6.61c1.31 0 2.4 1.09 2.4 2.41a2.42 2.42 0 0 1-2.4 2.41A2.42 2.42 0 0 1 5.8 8.3c0-1.4 1.09-2.41 2.4-2.41Zm8.6 6.61h-3.95v13.22h4.19v-6.6c0-1.72.3-3.43 2.48-3.43 2.17 0 2.17 2.02 2.17 3.58v6.53h4.11v-7.31c0-3.58-.77-6.38-4.96-6.38a4.34 4.34 0 0 0-3.96 2.18h-.08V12.5Z","clip-rule":"evenodd"})})}),t.jsx("div",{className:"z-10",onClick:()=>window.open("https://www.facebook.com/lymdatalabs/","_blank"),children:t.jsx("svg",{onClick:()=>window.open("https://www.facebook.com/lymdatalabs/","_blank"),className:"z-10 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"currentColor",children:t.jsx("path",{d:"M16 2C8.27 2 2 8.3 2 16.09 2 23.12 7.12 28.94 13.81 30v-9.84h-3.55v-4.07h3.55v-3.1c0-3.54 2.1-5.49 5.3-5.49 1.52 0 3.12.28 3.12.28v3.46h-1.76c-1.74 0-2.28 1.09-2.28 2.2v2.65h3.88l-.62 4.07h-3.26V30A14.06 14.06 0 0 0 30 16.09C30 8.3 23.73 2 16 2Z"})})}),t.jsx("div",{className:"z-10",onClick:()=>window.open("https://instagram.com/lymdatalabs?igshid=MzRlODBiNWFlZA==","_blank"),children:t.jsxs("svg",{onClick:()=>window.open("https://instagram.com/lymdatalabs?igshid=MzRlODBiNWFlZA==","_blank"),className:"z-10 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"currentColor",children:[t.jsx("path",{"fill-rule":"evenodd",d:"M16 8.81a7.2 7.2 0 1 0 0 14.38 7.2 7.2 0 0 0 0-14.38Zm0 11.85a4.67 4.67 0 1 1 0-9.33 4.67 4.67 0 0 1 0 9.33Z","clip-rule":"evenodd"}),t.jsx("path",{d:"M25.14 8.52a1.68 1.68 0 1 1-3.35 0 1.68 1.68 0 0 1 3.35 0Z"}),t.jsx("path",{"fill-rule":"evenodd",d:"M16 2c-3.8 0-4.28.02-5.78.08-1.49.07-2.5.3-3.4.65-.91.36-1.7.84-2.47 1.62a6.94 6.94 0 0 0-1.62 2.48c-.34.89-.58 1.9-.65 3.4C2.02 11.72 2 12.2 2 16s.02 4.28.08 5.77c.07 1.49.3 2.5.65 3.4.36.92.84 1.7 1.62 2.48a6.94 6.94 0 0 0 2.48 1.62c.89.34 1.9.58 3.4.65 1.5.06 1.96.08 5.77.08 3.8 0 4.28-.02 5.77-.08 1.5-.07 2.5-.3 3.4-.65.92-.36 1.7-.84 2.48-1.62a6.94 6.94 0 0 0 1.62-2.48c.34-.89.58-1.9.65-3.4.06-1.5.08-1.97.08-5.77s-.02-4.28-.08-5.78c-.07-1.49-.3-2.5-.65-3.4a6.82 6.82 0 0 0-1.62-2.48 6.94 6.94 0 0 0-2.48-1.61c-.89-.35-1.9-.59-3.4-.65C20.27 2.02 19.8 2 16 2Zm0 2.52c3.73 0 4.17.02 5.65.09 1.37.06 2.1.28 2.6.48.66.26 1.12.56 1.61 1.04.49.5.8.96 1.05 1.62.18.49.42 1.23.48 2.6.07 1.47.08 1.91.08 5.65s-.01 4.18-.08 5.66a7.64 7.64 0 0 1-.48 2.6 4.34 4.34 0 0 1-1.05 1.61c-.49.49-.95.8-1.61 1.05-.5.18-1.23.42-2.6.48-1.48.07-1.92.08-5.66.08-3.73 0-4.17-.01-5.65-.08a7.64 7.64 0 0 1-2.6-.48 4.34 4.34 0 0 1-1.61-1.05c-.5-.49-.8-.95-1.05-1.61a7.78 7.78 0 0 1-.48-2.6A97.15 97.15 0 0 1 4.52 16c0-3.74.01-4.18.08-5.65.06-1.37.29-2.11.48-2.6.26-.66.56-1.13 1.05-1.62.49-.48.95-.8 1.6-1.04.5-.19 1.24-.42 2.6-.48A92.1 92.1 0 0 1 16 4.52Z","clip-rule":"evenodd"})]})})]})]}),t.jsx("div",{className:" md:flex absolute "}),t.jsx("div",{id:"form",className:"flex justify-center items-center h-screen",children:t.jsxs("div",{className:"w-full sm:w-full lg:w-full p-8 mt-14 md:mt-0 lg:mt-0 lg:mb-14 rounded some-element",children:[t.jsxs("h4",{className:"text-4xl font-bold md:mb-8 border border-transparent lg:leading-[70px] h-36 lg:text-[71px]",children:[" ","How can we ",t.jsx("br",{})," help",t.jsx("span",{className:"relative ml-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400",children:v}),w&&t.jsx("span",{className:"ml-1",children:"|"})]}),n?t.jsxs("form",{onSubmit:A,className:"",children:[t.jsxs("div",{className:"grid md:grid-cols-2 md:gap-16",children:[t.jsxs("div",{children:[t.jsx("div",{className:"mb-4 md:mt-14",children:t.jsx("input",{type:"text",name:"name",value:N.name,onChange:$,className:"w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3",placeholder:"Name *",required:!0})}),t.jsx("div",{className:"mb-4",children:t.jsx("input",{type:"text",name:"company",value:N.company,onChange:$,className:"w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3",placeholder:"Company"})}),t.jsx("div",{className:"mb-4",children:t.jsx("input",{type:"email",name:"email",value:N.email,onChange:$,className:"w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3",placeholder:"Email *",required:!0})})]}),t.jsxs("div",{children:[t.jsx("div",{className:"mb-4 md:mt-14",children:t.jsx("input",{type:"number",name:"phoneNumber",value:N.phoneNumber,onChange:$,className:"w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3",placeholder:"Phone Number"})}),t.jsx("div",{className:"mb-4",children:t.jsx("textarea",{name:"message",value:N.message,onChange:$,className:"w-full border-b  border-gray-500 bg-transparent outline-none py-4 px-3 md:h-32 h-10",placeholder:"Please, tell me what you're after"})})]}),t.jsxs("div",{children:[N.name&&N.email&&t.jsx(Et,{sitekey:"6LfClQ4pAAAAAH9desXouDRgOTgpf1s-crTYaBeT",onChange:H}),P&&t.jsx("p",{className:"text-red-500",children:P})]})]}),t.jsx("div",{className:"flex   justify-center items-center    gap-4 md:w-[600px] lg:ml-56 xl:mx-auto  xl:w-[570px] mx-auto lg:mb-7",children:t.jsx("div",{className:"flex  group  gap-2 ",children:l?t.jsx("h4",{className:"bg-black text-white text-center w-[300px] p-2 border rounded-full",children:"Mail sent successfully, our team will get in touch with you soon"}):t.jsxs("div",{onClick:A,className:"flex  group hover:cursor-pointer gap-2 w-[300px] lg:ml-72 xl:mx-auto  xl:w-[230px]  lg:mb-7 items-center justify-center",children:[t.jsx("h3",{className:"p-3 text-sm flex items-center justify-center mt-10 rounded-full w-[150px] bg-black text-white transition-all border transform hover:translate-x-14",children:"Submit"}),t.jsx("h3",{className:"p-3 mt-10 flex items-center rounded-full w-[45px] bg-black text-white border fill-current",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 25",children:t.jsx("g",{transform:`scale(${.9})`,children:t.jsx("path",{d:"m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5","data-name":"Right"})})})})]})})})]}):t.jsx("div",{className:"flex items-center justify-center pt-10",children:t.jsxs("div",{className:" border rounded-lg p-8 shadow-lg bg-white text-center",children:[t.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Thank you for contacting"}),t.jsx("h4",{className:"text-lg",children:"Our team will get in touch with you soon"})]})})]})})]})}),t.jsxs("div",{className:" hidden md:flex  h-screen relative overflow-hidden some-element",children:[t.jsx("img",{className:"hidden xl:flex absolute  top-[150px] left-0 transform  scale-150 overflow-hidden   ",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691418735/LYMDATALABS/Pages/Services/lines2_tfqf81_au43wv.png",alt:"img"}),t.jsxs("div",{className:"flex flex-col justify-around ",children:[t.jsx("div",{className:"pl-4",children:t.jsxs("h3",{className:"text-[12px]  absolute    ",style:u,children:["10.010900672433708° N 76.36072005340284° E"," "]})}),t.jsx("div",{className:"invisible",children:t.jsxs("h3",{className:"text-[12px] border border-transparent",style:u,children:[(I=p==null?void 0:p.main)==null?void 0:I.temp,"°C"]})}),t.jsxs("div",{className:"flex flex-col gap-10 pl-4",children:[t.jsxs("h3",{className:"text-[12px] border border-transparent",style:u,children:[(z=p==null?void 0:p.main)==null?void 0:z.temp,"°C"]}),t.jsx("h3",{className:"text-[12px] border border-transparent",style:u,children:b})]})]}),t.jsxs("div",{className:"border border-transparent w-1/2 flex flex-col gap-10 justify-center items-center text-left  ",children:[t.jsx("div",{className:"border border-transparent w-full pl-10 text-[22px]"}),t.jsx("div",{className:"  w-full pl-10 text-[18px]",children:t.jsxs("h3",{className:"  w-1/2 p-2 font-light ",children:["Smart Business Center ",t.jsx("br",{}),"First floor, Thapasya Building ",t.jsx("br",{}),"Thapasya Rd, InfoPark Campus ",t.jsx("br",{})," Infopark, Kochi ",t.jsx("br",{})," Kerala, India ",t.jsx("br",{})," 682030"]})})]}),t.jsxs("div",{className:" mt-[-160px] ",children:[t.jsx("h3",{style:u,className:"absolute  h-[97%] uppercase text-sm",children:"Ernakulam,kerala"}),t.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704172893/LYMDATALABS/Pages/webp/contact_q4zo6u.webp",alt:"img1",className:"h-full xl:w-[600px] px-10 absolute filter grayscale"})]})]}),t.jsxs("div",{className:"md:hidden flex pt-3  flex-col some-element",children:[t.jsxs("h3",{className:"flex  text-4xl mb-8 px-6 font-bold  ",children:["Our ",t.jsx("br",{})," locations"]}),t.jsxs("div",{className:"flex",children:[t.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704172893/LYMDATALABS/Pages/webp/contact_q4zo6u.webp",alt:"img2",className:"  pl-5 filter grayscale  overflow-hidden"}),t.jsxs("h3",{className:" py-5 text-sm uppercase  font-light",style:u,children:[" ","Ernakulam,kerala"]}),t.jsxs("div",{className:"flex flex-col  justify-around font-light ",children:[t.jsxs("div",{className:"flex flex-col gap-8 pr-1 ",children:[t.jsxs("h3",{className:"text-[12px]   border-transparent ",style:u,children:[(q=p==null?void 0:p.main)==null?void 0:q.temp,"°C"]}),t.jsx("h3",{className:"text-[12px]  border border-transparent",style:u,children:b})]}),t.jsx("div",{className:"invisible",children:t.jsx("h3",{className:"text-[12px] border border-transparent",style:u,children:"4:47 AM"})})]})]}),t.jsx("div",{className:" w-full px-6 mt-8 ",children:t.jsxs("h3",{className:"  p-2 font-light text-[18px]",children:["Smart Business Center ",t.jsx("br",{}),"First floor, Thapasya Building ",t.jsx("br",{}),"Thapasya Rd, InfoPark Campus ",t.jsx("br",{})," Infopark, Kochi ",t.jsx("br",{})," Kerala, India ",t.jsx("br",{})," 682030"]})})]})]})},Lt=()=>(Ue("LYMDATA LABS | Web Design company Kochi, Web development company kochi"),t.jsxs(t.Fragment,{children:[t.jsxs(Ve,{children:[t.jsx("title",{children:"LYMDATA LABS  | Web Design company Kochi, Web development company kochi"}),t.jsx("meta",{name:"description",content:"  Looking for a top web design company? Contact us now for professional and innovative web design solutions "}),t.jsx("link",{rel:"canonical",href:"  https://www.lymdata.com/contact "}),t.jsx("meta",{property:"og:title",content:"LYMDATA LABS  | Web Design company Kochi, Web development company kochi"}),t.jsx("meta",{property:"og:description",content:"   Looking for a top web design company? Contact us now for professional and innovative web design solutions  "}),t.jsx("meta",{name:"image",property:"og:image",content:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg"}),t.jsx("meta",{property:"og:url",content:"  https://www.lymdata.com/contact   "}),t.jsx("meta",{name:"twitter:title",content:"LYMDATA LABS  | Web Design company Kochi, Web development company kochi"}),t.jsx("meta",{name:"twitter:description",content:"  Looking for a top web design company? Contact us now for professional and innovative web design solutions  "}),t.jsx("meta",{name:"twitter:image",content:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg"})]}),t.jsx(Ye,{}),t.jsx(_t,{}),t.jsx(Ke,{})]}));export{Lt as default};
