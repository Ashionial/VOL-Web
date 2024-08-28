(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{5683:function(e,t,n){Promise.resolve().then(n.bind(n,5326))},5326:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(7437),i=n(3102),o=n(2265);function a(){var e=(0,o.useRef)(null);return(0,r.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[(0,r.jsx)(i.I,{type:"text",placeholder:"Namespace",ref:e}),(0,r.jsx)(i.I,{type:"text",placeholder:"Namespace",ref:e})]})}},3102:function(e,t,n){"use strict";n.d(t,{I:function(){return a}});var r=n(7437),i=n(2265),o=n(7722);let a=i.forwardRef((e,t)=>{let{className:n,type:i,...a}=e;return(0,r.jsx)("input",{type:i,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...a})});a.displayName="Input"},7722:function(e,t,n){"use strict";n.d(t,{h:function(){return p},cn:function(){return f}});var r=n(4839),i=n(6164);let o="http://localhost".replace(/\/+$/,"");class a{set config(e){this.configuration=e}get basePath(){return null!=this.configuration.basePath?this.configuration.basePath:o}get fetchApi(){return this.configuration.fetchApi}get middleware(){return this.configuration.middleware||[]}get queryParamsStringify(){return this.configuration.queryParamsStringify||function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object.keys(t).map(r=>(function t(n,r){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=i+(i.length?"[".concat(n,"]"):n);if(r instanceof Array){let e=r.map(e=>encodeURIComponent(String(e))).join("&".concat(encodeURIComponent(o),"="));return"".concat(encodeURIComponent(o),"=").concat(e)}return r instanceof Set?t(n,Array.from(r),i):r instanceof Date?"".concat(encodeURIComponent(o),"=").concat(encodeURIComponent(r.toISOString())):r instanceof Object?e(r,o):"".concat(encodeURIComponent(o),"=").concat(encodeURIComponent(String(r)))})(r,t[r],n)).filter(e=>e.length>0).join("&")}}get username(){return this.configuration.username}get password(){return this.configuration.password}get apiKey(){let e=this.configuration.apiKey;if(e)return"function"==typeof e?e:()=>e}get accessToken(){let e=this.configuration.accessToken;if(e)return"function"==typeof e?e:async()=>e}get headers(){return this.configuration.headers}get credentials(){return this.configuration.credentials}constructor(e={}){this.configuration=e}}let s=new a;class c{withMiddleware(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=this.clone();return r.middleware=r.middleware.concat(...t),r}withPreMiddleware(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=t.map(e=>({pre:e}));return this.withMiddleware(...r)}withPostMiddleware(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=t.map(e=>({post:e}));return this.withMiddleware(...r)}isJsonMime(e){return!!e&&c.jsonRegex.test(e)}async request(e,t){let{url:n,init:r}=await this.createFetchParams(e,t),i=await this.fetchApi(n,r);if(i&&i.status>=200&&i.status<300)return i;throw new u(i,"Response returned an error code")}async createFetchParams(e,t){var n,r;let i,o=this.configuration.basePath+e.path;void 0!==e.query&&0!==Object.keys(e.query).length&&(o+="?"+this.configuration.queryParamsStringify(e.query));let a=Object.assign({},this.configuration.headers,e.headers);Object.keys(a).forEach(e=>void 0===a[e]?delete a[e]:{});let s={method:e.method,headers:a,body:e.body,credentials:this.configuration.credentials},c={...s,...await ("function"==typeof t?t:async()=>t)({init:s,context:e})};return(n=c.body,"undefined"!=typeof FormData&&n instanceof FormData||c.body instanceof URLSearchParams||(r=c.body,"undefined"!=typeof Blob&&r instanceof Blob))?i=c.body:i=this.isJsonMime(a["Content-Type"])?JSON.stringify(c.body):c.body,{url:o,init:{...c,body:i}}}clone(){let e=new this.constructor(this.configuration);return e.middleware=this.middleware.slice(),e}constructor(e=s){this.configuration=e,this.fetchApi=async(e,t)=>{let n,r={url:e,init:t};for(let e of this.middleware)e.pre&&(r=await e.pre({fetch:this.fetchApi,...r})||r);try{n=await (this.configuration.fetchApi||fetch)(r.url,r.init)}catch(e){for(let t of this.middleware)t.onError&&(n=await t.onError({fetch:this.fetchApi,url:r.url,init:r.init,error:e,response:n?n.clone():void 0})||n);if(void 0===n){if(e instanceof Error)throw new l(e,"The request failed and the interceptors did not return an alternative response");throw e}}for(let e of this.middleware)e.post&&(n=await e.post({fetch:this.fetchApi,url:r.url,init:r.init,response:n.clone()})||n);return n},this.middleware=e.middleware}}c.jsonRegex=RegExp("^(:?application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(:?;.*)?$","i");class u extends Error{constructor(e,t){super(t),this.response=e,this.name="ResponseError"}}class l extends Error{constructor(e,t){super(t),this.cause=e,this.name="FetchError"}}class d{async value(){return this.transformer(await this.raw.json())}constructor(e,t=e=>e){this.raw=e,this.transformer=t}}class h extends c{async k8sCommandPostRaw(e,t){var n;let r={};return r["Content-Type"]="application/json",new d(await this.request({path:"/k8s/command",method:"POST",headers:r,query:{},body:null==(n=e.k8sCommandPostRequest)?n:{action:n.action,resource:n.resource,name:n.name,namespace:n.namespace}},t))}async k8sCommandPost(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=await this.k8sCommandPostRaw(e,t);return await n.value()}async k8sNodeGetRaw(e,t){let n={};return n["Content-Type"]="application/json",new d(await this.request({path:"/k8s/node",method:"GET",headers:n,query:{},body:e.body},t))}async k8sNodeGet(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=await this.k8sNodeGetRaw(e,t);return await n.value()}async yamlPostRaw(e,t){var n;let r={};return r["Content-Type"]="application/json",new d(await this.request({path:"/yaml",method:"POST",headers:r,query:{},body:null==(n=e.yamlPostRequest)?n:{filename:n.filename,content:n.content}},t))}async yamlPost(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=await this.yamlPostRaw(e,t);return await n.value()}}function f(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.m6)((0,r.W)(t))}let p=new h(new a({basePath:"http://localhost:8000"}))}},function(e){e.O(0,[868,971,23,744],function(){return e(e.s=5683)}),_N_E=e.O()}]);