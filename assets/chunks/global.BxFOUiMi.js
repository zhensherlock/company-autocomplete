import{a as y,c as f,o as b,s as E,f as w}from"./theme.VrG4sNIO.js";const S={target:"body",api:"clearbit",queryDelay:500,placeholder:"请输入企业名称或统一社会信用代码",clearable:!0,backFill:!1,popupAppendToBody:!0,clearIcon:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59z"/></svg>',autoFocus:!0,history:{enabled:!0,type:"localStorage",key:"company-history",showClear:!0,itemIcon:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m15.1 19.37l1 1.74c-.96.44-2.01.73-3.1.84v-2.02c.74-.09 1.44-.28 2.1-.56zM4.07 13H2.05c.11 1.1.4 2.14.84 3.1l1.74-1c-.28-.66-.47-1.36-.56-2.1zM15.1 4.63l1-1.74c-.96-.44-2-.73-3.1-.84v2.02c.74.09 1.44.28 2.1.56zM19.93 11h2.02c-.11-1.1-.4-2.14-.84-3.1l-1.74 1c.28.66.47 1.36.56 2.1zM8.9 19.37l-1 1.74c.96.44 2.01.73 3.1.84v-2.02c-.74-.09-1.44-.28-2.1-.56zM11 4.07V2.05c-1.1.11-2.14.4-3.1.84l1 1.74c.66-.28 1.36-.47 2.1-.56zm7.36 3.1l1.74-1.01c-.63-.87-1.4-1.64-2.27-2.27l-1.01 1.74c.59.45 1.1.96 1.54 1.54zM4.63 8.9l-1.74-1c-.44.96-.73 2-.84 3.1h2.02c.09-.74.28-1.44.56-2.1zm15.3 4.1c-.09.74-.28 1.44-.56 2.1l1.74 1c.44-.96.73-2.01.84-3.1h-2.02zm-3.1 5.36l1.01 1.74c.87-.63 1.64-1.4 2.27-2.27l-1.74-1.01c-.45.59-.96 1.1-1.54 1.54zM7.17 5.64l-1-1.75c-.88.64-1.64 1.4-2.27 2.28l1.74 1.01a7.7 7.7 0 0 1 1.53-1.54zM5.64 16.83l-1.74 1c.63.87 1.4 1.64 2.27 2.27l1.01-1.74a7.7 7.7 0 0 1-1.54-1.53zM13 7h-2v5.41l4.29 4.29l1.41-1.41l-3.7-3.7V7z"/></svg>',clearIcon:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15 2h-3.5l-1-1h-5l-1 1H1v2h14zm1 7c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7zm-7 7c0 .34.03.67.08 1H4V7h8v3.26c-1.81 1.27-3 3.36-3 5.74zm7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"/><path fill="currentColor" d="M16.5 12H15v5l3.6 2.1l.8-1.2l-2.9-1.7z"/></svg>'},onFetch:()=>{},onSelect:()=>{},onClear:()=>{},onFocus:()=>{},onBlur:()=>{},onDropdownVisibleChange:()=>{},showSubmitButton:!0,submitButtonLabel:"Submit",offsetTop:5,autoFlip:!1,submitCallback:()=>{}},k=e=>typeof e=="string",p=e=>typeof e=="function",g=async(e,t)=>{for(const i of t)try{const s=C(i,"{id}",e),a=await fetch(s);if(a.status===200){const r=await a.blob();return URL.createObjectURL(r)}}catch(s){console.error(s)}return""},C=(e,t,i)=>e.replace(new RegExp(t,"g"),i),d=(e,t,i)=>{e.forEach(s=>{s.classList.remove(i)}),e[t].classList.add(i)},m=e=>e.replace(/(<([^>]+)>)/gi,""),L=e=>{try{const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},A=(e,t)=>{if(!t.enabled||!t.key)return;const i=t.type==="localStorage"?localStorage:sessionStorage,s=v(t),a=s.findIndex(r=>r.id===e.id);a>-1&&s.splice(a,1),s.splice(0,0,e),i.setItem(t.key,JSON.stringify(s.length>5?s.slice(0,5):s))},v=e=>{if(!e.enabled||!e.key)return[];const i=(e.type==="localStorage"?localStorage:sessionStorage).getItem(e.key)||"";return L(i)},x=e=>{(e.type==="localStorage"?localStorage:sessionStorage).removeItem(e.key)};function _(e,t=0,{start:i=!0,middle:s=!0,once:a=!1}={}){let r=i,l=0,c,n=!1;function o(...h){if(n)return;const u=Date.now()-l;l=Date.now(),i&&s&&u>=t&&(r=!0),r?(r=!1,e.apply(this,h),a&&o.cancel()):(s&&u<t||!s)&&(clearTimeout(c),c=setTimeout(()=>{l=Date.now(),e.apply(this,h),a&&o.cancel()},s?t-u:t))}return o.cancel=()=>{clearTimeout(c),n=!0},o}function W(e,t=0,{start:i=!1,middle:s=!1,once:a=!1}={}){return _(e,t,{start:i,middle:s,once:a})}const I=async e=>{if(e.length<2||e.length>=100)return[];const t=`https://autocomplete.clearbit.com/v1/companies/suggest?query=${e}`;return(await(await fetch(t,{method:"GET",mode:"cors"})).json()).map(a=>({name:a.name,id:a.domain,avatar:a.logo}))},z=async(e,t)=>{switch(t.api){case"clearbit":return await I(e);default:return[]}},D=(e,t)=>{let i=!1;document.addEventListener("click",s=>{!e.contains(s.target)&&!i&&t(),i=e.contains(s.target)},!0)},H=["https://image.qcc.com/logo/{id}.jpg","https://image.qcc.com/auto/{id}.jpg"],B=async(e,t)=>{const i=e.dataset.id||"";if(t.avatarUrl){e.src=await g(i,[t.avatarUrl]);return}switch(t.api){case"qcc_open":e.src=await g(i,H);break}};class ${constructor(t={}){this.suggestions=[],this.suggestionElement=document.createElement("div"),this.suggestionActivatedClassName="suggestion-popper--activated",this.inputWrapElement=document.createElement("div"),this.inputWrapHaveWordsClassName="company-autocomplete--words",this.inputWrapActivatedClassName="company-autocomplete--activated",this.options=Object.assign({},S,t),k(this.options.target)?this.target=document.querySelector(this.options.target):this.target=this.options.target,this.render()}render(){var s,a,r,l,c;if(!this.target)return;const t=[`<div class="company-autocomplete ${this.options.showSubmitButton?"company-autocomplete--show-submit":""}">`,'<div class="company-autocomplete__input">',`<input type="text" placeholder="${this.options.placeholder}" />`,this.options.clearable?`<div class="company-autocomplete__clear"><i class="company-autocomplete__clear-icon">${this.options.clearIcon}</i></div>`:"","</div>",this.options.showSubmitButton?'<div class="company-autocomplete__submit">':"",this.options.showSubmitButton?`<button type="button">${this.options.submitButtonLabel}</button>`:"",this.options.showSubmitButton?"</div>":"","</div>"];this.target.innerHTML=t.join(""),this.suggestionElement.classList.add("suggestion-popper"),this.clearSuggestion(),this.options.popupAppendToBody?document.body.appendChild(this.suggestionElement):this.target.appendChild(this.suggestionElement),this.inputWrapElement=this.target.querySelector(".company-autocomplete"),this.inputElement=this.inputWrapElement.querySelector("input");const i=this.inputWrapElement.querySelector("button");y(this.inputWrapElement,this.suggestionElement,()=>{f(this.inputWrapElement,this.suggestionElement,{middleware:[b(this.options.offsetTop),E({apply:({rects:n})=>{Object.assign(this.suggestionElement.style,{width:`${n.reference.width}px`})}}),...this.options.autoFlip?[w({fallbackPlacements:["top"]})]:[]]}).then(({x:n,y:o})=>{Object.assign(this.suggestionElement.style,{left:`${n}px`,top:`${o}px`})})}),(s=this.inputElement)==null||s.addEventListener("input",()=>{var o;this.keyboardActiveIndex=void 0,this.selectCompany=void 0;const n=((o=this.inputElement)==null?void 0:o.value)||"";this.inputWrapElement.classList[n.length>0?"add":"remove"](this.inputWrapHaveWordsClassName),n.length===0&&(this.clearSuggestion(),this.hideSuggestion())}),(a=this.inputElement)==null||a.addEventListener("input",W(()=>{var o;const n=((o=this.inputElement)==null?void 0:o.value)||"";n&&this.handleQuerySuggestion(n)},this.options.queryDelay)),(r=this.inputElement)==null||r.addEventListener("click",n=>{if(this.suggestions.length>0){this.showSuggestion();return}const o=n.target.value;o?this.handleQuerySuggestion(o):this.options.history.enabled&&this.handleSuggestionDom(v(this.options.history),"history")}),i==null||i.addEventListener("click",()=>{var n;this.handleSubmit(((n=this.inputElement)==null?void 0:n.value)||"")}),D(this.suggestionElement,()=>{this.hideSuggestion()}),this.suggestionElement.addEventListener("click",n=>{if(n.target.closest(".suggestion")){const o=n.target.closest(".suggestion"),h=(o==null?void 0:o.dataset.name)||"";this.inputElement.value=h,this.suggestions=[],this.selectCompany={id:(o==null?void 0:o.dataset.id)||"",name:h},this.handleSelect(),this.hideSuggestion(),this.inputWrapElement.classList.add(this.inputWrapHaveWordsClassName)}n.target.id==="remove-history-link"&&(x(this.options.history),this.clearSuggestion(),this.hideSuggestion())}),this.inputClearElement=this.inputWrapElement.querySelector(".company-autocomplete__clear-icon"),this.inputClearElement&&((l=this.inputClearElement)==null||l.addEventListener("click",()=>{this.handleClear()})),this.options.autoFocus&&((c=this.inputElement)==null||c.focus()),this.inputElement.addEventListener("focus",()=>{p(this.options.onFocus)&&this.options.onFocus()}),this.inputElement.addEventListener("blur",()=>{p(this.options.onBlur)&&this.options.onBlur()})}handleQuerySuggestion(t){z(t,this.options).then(i=>{this.handleSuggestionDom(i),this.options.onFetch()})}handleSuggestionDom(t,i="fetch"){var a,r;if(this.suggestions=t,t.length===0){this.clearSuggestion(),this.hideSuggestion();return}const s=['<div class="suggestion-popper__body">'];t.forEach(l=>{var n;const c=m(l.name);s.push(`<div class="suggestion" data-id="${l.id}" data-name="${c}">`),l.avatar?s.push(`<div class="suggestion__avatar"><img data-id="${l.id||""}" alt="${c}" src="${l.avatar||""}"/></div>`):i==="history"&&s.push(`<div class="suggestion__avatar"><i class="suggestion__avatar-icon">${(n=this.options.history)==null?void 0:n.itemIcon}</i></div>`),s.push(`<div class="suggestion__label">${l.name}</div>`),s.push('<div class="suggestion__extra"></div>'),s.push("</div>")}),s.push("</div>"),s.push('<div class="suggestion-popper__footer">'),i==="history"&&((a=this.options.history)!=null&&a.showClear)&&t.length>0&&s.push(`<a id="remove-history-link" href="javascript:;"><i class="suggestion-popper__icon">${((r=this.options.history)==null?void 0:r.clearIcon)||""}</i>删除历史</a>`),s.push("</div>"),this.suggestionElement.innerHTML=s.join(""),this.suggestionElement.querySelectorAll("img").forEach(l=>{l.getAttribute("src")||B(l,this.options)}),this.showSuggestion()}handleSelect(){this.options.history.enabled&&this.selectCompany&&A(this.selectCompany,this.options.history),this.options.onSelect(this.selectCompany)}handleSubmit(t){this.options.submitCallback({company:this.selectCompany,text:t})}showSuggestion(){this.inputWrapElement.classList.add(this.inputWrapActivatedClassName),this.suggestionElement.classList.add(this.suggestionActivatedClassName),this.keyDownHandler&&this.inputWrapElement.removeEventListener("keydown",this.keyDownHandler),this.keyDownHandler=this.handleKeyDown.bind(this),this.inputWrapElement.addEventListener("keydown",this.keyDownHandler),this.options.onDropdownVisibleChange(!0)}hideSuggestion(){this.inputWrapElement.classList.remove(this.inputWrapActivatedClassName),this.suggestionElement.classList.remove(this.suggestionActivatedClassName),this.inputWrapElement.removeEventListener("keydown",this.keyDownHandler),this.options.onDropdownVisibleChange(!1)}clearSuggestion(){this.suggestionElement.textContent="",this.suggestions=[]}handleKeyDown(t){var i;switch(t.key){case"Enter":this.handleSubmit((i=t.target)==null?void 0:i.value);break;case"ArrowUp":this.keyboardActiveIndex?this.keyboardActiveIndex--:this.keyboardActiveIndex=this.suggestions.length-1,this.selectCompany=this.suggestions[this.keyboardActiveIndex],d(Array.from(this.suggestionElement.querySelectorAll(".suggestion")),this.keyboardActiveIndex,"suggestion--keyboard-active"),this.handleBackFill();break;case"ArrowDown":this.keyboardActiveIndex===void 0||this.keyboardActiveIndex>=this.suggestions.length-1?this.keyboardActiveIndex=0:this.keyboardActiveIndex++,this.selectCompany=this.suggestions[this.keyboardActiveIndex],d(Array.from(this.suggestionElement.querySelectorAll(".suggestion")),this.keyboardActiveIndex,"suggestion--keyboard-active"),this.handleBackFill();break;case"Escape":this.handleClear();break}}handleBackFill(){var t;this.options.backFill&&(this.inputElement.value=m(((t=this.selectCompany)==null?void 0:t.name)||""))}handleClear(){this.selectCompany=void 0,this.inputElement.value="",this.clearSuggestion(),this.inputWrapElement.classList.remove(this.inputWrapHaveWordsClassName),this.options.onClear()}}export{$ as C};