import{C as s}from"./chunks/global.3399ca61.js";import{d as a,h as n,j as p,c as o,o as l,Q as e}from"./chunks/framework.93602dd0.js";import"./chunks/floating-ui.dom.562a8523.js";const t=e(`<h1 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h1><h2 id="clearbit-api" tabindex="-1">ClearBit API <a class="header-anchor" href="#clearbit-api" aria-label="Permalink to &quot;ClearBit API&quot;">​</a></h2><div id="clearbit_input"></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { CompanyAutocomplete } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;company-autocomplete&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">companyAutocomplete</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CompanyAutocomplete</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  api: </span><span style="color:#9ECBFF;">&#39;clearbit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  target: </span><span style="color:#9ECBFF;">&#39;#example&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { CompanyAutocomplete } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;company-autocomplete&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">companyAutocomplete</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CompanyAutocomplete</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  api: </span><span style="color:#032F62;">&#39;clearbit&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  target: </span><span style="color:#032F62;">&#39;#example&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="qcc-open-api" tabindex="-1">QCC Open API <a class="header-anchor" href="#qcc-open-api" aria-label="Permalink to &quot;QCC Open API&quot;">​</a></h2><div id="qcc_open_input"></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { CompanyAutocomplete } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;company-autocomplete&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">companyAutocomplete</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CompanyAutocomplete</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  api: </span><span style="color:#9ECBFF;">&#39;qcc_open&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  target: </span><span style="color:#9ECBFF;">&#39;#example&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { CompanyAutocomplete } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;company-autocomplete&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">companyAutocomplete</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CompanyAutocomplete</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  api: </span><span style="color:#032F62;">&#39;qcc_open&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  target: </span><span style="color:#032F62;">&#39;#example&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,7),c=[t],F=JSON.parse('{"title":"Example","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"guide/example.md","filePath":"guide/example.md"}'),r={name:"guide/example.md"},h=a({...r,setup(i){return n("clearbit"),p(()=>{new s({api:"clearbit",target:"#clearbit_input",autoFocus:!0}),new s({api:"qcc_open",target:"#qcc_open_input",autoFocus:!0})}),(y,E)=>(l(),o("div",null,c))}});export{F as __pageData,h as default};
