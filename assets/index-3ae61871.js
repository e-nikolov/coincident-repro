let L;let __tla=(async()=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();Promise.withResolvers||(Promise.withResolvers=function(){var t,n,r=new this(function(s,i){t=s,n=i});return{resolve:t,reject:n,promise:r}});const Oe=(e,t=document)=>t.querySelector(e),xe=(e,t=document)=>[...t.querySelectorAll(e)],vt=(e,t=document)=>{const r=new XPathEvaluator().createExpression(e).evaluate(t,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE),s=[];for(let i=0,{snapshotLength:o}=r;i<o;i++)s.push(r.snapshotItem(i));return s},Rt=-1,de=0,ne=1,re=2,Ze=3,Qe=4,et=5,tt=6,kt=7,Tt=8,ft=typeof self=="object"?self:globalThis,gn=(e,t)=>{const n=(s,i)=>(e.set(i,s),s),r=s=>{if(e.has(s))return e.get(s);const[i,o]=t[s];switch(i){case de:case Rt:return n(o,s);case ne:{const c=n([],s);for(const l of o)c.push(r(l));return c}case re:{const c=n({},s);for(const[l,d]of o)c[r(l)]=r(d);return c}case Ze:return n(new Date(o),s);case Qe:{const{source:c,flags:l}=o;return n(new RegExp(c,l),s)}case et:{const c=n(new Map,s);for(const[l,d]of o)c.set(r(l),r(d));return c}case tt:{const c=n(new Set,s);for(const l of o)c.add(r(l));return c}case kt:{const{name:c,message:l}=o;return n(new ft[c](l),s)}case Tt:return n(BigInt(o),s);case"BigInt":return n(Object(BigInt(o)),s)}return n(new ft[i](o),s)};return r},_n=e=>gn(new Map,e)(0),F="",{toString:wn}={},{keys:bn}=Object,U=e=>{const t=typeof e;if(t!=="object"||!e)return[de,t];const n=wn.call(e).slice(8,-1);switch(n){case"Array":return[ne,F];case"Object":return[re,F];case"Date":return[Ze,F];case"RegExp":return[Qe,F];case"Map":return[et,F];case"Set":return[tt,F]}return n.includes("Array")?[ne,n]:n.includes("Error")?[kt,n]:[re,n]},K=([e,t])=>e===de&&(t==="function"||t==="symbol"),En=(e,t,n,r)=>{const s=(o,c)=>{const l=r.push(o)-1;return n.set(c,l),l},i=o=>{if(n.has(o))return n.get(o);let[c,l]=U(o);switch(c){case de:{let a=o;switch(l){case"bigint":c=Tt,a=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);a=null;break;case"undefined":return s([Rt],o)}return s([c,a],o)}case ne:{if(l)return s([l,[...o]],o);const a=[],u=s([c,a],o);for(const p of o)a.push(i(p));return u}case re:{if(l)switch(l){case"BigInt":return s([l,o.toString()],o);case"Boolean":case"Number":case"String":return s([l,o.valueOf()],o)}if(t&&"toJSON"in o)return i(o.toJSON());const a=[],u=s([c,a],o);for(const p of bn(o))(e||!K(U(o[p])))&&a.push([i(p),i(o[p])]);return u}case Ze:return s([c,o.toISOString()],o);case Qe:{const{source:a,flags:u}=o;return s([c,{source:a,flags:u}],o)}case et:{const a=[],u=s([c,a],o);for(const[p,y]of o)(e||!(K(U(p))||K(U(y))))&&a.push([i(p),i(y)]);return u}case tt:{const a=[],u=s([c,a],o);for(const p of o)(e||!K(U(p)))&&a.push(i(p));return u}}const{message:d}=o;return s([c,{name:l,message:d}],o)};return i},vn=(e,{json:t,lossy:n}={})=>{const r=[];return En(!(t||n),!!t,new Map,r)(e),r};const{parse:Rn,stringify:kn}=JSON,Tn={json:!0,lossy:!0},An=e=>_n(Rn(e)),Sn=e=>kn(vn(e,Tn)),$n=Object.freeze(Object.defineProperty({__proto__:null,parse:An,stringify:Sn},Symbol.toStringTag,{value:"Module"})),se="5f50bb1c-57c3-47af-b36a-392fe80f8803",jn="M"+se,Pn="T"+se,On=e=>({value:new Promise(t=>{let n=new Worker("data:application/javascript,onmessage%3D(%7Bdata%3Ab%7D)%3D%3E(Atomics.wait(b%2C0)%2CpostMessage(0))");n.onmessage=t,n.postMessage(e)})});const{Int32Array:Ne,Map:ut,SharedArrayBuffer:pt,Uint16Array:Ie}=globalThis,{BYTES_PER_ELEMENT:dt}=Ne,{BYTES_PER_ELEMENT:xn}=Ie,{isArray:Nn}=Array,{notify:In,wait:Mn,waitAsync:Cn}=Atomics,{fromCharCode:Ln}=String,Wn=(e,t,n)=>{for(;Mn(e,0,0,t)==="timed-out";)n()},Me=new WeakSet,Te=new WeakMap,Fn={value:{then:e=>e()}},Bn=()=>{};let Dn=0;const nt=(e,{parse:t=JSON.parse,stringify:n=JSON.stringify,transform:r,interrupt:s}=JSON)=>{if(!Te.has(e)){const i=(a,...u)=>e.postMessage({[se]:u},{transfer:a}),o=typeof s=="function"?s:s?.handler||Bn,c=s?.delay||42,l=(a,u)=>a?(Cn||On)(u,0):(Wn(u,c,o),Fn);let d=!1;Te.set(e,new Proxy(new ut,{has:(a,u)=>typeof u=="string"&&!u.startsWith("_"),get:(a,u)=>u==="then"?null:(...p)=>{const y=Dn++;let b=new Ne(new pt(dt)),E=[];Me.has(p.at(-1)||E)&&Me.delete(E=p.pop()),i(E,y,b,u,r?p.map(r):p);const v=e!==globalThis;let f=0;return d&&v&&(f=setTimeout(console.warn,1e3,`💀🔒 - Possible deadlock if proxy.${u}(...args) is awaited`)),l(v,b).value.then(()=>{clearTimeout(f);const m=b[0];if(!m)return;const g=xn*m;return b=new Ne(new pt(g+g%dt)),i([],y,b),l(v,b).value.then(()=>t(Ln(...new Ie(b.buffer).slice(0,m))))})},set(a,u,p){if(!a.size){const y=new ut;e.addEventListener("message",async b=>{const E=b.data?.[se];if(Nn(E)){b.stopImmediatePropagation();const[v,f,...m]=E;if(m.length){const[g,T]=m;if(a.has(g)){d=!0;try{const h=await a.get(g)(...T);if(h!==void 0){const _=n(r?r(h):h);y.set(v,_),f[0]=_.length}}finally{d=!1}}else throw new Error(`Unsupported action: ${g}`)}else{const g=y.get(v);y.delete(v);for(let T=new Ie(f.buffer),h=0;h<g.length;h++)T[h]=g.charCodeAt(h)}In(f,0)}})}return!!a.set(u,p)}}))}return Te.get(e)};nt.transfer=(...e)=>(Me.add(e),e);const N="object",P="function",Hn="boolean",rt="number",oe="string",At="undefined",Jn="bigint",me="symbol",Un="null",{defineProperty:Ce,getOwnPropertyDescriptor:Yn,getPrototypeOf:St,isExtensible:qn,ownKeys:$t,preventExtensions:Xn,set:Vn,setPrototypeOf:Gn}=Reflect,{assign:zn,create:Kn}=Object,jt=St(Int8Array),Ae="isArray",Pt=(e,t)=>{const{get:n,set:r,value:s}=e;return n&&(e.get=t(n)),r&&(e.set=t(r)),s&&(e.value=t(s)),e},$=(e,t)=>[e,t],Ot=e=>t=>{const n=typeof t;switch(n){case N:if(t==null)return $(Un,t);if(t===globalThis)return $(N,null);case P:return e(n,t);case Hn:case rt:case oe:case At:case Jn:return $(n,t);case me:if(Le.has(t))return $(n,Le.get(t))}throw new Error(`Unable to handle this ${n} type`)},Le=new Map($t(Symbol).filter(e=>typeof Symbol[e]===me).map(e=>[Symbol[e],e])),xt=e=>{for(const[t,n]of Le)if(n===e)return t};function Zn(){return this}const H="apply",ie="construct",ae="defineProperty",We="deleteProperty",Fe="get",Be="getOwnPropertyDescriptor",De="getPrototypeOf",He="has",Je="isExtensible",Ue="ownKeys",Ye="preventExtensions",qe="set",Xe="setPrototypeOf",ce="delete",Qn=(e,t)=>{const n=t&&new WeakMap;if(t){const{addEventListener:s}=EventTarget.prototype;Ce(EventTarget.prototype,"addEventListener",{value(i,o,...c){return c.at(0)?.invoke&&(n.has(this)||n.set(this,new Map),n.get(this).set(i,[].concat(c[0].invoke)),delete c[0].invoke),s.call(this,i,o,...c)}})}const r=t&&(s=>{const{currentTarget:i,target:o,type:c}=s;for(const l of n.get(i||o)?.get(c)||[])s[l]()});return(s,i,o,...c)=>{let l=0;const d=new Map,a=new Map,{[o]:u}=s,p=c.length?zn(Kn(globalThis),...c):globalThis,y=Ot((f,m)=>{if(!d.has(m)){let g;for(;a.has(g=l++););d.set(m,g),a.set(g,m)}return $(f,d.get(m))}),b=new FinalizationRegistry(f=>{u(ce,$(oe,f))}),E=([f,m])=>{switch(f){case N:if(m==null)return p;if(typeof m===rt)return a.get(m);if(!(m instanceof jt))for(const g in m)m[g]=E(m[g]);return m;case P:if(typeof m===oe){if(!a.has(m)){const g=function(...h){return t&&h.at(0) instanceof Event&&r(...h),u(H,$(P,m),y(this),h.map(y))},T=new WeakRef(g);a.set(m,T),b.register(g,m,T)}return a.get(m).deref()}return a.get(m);case me:return xt(m)}return m},v={[H]:(f,m,g)=>y(f.apply(m,g)),[ie]:(f,m)=>y(new f(...m)),[ae]:(f,m,g)=>y(Ce(f,m,g)),[We]:(f,m)=>y(delete f[m]),[De]:f=>y(St(f)),[Fe]:(f,m)=>y(f[m]),[Be]:(f,m)=>{const g=Yn(f,m);return g?$(N,Pt(g,y)):$(At,g)},[He]:(f,m)=>y(m in f),[Je]:f=>y(qn(f)),[Ue]:f=>$(N,$t(f).map(y)),[Ye]:f=>y(Xn(f)),[qe]:(f,m,g)=>y(Vn(f,m,g)),[Xe]:(f,m)=>y(Gn(f,m)),[ce](f){d.delete(a.get(f)),a.delete(f)}};return s[i]=(f,m,...g)=>{switch(f){case H:g[0]=E(g[0]),g[1]=g[1].map(E);break;case ie:g[0]=g[0].map(E);break;case ae:{const[T,h]=g;g[0]=E(T);const{get:_,set:w,value:A}=h;_&&(h.get=E(_)),w&&(h.set=E(w)),A&&(h.value=E(A));break}default:g=g.map(E);break}return v[f](E(m),...g)},{proxy:s,[e.toLowerCase()]:p,[`is${e}Proxy`]:()=>!1}}},er=Qn("Window",!0),tr=e=>{let t=0;const n=new Map,r=new Map,s=Symbol(),i=d=>typeof d===P?d():d,o=d=>typeof d===N&&!!d&&s in d,c=Array[Ae],l=Ot((d,a)=>{if(s in a)return i(a[s]);if(d===P){if(!r.has(a)){let u;for(;r.has(u=String(t++)););n.set(a,u),r.set(u,a)}return $(d,n.get(a))}if(!(a instanceof jt))for(const u in a)a[u]=l(a[u]);return $(d,a)});return(d,a,u)=>{const{[a]:p}=d,y=new Map,b=new FinalizationRegistry(h=>{y.delete(h),p(ce,l(h))}),E=h=>{const[_,w]=h;if(!y.has(w)){const A=_===P?Zn.bind(h):h,R=new Proxy(A,m),S=new WeakRef(R);y.set(w,S),b.register(R,w,S)}return y.get(w).deref()},v=h=>{const[_,w]=h;switch(_){case N:return w===null?globalThis:typeof w===rt?E(h):w;case P:return typeof w===oe?r.get(w):E(h);case me:return xt(w)}return w},f=(h,_,...w)=>v(p(h,i(_),...w)),m={[H]:(h,_,w)=>f(H,h,l(_),w.map(l)),[ie]:(h,_)=>f(ie,h,_.map(l)),[ae]:(h,_,w)=>{const{get:A,set:R,value:S}=w;return typeof A===P&&(w.get=l(A)),typeof R===P&&(w.set=l(R)),typeof S===P&&(w.value=l(S)),f(ae,h,l(_),w)},[We]:(h,_)=>f(We,h,l(_)),[De]:h=>f(De,h),[Fe]:(h,_)=>_===s?h:f(Fe,h,l(_)),[Be]:(h,_)=>{const w=f(Be,h,l(_));return w&&Pt(w,v)},[He]:(h,_)=>_===s||f(He,h,l(_)),[Je]:h=>f(Je,h),[Ue]:h=>f(Ue,h).map(v),[Ye]:h=>f(Ye,h),[qe]:(h,_,w)=>f(qe,h,l(_),l(w)),[Xe]:(h,_)=>f(Xe,h,l(_))};d[u]=(h,_,w,A)=>{switch(h){case H:return v(_).apply(v(w),A.map(v));case ce:{const R=v(_);n.delete(r.get(R)),r.delete(R)}}};const g=new Proxy([N,null],m),T=g.Array[Ae];return Ce(Array,Ae,{value:h=>o(h)?T(h):c(h)}),{[e.toLowerCase()]:g,[`is${e}Proxy`]:o,proxy:d}}},nr=tr("Window"),rr=typeof Worker=="function"?Worker:class{},Se=new WeakMap,Nt=(e,...t)=>{const n=nt(e,...t);if(!Se.has(n)){const r=e instanceof rr?er:nr;Se.set(n,r(n,jn,Pn))}return Se.get(n)};Nt.transfer=nt.transfer;const sr=()=>new Worker(URL.createObjectURL(new Blob(['const e="object"==typeof self?self:globalThis,t=t=>((t,r)=>{const n=(e,r)=>(t.set(r,e),e),s=o=>{if(t.has(o))return t.get(o);const[a,i]=r[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:t,message:r}=i;return n(new e[t](r),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new e[a](i),o)};return s})(new Map,t)(0),r="",{toString:n}={},{keys:s}=Object,o=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const s=n.call(e).slice(8,-1);switch(s){case"Array":return[1,r];case"Object":return[2,r];case"Date":return[3,r];case"RegExp":return[4,r];case"Map":return[5,r];case"Set":return[6,r]}return s.includes("Array")?[1,s]:s.includes("Error")?[7,s]:[2,s]},a=([e,t])=>0===e&&("function"===t||"symbol"===t),i=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const i=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},c=n=>{if(r.has(n))return r.get(n);let[l,u]=o(n);switch(l){case 0:{let t=n;switch(u){case"bigint":l=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);t=null;break;case"undefined":return i([-1],n)}return i([l,t],n)}case 1:{if(u)return i([u,[...n]],n);const e=[],t=i([l,e],n);for(const t of n)e.push(c(t));return t}case 2:{if(u)switch(u){case"BigInt":return i([u,n.toString()],n);case"Boolean":case"Number":case"String":return i([u,n.valueOf()],n)}if(t&&"toJSON"in n)return c(n.toJSON());const r=[],f=i([l,r],n);for(const t of s(n))!e&&a(o(n[t]))||r.push([c(t),c(n[t])]);return f}case 3:return i([l,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return i([l,{source:e,flags:t}],n)}case 5:{const t=[],r=i([l,t],n);for(const[r,s]of n)(e||!a(o(r))&&!a(o(s)))&&t.push([c(r),c(s)]);return r}case 6:{const t=[],r=i([l,t],n);for(const r of n)!e&&a(o(r))||t.push(c(r));return r}}const{message:f}=n;return i([l,{name:u,message:f}],n)};return c})(!(t||r),!!t,new Map,n)(e),n},{parse:c,stringify:l}=JSON,u={json:!0,lossy:!0};var f=Object.freeze({__proto__:null,parse:e=>t(c(e)),stringify:e=>l(i(e,u))});const p="5f50bb1c-57c3-47af-b36a-392fe80f8803",d="M"+p,g="T"+p;var y=e=>({value:new Promise((t=>{let r=new Worker("data:application/javascript,onmessage%3D(%7Bdata%3Ab%7D)%3D%3E(Atomics.wait(b%2C0)%2CpostMessage(0))");r.onmessage=t,r.postMessage(e)}))})\n/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:h,Map:w,SharedArrayBuffer:m,Uint16Array:b}=globalThis,{BYTES_PER_ELEMENT:v}=h,{BYTES_PER_ELEMENT:S}=b,{isArray:E}=Array,{notify:$,wait:P,waitAsync:A}=Atomics,{fromCharCode:M}=String,j=new WeakSet,x=new WeakMap,k={value:{then:e=>e()}},T=()=>{};let _=0;const O=(e,{parse:t=JSON.parse,stringify:r=JSON.stringify,transform:n,interrupt:s}=JSON)=>{if(!x.has(e)){const o=(t,...r)=>e.postMessage({[p]:r},{transfer:t}),a="function"==typeof s?s:s?.handler||T,i=s?.delay||42,c=(e,t)=>e?(A||y)(t,0):(((e,t,r)=>{for(;"timed-out"===P(e,0,0,t);)r()})(t,i,a),k);let l=!1;x.set(e,new Proxy(new w,{has:(e,t)=>"string"==typeof t&&!t.startsWith("_"),get:(r,s)=>"then"===s?null:(...r)=>{const a=_++;let i=new h(new m(v)),u=[];j.has(r.at(-1)||u)&&j.delete(u=r.pop()),o(u,a,i,s,n?r.map(n):r);const f=e!==globalThis;let p=0;return l&&f&&(p=setTimeout(console.warn,1e3,`\uD83D\uDC80\uD83D\uDD12 - Possible deadlock if proxy.${s}(...args) is awaited`)),c(f,i).value.then((()=>{clearTimeout(p);const e=i[0];if(!e)return;const r=S*e;return i=new h(new m(r+r%v)),o([],a,i),c(f,i).value.then((()=>t(M(...new b(i.buffer).slice(0,e)))))}))},set(t,s,o){if(!t.size){const s=new w;e.addEventListener("message",(async e=>{const o=e.data?.[p];if(E(o)){e.stopImmediatePropagation();const[a,i,...c]=o;if(c.length){const[e,o]=c;if(!t.has(e))throw new Error(`Unsupported action: ${e}`);l=!0;try{const c=await t.get(e)(...o);if(void 0!==c){const e=r(n?n(c):c);s.set(a,e),i[0]=e.length}}finally{l=!1}}else{const e=s.get(a);s.delete(a);for(let t=new b(i.buffer),r=0;r<e.length;r++)t[r]=e.charCodeAt(r)}$(i,0)}}))}return!!t.set(s,o)}}))}return x.get(e)};O.transfer=(...e)=>(j.add(e),e);const F="object",R="function",W="number",J="string",B="undefined",I="symbol",{defineProperty:C,getOwnPropertyDescriptor:L,getPrototypeOf:D,isExtensible:N,ownKeys:H,preventExtensions:U,set:z,setPrototypeOf:q}=Reflect,{assign:K,create:Y}=Object,G=D(Int8Array),V="isArray",Q=(e,t)=>{const{get:r,set:n,value:s}=e;return r&&(e.get=t(r)),n&&(e.set=t(n)),s&&(e.value=t(s)),e},X=(e,t)=>[e,t],Z=e=>t=>{const r=typeof t;switch(r){case F:if(null==t)return X("null",t);if(t===globalThis)return X(F,null);case R:return e(r,t);case"boolean":case W:case J:case B:case"bigint":return X(r,t);case I:if(ee.has(t))return X(r,ee.get(t))}throw new Error(`Unable to handle this ${r} type`)},ee=new Map(H(Symbol).filter((e=>typeof Symbol[e]===I)).map((e=>[Symbol[e],e]))),te=e=>{for(const[t,r]of ee)if(r===e)return t};function re(){return this}const ne="apply",se="construct",oe="defineProperty",ae="deleteProperty",ie="get",ce="getOwnPropertyDescriptor",le="getPrototypeOf",ue="has",fe="isExtensible",pe="ownKeys",de="preventExtensions",ge="set",ye="setPrototypeOf",he="delete";var we=((e,t)=>{const r=t&&new WeakMap;if(t){const{addEventListener:e}=EventTarget.prototype;C(EventTarget.prototype,"addEventListener",{value(t,n,...s){return s.at(0)?.invoke&&(r.has(this)||r.set(this,new Map),r.get(this).set(t,[].concat(s[0].invoke)),delete s[0].invoke),e.call(this,t,n,...s)}})}const n=t&&(e=>{const{currentTarget:t,target:n,type:s}=e;for(const o of r.get(t||n)?.get(s)||[])e[o]()});return(r,s,o,...a)=>{let i=0;const c=new Map,l=new Map,{[o]:u}=r,f=a.length?K(Y(globalThis),...a):globalThis,p=Z(((e,t)=>{if(!c.has(t)){let e;for(;l.has(e=i++););c.set(t,e),l.set(e,t)}return X(e,c.get(t))})),d=new FinalizationRegistry((e=>{u(he,X(J,e))})),g=([e,r])=>{switch(e){case F:if(null==r)return f;if(typeof r===W)return l.get(r);if(!(r instanceof G))for(const e in r)r[e]=g(r[e]);return r;case R:if(typeof r===J){if(!l.has(r)){const e=function(...e){return t&&e.at(0)instanceof Event&&n(...e),u(ne,X(R,r),p(this),e.map(p))},s=new WeakRef(e);l.set(r,s),d.register(e,r,s)}return l.get(r).deref()}return l.get(r);case I:return te(r)}return r},y={[ne]:(e,t,r)=>p(e.apply(t,r)),[se]:(e,t)=>p(new e(...t)),[oe]:(e,t,r)=>p(C(e,t,r)),[ae]:(e,t)=>p(delete e[t]),[le]:e=>p(D(e)),[ie]:(e,t)=>p(e[t]),[ce]:(e,t)=>{const r=L(e,t);return r?X(F,Q(r,p)):X(B,r)},[ue]:(e,t)=>p(t in e),[fe]:e=>p(N(e)),[pe]:e=>X(F,H(e).map(p)),[de]:e=>p(U(e)),[ge]:(e,t,r)=>p(z(e,t,r)),[ye]:(e,t)=>p(q(e,t)),[he](e){c.delete(l.get(e)),l.delete(e)}};return r[s]=(e,t,...r)=>{switch(e){case ne:r[0]=g(r[0]),r[1]=r[1].map(g);break;case se:r[0]=r[0].map(g);break;case oe:{const[e,t]=r;r[0]=g(e);const{get:n,set:s,value:o}=t;n&&(t.get=g(n)),s&&(t.set=g(s)),o&&(t.value=g(o));break}default:r=r.map(g)}return y[e](g(t),...r)},{proxy:r,[e.toLowerCase()]:f,[`is${e}Proxy`]:()=>!1}}})("Window",!0),me=(e=>{let t=0;const r=new Map,n=new Map,s=Symbol(),o=e=>typeof e===R?e():e,a=e=>typeof e===F&&!!e&&s in e,i=Array[V],c=Z(((e,a)=>{if(s in a)return o(a[s]);if(e===R){if(!n.has(a)){let e;for(;n.has(e=String(t++)););r.set(a,e),n.set(e,a)}return X(e,r.get(a))}if(!(a instanceof G))for(const e in a)a[e]=c(a[e]);return X(e,a)}));return(t,l,u)=>{const{[l]:f}=t,p=new Map,d=new FinalizationRegistry((e=>{p.delete(e),f(he,c(e))})),g=e=>{const[t,r]=e;if(!p.has(r)){const n=t===R?re.bind(e):e,s=new Proxy(n,w),o=new WeakRef(s);p.set(r,o),d.register(s,r,o)}return p.get(r).deref()},y=e=>{const[t,r]=e;switch(t){case F:return null===r?globalThis:typeof r===W?g(e):r;case R:return typeof r===J?n.get(r):g(e);case I:return te(r)}return r},h=(e,t,...r)=>y(f(e,o(t),...r)),w={[ne]:(e,t,r)=>h(ne,e,c(t),r.map(c)),[se]:(e,t)=>h(se,e,t.map(c)),[oe]:(e,t,r)=>{const{get:n,set:s,value:o}=r;return typeof n===R&&(r.get=c(n)),typeof s===R&&(r.set=c(s)),typeof o===R&&(r.value=c(o)),h(oe,e,c(t),r)},[ae]:(e,t)=>h(ae,e,c(t)),[le]:e=>h(le,e),[ie]:(e,t)=>t===s?e:h(ie,e,c(t)),[ce]:(e,t)=>{const r=h(ce,e,c(t));return r&&Q(r,y)},[ue]:(e,t)=>t===s||h(ue,e,c(t)),[fe]:e=>h(fe,e),[pe]:e=>h(pe,e).map(y),[de]:e=>h(de,e),[ge]:(e,t,r)=>h(ge,e,c(t),c(r)),[ye]:(e,t)=>h(ye,e,c(t))};t[u]=(e,t,s,o)=>{switch(e){case ne:return y(t).apply(y(s),o.map(y));case he:{const e=y(t);r.delete(n.get(e)),n.delete(e)}}};const m=new Proxy([F,null],w),b=m.Array[V];return C(Array,V,{value:e=>a(e)?b(e):i(e)}),{[e.toLowerCase()]:m,[`is${e}Proxy`]:a,proxy:t}}})("Window"),be="function"==typeof Worker?Worker:class{};const ve=new WeakMap,Se=(e,...t)=>{const r=O(e,...t);if(!ve.has(r)){const t=e instanceof be?we:me;ve.set(r,t(r,d,g))}return ve.get(r)};Se.transfer=O.transfer;const Ee={object(...e){return this.string(function(e){for(var t=e[0],r=1,n=arguments.length;r<n;r++)t+=arguments[r]+e[r];return t}(...e))},string(e){for(const t of e.split(/[\\r\\n]+/))if(t.trim().length){/^(\\s+)/.test(t)&&(e=e.replace(new RegExp("^"+RegExp.$1,"gm"),""));break}return e}},$e=(e,...t)=>Ee[typeof e](e,...t),{isArray:Pe}=Array,{assign:Ae,create:Me,defineProperties:je,defineProperty:xe,entries:ke}=Object,{all:Te,resolve:_e}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),Oe=(e,t=location.href)=>new URL(e,t.replace(/^blob:/,"")).href,Fe=(e,t,r,n=!1,s=CustomEvent)=>{e.dispatchEvent(new s(`${t}:${r}`,{bubbles:!0,detail:{worker:n}}))};Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const Re=e=>e.arrayBuffer(),We=e=>e.json(),Je=e=>e.text(),Be=new WeakMap,Ie=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return Be.set(t,r),t}}},Ce=({FS:e,PATH:t,PATH_FS:r},n,s)=>{const o=r.resolve(n);return e.mkdirTree(t.dirname(o)),e.writeFile(o,new Uint8Array(s),{canOwn:!0})},Le=e=>{const t=e.split("/");return t.pop(),t.join("/")},De=(e,t)=>{const r=[];for(const n of t.split("/"))"."!==n&&(r.push(n),n&&e.mkdir(r.join("/")))},Ne=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\\/+/,"/")},He=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},Ue=(e,t)=>fetch(Oe(t,ze.get(e))),ze=new WeakMap,qe=(e,t,r)=>Te((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use \'to_file\' and \'files\' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn\'t determine the filename from the path ${n}, please supply \'to_file\' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(Pe(n))return n.map((r=>({url:He([e,r]),path:He([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:He([t,s])}]}))})(r).map((({url:n,path:s})=>Ue(r,n).then(Re).then((r=>e.writeFile(t,s,r)))))),Ke=(e,t)=>t.endsWith("/")?`${t}${e.split("/").pop()}`:t,Ye=(e,t)=>e.replace(/\\{.+?\\}/g,(e=>{if(!t.has(e))throw new SyntaxError(`Invalid template: ${e}`);return t.get(e)})),Ge=(e,t,r)=>Te((e=>{const t=new Map,r=new Set,n=[];for(const[s,o]of Object.entries(e))if(/^\\{.+\\}$/.test(s)){if(t.has(s))throw new SyntaxError(`Duplicated template: ${s}`);t.set(s,Ye(o,t))}else{const e=Ye(s,t),a=Ke(e,Ye(o||"./",t));if(r.has(a))throw new SyntaxError(`Duplicated destination: ${a}`);r.add(a),n.push({url:e,path:a})}return n})(r).map((({url:n,path:s})=>Ue(r,n).then(Re).then((r=>e.writeFile(t,s,r)))))),Ve=(e,t,r)=>{e.registerJsModule(t,r)},Qe=(e,t,...r)=>{try{return e.runPython($e(t),...r)}catch(t){Be.get(e).stderr(t)}},Xe=async(e,t,...r)=>{try{return await e.runPythonAsync($e(t),...r)}catch(t){Be.get(e).stderr(t)}},Ze=async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.globals.get(n);for(const e of s)[o,a]=[a,a[e]];try{await a.call(o,r)}catch(t){Be.get(e).stderr(t)}};var et={type:"micropython",module:(e="1.20.0-297")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=Ie();r=r.replace(/\\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.files&&await Ge(this,a,t.files),t.fetch&&await qe(this,a,t.fetch),a},registerJSModule:Ve,run:Qe,runAsync:Xe,runEvent:Ze,transform:(e,t)=>t,writeFile:({FS:e,_module:{PATH:t,PATH_FS:r}},n,s)=>Ce({FS:e,PATH:t,PATH_FS:r},n,s)};const tt={dict_converter:Object.fromEntries};var rt={type:"pyodide",module:(e="0.24.1")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=Ie(),a=r.slice(0,r.lastIndexOf("/")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.files&&await Ge(this,i,t.files),t.fetch&&await qe(this,i,t.fetch),t.packages){await i.loadPackage("micropip");const e=await i.pyimport("micropip");await e.install(t.packages),e.destroy()}return i},registerJSModule:Ve,run:Qe,runAsync:Xe,runEvent:Ze,transform:(e,t)=>t instanceof e.ffi.PyProxy?t.toJs(tt):t,writeFile:({FS:e,PATH:t,_module:{PATH_FS:r}},n,s)=>Ce({FS:e,PATH:t,PATH_FS:r},n,s)};const nt="ruby-wasm-wasi",st=nt.replace(/\\W+/g,"_");var ot={type:nt,experimental:!0,module:(e="2.1.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.files&&await Ge(this,o,t.files),t.fetch&&await qe(this,o,t.fetch),o},registerJSModule(e,t,r){const n=`__module_${st}_${t}`;globalThis[n]=r,this.run(e,`require "js";$${t}=JS.global[:${n}]`),delete globalThis[n]},run:(e,t,...r)=>e.eval($e(t),...r),runAsync:(e,t,...r)=>e.evalAsync($e(t),...r),async runEvent(e,t,r){if(/^xworker\\.(on\\w+)$/.test(t)){const{$1:t}=RegExp,n=`__module_${st}_event`;globalThis[n]=r,this.run(e,`require "js";$xworker.call("${t}",JS.global[:${n}])`),delete globalThis[n]}else{const n=this.run(e,`method(:${t})`);await n.call(t,e.wrap(r))}},transform:(e,t)=>t,writeFile:()=>{throw new Error(`writeFile is not supported in ${nt}`)}};var at={type:"wasmoon",module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=Ie(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.files&&await Ge(this,a,r.files),r.fetch&&await qe(this,a,r.fetch),a},registerJSModule:(e,t,r)=>{e.global.set(t,r)},run:(e,t,...r)=>{try{return e.doStringSync($e(t),...r)}catch(t){Be.get(e).stderr(t)}},runAsync:async(e,t,...r)=>{try{return await e.doString($e(t),...r)}catch(t){Be.get(e).stderr(t)}},runEvent:async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.global.get(n);for(const e of s)[o,a]=[a,a[e]];try{await a.call(o,r)}catch(t){Be.get(e).stderr(t)}},transform:(e,t)=>t,writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(De(e,Le(t)),t=Ne(e,t),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const it=new Map,ct=new Map,lt=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=it.get(r),o=/^https?:\\/\\//i.test(n)?n.join("@"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{ct.set(t,e);for(const t of["files","fetch"]){const r=e?.[t];r&&ze.set(r,o)}return s(n,e,r)}))}}),ut=e=>{for(const t of[].concat(e.type))it.set(t,e)};for(const e of[et,rt,ot,at])ut(e);const ft=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e),pt=(e,t,r={})=>{if(t){const[e,n]=(e=>{let t=typeof e;return"string"===t&&/\\.(json|toml|txt)$/.test(e)?t=RegExp.$1:e="./config.txt",[Oe(e),t]})(t);if("json"===n)r=fetch(e).then(We);else if("toml"===n)r=fetch(e).then(Je).then(ft);else if("string"===n)try{r=JSON.parse(t)}catch(e){r=ft(t)}else"object"===n&&t&&(r=t);t=e}return _e(r).then((r=>lt[e](r,t)))};try{new SharedArrayBuffer(4)}catch(e){throw new Error(["Unable to use SharedArrayBuffer due insecure environment.","Please read requirements in MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements"].join("\\n"))}let dt,gt,yt;const ht=(e,t)=>{addEventListener(e,t||(async t=>{try{await dt,gt(`xworker.on${e}`,t)}catch(e){postMessage(e)}}),!!t&&{once:!0})},{parse:wt,stringify:mt}=f,{proxy:bt,window:vt,isWindowProxy:St}=Se(self,{parse:wt,stringify:mt,transform:e=>yt?yt(e):e}),Et={sync:bt,window:vt,isWindowProxy:St,onmessage:console.info,onerror:console.error,onmessageerror:console.warn,postMessage:postMessage.bind(self)};ht("message",(({data:{options:e,config:t,code:r,hooks:n}})=>{dt=(async()=>{try{const{id:s,tag:o,type:a,custom:i,version:c,config:l,async:u}=e,f=await pt(((e,t="")=>`${e}@${t}`.replace(/@$/,""))(a,c),t,l),p=Me(it.get(a)),d="run"+(u?"Async":"");if(n){const{beforeRun:e,beforeRunAsync:t,afterRun:r,afterRunAsync:s}=n,o=u?s:r,a=u?t:e;if(o){const e=p[d].bind(p);p[d]=(t,r,...n)=>e(t,`${r}\\n${o}`,...n)}if(a){const e=p[d].bind(p);p[d]=(t,r,...n)=>e(t,`${a}\\n${r}`,...n)}}const{CustomEvent:g,document:y}=vt,h=s&&y.getElementById(s)||null,w=e=>Fe(h,i||a,e,!0,g);let m="";return p.registerJSModule(f,"polyscript",{xworker:Et,get target(){return!m&&h&&("SCRIPT"===o?h.after(Ae(y.createElement(`script-${i||a}`),{id:m=`${s}-target`})):(m=s,h.replaceChildren(),h.style.display="block")),m}}),gt=p.runEvent.bind(p,f),yt=p.transform.bind(p,f),h&&w("ready"),await p[d](f,r),h&&w("done"),f}catch(e){postMessage(e)}})(),ht("error"),ht("message"),ht("messageerror")}));\n'],{type:"application/javascript"})),{type:"module"}),or="modulepreload",ir=function(e){return"/coincident-repro/"+e},mt={},he=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=ir(i),i in mt)return;mt[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let a=s.length-1;a>=0;a--){const u=s[a];if(u.href===i&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const d=document.createElement("link");if(d.rel=o?"stylesheet":or,o||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),o)return new Promise((a,u)=>{d.addEventListener("load",a),d.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},It=e=>e.arrayBuffer(),ar=e=>e.json(),z=e=>e.text();function cr(e){for(var t=e[0],n=1,r=arguments.length;n<r;n++)t+=arguments[n]+e[n];return t}const lr={object(...e){return this.string(cr(...e))},string(e){for(const t of e.split(/[\r\n]+/))if(t.trim().length){/^(\s+)/.test(t)&&(e=e.replace(new RegExp("^"+RegExp.$1,"gm"),""));break}return e}},k=(e,...t)=>lr[typeof e](e,...t),{replace:fr}="",ur=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,pr={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},dr=e=>pr[e],Mt=e=>fr.call(e,ur,dr),{isArray:mr}=Array,{assign:le,create:Ct,defineProperties:hr,defineProperty:fe,entries:fs}=Object,{all:ye,resolve:Lt}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),Wt=(e,t=location.href)=>new URL(e,t.replace(/^blob:/,"")).href;let yr=0;const Ft=(e,t)=>({id:e.id||(e.id=`${t}-w${yr++}`),tag:e.tagName}),D=(e,t,n,r=!1,s=CustomEvent)=>{e.dispatchEvent(new s(`${t}:${n}`,{bubbles:!0,detail:{worker:r}}))},I=new WeakMap,st=e=>{const t=e||console,n={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...r)=>n.stderr(...r),stdout:(...r)=>n.stdout(...r),async get(r){const s=await r;return I.set(s,n),s}}},Bt=({FS:e,PATH:t,PATH_FS:n},r,s)=>{const i=n.resolve(r);return e.mkdirTree(t.dirname(i)),e.writeFile(i,new Uint8Array(s),{canOwn:!0})},gr=(e,t,n)=>(wr(e,_r(t)),t=br(e,t),e.writeFile(t,new Uint8Array(n),{canOwn:!0})),_r=e=>{const t=e.split("/");return t.pop(),t.join("/")},wr=(e,t)=>{const n=[];for(const r of t.split("/"))r!=="."&&(n.push(r),r&&e.mkdir(n.join("/")))},br=(e,t)=>{const n=[];for(const r of t.split("/"))switch(r){case"":break;case".":break;case"..":n.pop();break;default:n.push(r)}return[e.cwd()].concat(n).join("/").replace(/^\/+/,"/")},Er=e=>{for(const{files:t,to_file:n,from:r=""}of e){if(t!==void 0&&n!==void 0)throw new Error("Cannot use 'to_file' and 'files' parameters together!");if(t===void 0&&n===void 0&&r.endsWith("/"))throw new Error(`Couldn't determine the filename from the path ${r}, please supply 'to_file' parameter.`)}return e.flatMap(({from:t="",to_folder:n=".",to_file:r,files:s})=>{if(mr(s))return s.map(o=>({url:$e([t,o]),path:$e([n,o])}));const i=r||t.slice(1+t.lastIndexOf("/"));return[{url:t,path:$e([n,i])}]})},$e=e=>{const t=e.map(n=>n.trim().replace(/(^[/]*|[/]*$)/g,"")).filter(n=>n!==""&&n!==".").join("/");return e[0].startsWith("/")?`/${t}`:t},Dt=(e,t)=>fetch(Wt(t,Ht.get(e))),Ht=new WeakMap,ge=(e,t,n)=>ye(Er(n).map(({url:r,path:s})=>Dt(n,r).then(It).then(i=>e.writeFile(t,s,i)))),vr=(e,t)=>t.endsWith("/")?`${t}${e.split("/").pop()}`:t,je=(e,t)=>e.replace(/\{.+?\}/g,n=>{if(!t.has(n))throw new SyntaxError(`Invalid template: ${n}`);return t.get(n)}),Rr=e=>{const t=new Map,n=new Set,r=[];for(const[s,i]of Object.entries(e))if(/^\{.+\}$/.test(s)){if(t.has(s))throw new SyntaxError(`Duplicated template: ${s}`);t.set(s,je(i,t))}else{const o=je(s,t),c=vr(o,je(i||"./",t));if(n.has(c))throw new SyntaxError(`Duplicated destination: ${c}`);n.add(c),r.push({url:o,path:c})}return r},_e=(e,t,n)=>ye(Rr(n).map(({url:r,path:s})=>Dt(n,r).then(It).then(i=>e.writeFile(t,s,i)))),Jt=(e,t,n)=>{e.registerJsModule(t,n)},Ut=(e,t,...n)=>{try{return e.runPython(k(t),...n)}catch(r){I.get(e).stderr(r)}},Yt=async(e,t,...n)=>{try{return await e.runPythonAsync(k(t),...n)}catch(r){I.get(e).stderr(r)}},qt=async(e,t,n)=>{const[r,...s]=t.split(".");let i=e.globals.get(r),o;for(const c of s)[o,i]=[i,i[c]];try{await i.call(o,n)}catch(c){I.get(e).stderr(c)}},kr="micropython",Tr={type:kr,module:(e="1.20.0-297")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,n){const{stderr:r,stdout:s,get:i}=st();n=n.replace(/\.m?js$/,".wasm");const o=await i(e({stderr:r,stdout:s,url:n}));return t.files&&await _e(this,o,t.files),t.fetch&&await ge(this,o,t.fetch),o},registerJSModule:Jt,run:Ut,runAsync:Yt,runEvent:qt,transform:(e,t)=>t,writeFile:({FS:e,_module:{PATH:t,PATH_FS:n}},r,s)=>Bt({FS:e,PATH:t,PATH_FS:n},r,s)},Ar="pyodide",Sr={dict_converter:Object.fromEntries},$r={type:Ar,module:(e="0.24.1")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,n){const{stderr:r,stdout:s,get:i}=st(),o=n.slice(0,n.lastIndexOf("/")),c=await i(e({stderr:r,stdout:s,indexURL:o}));if(t.files&&await _e(this,c,t.files),t.fetch&&await ge(this,c,t.fetch),t.packages){await c.loadPackage("micropip");const l=await c.pyimport("micropip");await l.install(t.packages),l.destroy()}return c},registerJSModule:Jt,run:Ut,runAsync:Yt,runEvent:qt,transform:(e,t)=>t instanceof e.ffi.PyProxy?t.toJs(Sr):t,writeFile:({FS:e,PATH:t,_module:{PATH_FS:n}},r,s)=>Bt({FS:e,PATH:t,PATH_FS:n},r,s)},Ve="ruby-wasm-wasi",ht=Ve.replace(/\W+/g,"_"),jr={type:Ve,experimental:!0,module:(e="2.1.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,n){const r=await fetch(`${n.slice(0,n.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await r.arrayBuffer()),{vm:i}=await e(s);return t.files&&await _e(this,i,t.files),t.fetch&&await ge(this,i,t.fetch),i},registerJSModule(e,t,n){const r=`__module_${ht}_${t}`;globalThis[r]=n,this.run(e,`require "js";$${t}=JS.global[:${r}]`),delete globalThis[r]},run:(e,t,...n)=>e.eval(k(t),...n),runAsync:(e,t,...n)=>e.evalAsync(k(t),...n),async runEvent(e,t,n){if(/^xworker\.(on\w+)$/.test(t)){const{$1:r}=RegExp,s=`__module_${ht}_event`;globalThis[s]=n,this.run(e,`require "js";$xworker.call("${r}",JS.global[:${s}])`),delete globalThis[s]}else await this.run(e,`method(:${t})`).call(t,e.wrap(n))},transform:(e,t)=>t,writeFile:()=>{throw new Error(`writeFile is not supported in ${Ve}`)}},Pr="wasmoon",Or={type:Pr,module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},n){const{stderr:r,stdout:s,get:i}=st(),o=await i(new e().createEngine());return o.global.getTable(t.Base,c=>{o.global.setField(c,"print",s),o.global.setField(c,"printErr",r)}),n.files&&await _e(this,o,n.files),n.fetch&&await ge(this,o,n.fetch),o},registerJSModule:(e,t,n)=>{e.global.set(t,n)},run:(e,t,...n)=>{try{return e.doStringSync(k(t),...n)}catch(r){I.get(e).stderr(r)}},runAsync:async(e,t,...n)=>{try{return await e.doString(k(t),...n)}catch(r){I.get(e).stderr(r)}},runEvent:async(e,t,n)=>{const[r,...s]=t.split(".");let i=e.global.get(r),o;for(const c of s)[o,i]=[i,i[c]];try{await i.call(o,n)}catch(c){I.get(e).stderr(c)}},transform:(e,t)=>t,writeFile:({cmodule:{module:{FS:e}}},t,n)=>gr(e,t,n)},x=new Map,Xt=new Map,ot=[],W=[],xr=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[i,...o]=t.split("@"),c=x.get(i),l=/^https?:\/\//i.test(o)?o.join("@"):c.module(...o);e.set(t,{url:l,module:he(()=>import(l).then(async m=>{await m.__tla;return m}),[]),engine:c.engine.bind(c)})}const{url:n,module:r,engine:s}=e.get(t);return(i,o)=>r.then(c=>{Xt.set(t,i);for(const l of["files","fetch"]){const d=i?.[l];d&&Ht.set(d,o)}return s(c,i,n)})}}),Nr=e=>{for(const t of[].concat(e.type))x.set(t,e),ot.push(`script[type="${t}"]`),W.push(`${t}-`)};for(const e of[Tr,$r,jr,Or])Nr(e);const Ir="https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js",yt=async e=>(await he(()=>import(Ir).then(async m=>{await m.__tla;return m}),[])).parse(e),Vt=e=>{let t=typeof e;return t==="string"&&/\.(json|toml|txt)$/.test(e)?t=RegExp.$1:e="./config.txt",[Wt(e),t]},Mr=(e,t,n={})=>{if(t){const[r,s]=Vt(t);if(s==="json")n=fetch(r).then(ar);else if(s==="toml")n=fetch(r).then(z).then(yt);else if(s==="string")try{n=JSON.parse(t)}catch{n=yt(t)}else s==="object"&&t&&(n=t);t=r}return Lt(n).then(r=>xr[e](r,t))},Gt=(e,t="")=>`${e}@${t}`.replace(/@$/,""),gt=[["beforeRun","codeBeforeRunWorker"],["beforeRunAsync","codeBeforeRunWorkerAsync"],["afterRun","codeAfterRunWorker"],["afterRunAsync","codeAfterRunWorkerAsync"]];class ue{constructor(t,n){this.interpreter=t,this.onWorkerReady=n.onWorkerReady;for(const[r,s]of gt)this[r]=n[s]}get stringHooks(){const t={};for(const[n]of gt)this[n]&&(t[n]=k(this[n]()));return t}}const it=(...e)=>function(n,r){const s=sr(),{postMessage:i}=s,o=this instanceof ue;if(e.length){const[d,a]=e;r=le({},r||{type:d,version:a}),r.type||(r.type=d)}const[c]=Vt(r.config),l=fetch(n).then(z).then(d=>{const a=o?this.stringHooks:void 0;i.call(s,{options:r,config:c,code:d,hooks:a})});return hr(s,{postMessage:{value:(d,...a)=>l.then(()=>i.call(s,d,...a))},sync:{value:Nt(s,$n).proxy},onerror:{writable:!0,configurable:!0,value:console.error}}),o&&this.onWorkerReady?.(this.interpreter,s),s.addEventListener("message",d=>{const{data:a}=d;a instanceof Error&&(d.stopImmediatePropagation(),s.onerror(Object.create(d,{type:{value:"error"},error:{value:a}})))}),s},zt=it(),Kt="Invalid content",Cr="Invalid worker attribute",Lr="Invalid worker attribute",Wr=e=>!e.replace(/\/\*[\s\S]*?\*\//g,"").replace(/^\s*(?:\/\/|#).*/gm,"").trim(),Zt=e=>{const{src:t,worker:n}=e.attributes;if(n){let{value:r}=n;if(r)throw new SyntaxError(Lr);if(r=t?.value,!r){if(t)throw new SyntaxError(Cr);if(!e.childElementCount)r=e.textContent;else{const{innerHTML:i,localName:o,type:c}=e,l=c||o.replace(/-script$/,"");r=Mt(i),console.warn(`Deprecated: use <script type="${l}"> for an always safe content parsing:
`,r)}return URL.createObjectURL(new Blob([k(r)],{type:"text/plain"}))}return r}if(t&&!Wr(e.textContent))throw new SyntaxError(Kt)},Fr=e=>{let t=e;for(;t.parentNode;)t=t.parentNode;return t},at=(e,t)=>{const n=Fr(e);return n.getElementById(t)||Oe(t,n)},Y=new WeakMap,Br={get(){let e=Y.get(this);return e||(e=document.createElement(`${this.type}-script`),Y.set(this,e),pe(this)),e},set(e){typeof e=="string"?Y.set(this,at(this,e)):(Y.set(this,e),pe(this))}},ee=new WeakMap,j=new Map,Dr=async(e,t,n,r)=>{const{type:s}=e,i=x.get(s);i.experimental&&console.warn(`The ${s} interpreter is experimental`);const[o,c]=await ye([ee.get(e).interpreter,t]);try{fe(document,"currentScript",{configurable:!0,get:()=>e}),i.registerJSModule(o,"polyscript",{XWorker:n}),D(e,s,"ready");const l=i[r?"runAsync":"run"](o,c),d=D.bind(null,e,s,"done");return r?l.then(d):d(),l}finally{delete document.currentScript}},Pe=(e,t)=>{const n=e?.value;return n?t+n:""},Qt=(e,t,n,r,s,i=e)=>{if(!j.has(t)){const o={interpreter:Mr(n,s),queue:Lt(),XWorker:it(e,r)};j.set(t,o),j.has(e)||j.set(e,o),j.has(i)||j.set(i,o)}return j.get(t)},pe=async e=>{if(ee.has(e)){const{target:t}=e;t&&(e.closest("head")?document.body.append(t):e.after(t))}else{const{attributes:{async:t,config:n,env:r,target:s,version:i},src:o,type:c}=e,l=i?.value,d=Gt(c,l);let a=Pe(n,"|");const u=Pe(r,"")||`${d}${a}`;a=a.slice(1);const p=Zt(e);if(p){const v=it(c,l),f=new v(p,{...Ft(e,c),async:!!t,config:a});ee.set(fe(e,"xworker",{value:f}),{xworker:f});return}const y=Pe(s,""),b=Qt(c,u,d,l,a);ee.set(fe(e,"target",Br),b),y&&Y.set(e,at(e,y));const E=o?fetch(o).then(z):e.textContent;b.queue=b.queue.then(()=>Dr(e,E,b.XWorker,!!t))}},Hr=new Proxy(Ct(null),{get:(e,t)=>new Promise(queueMicrotask).then(()=>en(t))}),en=async e=>{if(j.has(e)){const{interpreter:n,queue:r}=j.get(e);return(await ye([n,r]))[0]}const t=j.size?`Available interpreters are: ${[...j.keys()].map(n=>`"${n}"`).join(", ")}.`:"There are no interpreters in this page.";throw new Error(`The interpreter "${e}" was not found. ${t}`)},tn=async e=>{const{type:t,currentTarget:n}=e;if(W.length)for(let{name:r,value:s,ownerElement:i}of vt(`./@*[${W.map(o=>`name()="${o}${t}"`).join(" or ")}]`,n)){r=r.slice(0,-(t.length+1));const o=await en(i.getAttribute(`${r}-env`)||r);x.get(r).runEvent(o,s,e)}},ct=e=>{if(W.length)for(let{name:t,ownerElement:n}of vt(`.//@*[${W.map(r=>`starts-with(name(),"${r}")`).join(" or ")}]`,e)){const r=t.lastIndexOf("-"),s=t.slice(r+1);s!=="env"&&(n.addEventListener(s,tn),"disabled"in n&&!n.disabled&&(n.disabled=!0,Hr[t.slice(0,r)].then(()=>{n.disabled=!1})))}},q=[],nn=new Map,X=new Map,Ge=e=>{for(const t of q)if(e.matches(t)){const n=nn.get(t),{resolve:r}=X.get(n),{options:s,known:i}=te.get(n);if(!i.has(e)){i.add(e);const{interpreter:o,config:c,version:l,env:d,onInterpreterReady:a,onerror:u}=s;let p;try{const f=Zt(e);if(f){const m=zt.call(new ue(null,s),f,{...Ft(e,n),version:l,type:o,custom:n,config:e.getAttribute("config")||c||{},async:e.hasAttribute("async")});fe(e,"xworker",{value:m}),r({type:n,xworker:m});return}}catch(f){p=f}const y=Gt(o,l),b=d||`${y}${c?`|${c}`:""}`,{interpreter:E,XWorker:v}=Qt(n,b,y,l,c,o);E.then(f=>{const m=Ct(x.get(o)),{onBeforeRun:g,onBeforeRunAsync:T,onAfterRun:h,onAfterRunAsync:_}=s,w=new ue(f,s),A=function(...M){return v.apply(w,M)};for(const[S,[M,J]]of[["run",[g,h]]]){const be=m[S];m[S]=function(Ee,ve,...Re){M&&M.call(this,R,e);const ke=be.call(this,Ee,ve,...Re);return J&&J.call(this,R,e),ke}}for(const[S,[M,J]]of[["runAsync",[T,_]]]){const be=m[S];m[S]=async function(Ee,ve,...Re){M&&await M.call(this,R,e);const ke=await be.call(this,Ee,ve,...Re);return J&&await J.call(this,R,e),ke}}m.registerJSModule(f,"polyscript",{XWorker:A});const R={type:n,interpreter:f,XWorker:A,io:I.get(f),config:structuredClone(Xt.get(y)),run:m.run.bind(m,f),runAsync:m.runAsync.bind(m,f),runEvent:m.runEvent.bind(m,f)};r(R),p&&u?.(p,e),a?.(R,e)})}}},te=new Map;let Jr=0;const Ur=(e,t)=>{let n=e==null;if(n)e=`_ps${Jr++}`;else if(x.has(e)||te.has(e))throw new Error(`<script type="${e}"> already registered`);if(!x.has(t?.interpreter))throw new Error("Unspecified interpreter");x.set(e,x.get(t.interpreter));const r=[`script[type="${e}"]`];if(Yr(e),n){const{onInterpreterReady:s}=t;t={...t,onInterpreterReady(i,o){q.splice(q.indexOf(e),1),x.delete(e),te.delete(e),X.delete(e),o.remove(),s?.(i)}},document.head.append(le(document.createElement("script"),{type:e}))}else r.push(`${e}-script`),W.push(`${e}-`);for(const s of r)nn.set(s,e);q.push(...r),te.set(e,{options:le({env:e},t),known:new WeakSet}),n||ct(document),xe(r.join(",")).forEach(Ge)},Yr=e=>(X.has(e)||X.set(e,Promise.withResolvers()),X.get(e).promise),qr=new MutationObserver(e=>{const t=ot.join(",");for(const{type:n,target:r,attributeName:s,addedNodes:i}of e){if(n==="attributes"){const o=s.lastIndexOf("-")+1;if(o){const c=s.slice(0,o);for(const l of W)if(c===l){const d=s.slice(o);if(d!=="env"){const a=r.hasAttribute(s)?"add":"remove";r[`${a}EventListener`](d,tn)}break}}continue}for(const o of i)o.nodeType===1&&(ct(o),t&&o.matches(t)?pe(o):rn(t,o,!0))}}),rn=(e,t,n)=>{e&&xe(e,t).forEach(pe),e=q.join(","),e&&(n&&Ge(t),xe(e,t).forEach(Ge))},sn=e=>(qr.observe(e,{childList:!0,subtree:!0,attributes:!0}),e),{attachShadow:Xr}=Element.prototype;le(Element.prototype,{attachShadow(e){return sn(Xr.call(this,e))}});queueMicrotask(()=>{ct(sn(document)),rn(ot.join(","),document,!1)});const lt=new Map([["py","pyodide"],["mpy","micropython"]]),on=[];for(const[e]of lt){const t=[`script[type="${e}"]`,`${e}-script`];for(const n of document.querySelectorAll(t.join(","))){const{promise:r,resolve:s}=Promise.withResolvers();on.push(r),n.addEventListener(`${e}:done`,s,{once:!0})}}Promise.all(on).then(()=>{dispatchEvent(new Event("py:all-done"))});const Vr={error:()=>he(()=>import("./error-9f28a85f.js").then(async m=>{await m.__tla;return m}),[])},O={GENERIC:"PY0000",CONFLICTING_CODE:"PY0409",BAD_CONFIG:"PY1000",MICROPIP_INSTALL_ERROR:"PY1001",BAD_PLUGIN_FILE_EXTENSION:"PY2000",NO_DEFAULT_EXPORT:"PY2001",TOP_LEVEL_AWAIT:"PY9000",FETCH_ERROR:"PY0001",FETCH_NAME_ERROR:"PY0002",FETCH_UNAUTHORIZED_ERROR:"PY0401",FETCH_FORBIDDEN_ERROR:"PY0403",FETCH_NOT_FOUND_ERROR:"PY0404",FETCH_SERVER_ERROR:"PY0500",FETCH_UNAVAILABLE_ERROR:"PY0503"};class Gr extends Error{constructor(t,n="",r="text"){super(`(${t}): ${n}`),this.errorCode=t,this.messageType=r,this.name="UserError"}}class C extends Gr{constructor(t,n){super(t,n),this.name="FetchError"}}async function an(e,t){let n;try{n=await fetch(e,t)}catch(r){const s=r;let i;throw e.startsWith("http")?i=`Fetching from URL ${e} failed with error '${s.message}'. Are your filename and path correct?`:i=`Polyscript: Access to local files
        (using [[fetch]] configurations in &lt;py-config&gt;)
        is not available when directly opening a HTML file;
        you must use a webserver to serve the additional files.
        See <a style="text-decoration: underline;" href="https://github.com/pyscript/pyscript/issues/257#issuecomment-1119595062">this reference</a>
        on starting a simple webserver with Python.
            `,new C(O.FETCH_ERROR,i)}if(!n.ok){const r=`Fetching from URL ${e} failed with error ${n.status} (${n.statusText}). Are your filename and path correct?`;switch(n.status){case 404:throw new C(O.FETCH_NOT_FOUND_ERROR,r);case 401:throw new C(O.FETCH_UNAUTHORIZED_ERROR,r);case 403:throw new C(O.FETCH_FORBIDDEN_ERROR,r);case 500:throw new C(O.FETCH_SERVER_ERROR,r);case 503:throw new C(O.FETCH_UNAVAILABLE_ERROR,r);default:throw new C(O.FETCH_ERROR,r)}}return n}const zr=(e,t="")=>{let n=`(${O.BAD_CONFIG}): Invalid URL: ${e}`;throw t&&(n+=`
expected ${t} content`),new Error(n)},Kr=async(e,t)=>{let n=e?.trim(),r="",s=!1,i=/^{/.test(n)&&/}$/.test(n);if(!i&&/\.(\w+)(?:\?\S*)?$/.test(n)){const o=RegExp.$1;o==="json"&&t!=="toml"?i=!0:o==="toml"&&t!=="json"?s=!0:zr(n,t),r=n,n=(await an(r).then(z)).trim()}return{json:i,toml:s||!i&&!!n,text:n,url:r}},_t=(e,t,{message:n})=>{let r=`(${O.BAD_CONFIG}): Invalid ${e}`;return t&&(r+=` @ ${t}`),new SyntaxError(`${r}
${n}`)},cn=new Map;for(const[e]of lt){let t,n,r,s,i,o=Oe(`${e}-config`);if(o?(s=o.getAttribute("src")||o.textContent,i=o.getAttribute("type")):(o=Oe([`script[type="${e}"][config]:not([worker])`,`${e}-script[config]:not([worker])`].join(",")),o&&(s=o.getAttribute("config"))),s)try{const{json:l,toml:d,text:a,url:u}=await Kr(s,i);if(s=a,l||i==="json")try{n=JSON.parse(a)}catch(p){r=_t("JSON",u,p)}else if(d||i==="toml")try{const{parse:p}=await he(()=>import("https://cdn.jsdelivr.net/npm/@webreflection/toml-j0.4/toml.js").then(async m=>{await m.__tla;return m}),[]);n=p(a)}catch(p){r=_t("TOML",u,p)}}catch(l){r=l}const c=[];for(const[l,d]of Object.entries(Vr))r?l==="error"&&d().then(({notify:a})=>a(r.message)):n?.plugins?.includes(`!${l}`)||c.push(d());c.length&&(t=Promise.all(c)),cn.set(e,{config:n,plugins:t,error:r})}let Zr,Qr,es,ts,ns,rs,ln,B,Z,fn,ss,os,G,un;Zr=()=>!0;Qr=e=>{throw new TypeError(e)};es=(e,t)=>{const n=[];if(e)for(const r of e.split(/\s*\|\s*/))r==="object"?n.push(s=>s!==null&&typeof s===r):r==="null"?n.push(s=>s===null):n.push(s=>typeof s===r);if(t)for(const r of[].concat(t))n.push(s=>s instanceof r);switch(n.length){case 0:return Zr;case 1:return n[0];default:return r=>n.some(s=>s(r))}};ts=(e,t,n,r=Qr)=>s=>{const i=[`Invalid ${typeof s} ${n}: expected `];e&&(i.push(e),t&&i.push(" or ")),t&&(i.push("an instanceof "),i.push([].concat(t).map(({name:o})=>o).join(" | "))),r(i.join(""),s)};ns=(e,t="value")=>{const n=e?.typeof,r=e?.instanceof;return[es(n,r),ts(n,r,t,e?.onerror)]};rs=e=>t=>{const[n,r]=ns(t);return class extends e{add(i){return n(i)?super.add(i):r(i)}}};ln=rs(Set);B=ln({typeof:"function"});Z=ln({typeof:"string"});L={onInterpreterReady:new B,onBeforeRun:new B,onBeforeRunAsync:new B,onAfterRun:new B,onAfterRunAsync:new B,onWorkerReady:new B,codeBeforeRunWorker:new Z,codeBeforeRunWorkerAsync:new Z,codeAfterRunWorker:new Z,codeAfterRunWorkerAsync:new Z};fn={sleep(e){return new Promise(t=>setTimeout(t,e*1e3))}};ss={pyscript:{"__init__.py":`# Some notes about the naming conventions and the relationship between various
# similar-but-different names.
#
# import pyscript
#     this package contains the main user-facing API offered by pyscript. All
#     the names which are supposed be used by end users should be made
#     available in pyscript/__init__.py (i.e., this file)
#
# import _pyscript
#     this is an internal module implemented in JS. It is used internally by
#     the pyscript package, end users should not use it directly. For its
#     implementation, grep for \`interpreter.registerJsModule("_pyscript",
#     ...)\` in core.js
#
# import js
#     this is the JS globalThis, as exported by pyodide and/or micropython's
#     FFIs. As such, it contains different things in the main thread or in a
#     worker.
#
# import pyscript.magic_js
#     this submodule abstracts away some of the differences between the main
#     thread and the worker. In particular, it defines \`window\` and \`document\`
#     in such a way that these names work in both cases: in the main thread,
#     they are the "real" objects, in the worker they are proxies which work
#     thanks to coincident.
#
# from pyscript import window, document
#     these are just the window and document objects as defined by
#     pyscript.magic_js. This is the blessed way to access them from pyscript,
#     as it works transparently in both the main thread and worker cases.

from pyscript.magic_js import RUNNING_IN_WORKER, PyWorker, window, document, sync, current_target
from pyscript.display import HTML, display

try:
    from pyscript.event_handling import when
except:
    from pyscript.util import NotSupported

    when = NotSupported(
        "pyscript.when",
        "pyscript.when currently not available with this interpreter"
    )
`,"display.py":`import base64
import html
import io
import re

from pyscript.magic_js import current_target, document, window

_MIME_METHODS = {
    "__repr__": "text/plain",
    "_repr_html_": "text/html",
    "_repr_markdown_": "text/markdown",
    "_repr_svg_": "image/svg+xml",
    "_repr_pdf_": "application/pdf",
    "_repr_jpeg_": "image/jpeg",
    "_repr_png_": "image/png",
    "_repr_latex": "text/latex",
    "_repr_json_": "application/json",
    "_repr_javascript_": "application/javascript",
    "savefig": "image/png",
}


def _render_image(mime, value, meta):
    # If the image value is using bytes we should convert it to base64
    # otherwise it will return raw bytes and the browser will not be able to
    # render it.
    if isinstance(value, bytes):
        value = base64.b64encode(value).decode("utf-8")

    # This is the pattern of base64 strings
    base64_pattern = re.compile(
        r"^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$"
    )
    # If value doesn't match the base64 pattern we should encode it to base64
    if len(value) > 0 and not base64_pattern.match(value):
        value = base64.b64encode(value.encode("utf-8")).decode("utf-8")

    data = f"data:{mime};charset=utf-8;base64,{value}"
    attrs = " ".join(['{k}="{v}"' for k, v in meta.items()])
    return f'<img src="{data}" {attrs}></img>'


def _identity(value, meta):
    return value


_MIME_RENDERERS = {
    "text/plain": html.escape,
    "text/html": _identity,
    "image/png": lambda value, meta: _render_image("image/png", value, meta),
    "image/jpeg": lambda value, meta: _render_image("image/jpeg", value, meta),
    "image/svg+xml": _identity,
    "application/json": _identity,
    "application/javascript": lambda value, meta: f"<script>{value}<\\\\/script>",
}


class HTML:
    """
    Wrap a string so that display() can render it as plain HTML
    """

    def __init__(self, html):
        self._html = html

    def _repr_html_(self):
        return self._html


def _eval_formatter(obj, print_method):
    """
    Evaluates a formatter method.
    """
    if print_method == "__repr__":
        return repr(obj)
    elif hasattr(obj, print_method):
        if print_method == "savefig":
            buf = io.BytesIO()
            obj.savefig(buf, format="png")
            buf.seek(0)
            return base64.b64encode(buf.read()).decode("utf-8")
        return getattr(obj, print_method)()
    elif print_method == "_repr_mimebundle_":
        return {}, {}
    return None


def _format_mime(obj):
    """
    Formats object using _repr_x_ methods.
    """
    if isinstance(obj, str):
        return html.escape(obj), "text/plain"

    mimebundle = _eval_formatter(obj, "_repr_mimebundle_")
    if isinstance(mimebundle, tuple):
        format_dict, _ = mimebundle
    else:
        format_dict = mimebundle

    output, not_available = None, []
    for method, mime_type in reversed(_MIME_METHODS.items()):
        if mime_type in format_dict:
            output = format_dict[mime_type]
        else:
            output = _eval_formatter(obj, method)

        if output is None:
            continue
        elif mime_type not in _MIME_RENDERERS:
            not_available.append(mime_type)
            continue
        break
    if output is None:
        if not_available:
            window.console.warn(
                f"Rendered object requested unavailable MIME renderers: {not_available}"
            )
        output = repr(output)
        mime_type = "text/plain"
    elif isinstance(output, tuple):
        output, meta = output
    else:
        meta = {}
    return _MIME_RENDERERS[mime_type](output, meta), mime_type


def _write(element, value, append=False):
    html, mime_type = _format_mime(value)
    if html == "\\\\n":
        return

    if append:
        out_element = document.createElement("div")
        element.append(out_element)
    else:
        out_element = element.lastElementChild
        if out_element is None:
            out_element = element

    if mime_type in ("application/javascript", "text/html"):
        script_element = document.createRange().createContextualFragment(html)
        out_element.append(script_element)
    else:
        out_element.innerHTML = html


def display(*values, target=None, append=True):
    if target is None:
        target = current_target()

    element = document.getElementById(target)

    # if element is a <script type="py">, it has a 'target' attribute which
    # points to the visual element holding the displayed values. In that case,
    # use that.
    if element.tagName == "SCRIPT" and hasattr(element, "target"):
        element = element.target

    for v in values:
        if not append:
            element.replaceChildren()
        _write(element, v, append=append)
`,"event_handling.py":`import inspect

from pyodide.ffi.wrappers import add_event_listener
from pyscript.magic_js import document


def when(event_type=None, selector=None):
    """
    Decorates a function and passes py-* events to the decorated function
    The events might or not be an argument of the decorated function
    """

    def decorator(func):
        if isinstance(selector, str):
            elements = document.querySelectorAll(selector)
        else:
            # TODO: This is a hack that will be removed when pyscript becomes a package
            #       and we can better manage the imports without circular dependencies
            from pyweb import pydom

            if isinstance(selector, pydom.Element):
                elements = [selector._js]
            elif isinstance(selector, pydom.ElementCollection):
                elements = [el._js for el in selector]
            else:
                raise ValueError(
                    f"Invalid selector: {selector}. Selector must"
                    " be a string, a pydom.Element or a pydom.ElementCollection."
                )

        sig = inspect.signature(func)
        # Function doesn't receive events
        if not sig.parameters:

            def wrapper(*args, **kwargs):
                func()

            for el in elements:
                add_event_listener(el, event_type, wrapper)
        else:
            for el in elements:
                add_event_listener(el, event_type, func)
        return func

    return decorator
`,"magic_js.py":`from pyscript.util import NotSupported
import js as globalThis

RUNNING_IN_WORKER = not hasattr(globalThis, "document")

if RUNNING_IN_WORKER:
    import polyscript

    PyWorker = NotSupported(
        'pyscript.PyWorker',
        'pyscript.PyWorker works only when running in the main thread')
    window = polyscript.xworker.window
    document = window.document
    sync = polyscript.xworker.sync

    # in workers the display does not have a default ID
    # but there is a sync utility from xworker
    def current_target():
        return polyscript.target

else:
    import _pyscript
    from _pyscript import PyWorker
    window = globalThis
    document = globalThis.document
    sync = NotSupported(
        'pyscript.sync',
        'pyscript.sync works only when running in a worker')

    # in MAIN the current element target exist, just use it
    def current_target():
        return _pyscript.target
`,"util.py":`class NotSupported:
    """
    Small helper that raises exceptions if you try to get/set any attribute on
    it.
    """

    def __init__(self, name, error):
        object.__setattr__(self, "name", name)
        object.__setattr__(self, "error", error)

    def __repr__(self):
        return f"<NotSupported {self.name} [{self.error}]>"

    def __getattr__(self, attr):
        raise AttributeError(self.error)

    def __setattr__(self, attr, value):
        raise AttributeError(self.error)

    def __call__(self, *args):
        raise TypeError(self.error)
`},pyweb:{"pydom.py":`import sys
import warnings
from functools import cached_property
from typing import Any

from pyodide.ffi import JsProxy
from pyscript import display, document, window

# from pyscript import when as _when

alert = window.alert


class BaseElement:
    def __init__(self, js_element):
        self._js = js_element
        self._parent = None
        self.style = StyleProxy(self)

    def __eq__(self, obj):
        """Check if the element is the same as the other element by comparing
        the underlying JS element"""
        return isinstance(obj, BaseElement) and obj._js == self._js

    @property
    def parent(self):
        if self._parent:
            return self._parent

        if self._js.parentElement:
            self._parent = self.__class__(self._js.parentElement)

        return self._parent

    @property
    def __class(self):
        return self.__class__ if self.__class__ != PyDom else Element

    def create(self, type_, is_child=True, classes=None, html=None, label=None):
        js_el = document.createElement(type_)
        element = self.__class(js_el)

        if classes:
            for class_ in classes:
                element.add_class(class_)

        if html is not None:
            element.html = html

        if label is not None:
            element.label = label

        if is_child:
            self.append(element)

        return element

    def find(self, selector):
        """Return an ElementCollection representing all the child elements that
        match the specified selector.

        Args:
            selector (str): A string containing a selector expression

        Returns:
            ElementCollection: A collection of elements matching the selector
        """
        elements = self._js.querySelectorAll(selector)
        if not elements:
            return None
        return ElementCollection([Element(el) for el in elements])


class Element(BaseElement):
    @property
    def children(self):
        return [self.__class__(el) for el in self._js.children]

    def append(self, child):
        # TODO: this is Pyodide specific for now!!!!!!
        # if we get passed a JSProxy Element directly we just map it to the
        # higher level Python element
        if isinstance(child, JsProxy):
            return self.append(Element(child))

        elif isinstance(child, Element):
            self._js.appendChild(child._js)

            return child

        elif isinstance(child, ElementCollection):
            for el in child:
                self.append(el)

    # -------- Pythonic Interface to Element -------- #
    @property
    def html(self):
        return self._js.innerHTML

    @html.setter
    def html(self, value):
        self._js.innerHTML = value

    @property
    def content(self):
        # TODO: This breaks with with standard template elements. Define how to best
        #       handle this specifica use case. Just not support for now?
        if self._js.tagName == "TEMPLATE":
            warnings.warn(
                "Content attribute not supported for template elements.", stacklevel=2
            )
            return None
        return self._js.innerHTML

    @content.setter
    def content(self, value):
        # TODO: (same comment as above)
        if self._js.tagName == "TEMPLATE":
            warnings.warn(
                "Content attribute not supported for template elements.", stacklevel=2
            )
            return

        display(value, target=self.id)

    @property
    def id(self):
        return self._js.id

    @id.setter
    def id(self, value):
        self._js.id = value

    def clone(self, new_id=None):
        clone = Element(self._js.cloneNode(True))
        clone.id = new_id

        return clone

    def remove_class(self, classname):
        classList = self._js.classList
        if isinstance(classname, list):
            classList.remove(*classname)
        else:
            classList.remove(classname)
        return self

    def add_class(self, classname):
        classList = self._js.classList
        if isinstance(classname, list):
            classList.add(*classname)
        else:
            self._js.classList.add(classname)
        return self

    @property
    def classes(self):
        classes = self._js.classList.values()
        return [x for x in classes]

    def show_me(self):
        self._js.scrollIntoView()

    def when(self, event, handler):
        document.when(event, selector=self)(handler)


class StyleProxy(dict):
    def __init__(self, element: Element) -> None:
        self._element = element

    @cached_property
    def _style(self):
        return self._element._js.style

    def __getitem__(self, key):
        return self._style.getPropertyValue(key)

    def __setitem__(self, key, value):
        self._style.setProperty(key, value)

    def remove(self, key):
        self._style.removeProperty(key)

    def set(self, **kws):
        for k, v in kws.items():
            self._element._js.style.setProperty(k, v)

    # CSS Properties
    # Reference: https://github.com/microsoft/TypeScript/blob/main/src/lib/dom.generated.d.ts#L3799C1-L5005C2
    # Following prperties automatically generated from the above reference using
    # tools/codegen_css_proxy.py
    @property
    def visible(self):
        return self._element._js.style.visibility

    @visible.setter
    def visible(self, value):
        self._element._js.style.visibility = value


class StyleCollection:
    def __init__(self, collection: "ElementCollection") -> None:
        self._collection = collection

    def __get__(self, obj, objtype=None):
        return obj._get_attribute("style")

    def __getitem__(self, key):
        return self._collection._get_attribute("style")[key]

    def __setitem__(self, key, value):
        for element in self._collection._elements:
            element.style[key] = value

    def remove(self, key):
        for element in self._collection._elements:
            element.style.remove(key)


class ElementCollection:
    def __init__(self, elements: [Element]) -> None:
        self._elements = elements
        self.style = StyleCollection(self)

    def __getitem__(self, key):
        # If it's an integer we use it to access the elements in the collection
        if isinstance(key, int):
            return self._elements[key]
        # If it's a slice we use it to support slice operations over the elements
        # in the collection
        elif isinstance(key, slice):
            return ElementCollection(self._elements[key])

        # If it's anything else (basically a string) we use it as a selector
        # TODO: Write tests!
        elements = self._element.querySelectorAll(key)
        return ElementCollection([Element(el) for el in elements])

    def __len__(self):
        return len(self._elements)

    def __eq__(self, obj):
        """Check if the element is the same as the other element by comparing
        the underlying JS element"""
        return isinstance(obj, ElementCollection) and obj._elements == self._elements

    def _get_attribute(self, attr, index=None):
        if index is None:
            return [getattr(el, attr) for el in self._elements]

        # As JQuery, when getting an attr, only return it for the first element
        return getattr(self._elements[index], attr)

    def _set_attribute(self, attr, value):
        for el in self._elements:
            setattr(el, attr, value)

    @property
    def html(self):
        return self._get_attribute("html")

    @html.setter
    def html(self, value):
        self._set_attribute("html", value)

    @property
    def children(self):
        return self._elements

    def __iter__(self):
        yield from self._elements

    def __repr__(self):
        return f"{self.__class__.__name__} (length: {len(self._elements)}) {self._elements}"


class DomScope:
    def __getattr__(self, __name: str) -> Any:
        element = document[f"#{__name}"]
        if element:
            return element[0]


class PyDom(BaseElement):
    # Add objects we want to expose to the DOM namespace since this class instance is being
    # remapped as "the module" itself
    BaseElement = BaseElement
    Element = Element
    ElementCollection = ElementCollection

    def __init__(self):
        super().__init__(document)
        self.ids = DomScope()
        self.body = Element(document.body)
        self.head = Element(document.head)

    def create(self, type_, parent=None, classes=None, html=None):
        return super().create(type_, is_child=False)

    def __getitem__(self, key):
        if isinstance(key, int):
            indices = range(*key.indices(len(self.list)))
            return [self.list[i] for i in indices]

        elements = self._js.querySelectorAll(key)
        if not elements:
            return None
        return ElementCollection([Element(el) for el in elements])


dom = PyDom()

sys.modules[__name__] = dom
`}};({entries:os}=Object);G=["from pathlib import Path as _Path"];un=(e,t)=>{for(const[n,r]of os(t)){const s=`_Path("${e}/${n}")`;if(typeof r=="string"){const i=JSON.stringify(r);G.push(`${s}.write_text(${i})`)}else G.push(`${s}.mkdir(parents=True, exist_ok=True)`),un(`${e}/${n}`,r)}};un(".",ss);G.push("del _Path");G.push(`
`);const ze=G.join(`
`);const{assign:Ke,defineProperty:pn}=Object;let V;const dn=({tagName:e})=>e==="SCRIPT",wt=e=>{pn(document,"currentScript",{configurable:!0,get:()=>e})},bt=()=>{delete document.currentScript},Q=(e,t,n,r)=>{n(t);for(const s of L[r])s(e,t)};let Et=!0;const is=({XWorker:e,interpreter:t,io:n})=>{function r(...s){const i=e(...s);return i.onerror=({error:o})=>n.stderr(o),i}t.registerJsModule("_pyscript",{PyWorker:r,get target(){return dn(V)?V.target.id:V.id}}),t.runPython(ze,{globals:t.runPython("{}")})},mn={codeBeforeRunWorker:()=>[ze,...L.codeBeforeRunWorker].map(k).join(`
`),codeBeforeRunWorkerAsync:()=>[ze,...L.codeBeforeRunWorkerAsync].map(k).join(`
`),codeAfterRunWorker:()=>[...L.codeAfterRunWorker].map(k).join(`
`),codeAfterRunWorkerAsync:()=>[...L.codeAfterRunWorkerAsync].map(k).join(`
`)};for(const[e,t]of lt){const n=(a,u,p)=>{u?p.then(()=>D(a,e,"done")):D(a,e,"done")},{config:r,plugins:s,error:i}=cn.get(e);let o=0;const c=(a=e)=>`${a}-${o++}`,l=async(a,u,p)=>{if(a.hasAttribute("src"))try{return await an(a.getAttribute("src")).then(z)}catch(b){u.stderr(b)}if(p)return k(a.textContent);const y=k(Mt(a.innerHTML));return console.warn(`Deprecated: use <script type="${e}"> for an always safe content parsing:
`,y),y};if(!i){const a=new Map;Ur(e,{config:r,interpreter:t,env:`${e}-script`,version:r?.interpreter,onerror(u,p){a.set(p,u)},...mn,onWorkerReady(u,p){Ke(p.sync,fn);for(const y of L.onWorkerReady)y(u,p)},onBeforeRun(u,p){V=p,Q(u,p,wt,"onBeforeRun")},onBeforeRunAsync(u,p){V=p,Q(u,p,wt,"onBeforeRunAsync")},onAfterRun(u,p){Q(u,p,bt,"onAfterRun")},onAfterRunAsync(u,p){Q(u,p,bt,"onAfterRunAsync")},async onInterpreterReady(u,p){Et&&(Et=!1,is(u)),s&&await s;for(const y of L.onInterpreterReady)y(u,p);if(a.has(p)){let{message:y}=a.get(p);a.delete(p);const b=y===Kt;y=`(${O.CONFLICTING_CODE}) ${y} for `,y+=p.cloneNode(b).outerHTML,u.io.stderr(y);return}if(dn(p)){const{attributes:{async:y,target:b}}=p,E=!!b?.value,v=E?at(p,b.value):document.createElement("script-py");if(!E){const{head:f,body:m}=document;f.contains(p)?m.append(v):p.after(v)}v.id||(v.id=c()),pn(p,"target",{value:v}),D(p,e,"ready"),n(p,y,u[`run${y?"Async":""}`](await l(p,u.io,!0)))}else p._wrap.resolve(u);console.debug("[pyscript/main] PyScript Ready")}})}class d extends HTMLElement{constructor(){Ke(super(),{_wrap:Promise.withResolvers(),srcCode:"",executed:!1})}get _pyodide(){return this._wrap}get id(){return super.id||(super.id=c())}set id(u){super.id=u}async connectedCallback(){if(!this.executed){this.executed=!0;const u=this.hasAttribute("async"),{io:p,run:y,runAsync:b}=await this._wrap.promise;this.srcCode=await l(this,p,!this.childElementCount),this.replaceChildren(),this.style.display="block",D(this,e,"ready"),n(this,u,(u?b:y)(this.srcCode))}}}i||customElements.define(`${e}-script`,d),structuredClone(r)}function as(e,t){const n=zt.call(new ue(null,mn),e,{...t,type:"pyodide"});return Ke(n.sync,fn),n}console.log("main.ts");let we=as("main.py",{async:!0,config:"config.toml"}),cs=0;we.sync.js_func=()=>{console.log(`js_func: ${cs++}`)};we.sync.js_on_worker_ready=()=>{console.log("js_on_worker_ready"),document.dispatchEvent(new CustomEvent("worker_ready",{detail:{}}))};function hn(){console.log("call_py_func: 1"),we.sync.py_func(),console.log("call_py_func: 2")}window.call_py_func=hn;document.addEventListener("worker_ready",e=>{console.log("worker_ready event received"),hn(),yn()});function yn(){ls(we.sync.py_func()).then(e=>{e?console.log("The worker is alive."):console.error("The worker is not responding.")}),setTimeout(yn,3e3)}function ls(e,t=3e3,n=void 0){return new Promise((r,s)=>{let i=setTimeout(()=>{r(n)},t);e.then(o=>{clearTimeout(i),r(o)}).catch(s)})}})();export{L as h,__tla};