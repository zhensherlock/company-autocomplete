import{B as y,N as v,L as f,C as b,A as S}from"./floating-ui.dom.browser.min.6e57e80d.js";const k={target:"body",api:"qcc_openapi",queryDelay:500,placeholder:"请输入企业名称或统一社会信用代码",clearable:!0,clearIcon:'<svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>',autoFocus:!0,history:{enabled:!0,type:"localStorage",key:"company-history",showClear:!0,itemIcon:'<svg viewBox="64 64 896 896" focusable="false" data-icon="history" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z"></path></svg>',clearIcon:'<svg viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>'},onFetch:()=>{},onSelect:()=>{},onClear:()=>{},showSubmitButton:!0,submitButtonLabel:"Submit",offsetTop:5,autoFlip:!1,submitCallback:()=>{}},w=(s,t)=>{if(!t.enabled||!t.key)return;const e=t.type==="localStorage"?localStorage:sessionStorage,i=p(t),a=i.findIndex(o=>o.id===s.id);a>-1&&i.splice(a,1),i.splice(0,0,s),e.setItem(t.key,JSON.stringify(i.length>5?i.slice(0,5):i))},p=s=>{if(!s.enabled||!s.key)return[];const e=(s.type==="localStorage"?localStorage:sessionStorage).getItem(s.key)||"";return x(e)},E=s=>{(s.type==="localStorage"?localStorage:sessionStorage).removeItem(s.key)},C=s=>typeof s=="string",A=(s,t,e)=>m(e||t,"{keyword}",s),g=async(s,t)=>{for(const e of t)try{const i=m(e,"{id}",s),a=await fetch(i);if(a.status===200){const o=await a.blob();return URL.createObjectURL(o)}}catch(i){console.error(i)}return""},m=(s,t,e)=>s.replace(new RegExp(t,"g"),e),d=(s,t,e)=>{s.forEach(i=>{i.classList.remove(e)}),s[t].classList.add(e)},L=s=>s.replace(/(<([^>]+)>)/gi,""),x=s=>{try{const t=JSON.parse(s);return Array.isArray(t)?t:[]}catch{return[]}};function I(s,t=0,{start:e=!0,middle:i=!0,once:a=!1}={}){let o=e,n=0,r,h=!1;function c(...u){if(h)return;const l=Date.now()-n;n=Date.now(),e&&i&&l>=t&&(o=!0),o?(o=!1,s.apply(this,u),a&&c.cancel()):(i&&l<t||!i)&&(clearTimeout(r),r=setTimeout(()=>{n=Date.now(),s.apply(this,u),a&&c.cancel()},i?t-l:t))}return c.cancel=()=>{clearTimeout(r),h=!0},c}function W(s,t=0,{start:e=!1,middle:i=!1,once:a=!1}={}){return I(s,t,{start:e,middle:i,once:a})}const _="https://c.qcc.com/embed/api/company/getCompanyName?searchKey={keyword}",q=async(s,t)=>{switch(t.api){case"qcc_openapi":return await H(s,t);default:return[]}},H=async(s,t)=>{if(s.length<2)return[];const e=A(s,_,t.searchUrl),a=await(await fetch(e,{method:"GET",mode:"cors",headers:{Referer:"https://c.qcc.com/"}})).json(),o=[];return a.status!=="200"?o:a.result.map(n=>({name:n.companyName,id:n.keyNo}))},D=(s,t)=>{let e=!1;document.addEventListener("click",i=>{!s.contains(i.target)&&!e&&t(),e=s.contains(i.target)},!0)},N=["https://image.qcc.com/logo/{id}.jpg","https://image.qcc.com/auto/{id}.jpg"],$=async(s,t)=>{const e=s.dataset.id||"";if(t.avatarUrl){s.src=await g(e,[t.avatarUrl]);return}switch(t.api){case"qcc_openapi":s.src=await g(e,N);break}};class B{constructor(t={}){this.suggestions=[],this.suggestionElement=document.createElement("div"),this.suggestionActivatedClassName="suggestion-popper--activated",this.inputWrapElement=document.createElement("div"),this.inputWrapHaveWordsClassName="company-autocomplete--words",this.inputWrapActivatedClassName="company-autocomplete--activated",this.options=Object.assign({},k,t),C(this.options.target)?this.target=document.querySelector(this.options.target):this.target=this.options.target,this.render()}render(){var a;if(!this.target)return;const t=[`<div class="company-autocomplete ${this.options.showSubmitButton?"company-autocomplete--show-submit":""}">`,'<div class="company-autocomplete__input">',`<input type="text" placeholder="${this.options.placeholder}" />`,this.options.clearable?`<div class="company-autocomplete__clear">${this.options.clearIcon}</div>`:"","</div>",this.options.showSubmitButton?'<div class="company-autocomplete__submit">':"",this.options.showSubmitButton?`<button type="button">${this.options.submitButtonLabel}</button>`:"",this.options.showSubmitButton?"</div>":"","</div>"];this.target.innerHTML=t.join(""),this.suggestionElement.classList.add("suggestion-popper"),this.clearSuggestion(),document.body.appendChild(this.suggestionElement),this.inputWrapElement=this.target.querySelector(".company-autocomplete");const e=this.inputWrapElement.querySelector("input"),i=this.inputWrapElement.querySelector("button");y(this.inputWrapElement,this.suggestionElement,()=>{v(this.inputWrapElement,this.suggestionElement,{middleware:[f(this.options.offsetTop),b({apply:({rects:o})=>{Object.assign(this.suggestionElement.style,{width:`${o.reference.width}px`})}}),...this.options.autoFlip?[S({fallbackPlacements:["top"]})]:[]]}).then(({x:o,y:n})=>{Object.assign(this.suggestionElement.style,{left:`${o}px`,top:`${n}px`})})}),e==null||e.addEventListener("input",()=>{this.keyboardActiveIndex=void 0,this.selectCompany=void 0;const o=e.value;this.inputWrapElement.classList[o.length>0?"add":"remove"](this.inputWrapHaveWordsClassName),o.length===0&&(this.clearSuggestion(),this.hideSuggestion())}),e==null||e.addEventListener("input",W(()=>{const o=e.value;o&&this.handleQuerySuggestion(o)},this.options.queryDelay)),e==null||e.addEventListener("click",o=>{if(this.suggestions.length>0){this.showSuggestion();return}const n=o.target.value;n?this.handleQuerySuggestion(n):this.options.history.enabled&&this.handleSuggestionDom(p(this.options.history),"history")}),i==null||i.addEventListener("click",()=>{this.handleSubmit(e.value)}),D(this.suggestionElement,()=>{this.hideSuggestion()}),this.suggestionElement.addEventListener("click",o=>{if(o.target.closest(".suggestion")){const n=o.target.closest(".suggestion"),r=(n==null?void 0:n.dataset.name)||"";e.value=r,this.suggestions=[],this.selectCompany={id:(n==null?void 0:n.dataset.id)||"",name:r},this.handleSelect(),this.hideSuggestion()}o.target.id==="remove-history-link"&&(E(this.options.history),this.clearSuggestion(),this.hideSuggestion())}),this.inputClearElement=this.inputWrapElement.querySelector(".company-autocomplete__clear"),this.inputClearElement&&((a=this.inputClearElement)==null||a.addEventListener("click",()=>{this.selectCompany=void 0,e.value="",this.clearSuggestion(),this.inputWrapElement.classList.remove(this.inputWrapHaveWordsClassName),this.options.onClear()})),this.options.autoFocus&&e.focus()}handleQuerySuggestion(t){q(t,this.options).then(e=>{this.handleSuggestionDom(e)})}handleSuggestionDom(t,e="fetch"){var a,o;if(this.suggestions=t,t.length===0){this.clearSuggestion(),this.hideSuggestion();return}const i=['<div class="suggestion-popper__body">'];t.forEach(n=>{const r=L(n.name);i.push(`<div class="suggestion" data-id="${n.id}" data-name="${r}">`),i.push(`<div class="suggestion__avatar"><img data-id="${n.id}" alt="${r}"/></div>`),i.push(`<div class="suggestion__label">${n.name}</div>`),i.push('<div class="suggestion__extra"></div>'),i.push("</div>")}),i.push("</div>"),i.push('<div class="suggestion-popper__footer">'),e==="history"&&((a=this.options.history)!=null&&a.showClear)&&t.length>0&&i.push(`<a id="remove-history-link" href="javascript:;">${((o=this.options.history)==null?void 0:o.clearIcon)||""}删除历史</a>`),i.push("</div>"),this.suggestionElement.innerHTML=i.join(""),this.suggestionElement.querySelectorAll("img").forEach(n=>{$(n,this.options)}),this.showSuggestion(),this.options.onFetch()}handleSelect(){this.options.history.enabled&&this.selectCompany&&w(this.selectCompany,this.options.history),this.options.onSelect(this.selectCompany)}handleSubmit(t){this.options.submitCallback({company:this.selectCompany,text:t})}showSuggestion(){this.inputWrapElement.classList.add(this.inputWrapActivatedClassName),this.suggestionElement.classList.add(this.suggestionActivatedClassName),this.keyDownHandler&&this.inputWrapElement.removeEventListener("keydown",this.keyDownHandler),this.keyDownHandler=this.handleKeyDown.bind(this),this.inputWrapElement.addEventListener("keydown",this.keyDownHandler)}hideSuggestion(){this.inputWrapElement.classList.remove(this.inputWrapActivatedClassName),this.suggestionElement.classList.remove(this.suggestionActivatedClassName),this.inputWrapElement.removeEventListener("keydown",this.keyDownHandler)}clearSuggestion(){this.suggestionElement.textContent="",this.suggestions=[]}handleKeyDown(t){var e;switch(t.key){case"Enter":this.handleSubmit((e=t.target)==null?void 0:e.value);break;case"ArrowUp":this.keyboardActiveIndex?this.keyboardActiveIndex--:this.keyboardActiveIndex=this.suggestions.length-1,this.selectCompany=this.suggestions[this.keyboardActiveIndex],d(Array.from(this.suggestionElement.querySelectorAll(".suggestion")),this.keyboardActiveIndex,"suggestion--keyboard-active");break;case"ArrowDown":this.keyboardActiveIndex===void 0||this.keyboardActiveIndex>=this.suggestions.length-1?this.keyboardActiveIndex=0:this.keyboardActiveIndex++,this.selectCompany=this.suggestions[this.keyboardActiveIndex],d(Array.from(this.suggestionElement.querySelectorAll(".suggestion")),this.keyboardActiveIndex,"suggestion--keyboard-active");break}}}export{B as C};
