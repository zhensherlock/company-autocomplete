var re=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ce(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function le(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var o=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};o.prototype=e.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(o,n,i.get?i:{enumerable:!0,get:function(){return t[n]}})}),o}const B=Math.min,C=Math.max,tt=Math.round,Z=Math.floor,V=t=>({x:t,y:t}),Pt={left:"right",right:"left",bottom:"top",top:"bottom"},Dt={start:"end",end:"start"};function ct(t,e,o){return C(t,B(e,o))}function I(t,e){return typeof t=="function"?t(e):t}function H(t){return t.split("-")[0]}function Y(t){return t.split("-")[1]}function yt(t){return t==="x"?"y":"x"}function at(t){return t==="y"?"height":"width"}function J(t){return["top","bottom"].includes(H(t))?"y":"x"}function ut(t){return yt(J(t))}function St(t,e,o){o===void 0&&(o=!1);const n=Y(t),i=ut(t),r=at(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=et(s)),[s,et(s)]}function Ft(t){const e=et(t);return[lt(t),e,lt(e)]}function lt(t){return t.replace(/start|end/g,e=>Dt[e])}function Mt(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:s;default:return[]}}function kt(t,e,o,n){const i=Y(t);let r=Mt(H(t),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(lt)))),r}function et(t){return t.replace(/left|right|bottom|top/g,e=>Pt[e])}function Wt(t){return{top:0,right:0,bottom:0,left:0,...t}}function vt(t){return typeof t!="number"?Wt(t):{top:t,right:t,bottom:t,left:t}}function nt(t){const{x:e,y:o,width:n,height:i}=t;return{width:n,height:i,top:o,left:e,right:e+n,bottom:o+i,x:e,y:o}}function ht(t,e,o){let{reference:n,floating:i}=t;const r=J(e),s=ut(e),l=at(s),c=H(e),f=r==="y",d=n.x+n.width/2-i.width/2,u=n.y+n.height/2-i.height/2,g=n[l]/2-i[l]/2;let a;switch(c){case"top":a={x:d,y:n.y-i.height};break;case"bottom":a={x:d,y:n.y+n.height};break;case"right":a={x:n.x+n.width,y:u};break;case"left":a={x:n.x-i.width,y:u};break;default:a={x:n.x,y:n.y}}switch(Y(e)){case"start":a[s]-=g*(o&&f?-1:1);break;case"end":a[s]+=g*(o&&f?-1:1);break}return a}const Nt=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=ht(f,n,c),g=n,a={},m=0;for(let h=0;h<l.length;h++){const{name:w,fn:p}=l[h],{x,y,data:b,reset:v}=await p({x:d,y:u,initialPlacement:n,placement:g,strategy:i,middlewareData:a,rects:f,platform:s,elements:{reference:t,floating:e}});d=x??d,u=y??u,a={...a,[w]:{...a[w],...b}},v&&m<=50&&(m++,typeof v=="object"&&(v.placement&&(g=v.placement),v.rects&&(f=v.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:u}=ht(f,g,c)),h=-1)}return{x:d,y:u,placement:g,strategy:i,middlewareData:a}};async function ot(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:g=!1,padding:a=0}=I(e,t),m=vt(a),w=l[g?u==="floating"?"reference":"floating":u],p=nt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(w)))==null||o?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:f,rootBoundary:d,strategy:c})),x=u==="floating"?{...s.floating,x:n,y:i}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),b=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},v=nt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:y,strategy:c}):x);return{top:(p.top-v.top+m.top)/b.y,bottom:(v.bottom-p.bottom+m.bottom)/b.y,left:(p.left-v.left+m.left)/b.x,right:(v.right-p.right+m.right)/b.x}}const Bt=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:r,platform:s,elements:l,middlewareData:c}=e,{element:f,padding:d=0}=I(t,e)||{};if(f==null)return{};const u=vt(d),g={x:o,y:n},a=ut(i),m=at(a),h=await s.getDimensions(f),w=a==="y",p=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",b=r.reference[m]+r.reference[a]-g[a]-r.floating[m],v=g[a]-r.reference[a],O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let A=O?O[y]:0;(!A||!await(s.isElement==null?void 0:s.isElement(O)))&&(A=l.floating[y]||r.floating[m]);const D=b/2-v/2,N=A/2-h[m]/2-1,q=B(u[p],N),U=B(u[x],N),T=q,G=A-h[m]-U,R=A/2-h[m]/2+D,S=ct(T,R,G),F=!c.arrow&&Y(i)!=null&&R!==S&&r.reference[m]/2-(R<T?q:U)-h[m]/2<0,k=F?R<T?R-T:R-G:0;return{[a]:g[a]+k,data:{[a]:S,centerOffset:R-S-k,...F&&{alignmentOffset:k}},reset:F}}}),Vt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:f}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...w}=I(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const p=H(i),x=H(l)===l,y=await(c.isRTL==null?void 0:c.isRTL(f.floating)),b=g||(x||!h?[et(l)]:Ft(l));!g&&m!=="none"&&b.push(...kt(l,h,m,y));const v=[l,...b],O=await ot(e,w),A=[];let D=((n=r.flip)==null?void 0:n.overflows)||[];if(d&&A.push(O[p]),u){const T=St(i,s,y);A.push(O[T[0]],O[T[1]])}if(D=[...D,{placement:i,overflows:A}],!A.every(T=>T<=0)){var N,q;const T=(((N=r.flip)==null?void 0:N.index)||0)+1,G=v[T];if(G)return{data:{index:T,overflows:D},reset:{placement:G}};let R=(q=D.filter(S=>S.overflows[0]<=0).sort((S,F)=>S.overflows[1]-F.overflows[1])[0])==null?void 0:q.placement;if(!R)switch(a){case"bestFit":{var U;const S=(U=D.map(F=>[F.placement,F.overflows.filter(k=>k>0).reduce((k,Lt)=>k+Lt,0)]).sort((F,k)=>F[1]-k[1])[0])==null?void 0:U[0];S&&(R=S);break}case"initialPlacement":R=l;break}if(i!==R)return{reset:{placement:R}}}return{}}}};async function Ht(t,e){const{placement:o,platform:n,elements:i}=t,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=H(o),l=Y(o),c=J(o)==="y",f=["left","top"].includes(s)?-1:1,d=r&&c?-1:1,u=I(e,t);let{mainAxis:g,crossAxis:a,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof m=="number"&&(a=l==="end"?m*-1:m),c?{x:a*d,y:g*f}:{x:g*f,y:a*d}}const _t=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:r,placement:s,middlewareData:l}=e,c=await Ht(e,t);return s===((o=l.offset)==null?void 0:o.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}},$t=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:w=>{let{x:p,y:x}=w;return{x:p,y:x}}},...c}=I(t,e),f={x:o,y:n},d=await ot(e,c),u=J(H(i)),g=yt(u);let a=f[g],m=f[u];if(r){const w=g==="y"?"top":"left",p=g==="y"?"bottom":"right",x=a+d[w],y=a-d[p];a=ct(x,a,y)}if(s){const w=u==="y"?"top":"left",p=u==="y"?"bottom":"right",x=m+d[w],y=m-d[p];m=ct(x,m,y)}const h=l.fn({...e,[g]:a,[u]:m});return{...h,data:{x:h.x-o,y:h.y-n}}}}},jt=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:n,platform:i,elements:r}=e,{apply:s=()=>{},...l}=I(t,e),c=await ot(e,l),f=H(o),d=Y(o),u=J(o)==="y",{width:g,height:a}=n.floating;let m,h;f==="top"||f==="bottom"?(m=f,h=d===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(h=f,m=d==="end"?"top":"bottom");const w=a-c[m],p=g-c[h],x=!e.middlewareData.shift;let y=w,b=p;if(u){const O=g-c.left-c.right;b=d||x?B(p,O):O}else{const O=a-c.top-c.bottom;y=d||x?B(w,O):O}if(x&&!d){const O=C(c.left,0),A=C(c.right,0),D=C(c.top,0),N=C(c.bottom,0);u?b=g-2*(O!==0||A!==0?O+A:C(c.left,c.right)):y=a-2*(D!==0||N!==0?D+N:C(c.top,c.bottom))}await s({...e,availableWidth:b,availableHeight:y});const v=await i.getDimensions(r.floating);return g!==v.width||a!==v.height?{reset:{rects:!0}}:{}}}};function X(t){return bt(t)?(t.nodeName||"").toLowerCase():"#document"}function E(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function W(t){var e;return(e=(bt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function bt(t){return t instanceof Node||t instanceof E(t).Node}function L(t){return t instanceof Element||t instanceof E(t).Element}function M(t){return t instanceof HTMLElement||t instanceof E(t).HTMLElement}function pt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof E(t).ShadowRoot}function Q(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function zt(t){return["table","td","th"].includes(X(t))}function it(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function dt(t){const e=mt(),o=L(t)?P(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function It(t){let e=_(t);for(;M(e)&&!z(e);){if(dt(e))return e;if(it(e))return null;e=_(e)}return null}function mt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function z(t){return["html","body","#document"].includes(X(t))}function P(t){return E(t).getComputedStyle(t)}function st(t){return L(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function _(t){if(X(t)==="html")return t;const e=t.assignedSlot||t.parentNode||pt(t)&&t.host||W(t);return pt(e)?e.host:e}function Ot(t){const e=_(t);return z(e)?t.ownerDocument?t.ownerDocument.body:t.body:M(e)&&Q(e)?e:Ot(e)}function K(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=Ot(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=E(i);if(r){const l=ft(s);return e.concat(s,s.visualViewport||[],Q(i)?i:[],l&&o?K(l):[])}return e.concat(i,K(i,[],o))}function ft(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function At(t){const e=P(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=M(t),r=i?t.offsetWidth:o,s=i?t.offsetHeight:n,l=tt(o)!==r||tt(n)!==s;return l&&(o=r,n=s),{width:o,height:n,$:l}}function gt(t){return L(t)?t:t.contextElement}function j(t){const e=gt(t);if(!M(e))return V(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:r}=At(e);let s=(r?tt(o.width):o.width)/n,l=(r?tt(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Yt=V(0);function Rt(t){const e=E(t);return!mt()||!e.visualViewport?Yt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Xt(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==E(t)?!1:e}function $(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=gt(t);let s=V(1);e&&(n?L(n)&&(s=j(n)):s=j(t));const l=Xt(r,o,n)?Rt(r):V(0);let c=(i.left+l.x)/s.x,f=(i.top+l.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const g=E(r),a=n&&L(n)?E(n):n;let m=g,h=ft(m);for(;h&&n&&a!==m;){const w=j(h),p=h.getBoundingClientRect(),x=P(h),y=p.left+(h.clientLeft+parseFloat(x.paddingLeft))*w.x,b=p.top+(h.clientTop+parseFloat(x.paddingTop))*w.y;c*=w.x,f*=w.y,d*=w.x,u*=w.y,c+=y,f+=b,m=E(h),h=ft(m)}}return nt({width:d,height:u,x:c,y:f})}function qt(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const r=i==="fixed",s=W(n),l=e?it(e.floating):!1;if(n===s||l&&r)return o;let c={scrollLeft:0,scrollTop:0},f=V(1);const d=V(0),u=M(n);if((u||!u&&!r)&&((X(n)!=="body"||Q(s))&&(c=st(n)),M(n))){const g=$(n);f=j(n),d.x=g.x+n.clientLeft,d.y=g.y+n.clientTop}return{width:o.width*f.x,height:o.height*f.y,x:o.x*f.x-c.scrollLeft*f.x+d.x,y:o.y*f.y-c.scrollTop*f.y+d.y}}function Ut(t){return Array.from(t.getClientRects())}function Ct(t){return $(W(t)).left+st(t).scrollLeft}function Gt(t){const e=W(t),o=st(t),n=t.ownerDocument.body,i=C(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=C(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+Ct(t);const l=-o.scrollTop;return P(n).direction==="rtl"&&(s+=C(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:l}}function Kt(t,e){const o=E(t),n=W(t),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const f=mt();(!f||f&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function Jt(t,e){const o=$(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=M(t)?j(t):V(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,f=n*r.y;return{width:s,height:l,x:c,y:f}}function wt(t,e,o){let n;if(e==="viewport")n=Kt(t,o);else if(e==="document")n=Gt(W(t));else if(L(e))n=Jt(e,o);else{const i=Rt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return nt(n)}function Et(t,e){const o=_(t);return o===e||!L(o)||z(o)?!1:P(o).position==="fixed"||Et(o,e)}function Qt(t,e){const o=e.get(t);if(o)return o;let n=K(t,[],!1).filter(l=>L(l)&&X(l)!=="body"),i=null;const r=P(t).position==="fixed";let s=r?_(t):t;for(;L(s)&&!z(s);){const l=P(s),c=dt(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Q(s)&&!c&&Et(t,s))?n=n.filter(d=>d!==s):i=l,s=_(s)}return e.set(t,n),n}function Zt(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const s=[...o==="clippingAncestors"?it(e)?[]:Qt(e,this._c):[].concat(o),n],l=s[0],c=s.reduce((f,d)=>{const u=wt(e,d,i);return f.top=C(u.top,f.top),f.right=B(u.right,f.right),f.bottom=B(u.bottom,f.bottom),f.left=C(u.left,f.left),f},wt(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function te(t){const{width:e,height:o}=At(t);return{width:e,height:o}}function ee(t,e,o){const n=M(e),i=W(e),r=o==="fixed",s=$(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=V(0);if(n||!n&&!r)if((X(e)!=="body"||Q(i))&&(l=st(e)),n){const u=$(e,!0,r,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else i&&(c.x=Ct(i));const f=s.left+l.scrollLeft-c.x,d=s.top+l.scrollTop-c.y;return{x:f,y:d,width:s.width,height:s.height}}function rt(t){return P(t).position==="static"}function xt(t,e){return!M(t)||P(t).position==="fixed"?null:e?e(t):t.offsetParent}function Tt(t,e){const o=E(t);if(it(t))return o;if(!M(t)){let i=_(t);for(;i&&!z(i);){if(L(i)&&!rt(i))return i;i=_(i)}return o}let n=xt(t,e);for(;n&&zt(n)&&rt(n);)n=xt(n,e);return n&&z(n)&&rt(n)&&!dt(n)?o:n||It(t)||o}const ne=async function(t){const e=this.getOffsetParent||Tt,o=this.getDimensions,n=await o(t.floating);return{reference:ee(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function oe(t){return P(t).direction==="rtl"}const ie={convertOffsetParentRelativeRectToViewportRelativeRect:qt,getDocumentElement:W,getClippingRect:Zt,getOffsetParent:Tt,getElementRects:ne,getClientRects:Ut,getDimensions:te,getScale:j,isElement:L,isRTL:oe};function se(t,e){let o=null,n;const i=W(t);function r(){var l;clearTimeout(n),(l=o)==null||l.disconnect(),o=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:f,top:d,width:u,height:g}=t.getBoundingClientRect();if(l||e(),!u||!g)return;const a=Z(d),m=Z(i.clientWidth-(f+u)),h=Z(i.clientHeight-(d+g)),w=Z(f),x={rootMargin:-a+"px "+-m+"px "+-h+"px "+-w+"px",threshold:C(0,B(1,c))||1};let y=!0;function b(v){const O=v[0].intersectionRatio;if(O!==c){if(!y)return s();O?s(!1,O):n=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{o=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{o=new IntersectionObserver(b,x)}o.observe(t)}return s(!0),r}function fe(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=n,f=gt(t),d=i||r?[...f?K(f):[],...K(e)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",o,{passive:!0}),r&&p.addEventListener("resize",o)});const u=f&&l?se(f,o):null;let g=-1,a=null;s&&(a=new ResizeObserver(p=>{let[x]=p;x&&x.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var y;(y=a)==null||y.observe(e)})),o()}),f&&!c&&a.observe(f),a.observe(e));let m,h=c?$(t):null;c&&w();function w(){const p=$(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&o(),h=p,m=requestAnimationFrame(w)}return o(),()=>{var p;d.forEach(x=>{i&&x.removeEventListener("scroll",o),r&&x.removeEventListener("resize",o)}),u==null||u(),(p=a)==null||p.disconnect(),a=null,c&&cancelAnimationFrame(m)}}const ae=ot,ue=_t,de=$t,me=Vt,ge=jt,he=Bt,pe=(t,e,o)=>{const n=new Map,i={platform:ie,...o},r={...i.platform,_c:n};return Nt(t,e,{...i,platform:r})};export{ce as a,fe as b,re as c,pe as d,he as e,me as f,le as g,de as h,ae as i,ue as o,ge as s};