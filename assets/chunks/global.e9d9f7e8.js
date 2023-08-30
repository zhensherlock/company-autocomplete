import{a as b,c as E,o as S,s as k,f as w}from"./floating-ui.dom.562a8523.js";const C={target:"body",api:"qcc_open",queryDelay:500,placeholder:"请输入企业名称或统一社会信用代码",clearable:!0,backFill:!1,clearIcon:'<svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>',autoFocus:!0,history:{enabled:!0,type:"localStorage",key:"company-history",showClear:!0,itemIcon:'<svg viewBox="64 64 896 896" focusable="false" data-icon="history" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z"></path></svg>',clearIcon:'<svg viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>'},onFetch:()=>{},onSelect:()=>{},onClear:()=>{},onFocus:()=>{},onBlur:()=>{},onDropdownVisibleChange:()=>{},showSubmitButton:!0,submitButtonLabel:"Submit",offsetTop:5,autoFlip:!1,submitCallback:()=>{}},A=(e,t)=>{if(!t.enabled||!t.key)return;const i=t.type==="localStorage"?localStorage:sessionStorage,s=y(t),r=s.findIndex(l=>l.id===e.id);r>-1&&s.splice(r,1),s.splice(0,0,e),i.setItem(t.key,JSON.stringify(s.length>5?s.slice(0,5):s))},y=e=>{if(!e.enabled||!e.key)return[];const i=(e.type==="localStorage"?localStorage:sessionStorage).getItem(e.key)||"";return I(i)},L=e=>{(e.type==="localStorage"?localStorage:sessionStorage).removeItem(e.key)},x=e=>typeof e=="string",p=e=>typeof e=="function",v=(e,t,i)=>f(i||t,"{keyword}",e),d=async(e,t)=>{for(const i of t)try{const s=f(i,"{id}",e),r=await fetch(s);if(r.status===200){const l=await r.blob();return URL.createObjectURL(l)}}catch(s){console.error(s)}return""},f=(e,t,i)=>e.replace(new RegExp(t,"g"),i),g=(e,t,i)=>{e.forEach(s=>{s.classList.remove(i)}),e[t].classList.add(i)},m=e=>e.replace(/(<([^>]+)>)/gi,""),I=e=>{try{const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}};function W(e,t=0,{start:i=!0,middle:s=!0,once:r=!1}={}){let l=i,n=0,c,a=!1;function o(...h){if(a)return;const u=Date.now()-n;n=Date.now(),i&&s&&u>=t&&(l=!0),l?(l=!1,e.apply(this,h),r&&o.cancel()):(s&&u<t||!s)&&(clearTimeout(c),c=setTimeout(()=>{n=Date.now(),e.apply(this,h),r&&o.cancel()},s?t-u:t))}return o.cancel=()=>{clearTimeout(c),a=!0},o}function q(e,t=0,{start:i=!1,middle:s=!1,once:r=!1}={}){return W(e,t,{start:i,middle:s,once:r})}const _=async(e,t)=>{switch(t.api){case"qcc_open":return await D(e,t);case"clearbit":return await H(e,t);default:return[]}},D=async(e,t)=>{if(e.length<2)return[];const s=v(e,"https://c.qcc.com/embed/api/company/getCompanyName?searchKey={keyword}",t.searchUrl),l=await(await fetch(s,{method:"GET",mode:"cors",headers:{Referer:"https://c.qcc.com/"}})).json(),n=[];return l.status!=="200"?n:l.result.map(c=>({name:c.companyName,id:c.keyNo}))},H=async(e,t)=>{if(e.length<2||e.length>=100)return[];const s=v(e,"https://autocomplete.clearbit.com/v1/companies/suggest?query={keyword}",t.searchUrl);return(await(await fetch(s,{method:"GET",mode:"cors"})).json()).map(n=>({name:n.name,id:n.domain,avatar:n.logo}))},B=(e,t)=>{let i=!1;document.addEventListener("click",s=>{!e.contains(s.target)&&!i&&t(),i=e.contains(s.target)},!0)},F=["https://image.qcc.com/logo/{id}.jpg","https://image.qcc.com/auto/{id}.jpg"],U=async(e,t)=>{const i=e.dataset.id||"";if(t.avatarUrl){e.src=await d(i,[t.avatarUrl]);return}switch(t.api){case"qcc_open":e.src=await d(i,F);break}};class ${constructor(t={}){this.suggestions=[],this.suggestionElement=document.createElement("div"),this.suggestionActivatedClassName="suggestion-popper--activated",this.inputWrapElement=document.createElement("div"),this.inputWrapHaveWordsClassName="company-autocomplete--words",this.inputWrapActivatedClassName="company-autocomplete--activated",this.options=Object.assign({},C,t),x(this.options.target)?this.target=document.querySelector(this.options.target):this.target=this.options.target,this.render()}render(){var s,r,l,n,c;if(!this.target)return;const t=[`<div class="company-autocomplete ${this.options.showSubmitButton?"company-autocomplete--show-submit":""}">`,'<div class="company-autocomplete__input">',`<input type="text" placeholder="${this.options.placeholder}" />`,this.options.clearable?`<div class="company-autocomplete__clear">${this.options.clearIcon}</div>`:"","</div>",this.options.showSubmitButton?'<div class="company-autocomplete__submit">':"",this.options.showSubmitButton?`<button type="button">${this.options.submitButtonLabel}</button>`:"",this.options.showSubmitButton?"</div>":"","</div>"];this.target.innerHTML=t.join(""),this.suggestionElement.classList.add("suggestion-popper"),this.clearSuggestion(),document.body.appendChild(this.suggestionElement),this.inputWrapElement=this.target.querySelector(".company-autocomplete"),this.inputElement=this.inputWrapElement.querySelector("input");const i=this.inputWrapElement.querySelector("button");b(this.inputWrapElement,this.suggestionElement,()=>{E(this.inputWrapElement,this.suggestionElement,{middleware:[S(this.options.offsetTop),k({apply:({rects:a})=>{Object.assign(this.suggestionElement.style,{width:`${a.reference.width}px`})}}),...this.options.autoFlip?[w({fallbackPlacements:["top"]})]:[]]}).then(({x:a,y:o})=>{Object.assign(this.suggestionElement.style,{left:`${a}px`,top:`${o}px`})})}),(s=this.inputElement)==null||s.addEventListener("input",()=>{var o;this.keyboardActiveIndex=void 0,this.selectCompany=void 0;const a=((o=this.inputElement)==null?void 0:o.value)||"";this.inputWrapElement.classList[a.length>0?"add":"remove"](this.inputWrapHaveWordsClassName),a.length===0&&(this.clearSuggestion(),this.hideSuggestion())}),(r=this.inputElement)==null||r.addEventListener("input",q(()=>{var o;const a=((o=this.inputElement)==null?void 0:o.value)||"";a&&this.handleQuerySuggestion(a)},this.options.queryDelay)),(l=this.inputElement)==null||l.addEventListener("click",a=>{if(this.suggestions.length>0){this.showSuggestion();return}const o=a.target.value;o?this.handleQuerySuggestion(o):this.options.history.enabled&&this.handleSuggestionDom(y(this.options.history),"history")}),i==null||i.addEventListener("click",()=>{var a;this.handleSubmit(((a=this.inputElement)==null?void 0:a.value)||"")}),B(this.suggestionElement,()=>{this.hideSuggestion()}),this.suggestionElement.addEventListener("click",a=>{if(a.target.closest(".suggestion")){const o=a.target.closest(".suggestion"),h=(o==null?void 0:o.dataset.name)||"";this.inputElement.value=h,this.suggestions=[],this.selectCompany={id:(o==null?void 0:o.dataset.id)||"",name:h},this.handleSelect(),this.hideSuggestion()}a.target.id==="remove-history-link"&&(L(this.options.history),this.clearSuggestion(),this.hideSuggestion())}),this.inputClearElement=this.inputWrapElement.querySelector(".company-autocomplete__clear"),this.inputClearElement&&((n=this.inputClearElement)==null||n.addEventListener("click",()=>{this.handleClear()})),this.options.autoFocus&&((c=this.inputElement)==null||c.focus()),this.inputElement.addEventListener("focus",()=>{p(this.options.onFocus)&&this.options.onFocus()}),this.inputElement.addEventListener("blur",()=>{p(this.options.onBlur)&&this.options.onBlur()})}handleQuerySuggestion(t){_(t,this.options).then(i=>{this.handleSuggestionDom(i),this.options.onFetch()})}handleSuggestionDom(t,i="fetch"){var r,l;if(this.suggestions=t,t.length===0){this.clearSuggestion(),this.hideSuggestion();return}const s=['<div class="suggestion-popper__body">'];t.forEach(n=>{const c=m(n.name);s.push(`<div class="suggestion" data-id="${n.id}" data-name="${c}">`),n.avatar&&s.push(`<div class="suggestion__avatar"><img data-id="${n.id||""}" alt="${c}" src="${n.avatar||""}"/></div>`),s.push(`<div class="suggestion__label">${n.name}</div>`),s.push('<div class="suggestion__extra"></div>'),s.push("</div>")}),s.push("</div>"),s.push('<div class="suggestion-popper__footer">'),i==="history"&&((r=this.options.history)!=null&&r.showClear)&&t.length>0&&s.push(`<a id="remove-history-link" href="javascript:;">${((l=this.options.history)==null?void 0:l.clearIcon)||""}删除历史</a>`),s.push("</div>"),this.suggestionElement.innerHTML=s.join(""),this.suggestionElement.querySelectorAll("img").forEach(n=>{var c;if(i==="history"){n.outerHTML=(c=this.options.history)==null?void 0:c.itemIcon;return}n.getAttribute("src")||U(n,this.options)}),this.showSuggestion()}handleSelect(){this.options.history.enabled&&this.selectCompany&&A(this.selectCompany,this.options.history),this.options.onSelect(this.selectCompany)}handleSubmit(t){this.options.submitCallback({company:this.selectCompany,text:t})}showSuggestion(){this.inputWrapElement.classList.add(this.inputWrapActivatedClassName),this.suggestionElement.classList.add(this.suggestionActivatedClassName),this.keyDownHandler&&this.inputWrapElement.removeEventListener("keydown",this.keyDownHandler),this.keyDownHandler=this.handleKeyDown.bind(this),this.inputWrapElement.addEventListener("keydown",this.keyDownHandler),this.options.onDropdownVisibleChange(!0)}hideSuggestion(){this.inputWrapElement.classList.remove(this.inputWrapActivatedClassName),this.suggestionElement.classList.remove(this.suggestionActivatedClassName),this.inputWrapElement.removeEventListener("keydown",this.keyDownHandler),this.options.onDropdownVisibleChange(!1)}clearSuggestion(){this.suggestionElement.textContent="",this.suggestions=[]}handleKeyDown(t){var i;switch(t.key){case"Enter":this.handleSubmit((i=t.target)==null?void 0:i.value);break;case"ArrowUp":this.keyboardActiveIndex?this.keyboardActiveIndex--:this.keyboardActiveIndex=this.suggestions.length-1,this.selectCompany=this.suggestions[this.keyboardActiveIndex],g(Array.from(this.suggestionElement.querySelectorAll(".suggestion")),this.keyboardActiveIndex,"suggestion--keyboard-active"),this.handleBackFill();break;case"ArrowDown":this.keyboardActiveIndex===void 0||this.keyboardActiveIndex>=this.suggestions.length-1?this.keyboardActiveIndex=0:this.keyboardActiveIndex++,this.selectCompany=this.suggestions[this.keyboardActiveIndex],g(Array.from(this.suggestionElement.querySelectorAll(".suggestion")),this.keyboardActiveIndex,"suggestion--keyboard-active"),this.handleBackFill();break;case"Escape":this.handleClear();break}}handleBackFill(){var t;this.options.backFill&&(this.inputElement.value=m(((t=this.selectCompany)==null?void 0:t.name)||""))}handleClear(){this.selectCompany=void 0,this.inputElement.value="",this.clearSuggestion(),this.inputWrapElement.classList.remove(this.inputWrapHaveWordsClassName),this.options.onClear()}}export{$ as C};
