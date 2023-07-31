const N=Math.min,O=Math.max,G=Math.round,K=Math.floor,B=t=>({x:t,y:t}),At={left:"right",right:"left",bottom:"top",top:"bottom"},Ot={start:"end",end:"start"};function Ct(t,e,n){return O(t,N(e,n))}function q(t,e){return typeof t=="function"?t(e):t}function I(t){return t.split("-")[0]}function X(t){return t.split("-")[1]}function Et(t){return t==="x"?"y":"x"}function it(t){return t==="y"?"height":"width"}function tt(t){return["top","bottom"].includes(I(t))?"y":"x"}function st(t){return Et(tt(t))}function Tt(t,e,n){n===void 0&&(n=!1);const o=X(t),i=st(t),r=it(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=J(s)),[s,J(s)]}function Lt(t){const e=J(t);return[ot(t),e,ot(e)]}function ot(t){return t.replace(/start|end/g,e=>Ot[e])}function Pt(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function St(t,e,n,o){const i=X(t);let r=Pt(I(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(ot)))),r}function J(t){return t.replace(/left|right|bottom|top/g,e=>At[e])}function Dt(t){return{top:0,right:0,bottom:0,left:0,...t}}function mt(t){return typeof t!="number"?Dt(t):{top:t,right:t,bottom:t,left:t}}function Q(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function ft(t,e,n){let{reference:o,floating:i}=t;const r=tt(e),s=st(e),l=it(s),c=I(e),f=r==="y",m=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,d=o[l]/2-i[l]/2;let a;switch(c){case"top":a={x:m,y:o.y-i.height};break;case"bottom":a={x:m,y:o.y+o.height};break;case"right":a={x:o.x+o.width,y:u};break;case"left":a={x:o.x-i.width,y:u};break;default:a={x:o.x,y:o.y}}switch(X(e)){case"start":a[s]-=d*(n&&f?-1:1);break;case"end":a[s]+=d*(n&&f?-1:1);break}return a}const kt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:m,y:u}=ft(f,o,c),d=o,a={},g=0;for(let h=0;h<l.length;h++){const{name:v,fn:p}=l[h],{x,y:b,data:R,reset:w}=await p({x:m,y:u,initialPlacement:o,placement:d,strategy:i,middlewareData:a,rects:f,platform:s,elements:{reference:t,floating:e}});if(m=x??m,u=b??u,a={...a,[v]:{...a[v],...R}},w&&g<=50){g++,typeof w=="object"&&(w.placement&&(d=w.placement),w.rects&&(f=w.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):w.rects),{x:m,y:u}=ft(f,d,c)),h=-1;continue}}return{x:m,y:u,placement:d,strategy:i,middlewareData:a}};async function gt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:m="viewport",elementContext:u="floating",altBoundary:d=!1,padding:a=0}=q(e,t),g=mt(a),v=l[d?u==="floating"?"reference":"floating":u],p=Q(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(v)))==null||n?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:f,rootBoundary:m,strategy:c})),x=u==="floating"?{...s.floating,x:o,y:i}:s.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),R=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},w=Q(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:b,strategy:c}):x);return{top:(p.top-w.top+g.top)/R.y,bottom:(w.bottom-p.bottom+g.bottom)/R.y,left:(p.left-w.left+g.left)/R.x,right:(w.right-p.right+g.right)/R.x}}const Jt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:l}=e,{element:c,padding:f=0}=q(t,e)||{};if(c==null)return{};const m=mt(f),u={x:n,y:o},d=st(i),a=it(d),g=await s.getDimensions(c),h=d==="y",v=h?"top":"left",p=h?"bottom":"right",x=h?"clientHeight":"clientWidth",b=r.reference[a]+r.reference[d]-u[d]-r.floating[a],R=u[d]-r.reference[d],w=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let y=w?w[x]:0;(!y||!await(s.isElement==null?void 0:s.isElement(w)))&&(y=l.floating[x]||r.floating[a]);const L=b/2-R/2,F=y/2-g[a]/2-1,M=N(m[v],F),$=N(m[p],F),E=M,_=y-g[a]-$,A=y/2-g[a]/2+L,P=Ct(E,A,_),W=X(i)!=null&&A!=P&&r.reference[a]/2-(A<E?M:$)-g[a]/2<0?A<E?E-A:_-A:0;return{[d]:u[d]-W,data:{[d]:P,centerOffset:A-P+W}}}}),Qt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:s,platform:l,elements:c}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:u,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:a="none",flipAlignment:g=!0,...h}=q(t,e),v=I(o),p=I(s)===s,x=await(l.isRTL==null?void 0:l.isRTL(c.floating)),b=u||(p||!g?[J(s)]:Lt(s));!u&&a!=="none"&&b.push(...St(s,g,a,x));const R=[s,...b],w=await gt(e,h),y=[];let L=((n=i.flip)==null?void 0:n.overflows)||[];if(f&&y.push(w[v]),m){const E=Tt(o,r,x);y.push(w[E[0]],w[E[1]])}if(L=[...L,{placement:o,overflows:y}],!y.every(E=>E<=0)){var F,M;const E=(((F=i.flip)==null?void 0:F.index)||0)+1,_=R[E];if(_)return{data:{index:E,overflows:L},reset:{placement:_}};let A=(M=L.filter(P=>P.overflows[0]<=0).sort((P,H)=>P.overflows[1]-H.overflows[1])[0])==null?void 0:M.placement;if(!A)switch(d){case"bestFit":{var $;const P=($=L.map(H=>[H.placement,H.overflows.filter(W=>W>0).reduce((W,Rt)=>W+Rt,0)]).sort((H,W)=>H[1]-W[1])[0])==null?void 0:$[0];P&&(A=P);break}case"initialPlacement":A=s;break}if(o!==A)return{reset:{placement:A}}}return{}}}};async function Ft(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=I(n),l=X(n),c=tt(n)==="y",f=["left","top"].includes(s)?-1:1,m=r&&c?-1:1,u=q(e,t);let{mainAxis:d,crossAxis:a,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof g=="number"&&(a=l==="end"?g*-1:g),c?{x:a*m,y:d*f}:{x:d*f,y:a*m}}const Zt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await Ft(e,t);return{x:n+i.x,y:o+i.y,data:i}}}},te=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:r}=e,{apply:s=()=>{},...l}=q(t,e),c=await gt(e,l),f=I(n),m=X(n),u=tt(n)==="y",{width:d,height:a}=o.floating;let g,h;f==="top"||f==="bottom"?(g=f,h=m===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(h=f,g=m==="end"?"top":"bottom");const v=a-c[g],p=d-c[h],x=!e.middlewareData.shift;let b=v,R=p;if(u){const y=d-c.left-c.right;R=m||x?N(p,y):y}else{const y=a-c.top-c.bottom;b=m||x?N(v,y):y}if(x&&!m){const y=O(c.left,0),L=O(c.right,0),F=O(c.top,0),M=O(c.bottom,0);u?R=d-2*(y!==0||L!==0?y+L:O(c.left,c.right)):b=a-2*(F!==0||M!==0?F+M:O(c.top,c.bottom))}await s({...e,availableWidth:R,availableHeight:b});const w=await i.getDimensions(r.floating);return d!==w.width||a!==w.height?{reset:{rects:!0}}:{}}}};function V(t){return ht(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function k(t){var e;return(e=(ht(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ht(t){return t instanceof Node||t instanceof C(t).Node}function D(t){return t instanceof Element||t instanceof C(t).Element}function S(t){return t instanceof HTMLElement||t instanceof C(t).HTMLElement}function at(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function U(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Mt(t){return["table","td","th"].includes(V(t))}function rt(t){const e=ct(),n=T(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Wt(t){let e=j(t);for(;S(e)&&!et(e);){if(rt(e))return e;e=j(e)}return null}function ct(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function et(t){return["html","body","#document"].includes(V(t))}function T(t){return C(t).getComputedStyle(t)}function nt(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function j(t){if(V(t)==="html")return t;const e=t.assignedSlot||t.parentNode||at(t)&&t.host||k(t);return at(e)?e.host:e}function pt(t){const e=j(t);return et(e)?t.ownerDocument?t.ownerDocument.body:t.body:S(e)&&U(e)?e:pt(e)}function Z(t,e){var n;e===void 0&&(e=[]);const o=pt(t),i=o===((n=t.ownerDocument)==null?void 0:n.body),r=C(o);return i?e.concat(r,r.visualViewport||[],U(o)?o:[]):e.concat(o,Z(o))}function wt(t){const e=T(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=S(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=G(n)!==r||G(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function lt(t){return D(t)?t:t.contextElement}function Y(t){const e=lt(t);if(!S(e))return B(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=wt(e);let s=(r?G(n.width):n.width)/o,l=(r?G(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Nt=B(0);function xt(t){const e=C(t);return!ct()||!e.visualViewport?Nt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Bt(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==C(t)?!1:e}function z(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=lt(t);let s=B(1);e&&(o?D(o)&&(s=Y(o)):s=Y(t));const l=Bt(r,n,o)?xt(r):B(0);let c=(i.left+l.x)/s.x,f=(i.top+l.y)/s.y,m=i.width/s.x,u=i.height/s.y;if(r){const d=C(r),a=o&&D(o)?C(o):o;let g=d.frameElement;for(;g&&o&&a!==d;){const h=Y(g),v=g.getBoundingClientRect(),p=T(g),x=v.left+(g.clientLeft+parseFloat(p.paddingLeft))*h.x,b=v.top+(g.clientTop+parseFloat(p.paddingTop))*h.y;c*=h.x,f*=h.y,m*=h.x,u*=h.y,c+=x,f+=b,g=C(g).frameElement}}return Q({width:m,height:u,x:c,y:f})}function Vt(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=S(n),r=k(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},l=B(1);const c=B(0);if((i||!i&&o!=="fixed")&&((V(n)!=="body"||U(r))&&(s=nt(n)),S(n))){const f=z(n);l=Y(n),c.x=f.x+n.clientLeft,c.y=f.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-s.scrollLeft*l.x+c.x,y:e.y*l.y-s.scrollTop*l.y+c.y}}function Ht(t){return Array.from(t.getClientRects())}function yt(t){return z(k(t)).left+nt(t).scrollLeft}function It(t){const e=k(t),n=nt(t),o=t.ownerDocument.body,i=O(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=O(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+yt(t);const l=-n.scrollTop;return T(o).direction==="rtl"&&(s+=O(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function zt(t,e){const n=C(t),o=k(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const f=ct();(!f||f&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function Yt(t,e){const n=z(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=S(t)?Y(t):B(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,f=o*r.y;return{width:s,height:l,x:c,y:f}}function ut(t,e,n){let o;if(e==="viewport")o=zt(t,n);else if(e==="document")o=It(k(t));else if(D(e))o=Yt(e,n);else{const i=xt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return Q(o)}function vt(t,e){const n=j(t);return n===e||!D(n)||et(n)?!1:T(n).position==="fixed"||vt(n,e)}function jt(t,e){const n=e.get(t);if(n)return n;let o=Z(t).filter(l=>D(l)&&V(l)!=="body"),i=null;const r=T(t).position==="fixed";let s=r?j(t):t;for(;D(s)&&!et(s);){const l=T(s),c=rt(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||U(s)&&!c&&vt(t,s))?o=o.filter(m=>m!==s):i=l,s=j(s)}return e.set(t,o),o}function Xt(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?jt(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((f,m)=>{const u=ut(e,m,i);return f.top=O(u.top,f.top),f.right=N(u.right,f.right),f.bottom=N(u.bottom,f.bottom),f.left=O(u.left,f.left),f},ut(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function $t(t){return wt(t)}function _t(t,e,n){const o=S(e),i=k(e),r=n==="fixed",s=z(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=B(0);if(o||!o&&!r)if((V(e)!=="body"||U(i))&&(l=nt(e)),o){const f=z(e,!0,r,e);c.x=f.x+e.clientLeft,c.y=f.y+e.clientTop}else i&&(c.x=yt(i));return{x:s.left+l.scrollLeft-c.x,y:s.top+l.scrollTop-c.y,width:s.width,height:s.height}}function dt(t,e){return!S(t)||T(t).position==="fixed"?null:e?e(t):t.offsetParent}function bt(t,e){const n=C(t);if(!S(t))return n;let o=dt(t,e);for(;o&&Mt(o)&&T(o).position==="static";)o=dt(o,e);return o&&(V(o)==="html"||V(o)==="body"&&T(o).position==="static"&&!rt(o))?n:o||Wt(t)||n}const qt=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||bt,r=this.getDimensions;return{reference:_t(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}};function Ut(t){return T(t).direction==="rtl"}const Kt={convertOffsetParentRelativeRectToViewportRelativeRect:Vt,getDocumentElement:k,getClippingRect:Xt,getOffsetParent:bt,getElementRects:qt,getClientRects:Ht,getDimensions:$t,getScale:Y,isElement:D,isRTL:Ut};function Gt(t,e){let n=null,o;const i=k(t);function r(){clearTimeout(o),n&&n.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:f,top:m,width:u,height:d}=t.getBoundingClientRect();if(l||e(),!u||!d)return;const a=K(m),g=K(i.clientWidth-(f+u)),h=K(i.clientHeight-(m+d)),v=K(f),x={rootMargin:-a+"px "+-g+"px "+-h+"px "+-v+"px",threshold:O(0,N(1,c))||1};let b=!0;function R(w){const y=w[0].intersectionRatio;if(y!==c){if(!b)return s();y?s(!1,y):o=setTimeout(()=>{s(!1,1e-7)},100)}b=!1}try{n=new IntersectionObserver(R,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(R,x)}n.observe(t)}return s(!0),r}function ee(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,f=lt(t),m=i||r?[...f?Z(f):[],...Z(e)]:[];m.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),r&&p.addEventListener("resize",n)});const u=f&&l?Gt(f,n):null;let d=-1,a=null;s&&(a=new ResizeObserver(p=>{let[x]=p;x&&x.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{a&&a.observe(e)})),n()}),f&&!c&&a.observe(f),a.observe(e));let g,h=c?z(t):null;c&&v();function v(){const p=z(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&n(),h=p,g=requestAnimationFrame(v)}return n(),()=>{m.forEach(p=>{i&&p.removeEventListener("scroll",n),r&&p.removeEventListener("resize",n)}),u&&u(),a&&a.disconnect(),a=null,c&&cancelAnimationFrame(g)}}const ne=(t,e,n)=>{const o=new Map,i={platform:Kt,...n},r={...i.platform,_c:o};return kt(t,e,{...i,platform:r})};export{ee as a,Jt as b,ne as c,Qt as f,Zt as o,te as s};
