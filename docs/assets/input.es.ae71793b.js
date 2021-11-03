import{d as dt,l as ht,o as H,a as L,z as pt,A as _t,b as vt,n as F,t as gt,j as wt}from"./vendor.2a37f64c.js";var bt=Object.defineProperty,mt=(t,e,n)=>e in t?bt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,v=(t,e,n)=>(mt(t,typeof e!="symbol"?e+"":e,n),n);function St(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Et=Object.prototype.hasOwnProperty,m=(t,e)=>Et.call(t,e),d=Array.isArray,S=t=>U(t)==="[object Map]",It=t=>typeof t=="string",A=t=>typeof t=="symbol",E=t=>t!==null&&typeof t=="object",Rt=Object.prototype.toString,U=t=>Rt.call(t),Tt=t=>U(t).slice(8,-1),z=t=>It(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$=(t,e)=>!Object.is(t,e),C=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Mt=t=>(t.w&W)>0,Vt=t=>(t.n&W)>0,N=new WeakMap;let W=1,I;const _=Symbol(""),B=Symbol("");let R=!0;const Y=[];function Ot(){Y.push(R),R=!1}function Kt(){const t=Y.pop();R=t===void 0?!0:t}function c(t,e,n){if(!x())return;let r=N.get(t);r||N.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=C()),J(s)}function x(){return R&&I!==void 0}function J(t,e){let n=!1;Vt(t)||(t.n|=W,n=!Mt(t)),n&&(t.add(I),I.deps.push(t))}function h(t,e,n,r,s,i){const a=N.get(t);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(n==="length"&&d(t))a.forEach((u,f)=>{(f==="length"||f>=r)&&o.push(u)});else switch(n!==void 0&&o.push(a.get(n)),e){case"add":d(t)?z(n)&&o.push(a.get("length")):(o.push(a.get(_)),S(t)&&o.push(a.get(B)));break;case"delete":d(t)||(o.push(a.get(_)),S(t)&&o.push(a.get(B)));break;case"set":S(t)&&o.push(a.get(_));break}if(o.length===1)o[0]&&q(o[0]);else{const u=[];for(const f of o)f&&u.push(...f);q(C(u))}}function q(t,e){for(const n of d(t)?t:[...t])(n!==I||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Pt=St("__proto__,__v_isRef,__isVue"),Q=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(A)),jt=Z(),yt=Z(!0),X=At();function At(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=l(this);for(let i=0,a=this.length;i<a;i++)c(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(l)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ot();const r=l(this)[e].apply(this,n);return Kt(),r}}),t}function Z(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&i===(t?e?Jt:it:e?xt:rt).get(r))return r;const a=d(r);if(!t&&a&&m(X,s))return Reflect.get(X,s,i);const o=Reflect.get(r,s,i);return(A(s)?Q.has(s):Pt(s))||(t||c(r,"get",s),e)?o:j(o)?!a||!z(s)?o.value:o:E(o)?t?ot(o):at(o):o}}const zt=$t();function $t(t=!1){return function(n,r,s,i){let a=n[r];if(!t&&(s=l(s),a=l(a),!d(n)&&j(a)&&!j(s)))return a.value=s,!0;const o=d(n)&&z(r)?Number(r)<n.length:m(n,r),u=Reflect.set(n,r,s,i);return n===l(i)&&(o?$(s,a)&&h(n,"set",r,s):h(n,"add",r,s)),u}}function Ct(t,e){const n=m(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&h(t,"delete",e,void 0),r}function Nt(t,e){const n=Reflect.has(t,e);return(!A(e)||!Q.has(e))&&c(t,"has",e),n}function Wt(t){return c(t,"iterate",d(t)?"length":_),Reflect.ownKeys(t)}const Bt={get:jt,set:zt,deleteProperty:Ct,has:Nt,ownKeys:Wt},qt={get:yt,set(t,e){return!0},deleteProperty(t,e){return!0}},D=t=>t,T=t=>Reflect.getPrototypeOf(t);function M(t,e,n=!1,r=!1){t=t.__v_raw;const s=l(t),i=l(e);e!==i&&!n&&c(s,"get",e),!n&&c(s,"get",i);const{has:a}=T(s),o=r?D:n?G:w;if(a.call(s,e))return o(t.get(e));if(a.call(s,i))return o(t.get(i));t!==s&&t.get(e)}function V(t,e=!1){const n=this.__v_raw,r=l(n),s=l(t);return t!==s&&!e&&c(r,"has",t),!e&&c(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function O(t,e=!1){return t=t.__v_raw,!e&&c(l(t),"iterate",_),Reflect.get(t,"size",t)}function k(t){t=l(t);const e=l(this);return T(e).has.call(e,t)||(e.add(t),h(e,"add",t,t)),this}function tt(t,e){e=l(e);const n=l(this),{has:r,get:s}=T(n);let i=r.call(n,t);i||(t=l(t),i=r.call(n,t));const a=s.call(n,t);return n.set(t,e),i?$(e,a)&&h(n,"set",t,e):h(n,"add",t,e),this}function et(t){const e=l(this),{has:n,get:r}=T(e);let s=n.call(e,t);s||(t=l(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&h(e,"delete",t,void 0),i}function nt(){const t=l(this),e=t.size!==0,n=t.clear();return e&&h(t,"clear",void 0,void 0),n}function K(t,e){return function(r,s){const i=this,a=i.__v_raw,o=l(a),u=e?D:t?G:w;return!t&&c(o,"iterate",_),a.forEach((f,g)=>r.call(s,u(f),u(g),i))}}function P(t,e,n){return function(...r){const s=this.__v_raw,i=l(s),a=S(i),o=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,f=s[t](...r),g=n?D:e?G:w;return!e&&c(i,"iterate",u?B:_),{next(){const{value:b,done:y}=f.next();return y?{value:b,done:y}:{value:o?[g(b[0]),g(b[1])]:g(b),done:y}},[Symbol.iterator](){return this}}}}function p(t){return function(...e){return t==="delete"?!1:this}}function Dt(){const t={get(i){return M(this,i)},get size(){return O(this)},has:V,add:k,set:tt,delete:et,clear:nt,forEach:K(!1,!1)},e={get(i){return M(this,i,!1,!0)},get size(){return O(this)},has:V,add:k,set:tt,delete:et,clear:nt,forEach:K(!1,!0)},n={get(i){return M(this,i,!0)},get size(){return O(this,!0)},has(i){return V.call(this,i,!0)},add:p("add"),set:p("set"),delete:p("delete"),clear:p("clear"),forEach:K(!0,!1)},r={get(i){return M(this,i,!0,!0)},get size(){return O(this,!0)},has(i){return V.call(this,i,!0)},add:p("add"),set:p("set"),delete:p("delete"),clear:p("clear"),forEach:K(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=P(i,!1,!1),n[i]=P(i,!0,!1),e[i]=P(i,!1,!0),r[i]=P(i,!0,!0)}),[t,n,e,r]}const[Gt,Ht,Lt,Ft]=Dt();function st(t,e){const n=e?t?Ft:Lt:t?Ht:Gt;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(m(n,s)&&s in r?n:r,s,i)}const Ut={get:st(!1,!1)},Yt={get:st(!0,!1)},rt=new WeakMap,xt=new WeakMap,it=new WeakMap,Jt=new WeakMap;function Qt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xt(t){return t.__v_skip||!Object.isExtensible(t)?0:Qt(Tt(t))}function at(t){return t&&t.__v_isReadonly?t:lt(t,!1,Bt,Ut,rt)}function ot(t){return lt(t,!0,qt,Yt,it)}function lt(t,e,n,r,s){if(!E(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=Xt(t);if(a===0)return t;const o=new Proxy(t,a===2?r:n);return s.set(t,o),o}function l(t){const e=t&&t.__v_raw;return e?l(e):t}const w=t=>E(t)?at(t):t,G=t=>E(t)?ot(t):t;function ut(t){x()&&(t=l(t),t.dep||(t.dep=C()),J(t.dep))}function ct(t,e){t=l(t),t.dep&&q(t.dep)}function j(t){return Boolean(t&&t.__v_isRef===!0)}function ft(t){return Zt(t,!1)}function Zt(t,e){return j(t)?t:new kt(t,e)}class kt{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:l(e),this._value=n?e:w(e)}get value(){return ut(this),this._value}set value(e){e=this._shallow?e:l(e),$(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:w(e),ct(this))}}class te{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>ut(this),()=>ct(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function ee(t){return new te(t)}Promise.resolve();class ne{constructor({id:e,value:n,validator:r,validationDelay:s=400}){v(this,"id"),v(this,"validator"),v(this,"isValid",ft(null)),v(this,"_value"),v(this,"inputValue"),v(this,"_timeout",null),this.id=e,this._value=ft(n),this.validator=r;const i=this;this.inputValue=ee((a,o)=>({get(){return a(),i._value.value},set:u=>{this._timeout!==null&&clearTimeout(this._timeout),this._timeout=setTimeout(()=>{i._value.value=u,o(),i.isValid.value=i.validator(u),i._timeout=null},s)}}))}}function se(){const t=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}var re=(t,e)=>{for(const[n,r]of e)t[n]=r;return t};const ie=dt({props:{id:{type:String,default:()=>null},inlineLabel:{type:String,default:""},value:{type:String,required:!0},type:{type:String,default:"text"},validator:{type:Function,default:()=>!0},placeholder:{type:String,default:""},required:{type:Boolean,default:!1}},emits:["update:value","update:isvalid"],setup(t,{emit:e}){var n;const{id:r,value:s,validator:i}=ht(t),a=new ne({id:(n=r.value)!=null?n:se(),value:s.value,validator:o=>{let u=!1;switch(i.value(o)){case!0:a.isValid.value=!0,e("update:isvalid",!0),e("update:value",o),u=!0;break;case!1:a.isValid.value=!1,e("update:isvalid",!1),u=!1;break;case null:a.isValid.value=!1,e("update:isvalid",null),u=null;break;default:throw new Error(`The ${r} validator received an invalid value ${o}: it must be true, false or null`)}return u}});return{input:a}}}),ae={class:"relative sw-input"},oe=["type","id","placeholder","required"],le=["for"];function ue(t,e,n,r,s,i){return H(),L("div",ae,[pt(vt("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.input.inputValue.value=a),type:t.type,id:t.id,class:F({valid:t.input.isValid.value===!0,invalid:t.input.isValid.value===!1,neutral:t.input.isValid.value===null}),placeholder:t.placeholder,required:t.required},null,10,oe),[[_t,t.input.inputValue.value]]),t.inlineLabel!==""?(H(),L("label",{key:0,for:t.id,class:F(["absolute px-1 left-2",{valid:t.input.isValid.value===!0,invalid:t.input.isValid.value===!1,neutral:t.input.isValid.value===null}])},gt(t.inlineLabel),11,le)):wt("",!0)])}var fe=re(ie,[["render",ue]]);export{fe as S};
