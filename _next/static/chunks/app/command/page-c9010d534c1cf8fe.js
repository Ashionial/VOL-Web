(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{5683:function(e,r,n){Promise.resolve().then(n.bind(n,222))},222:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return a}});var t=n(7437);n(8877);var i=n(495),l=n(2265),o=n(2907);let s=l.forwardRef((e,r)=>{let{className:n,type:i,...l}=e;return(0,t.jsx)("input",{type:i,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:r,...l})});s.displayName="Input";var u=n(9039);function a(){let[e,r]=(0,l.useState)("kubectl get po"),[n,o]=(0,l.useState)(!1);return(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center h-screen",children:[(0,t.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[(0,t.jsx)("div",{className:"my-input",children:(0,t.jsx)(s,{type:"text",className:"rounded-xl",value:e,onChange:e=>r(e.target.value)})}),(0,t.jsx)(i.z,{onClick:()=>{console.log(e),o(!0)},children:"Submit"})]}),(0,t.jsx)("div",{className:"mt-4",children:n?(0,t.jsx)(c,{command:e}):(0,t.jsx)(t.Fragment,{})})]})}function c(e){let{data:r,error:n,isLoading:i}=(0,u.ZP)(e.command,e=>o.h.execPost({cmd:e})),l=atob((null==r?void 0:r.output)||"");return(0,t.jsx)(t.Fragment,{children:r?(0,t.jsx)("div",{className:"w-full whitespace-pre-wrap",children:l}):null})}},495:function(e,r,n){"use strict";n.d(r,{z:function(){return a}});var t=n(7437),i=n(2265),l=n(2974),o=n(2218),s=n(2907);let u=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),a=i.forwardRef((e,r)=>{let{className:n,variant:i,size:o,asChild:a=!1,...c}=e,d=a?l.g7:"button";return(0,t.jsx)(d,{className:(0,s.cn)(u({variant:i,size:o,className:n})),ref:r,...c})});a.displayName="Button"},8877:function(){},2974:function(e,r,n){"use strict";n.d(r,{g7:function(){return l}});var t=n(2265),i=n(7437),l=t.forwardRef((e,r)=>{let{children:n,...l}=e,s=t.Children.toArray(n),a=s.find(u);if(a){let e=a.props.children,n=s.map(r=>r!==a?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,i.jsx)(o,{...l,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,n):null})}return(0,i.jsx)(o,{...l,ref:r,children:n})});l.displayName="Slot";var o=t.forwardRef((e,r)=>{let{children:n,...i}=e;if(t.isValidElement(n)){let e,l;let o=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return t.cloneElement(n,{...function(e,r){let n={...r};for(let t in r){let i=e[t],l=r[t];/^on[A-Z]/.test(t)?i&&l?n[t]=(...e)=>{l(...e),i(...e)}:i&&(n[t]=i):"style"===t?n[t]={...i,...l}:"className"===t&&(n[t]=[i,l].filter(Boolean).join(" "))}return{...e,...n}}(i,n.props),ref:r?function(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}(r,o):o})}return t.Children.count(n)>1?t.Children.only(null):null});o.displayName="SlotClone";var s=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function u(e){return t.isValidElement(e)&&e.type===s}},2218:function(e,r,n){"use strict";n.d(r,{j:function(){return l}});let t=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e,r,n=0,t="";n<arguments.length;)(e=arguments[n++])&&(r=function e(r){var n,t,i="";if("string"==typeof r||"number"==typeof r)i+=r;else if("object"==typeof r){if(Array.isArray(r))for(n=0;n<r.length;n++)r[n]&&(t=e(r[n]))&&(i&&(i+=" "),i+=t);else for(n in r)r[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(t&&(t+=" "),t+=r);return t},l=(e,r)=>n=>{var l;if((null==r?void 0:r.variants)==null)return i(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:o,defaultVariants:s}=r,u=Object.keys(o).map(e=>{let r=null==n?void 0:n[e],i=null==s?void 0:s[e];if(null===r)return null;let l=t(r)||t(i);return o[e][l]}),a=n&&Object.entries(n).reduce((e,r)=>{let[n,t]=r;return void 0===t||(e[n]=t),e},{});return i(e,u,null==r?void 0:null===(l=r.compoundVariants)||void 0===l?void 0:l.reduce((e,r)=>{let{class:n,className:t,...i}=r;return Object.entries(i).every(e=>{let[r,n]=e;return Array.isArray(n)?n.includes({...s,...a}[r]):({...s,...a})[r]===n})?[...e,n,t]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}},function(e){e.O(0,[404,868,39,907,971,23,744],function(){return e(e.s=5683)}),_N_E=e.O()}]);