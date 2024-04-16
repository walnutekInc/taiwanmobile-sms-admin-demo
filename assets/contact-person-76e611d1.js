import{Q as ae,S as Ke,U as ve}from"./antd-966e458b.js";import{d as Ge,f as H,K as Xe,c as G,u as ce,V as Qe,Z as Ye,a7 as Ze,a9 as et,_ as tt,a5 as nt,ag as rt,ah as st,ad as ot,ai as it,aj as at}from"./vue-6193fd76.js";import{r as ue}from"./index-21812d18.js";const Bn=Ge({name:"TTable",extends:ae,inheritAttrs:!1,__name:"index",props:{pagination:{type:Object}},setup(e){const t=e,n=H(null),r=Xe(),s=G(()=>({...ce(r)}));return(o,i)=>{const c=ae;return Qe(),Ye(c,ot({ref_key:"tableRef",ref:n},{...t,...ce(s),pagination:{...t.pagination,prefixCls:"t-pagination",showTotal:l=>{var f;return`${(f=t.pagination)==null?void 0:f.countRange}筆 / ${l}筆`}}}),Ze({_:2},[et(Object.keys(o.$slots),l=>({name:l,fn:tt(f=>[nt(o.$slots,l,rt(st(f||{})))])}))]),1040)}}});const ct=()=>{const e=H([]),t=H({total:0,pages:1,pageSize:10,current:1,countRange:G(()=>"")});return{pagination:t,list:e,setResponseList:r=>{const{records:s,total:o,pageSize:i,current:c,pages:l}=r;e.value=s??[],t.value={total:o,pageSize:i,current:c,pages:l,countRange:G(()=>{const f=(c-1)*i;return e.value.length===0?"0-0":`${f+1} - ${f+e.value.length}`})}}}},g=[{id:1,label:"群組A"},{id:2,label:"群組B"},{id:3,label:"群組C"},{id:4,label:"群組D"},{id:5,label:"群組E"},{id:6,label:"群組F"},{id:7,label:"群組G"},{id:8,label:"群組H"}],Un=()=>{const e=H([]);return{groupOptions:e,getGroupLabelOption:async()=>{e.value=g.map(r=>({value:r.id,...r}))},checkGroupLabelExist:async r=>!!Ke(g,{label:r})}};function Re(e,t){return function(){return e.apply(t,arguments)}}const{toString:ut}=Object.prototype,{getPrototypeOf:te}=Object,I=(e=>t=>{const n=ut.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>I(t)===e),M=e=>t=>typeof t===e,{isArray:N}=Array,F=M("undefined");function lt(e){return e!==null&&!F(e)&&e.constructor!==null&&!F(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Oe=T("ArrayBuffer");function dt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Oe(e.buffer),t}const ft=M("string"),R=M("function"),Te=M("number"),z=e=>e!==null&&typeof e=="object",pt=e=>e===!0||e===!1,U=e=>{if(I(e)!=="object")return!1;const t=te(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ht=T("Date"),mt=T("File"),yt=T("Blob"),bt=T("FileList"),Et=e=>z(e)&&R(e.pipe),wt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=I(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},gt=T("URLSearchParams"),St=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),N(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ae(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ce=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Pe=e=>!F(e)&&e!==Ce;function X(){const{caseless:e}=Pe(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ae(t,s)||s;U(t[o])&&U(r)?t[o]=X(t[o],r):U(r)?t[o]=X({},r):N(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&L(arguments[r],n);return t}const Rt=(e,t,n,{allOwnKeys:r}={})=>(L(t,(s,o)=>{n&&R(s)?e[o]=Re(s,n):e[o]=s},{allOwnKeys:r}),e),Ot=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Tt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},At=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&te(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ct=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Pt=e=>{if(!e)return null;if(N(e))return e;let t=e.length;if(!Te(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},xt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&te(Uint8Array)),_t=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Nt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},kt=T("HTMLFormElement"),Ft=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),le=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Lt=T("RegExp"),xe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Bt=e=>{xe(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ut=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return N(e)?r(e):r(String(e).split(t)),n},Dt=()=>{},jt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),V="abcdefghijklmnopqrstuvwxyz",de="0123456789",_e={DIGIT:de,ALPHA:V,ALPHA_DIGIT:V+V.toUpperCase()+de},Ht=(e=16,t=_e.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function qt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const It=e=>{const t=new Array(10),n=(r,s)=>{if(z(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=N(r)?[]:{};return L(r,(i,c)=>{const l=n(i,s+1);!F(l)&&(o[c]=l)}),t[s]=void 0,o}}return r};return n(e,0)},Mt=T("AsyncFunction"),zt=e=>e&&(z(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:N,isArrayBuffer:Oe,isBuffer:lt,isFormData:wt,isArrayBufferView:dt,isString:ft,isNumber:Te,isBoolean:pt,isObject:z,isPlainObject:U,isUndefined:F,isDate:ht,isFile:mt,isBlob:yt,isRegExp:Lt,isFunction:R,isStream:Et,isURLSearchParams:gt,isTypedArray:xt,isFileList:bt,forEach:L,merge:X,extend:Rt,trim:St,stripBOM:Ot,inherits:Tt,toFlatObject:At,kindOf:I,kindOfTest:T,endsWith:Ct,toArray:Pt,forEachEntry:_t,matchAll:Nt,isHTMLForm:kt,hasOwnProperty:le,hasOwnProp:le,reduceDescriptors:xe,freezeMethods:Bt,toObjectSet:Ut,toCamelCase:Ft,noop:Dt,toFiniteNumber:jt,findKey:Ae,global:Ce,isContextDefined:Pe,ALPHABET:_e,generateString:Ht,isSpecCompliantForm:qt,toJSONObject:It,isAsyncFn:Mt,isThenable:zt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ne=m.prototype,ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ke[e]={value:e}});Object.defineProperties(m,ke);Object.defineProperty(Ne,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Ne);return a.toFlatObject(e,i,function(l){return l!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const $t=null;function Q(e){return a.isPlainObject(e)||a.isArray(e)}function Fe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function fe(e,t,n){return e?e.concat(t).map(function(s,o){return s=Fe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Jt(e){return a.isArray(e)&&!e.some(Q)}const Vt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function $(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,E){return!a.isUndefined(E[h])});const r=n.metaTokens,s=n.visitor||d,o=n.dots,i=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function f(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!l&&a.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,h,E){let w=p;if(p&&!E&&typeof p=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Jt(p)||(a.isFileList(p)||a.endsWith(h,"[]"))&&(w=a.toArray(p)))return h=Fe(h),w.forEach(function(P,We){!(a.isUndefined(P)||P===null)&&t.append(i===!0?fe([h],We,o):i===null?h:h+"[]",f(P))}),!1}return Q(p)?!0:(t.append(fe(E,h,o),f(p)),!1)}const u=[],b=Object.assign(Vt,{defaultVisitor:d,convertValue:f,isVisitable:Q});function S(p,h){if(!a.isUndefined(p)){if(u.indexOf(p)!==-1)throw Error("Circular reference detected in "+h.join("."));u.push(p),a.forEach(p,function(w,C){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(C)?C.trim():C,h,b))===!0&&S(w,h?h.concat(C):[C])}),u.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return S(e),t}function pe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ne(e,t){this._pairs=[],e&&$(e,this,t)}const Le=ne.prototype;Le.append=function(t,n){this._pairs.push([t,n])};Le.toString=function(t){const n=t?function(r){return t.call(this,r,pe)}:pe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Wt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Be(e,t,n){if(!t)return e;const r=n&&n.encode||Wt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ne(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Kt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const he=Kt,Ue={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vt=typeof URLSearchParams<"u"?URLSearchParams:ne,Gt=typeof FormData<"u"?FormData:null,Xt=typeof Blob<"u"?Blob:null,Qt={isBrowser:!0,classes:{URLSearchParams:vt,FormData:Gt,Blob:Xt},protocols:["http","https","file","blob","url","data"]},De=typeof window<"u"&&typeof document<"u",Yt=(e=>De&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Zt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),en=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:De,hasStandardBrowserEnv:Yt,hasStandardBrowserWebWorkerEnv:Zt},Symbol.toStringTag,{value:"Module"})),O={...en,...Qt};function tn(e,t){return $(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function nn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function rn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function je(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),l=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,l?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=rn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(nn(r),s,n,0)}),n}return null}function sn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const re={transitional:Ue,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(je(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return tn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return $(c?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),sn(t)):t}],transformResponse:[function(t){const n=this.transitional||re.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{re.headers[e]={}});const se=re,on=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),an=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&on[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},me=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function D(e){return e===!1||e==null?e:a.isArray(e)?e.map(D):String(e)}function cn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const un=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function W(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function ln(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function dn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class J{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,l,f){const d=k(l);if(!d)throw new Error("header name must be a non-empty string");const u=a.findKey(s,d);(!u||s[u]===void 0||f===!0||f===void 0&&s[u]!==!1)&&(s[u||l]=D(c))}const i=(c,l)=>a.forEach(c,(f,d)=>o(f,d,l));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!un(t)?i(an(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=k(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return cn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=k(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||W(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=k(i),i){const c=a.findKey(r,i);c&&(!n||W(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||W(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=D(s),delete n[o];return}const c=t?ln(o):String(o).trim();c!==o&&delete n[o],n[c]=D(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[me]=this[me]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=k(i);r[c]||(dn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}J.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(J.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(J);const A=J;function K(e,t){const n=this||se,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function He(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,m,{__CANCEL__:!0});function fn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const pn=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function hn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function mn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function qe(e,t){return e&&!hn(t)?mn(e,t):t}const yn=O.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function bn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function En(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(l){const f=Date.now(),d=r[o];i||(i=f),n[s]=l,r[s]=f;let u=o,b=0;for(;u!==s;)b+=n[u++],u=u%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),f-i<t)return;const S=d&&f-d;return S?Math.round(b*1e3/S):void 0}}function ye(e,t){let n=0;const r=En(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,l=r(c),f=o<=i;n=o;const d={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:l||void 0,estimated:l&&i&&f?(i-o)/l:void 0,event:s};d[t?"download":"upload"]=!0,e(d)}}const wn=typeof XMLHttpRequest<"u",gn=wn&&function(e){return new Promise(function(n,r){let s=e.data;const o=A.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let d;if(a.isFormData(s)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((d=o.getContentType())!==!1){const[h,...E]=d?d.split(";").map(w=>w.trim()).filter(Boolean):[];o.setContentType([h||"multipart/form-data",...E].join("; "))}}let u=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(h+":"+E))}const b=qe(e.baseURL,e.url);u.open(e.method.toUpperCase(),Be(b,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function S(){if(!u)return;const h=A.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),w={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:h,config:e,request:u};fn(function(P){n(P),f()},function(P){r(P),f()},w),u=null}if("onloadend"in u?u.onloadend=S:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(S)},u.onabort=function(){u&&(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||Ue;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),r(new m(E,w.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},O.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&yn(b))){const h=e.xsrfHeaderName&&e.xsrfCookieName&&pn.read(e.xsrfCookieName);h&&o.set(e.xsrfHeaderName,h)}s===void 0&&o.setContentType(null),"setRequestHeader"in u&&a.forEach(o.toJSON(),function(E,w){u.setRequestHeader(w,E)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",ye(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=h=>{u&&(r(!h||h.type?new B(null,e,u):h),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const p=bn(b);if(p&&O.protocols.indexOf(p)===-1){r(new m("Unsupported protocol "+p+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})},Y={http:$t,xhr:gn};a.forEach(Y,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const be=e=>`- ${e}`,Sn=e=>a.isFunction(e)||e===null||e===!1,Ie={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Sn(n)&&(r=Y[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(be).join(`
`):" "+be(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Y};function v(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function Ee(e){return v(e),e.headers=A.from(e.headers),e.data=K.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ie.getAdapter(e.adapter||se.adapter)(e).then(function(r){return v(e),r.data=K.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return He(r)||(v(e),r&&r.response&&(r.response.data=K.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const we=e=>e instanceof A?{...e}:e;function _(e,t){t=t||{};const n={};function r(f,d,u){return a.isPlainObject(f)&&a.isPlainObject(d)?a.merge.call({caseless:u},f,d):a.isPlainObject(d)?a.merge({},d):a.isArray(d)?d.slice():d}function s(f,d,u){if(a.isUndefined(d)){if(!a.isUndefined(f))return r(void 0,f,u)}else return r(f,d,u)}function o(f,d){if(!a.isUndefined(d))return r(void 0,d)}function i(f,d){if(a.isUndefined(d)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,d)}function c(f,d,u){if(u in t)return r(f,d);if(u in e)return r(void 0,f)}const l={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(f,d)=>s(we(f),we(d),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(d){const u=l[d]||s,b=u(e[d],t[d],d);a.isUndefined(b)&&u!==c||(n[d]=b)}),n}const Me="1.6.8",oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ge={};oe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Me+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!ge[i]&&(ge[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Rn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],l=c===void 0||i(c,o,e);if(l!==!0)throw new m("option "+o+" must be "+l,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const Z={assertOptions:Rn,validators:oe},x=Z.validators;class q{constructor(t){this.defaults=t,this.interceptors={request:new he,response:new he}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=_(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Z.assertOptions(r,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Z.assertOptions(s,{encode:x.function,serialize:x.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=A.concat(i,o);const c=[];let l=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(l=l&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const f=[];this.interceptors.response.forEach(function(h){f.push(h.fulfilled,h.rejected)});let d,u=0,b;if(!l){const p=[Ee.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,f),b=p.length,d=Promise.resolve(n);u<b;)d=d.then(p[u++],p[u++]);return d}b=c.length;let S=n;for(u=0;u<b;){const p=c[u++],h=c[u++];try{S=p(S)}catch(E){h.call(this,E);break}}try{d=Ee.call(this,S)}catch(p){return Promise.reject(p)}for(u=0,b=f.length;u<b;)d=d.then(f[u++],f[u++]);return d}getUri(t){t=_(this.defaults,t);const n=qe(t.baseURL,t.url);return Be(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){q.prototype[t]=function(n,r){return this.request(_(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(_(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}q.prototype[t]=n(),q.prototype[t+"Form"]=n(!0)});const j=q;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new B(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(s){t=s}),cancel:t}}}const On=ie;function Tn(e){return function(n){return e.apply(null,n)}}function An(e){return a.isObject(e)&&e.isAxiosError===!0}const ee={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ee).forEach(([e,t])=>{ee[t]=e});const Cn=ee;function ze(e){const t=new j(e),n=Re(j.prototype.request,t);return a.extend(n,j.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ze(_(e,s))},n}const y=ze(se);y.Axios=j;y.CanceledError=B;y.CancelToken=On;y.isCancel=He;y.VERSION=Me;y.toFormData=$;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=Tn;y.isAxiosError=An;y.mergeConfig=_;y.AxiosHeaders=A;y.formToJSON=e=>je(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=Ie.getAdapter;y.HttpStatusCode=Cn;y.default=y;const Pn=y,$e="Authorization",Je=it(()=>at($e,null)),Ve=Pn.create({baseURL:"/api",timeout:6e4});async function xn(e){const t=Je();return t.value&&e.headers.set($e,t.value),e}function _n(e){return e.data}function Nn(e){var n;const t=Je();if(e.response){const{data:r,status:s,statusText:o}=e.response;s===401&&((n=ve)==null||n.error({message:"401",description:(r==null?void 0:r.msg)||o,duration:3e3}),t.value=null,ue.replace({path:"/login",query:{redirect:ue.currentRoute.value.path}}).then(()=>{}))}return Promise.reject(e)}Ve.interceptors.request.use(xn);Ve.interceptors.response.use(_n,Nn);const Se=[{key:"1",countryCode:"+886",phone:"933817361",name:"張三三",group:g.slice(1,6),gender:"M",isBlackList:!1,areaCode:"02",contact:"99481728",company:"ABC公司",email:"changthree@gmail.com",birth:"1990/10/26",city:"台北市",area:"中山區",address:"台北市中山區",note:"",createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"2",countryCode:"+886",phone:"926173514",name:"李四四",group:g.slice(1,5),gender:"M",isBlackList:!1,areaCode:"02",contact:"81638163",company:"KKK公司",email:"eyweiqiwefweq@gmail.com",birth:"1990/10/26",city:"台北市",area:"中山區",address:"台北市中山區",note:"VIP客戶",createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"3",countryCode:"+886",phone:"977263715",name:"黃五五",group:g.slice(0,3),gender:"F",isBlackList:!0,areaCode:"03",contact:"94816381",company:"HOW公司",email:"sxedewq@gmail.com",birth:"1990/10/26",city:"台北市",area:"中山區",address:"台北市中山區",note:"中階主管",createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"4",countryCode:"+886",phone:"977273612",name:"廖六六",group:g.slice(0,2),gender:"F",isBlackList:!1,areaCode:"04",contact:"66135729",company:"EUQ公司",email:"42yhwof@gmail.com",birth:"1990/10/26",city:"台北市",area:"中山區",address:"台北市中山區",note:"新進員工",createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"5",countryCode:"+886",phone:"957283615",name:"菜七七",group:g.slice(0,1),gender:"M",isBlackList:!1,areaCode:"09",contact:"27194612",company:"WEUPHYEHD公司",email:"eehety45@gmail.com",birth:"1990/10/26",city:"台北市",area:"中山區",address:"台北市中山區",note:"",createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"6",countryCode:"+886",phone:"951783715",name:"陳八八",group:g.slice(0,2),gender:"F",isBlackList:!1,areaCode:"04",contact:"72835836",company:"EHPR公司",email:"t6u63e2-qwqw@gmail.com",birth:"1990/10/26",city:"台北市",area:"中山區",address:"台北市中山區",note:"",createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"7",countryCode:"+886",phone:"922838562",name:"魏久久",group:g.slice(0,4),gender:"M",isBlackList:!0,areaCode:"04",contact:"37362517",company:"WUOHFIWU公司",email:"rgtwejuou34@gmail.com",birth:"1990/10/26",city:"台北市",area:"中山區",address:"台北市中山區",note:"高階主管",createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"8",countryCode:"+886",phone:"981363791",name:"林十十",group:g.slice(0,2),gender:"F",isBlackList:!1,areaCode:"02",contact:"99481728",company:"WIUND公司",email:"ertuwi3_w@gmail.com",birth:"1990/10/26",city:"台北市",area:"中山區",address:"台北市中山區",note:"VIP客戶",createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"9",countryCode:"+886",phone:"912631812",name:"趙一一",group:g.slice(0,1),gender:"F",isBlackList:!1,areaCode:"02",contact:"99481728",company:"OOFB公司",email:"rgwe4p1@gmail.com",birth:"1990/10/26",city:"台北市",area:"中山區",address:"台北市中山區",note:"",createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"10",countryCode:"+886",phone:"912631812",name:"曾二二",group:g.slice(0,2),gender:"M",isBlackList:!0,areaCode:"03",contact:"24192366",company:"WEGIC公司",email:"fqhqkwd@gmail.com",birth:"1990/10/26",city:"台北市",area:"中山區",address:"台北市中山區",note:"實習生",createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"11",countryCode:"+886",phone:"957283615",name:"菜七七",group:g.slice(0,5),gender:"M",isBlackList:!1,areaCode:"03",contact:"27194612",company:"WEUPHYEHD公司",email:"eehety45@gmail.com",birth:"1990/10/26",city:"台北市",area:"中山區",address:"台北市中山區",note:"資深管理者",createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"}],Dn=()=>{const{list:e,pagination:t,setResponseList:n}=ct();return{getContactPerson:async l=>{n({total:11,pages:1,current:1,pageSize:10,records:Se})},contactPerson:e,pagination:t,deleteContactPerson:l=>({data:{status:"success"}}),uploadContactPerson:l=>({data:{status:"failure",dataFormatErrorDownloadUrl:"/",duplicateListDownloadUrl:"/",exampleFileDownloadUrl:"/",duplicateFiles:["第 203 行 0957193791","第 229 行 0965478333","第 230 行 0938576967","第 247 行 0957193791","第 248 行 0965478333","第 294 行 0938576967","第 319 行 0938576967","第 360 行 0965478333","第 369 行 0944856867","第 412 行 0965478333"],duplicateSystem:["第 23 行 0944716873","第 30 行 0957193791","第 68 行 0990347828","第 72 行 0934311896","第 89 行 0974565464","第 99 行 0945465677","第 138 行 0957854662","第 142 行 0945657453","第 150 行 0935364567","第 169 行 0934311896"]}}),getContactPersonArchived:async l=>{n({total:11,pages:1,current:1,pageSize:10,records:Se})},unArchivedContactPerson:l=>({data:{status:"success"}})}};export{Bn as _,Un as a,Dn as u};
