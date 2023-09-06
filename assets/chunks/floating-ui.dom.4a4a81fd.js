var Jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Zt(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function o(){return this instanceof o?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(o){var i=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(n,o,i.get?i:{enumerable:!0,get:function(){return t[o]}})}),n}const W=Math.min,A=Math.max,K=Math.round,G=Math.floor,B=t=>({x:t,y:t}),Rt={left:"right",right:"left",bottom:"top",top:"bottom"},At={start:"end",end:"start"};function Ct(t,e,n){return A(t,W(e,n))}function q(t,e){return typeof t=="function"?t(e):t}function j(t){return t.split("-")[0]}function Y(t){return t.split("-")[1]}function Et(t){return t==="x"?"y":"x"}function it(t){return t==="y"?"height":"width"}function tt(t){return["top","bottom"].includes(j(t))?"y":"x"}function st(t){return Et(tt(t))}function Tt(t,e,n){n===void 0&&(n=!1);const o=Y(t),i=st(t),r=it(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=J(s)),[s,J(s)]}function Lt(t){const e=J(t);return[ot(t),e,ot(e)]}function ot(t){return t.replace(/start|end/g,e=>At[e])}function Pt(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Dt(t,e,n,o){const i=Y(t);let r=Pt(j(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(ot)))),r}function J(t){return t.replace(/left|right|bottom|top/g,e=>Rt[e])}function St(t){return{top:0,right:0,bottom:0,left:0,...t}}function mt(t){return typeof t!="number"?St(t):{top:t,right:t,bottom:t,left:t}}function Q(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function ft(t,e,n){let{reference:o,floating:i}=t;const r=tt(e),s=st(e),l=it(s),c=j(e),f=r==="y",m=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,d=o[l]/2-i[l]/2;let a;switch(c){case"top":a={x:m,y:o.y-i.height};break;case"bottom":a={x:m,y:o.y+o.height};break;case"right":a={x:o.x+o.width,y:u};break;case"left":a={x:o.x-i.width,y:u};break;default:a={x:o.x,y:o.y}}switch(Y(e)){case"start":a[s]-=d*(n&&f?-1:1);break;case"end":a[s]+=d*(n&&f?-1:1);break}return a}const Mt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:m,y:u}=ft(f,o,c),d=o,a={},g=0;for(let p=0;p<l.length;p++){const{name:b,fn:h}=l[p],{x:y,y:v,data:O,reset:w}=await h({x:m,y:u,initialPlacement:o,placement:d,strategy:i,middlewareData:a,rects:f,platform:s,elements:{reference:t,floating:e}});if(m=y??m,u=v??u,a={...a,[b]:{...a[b],...O}},w&&g<=50){g++,typeof w=="object"&&(w.placement&&(d=w.placement),w.rects&&(f=w.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):w.rects),{x:m,y:u}=ft(f,d,c)),p=-1;continue}}return{x:m,y:u,placement:d,strategy:i,middlewareData:a}};async function gt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:m="viewport",elementContext:u="floating",altBoundary:d=!1,padding:a=0}=q(e,t),g=mt(a),b=l[d?u==="floating"?"reference":"floating":u],h=Q(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(b)))==null||n?b:b.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:f,rootBoundary:m,strategy:c})),y=u==="floating"?{...s.floating,x:o,y:i}:s.reference,v=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),O=await(r.isElement==null?void 0:r.isElement(v))?await(r.getScale==null?void 0:r.getScale(v))||{x:1,y:1}:{x:1,y:1},w=Q(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:v,strategy:c}):y);return{top:(h.top-w.top+g.top)/O.y,bottom:(w.bottom-h.bottom+g.bottom)/O.y,left:(h.left-w.left+g.left)/O.x,right:(w.right-h.right+g.right)/O.x}}const te=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:l}=e,{element:c,padding:f=0}=q(t,e)||{};if(c==null)return{};const m=mt(f),u={x:n,y:o},d=st(i),a=it(d),g=await s.getDimensions(c),p=d==="y",b=p?"top":"left",h=p?"bottom":"right",y=p?"clientHeight":"clientWidth",v=r.reference[a]+r.reference[d]-u[d]-r.floating[a],O=u[d]-r.reference[d],w=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let x=w?w[y]:0;(!x||!await(s.isElement==null?void 0:s.isElement(w)))&&(x=l.floating[y]||r.floating[a]);const L=v/2-O/2,F=x/2-g[a]/2-1,k=W(m[b],F),X=W(m[h],F),E=k,$=x-g[a]-X,R=x/2-g[a]/2+L,P=Ct(E,R,$),N=Y(i)!=null&&R!=P&&r.reference[a]/2-(R<E?k:X)-g[a]/2<0?R<E?E-R:$-R:0;return{[d]:u[d]-N,data:{[d]:P,centerOffset:R-P+N}}}}),ee=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:s,platform:l,elements:c}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:u,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:a="none",flipAlignment:g=!0,...p}=q(t,e),b=j(o),h=j(s)===s,y=await(l.isRTL==null?void 0:l.isRTL(c.floating)),v=u||(h||!g?[J(s)]:Lt(s));!u&&a!=="none"&&v.push(...Dt(s,g,a,y));const O=[s,...v],w=await gt(e,p),x=[];let L=((n=i.flip)==null?void 0:n.overflows)||[];if(f&&x.push(w[b]),m){const E=Tt(o,r,y);x.push(w[E[0]],w[E[1]])}if(L=[...L,{placement:o,overflows:x}],!x.every(E=>E<=0)){var F,k;const E=(((F=i.flip)==null?void 0:F.index)||0)+1,$=O[E];if($)return{data:{index:E,overflows:L},reset:{placement:$}};let R=(k=L.filter(P=>P.overflows[0]<=0).sort((P,H)=>P.overflows[1]-H.overflows[1])[0])==null?void 0:k.placement;if(!R)switch(d){case"bestFit":{var X;const P=(X=L.map(H=>[H.placement,H.overflows.filter(N=>N>0).reduce((N,Ot)=>N+Ot,0)]).sort((H,N)=>H[1]-N[1])[0])==null?void 0:X[0];P&&(R=P);break}case"initialPlacement":R=s;break}if(o!==R)return{reset:{placement:R}}}return{}}}};async function Ft(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=j(n),l=Y(n),c=tt(n)==="y",f=["left","top"].includes(s)?-1:1,m=r&&c?-1:1,u=q(e,t);let{mainAxis:d,crossAxis:a,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof g=="number"&&(a=l==="end"?g*-1:g),c?{x:a*m,y:d*f}:{x:d*f,y:a*m}}const ne=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await Ft(e,t);return{x:n+i.x,y:o+i.y,data:i}}}},oe=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:r}=e,{apply:s=()=>{},...l}=q(t,e),c=await gt(e,l),f=j(n),m=Y(n),u=tt(n)==="y",{width:d,height:a}=o.floating;let g,p;f==="top"||f==="bottom"?(g=f,p=m===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(p=f,g=m==="end"?"top":"bottom");const b=a-c[g],h=d-c[p],y=!e.middlewareData.shift;let v=b,O=h;if(u){const x=d-c.left-c.right;O=m||y?W(h,x):x}else{const x=a-c.top-c.bottom;v=m||y?W(b,x):x}if(y&&!m){const x=A(c.left,0),L=A(c.right,0),F=A(c.top,0),k=A(c.bottom,0);u?O=d-2*(x!==0||L!==0?x+L:A(c.left,c.right)):v=a-2*(F!==0||k!==0?F+k:A(c.top,c.bottom))}await s({...e,availableWidth:O,availableHeight:v});const w=await i.getDimensions(r.floating);return d!==w.width||a!==w.height?{reset:{rects:!0}}:{}}}};function V(t){return pt(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function M(t){var e;return(e=(pt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function pt(t){return t instanceof Node||t instanceof C(t).Node}function S(t){return t instanceof Element||t instanceof C(t).Element}function D(t){return t instanceof HTMLElement||t instanceof C(t).HTMLElement}function at(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function U(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function kt(t){return["table","td","th"].includes(V(t))}function rt(t){const e=ct(),n=T(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Nt(t){let e=_(t);for(;D(e)&&!et(e);){if(rt(e))return e;e=_(e)}return null}function ct(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function et(t){return["html","body","#document"].includes(V(t))}function T(t){return C(t).getComputedStyle(t)}function nt(t){return S(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function _(t){if(V(t)==="html")return t;const e=t.assignedSlot||t.parentNode||at(t)&&t.host||M(t);return at(e)?e.host:e}function ht(t){const e=_(t);return et(e)?t.ownerDocument?t.ownerDocument.body:t.body:D(e)&&U(e)?e:ht(e)}function Z(t,e){var n;e===void 0&&(e=[]);const o=ht(t),i=o===((n=t.ownerDocument)==null?void 0:n.body),r=C(o);return i?e.concat(r,r.visualViewport||[],U(o)?o:[]):e.concat(o,Z(o))}function wt(t){const e=T(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=D(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=K(n)!==r||K(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function lt(t){return S(t)?t:t.contextElement}function z(t){const e=lt(t);if(!D(e))return B(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=wt(e);let s=(r?K(n.width):n.width)/o,l=(r?K(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Wt=B(0);function yt(t){const e=C(t);return!ct()||!e.visualViewport?Wt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Bt(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==C(t)?!1:e}function I(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=lt(t);let s=B(1);e&&(o?S(o)&&(s=z(o)):s=z(t));const l=Bt(r,n,o)?yt(r):B(0);let c=(i.left+l.x)/s.x,f=(i.top+l.y)/s.y,m=i.width/s.x,u=i.height/s.y;if(r){const d=C(r),a=o&&S(o)?C(o):o;let g=d.frameElement;for(;g&&o&&a!==d;){const p=z(g),b=g.getBoundingClientRect(),h=T(g),y=b.left+(g.clientLeft+parseFloat(h.paddingLeft))*p.x,v=b.top+(g.clientTop+parseFloat(h.paddingTop))*p.y;c*=p.x,f*=p.y,m*=p.x,u*=p.y,c+=y,f+=v,g=C(g).frameElement}}return Q({width:m,height:u,x:c,y:f})}function Vt(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=D(n),r=M(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},l=B(1);const c=B(0);if((i||!i&&o!=="fixed")&&((V(n)!=="body"||U(r))&&(s=nt(n)),D(n))){const f=I(n);l=z(n),c.x=f.x+n.clientLeft,c.y=f.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-s.scrollLeft*l.x+c.x,y:e.y*l.y-s.scrollTop*l.y+c.y}}function Ht(t){return Array.from(t.getClientRects())}function xt(t){return I(M(t)).left+nt(t).scrollLeft}function jt(t){const e=M(t),n=nt(t),o=t.ownerDocument.body,i=A(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=A(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+xt(t);const l=-n.scrollTop;return T(o).direction==="rtl"&&(s+=A(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function It(t,e){const n=C(t),o=M(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const f=ct();(!f||f&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function zt(t,e){const n=I(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=D(t)?z(t):B(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,f=o*r.y;return{width:s,height:l,x:c,y:f}}function ut(t,e,n){let o;if(e==="viewport")o=It(t,n);else if(e==="document")o=jt(M(t));else if(S(e))o=zt(e,n);else{const i=yt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return Q(o)}function bt(t,e){const n=_(t);return n===e||!S(n)||et(n)?!1:T(n).position==="fixed"||bt(n,e)}function _t(t,e){const n=e.get(t);if(n)return n;let o=Z(t).filter(l=>S(l)&&V(l)!=="body"),i=null;const r=T(t).position==="fixed";let s=r?_(t):t;for(;S(s)&&!et(s);){const l=T(s),c=rt(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||U(s)&&!c&&bt(t,s))?o=o.filter(m=>m!==s):i=l,s=_(s)}return e.set(t,o),o}function Yt(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?_t(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((f,m)=>{const u=ut(e,m,i);return f.top=A(u.top,f.top),f.right=W(u.right,f.right),f.bottom=W(u.bottom,f.bottom),f.left=A(u.left,f.left),f},ut(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Xt(t){return wt(t)}function $t(t,e,n){const o=D(e),i=M(e),r=n==="fixed",s=I(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=B(0);if(o||!o&&!r)if((V(e)!=="body"||U(i))&&(l=nt(e)),o){const f=I(e,!0,r,e);c.x=f.x+e.clientLeft,c.y=f.y+e.clientTop}else i&&(c.x=xt(i));return{x:s.left+l.scrollLeft-c.x,y:s.top+l.scrollTop-c.y,width:s.width,height:s.height}}function dt(t,e){return!D(t)||T(t).position==="fixed"?null:e?e(t):t.offsetParent}function vt(t,e){const n=C(t);if(!D(t))return n;let o=dt(t,e);for(;o&&kt(o)&&T(o).position==="static";)o=dt(o,e);return o&&(V(o)==="html"||V(o)==="body"&&T(o).position==="static"&&!rt(o))?n:o||Nt(t)||n}const qt=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||vt,r=this.getDimensions;return{reference:$t(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}};function Ut(t){return T(t).direction==="rtl"}const Gt={convertOffsetParentRelativeRectToViewportRelativeRect:Vt,getDocumentElement:M,getClippingRect:Yt,getOffsetParent:vt,getElementRects:qt,getClientRects:Ht,getDimensions:Xt,getScale:z,isElement:S,isRTL:Ut};function Kt(t,e){let n=null,o;const i=M(t);function r(){clearTimeout(o),n&&n.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:f,top:m,width:u,height:d}=t.getBoundingClientRect();if(l||e(),!u||!d)return;const a=G(m),g=G(i.clientWidth-(f+u)),p=G(i.clientHeight-(m+d)),b=G(f),y={rootMargin:-a+"px "+-g+"px "+-p+"px "+-b+"px",threshold:A(0,W(1,c))||1};let v=!0;function O(w){const x=w[0].intersectionRatio;if(x!==c){if(!v)return s();x?s(!1,x):o=setTimeout(()=>{s(!1,1e-7)},100)}v=!1}try{n=new IntersectionObserver(O,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(O,y)}n.observe(t)}return s(!0),r}function ie(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,f=lt(t),m=i||r?[...f?Z(f):[],...Z(e)]:[];m.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),r&&h.addEventListener("resize",n)});const u=f&&l?Kt(f,n):null;let d=-1,a=null;s&&(a=new ResizeObserver(h=>{let[y]=h;y&&y.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{a&&a.observe(e)})),n()}),f&&!c&&a.observe(f),a.observe(e));let g,p=c?I(t):null;c&&b();function b(){const h=I(t);p&&(h.x!==p.x||h.y!==p.y||h.width!==p.width||h.height!==p.height)&&n(),p=h,g=requestAnimationFrame(b)}return n(),()=>{m.forEach(h=>{i&&h.removeEventListener("scroll",n),r&&h.removeEventListener("resize",n)}),u&&u(),a&&a.disconnect(),a=null,c&&cancelAnimationFrame(g)}}const se=(t,e,n)=>{const o=new Map,i={platform:Gt,...n},r={...i.platform,_c:o};return Mt(t,e,{...i,platform:r})};export{Qt as a,ie as b,Jt as c,se as d,te as e,ee as f,Zt as g,ne as o,oe as s};
