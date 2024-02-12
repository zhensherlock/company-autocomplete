var ie=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function se(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function re(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var o=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};o.prototype=e.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(o,n,i.get?i:{enumerable:!0,get:function(){return t[n]}})}),o}const B=Math.min,C=Math.max,Z=Math.round,Q=Math.floor,V=t=>({x:t,y:t}),Tt={left:"right",right:"left",bottom:"top",top:"bottom"},Lt={start:"end",end:"start"};function it(t,e,o){return C(t,B(e,o))}function I(t,e){return typeof t=="function"?t(e):t}function H(t){return t.split("-")[0]}function Y(t){return t.split("-")[1]}function ht(t){return t==="x"?"y":"x"}function rt(t){return t==="y"?"height":"width"}function K(t){return["top","bottom"].includes(H(t))?"y":"x"}function ct(t){return ht(K(t))}function Dt(t,e,o){o===void 0&&(o=!1);const n=Y(t),i=ct(t),r=rt(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=tt(s)),[s,tt(s)]}function Pt(t){const e=tt(t);return[st(t),e,st(e)]}function st(t){return t.replace(/start|end/g,e=>Lt[e])}function St(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:s;default:return[]}}function Mt(t,e,o,n){const i=Y(t);let r=St(H(t),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(st)))),r}function tt(t){return t.replace(/left|right|bottom|top/g,e=>Tt[e])}function Ft(t){return{top:0,right:0,bottom:0,left:0,...t}}function wt(t){return typeof t!="number"?Ft(t):{top:t,right:t,bottom:t,left:t}}function et(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function dt(t,e,o){let{reference:n,floating:i}=t;const r=K(e),s=ct(e),l=rt(s),c=H(e),f=r==="y",d=n.x+n.width/2-i.width/2,u=n.y+n.height/2-i.height/2,g=n[l]/2-i[l]/2;let a;switch(c){case"top":a={x:d,y:n.y-i.height};break;case"bottom":a={x:d,y:n.y+n.height};break;case"right":a={x:n.x+n.width,y:u};break;case"left":a={x:n.x-i.width,y:u};break;default:a={x:n.x,y:n.y}}switch(Y(e)){case"start":a[s]-=g*(o&&f?-1:1);break;case"end":a[s]+=g*(o&&f?-1:1);break}return a}const kt=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=dt(f,n,c),g=n,a={},m=0;for(let p=0;p<l.length;p++){const{name:w,fn:h}=l[p],{x,y,data:b,reset:v}=await h({x:d,y:u,initialPlacement:n,placement:g,strategy:i,middlewareData:a,rects:f,platform:s,elements:{reference:t,floating:e}});d=x??d,u=y??u,a={...a,[w]:{...a[w],...b}},v&&m<=50&&(m++,typeof v=="object"&&(v.placement&&(g=v.placement),v.rects&&(f=v.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:u}=dt(f,g,c)),p=-1)}return{x:d,y:u,placement:g,strategy:i,middlewareData:a}};async function lt(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:g=!1,padding:a=0}=I(e,t),m=wt(a),w=l[g?u==="floating"?"reference":"floating":u],h=et(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(w)))==null||o?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:f,rootBoundary:d,strategy:c})),x=u==="floating"?{...s.floating,x:n,y:i}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),b=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},v=et(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:y,strategy:c}):x);return{top:(h.top-v.top+m.top)/b.y,bottom:(v.bottom-h.bottom+m.bottom)/b.y,left:(h.left-v.left+m.left)/b.x,right:(v.right-h.right+m.right)/b.x}}const Wt=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:r,platform:s,elements:l,middlewareData:c}=e,{element:f,padding:d=0}=I(t,e)||{};if(f==null)return{};const u=wt(d),g={x:o,y:n},a=ct(i),m=rt(a),p=await s.getDimensions(f),w=a==="y",h=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",b=r.reference[m]+r.reference[a]-g[a]-r.floating[m],v=g[a]-r.reference[a],O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let A=O?O[y]:0;(!A||!await(s.isElement==null?void 0:s.isElement(O)))&&(A=l.floating[y]||r.floating[m]);const D=b/2-v/2,N=A/2-p[m]/2-1,X=B(u[h],N),q=B(u[x],N),T=X,U=A-p[m]-q,R=A/2-p[m]/2+D,P=it(T,R,U),S=!c.arrow&&Y(i)!=null&&R!==P&&r.reference[m]/2-(R<T?X:q)-p[m]/2<0,F=S?R<T?R-T:R-U:0;return{[a]:g[a]+F,data:{[a]:P,centerOffset:R-P-F,...S&&{alignmentOffset:F}},reset:S}}}),Nt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:f}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:p=!0,...w}=I(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const h=H(i),x=H(l)===l,y=await(c.isRTL==null?void 0:c.isRTL(f.floating)),b=g||(x||!p?[tt(l)]:Pt(l));!g&&m!=="none"&&b.push(...Mt(l,p,m,y));const v=[l,...b],O=await lt(e,w),A=[];let D=((n=r.flip)==null?void 0:n.overflows)||[];if(d&&A.push(O[h]),u){const T=Dt(i,s,y);A.push(O[T[0]],O[T[1]])}if(D=[...D,{placement:i,overflows:A}],!A.every(T=>T<=0)){var N,X;const T=(((N=r.flip)==null?void 0:N.index)||0)+1,U=v[T];if(U)return{data:{index:T,overflows:D},reset:{placement:U}};let R=(X=D.filter(P=>P.overflows[0]<=0).sort((P,S)=>P.overflows[1]-S.overflows[1])[0])==null?void 0:X.placement;if(!R)switch(a){case"bestFit":{var q;const P=(q=D.map(S=>[S.placement,S.overflows.filter(F=>F>0).reduce((F,Et)=>F+Et,0)]).sort((S,F)=>S[1]-F[1])[0])==null?void 0:q[0];P&&(R=P);break}case"initialPlacement":R=l;break}if(i!==R)return{reset:{placement:R}}}return{}}}};async function Bt(t,e){const{placement:o,platform:n,elements:i}=t,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=H(o),l=Y(o),c=K(o)==="y",f=["left","top"].includes(s)?-1:1,d=r&&c?-1:1,u=I(e,t);let{mainAxis:g,crossAxis:a,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof m=="number"&&(a=l==="end"?m*-1:m),c?{x:a*d,y:g*f}:{x:g*f,y:a*d}}const ce=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:r,placement:s,middlewareData:l}=e,c=await Bt(e,t);return s===((o=l.offset)==null?void 0:o.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}},Vt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:w=>{let{x:h,y:x}=w;return{x:h,y:x}}},...c}=I(t,e),f={x:o,y:n},d=await lt(e,c),u=K(H(i)),g=ht(u);let a=f[g],m=f[u];if(r){const w=g==="y"?"top":"left",h=g==="y"?"bottom":"right",x=a+d[w],y=a-d[h];a=it(x,a,y)}if(s){const w=u==="y"?"top":"left",h=u==="y"?"bottom":"right",x=m+d[w],y=m-d[h];m=it(x,m,y)}const p=l.fn({...e,[g]:a,[u]:m});return{...p,data:{x:p.x-o,y:p.y-n}}}}},Ht=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:n,platform:i,elements:r}=e,{apply:s=()=>{},...l}=I(t,e),c=await lt(e,l),f=H(o),d=Y(o),u=K(o)==="y",{width:g,height:a}=n.floating;let m,p;f==="top"||f==="bottom"?(m=f,p=d===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(p=f,m=d==="end"?"top":"bottom");const w=a-c[m],h=g-c[p],x=!e.middlewareData.shift;let y=w,b=h;if(u){const O=g-c.left-c.right;b=d||x?B(h,O):O}else{const O=a-c.top-c.bottom;y=d||x?B(w,O):O}if(x&&!d){const O=C(c.left,0),A=C(c.right,0),D=C(c.top,0),N=C(c.bottom,0);u?b=g-2*(O!==0||A!==0?O+A:C(c.left,c.right)):y=a-2*(D!==0||N!==0?D+N:C(c.top,c.bottom))}await s({...e,availableWidth:b,availableHeight:y});const v=await i.getDimensions(r.floating);return g!==v.width||a!==v.height?{reset:{rects:!0}}:{}}}};function _(t){return xt(t)?(t.nodeName||"").toLowerCase():"#document"}function E(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function W(t){var e;return(e=(xt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function xt(t){return t instanceof Node||t instanceof E(t).Node}function k(t){return t instanceof Element||t instanceof E(t).Element}function M(t){return t instanceof HTMLElement||t instanceof E(t).HTMLElement}function mt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof E(t).ShadowRoot}function J(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function _t(t){return["table","td","th"].includes(_(t))}function ft(t){const e=at(),o=L(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function zt(t){let e=$(t);for(;M(e)&&!nt(e);){if(ft(e))return e;e=$(e)}return null}function at(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function nt(t){return["html","body","#document"].includes(_(t))}function L(t){return E(t).getComputedStyle(t)}function ot(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function $(t){if(_(t)==="html")return t;const e=t.assignedSlot||t.parentNode||mt(t)&&t.host||W(t);return mt(e)?e.host:e}function yt(t){const e=$(t);return nt(e)?t.ownerDocument?t.ownerDocument.body:t.body:M(e)&&J(e)?e:yt(e)}function G(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=yt(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=E(i);return r?e.concat(s,s.visualViewport||[],J(i)?i:[],s.frameElement&&o?G(s.frameElement):[]):e.concat(i,G(i,[],o))}function vt(t){const e=L(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=M(t),r=i?t.offsetWidth:o,s=i?t.offsetHeight:n,l=Z(o)!==r||Z(n)!==s;return l&&(o=r,n=s),{width:o,height:n,$:l}}function ut(t){return k(t)?t:t.contextElement}function j(t){const e=ut(t);if(!M(e))return V(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:r}=vt(e);let s=(r?Z(o.width):o.width)/n,l=(r?Z(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const jt=V(0);function bt(t){const e=E(t);return!at()||!e.visualViewport?jt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function $t(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==E(t)?!1:e}function z(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=ut(t);let s=V(1);e&&(n?k(n)&&(s=j(n)):s=j(t));const l=$t(r,o,n)?bt(r):V(0);let c=(i.left+l.x)/s.x,f=(i.top+l.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const g=E(r),a=n&&k(n)?E(n):n;let m=g,p=m.frameElement;for(;p&&n&&a!==m;){const w=j(p),h=p.getBoundingClientRect(),x=L(p),y=h.left+(p.clientLeft+parseFloat(x.paddingLeft))*w.x,b=h.top+(p.clientTop+parseFloat(x.paddingTop))*w.y;c*=w.x,f*=w.y,d*=w.x,u*=w.y,c+=y,f+=b,m=E(p),p=m.frameElement}}return et({width:d,height:u,x:c,y:f})}const It=[":popover-open",":modal"];function Ot(t){return It.some(e=>{try{return t.matches(e)}catch{return!1}})}function Yt(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const r=i==="fixed",s=W(n),l=e?Ot(e.floating):!1;if(n===s||l&&r)return o;let c={scrollLeft:0,scrollTop:0},f=V(1);const d=V(0),u=M(n);if((u||!u&&!r)&&((_(n)!=="body"||J(s))&&(c=ot(n)),M(n))){const g=z(n);f=j(n),d.x=g.x+n.clientLeft,d.y=g.y+n.clientTop}return{width:o.width*f.x,height:o.height*f.y,x:o.x*f.x-c.scrollLeft*f.x+d.x,y:o.y*f.y-c.scrollTop*f.y+d.y}}function Xt(t){return Array.from(t.getClientRects())}function At(t){return z(W(t)).left+ot(t).scrollLeft}function qt(t){const e=W(t),o=ot(t),n=t.ownerDocument.body,i=C(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=C(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+At(t);const l=-o.scrollTop;return L(n).direction==="rtl"&&(s+=C(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:l}}function Ut(t,e){const o=E(t),n=W(t),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const f=at();(!f||f&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function Gt(t,e){const o=z(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=M(t)?j(t):V(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,f=n*r.y;return{width:s,height:l,x:c,y:f}}function gt(t,e,o){let n;if(e==="viewport")n=Ut(t,o);else if(e==="document")n=qt(W(t));else if(k(e))n=Gt(e,o);else{const i=bt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return et(n)}function Rt(t,e){const o=$(t);return o===e||!k(o)||nt(o)?!1:L(o).position==="fixed"||Rt(o,e)}function Kt(t,e){const o=e.get(t);if(o)return o;let n=G(t,[],!1).filter(l=>k(l)&&_(l)!=="body"),i=null;const r=L(t).position==="fixed";let s=r?$(t):t;for(;k(s)&&!nt(s);){const l=L(s),c=ft(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||J(s)&&!c&&Rt(t,s))?n=n.filter(d=>d!==s):i=l,s=$(s)}return e.set(t,n),n}function Jt(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const s=[...o==="clippingAncestors"?Kt(e,this._c):[].concat(o),n],l=s[0],c=s.reduce((f,d)=>{const u=gt(e,d,i);return f.top=C(u.top,f.top),f.right=B(u.right,f.right),f.bottom=B(u.bottom,f.bottom),f.left=C(u.left,f.left),f},gt(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Qt(t){const{width:e,height:o}=vt(t);return{width:e,height:o}}function Zt(t,e,o){const n=M(e),i=W(e),r=o==="fixed",s=z(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=V(0);if(n||!n&&!r)if((_(e)!=="body"||J(i))&&(l=ot(e)),n){const u=z(e,!0,r,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else i&&(c.x=At(i));const f=s.left+l.scrollLeft-c.x,d=s.top+l.scrollTop-c.y;return{x:f,y:d,width:s.width,height:s.height}}function pt(t,e){return!M(t)||L(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ct(t,e){const o=E(t);if(!M(t)||Ot(t))return o;let n=pt(t,e);for(;n&&_t(n)&&L(n).position==="static";)n=pt(n,e);return n&&(_(n)==="html"||_(n)==="body"&&L(n).position==="static"&&!ft(n))?o:n||zt(t)||o}const te=async function(t){const e=this.getOffsetParent||Ct,o=this.getDimensions;return{reference:Zt(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await o(t.floating)}}};function ee(t){return L(t).direction==="rtl"}const ne={convertOffsetParentRelativeRectToViewportRelativeRect:Yt,getDocumentElement:W,getClippingRect:Jt,getOffsetParent:Ct,getElementRects:te,getClientRects:Xt,getDimensions:Qt,getScale:j,isElement:k,isRTL:ee};function oe(t,e){let o=null,n;const i=W(t);function r(){var l;clearTimeout(n),(l=o)==null||l.disconnect(),o=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:f,top:d,width:u,height:g}=t.getBoundingClientRect();if(l||e(),!u||!g)return;const a=Q(d),m=Q(i.clientWidth-(f+u)),p=Q(i.clientHeight-(d+g)),w=Q(f),x={rootMargin:-a+"px "+-m+"px "+-p+"px "+-w+"px",threshold:C(0,B(1,c))||1};let y=!0;function b(v){const O=v[0].intersectionRatio;if(O!==c){if(!y)return s();O?s(!1,O):n=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{o=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{o=new IntersectionObserver(b,x)}o.observe(t)}return s(!0),r}function le(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=n,f=ut(t),d=i||r?[...f?G(f):[],...G(e)]:[];d.forEach(h=>{i&&h.addEventListener("scroll",o,{passive:!0}),r&&h.addEventListener("resize",o)});const u=f&&l?oe(f,o):null;let g=-1,a=null;s&&(a=new ResizeObserver(h=>{let[x]=h;x&&x.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var y;(y=a)==null||y.observe(e)})),o()}),f&&!c&&a.observe(f),a.observe(e));let m,p=c?z(t):null;c&&w();function w(){const h=z(t);p&&(h.x!==p.x||h.y!==p.y||h.width!==p.width||h.height!==p.height)&&o(),p=h,m=requestAnimationFrame(w)}return o(),()=>{var h;d.forEach(x=>{i&&x.removeEventListener("scroll",o),r&&x.removeEventListener("resize",o)}),u==null||u(),(h=a)==null||h.disconnect(),a=null,c&&cancelAnimationFrame(m)}}const fe=Vt,ae=Nt,ue=Ht,de=Wt,me=(t,e,o)=>{const n=new Map,i={platform:ne,...o},r={...i.platform,_c:n};return kt(t,e,{...i,platform:r})};export{se as a,le as b,ie as c,me as d,de as e,ae as f,re as g,fe as h,lt as i,ce as o,ue as s};
