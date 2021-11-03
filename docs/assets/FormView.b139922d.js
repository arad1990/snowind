import{C as f}from"./CodeBlock.e2b443a9.js";import{S as w}from"./input.es.ae71793b.js";import{N as h}from"./NextBar.53a2d3cb.js";import{_ as V}from"./index.aab83dc6.js";import{d as b,y,c as g,r,a as t,b as e,e as d,n as _,f as v,o}from"./vendor.2a37f64c.js";const k=b({components:{CodeBlock:f,SwInput:w,NextBar:h},setup(){const s=y({name:{val:"",isValid:null,validator:l=>l.length>2},password:{val:"",isValid:null,validator:l=>l.length>7}}),a=g(()=>s.name.isValid===!0&&s.password.isValid===!0);return{form:s,code1:`
      <sw-input
        v-model:value="form.name.val"
        v-model:isvalid="form.name.isValid"
        :validator="form.name.validator"
        inlineLabel="Username"
      ></sw-input>
      <div class="mt-3 text-sm text-gray-500 dark:text-gray-200">
        <div v-if="form.name.isValid === true" class="text-success">Ok</div>
        <div v-else-if="form.name.isValid === false" class="text-danger">Type 3 characters minimum</div>
        <div v-else>Type a username</div>
      </div>
      <sw-input
        class="mt-5"
        v-model:value="form.password.val"
        v-model:isvalid="form.password.isValid"
        :validator="form.password.validator"
        inlineLabel="Password"
        type="password"
      ></sw-input>
      <div class="mt-3 text-sm text-gray-500 dark:text-gray-200">
        <div v-if="form.password.isValid === true" class="text-success">Ok</div>
        <div
          v-else-if="form.password.isValid === false"
          class="text-danger"
        >Type 8 characters minimum</div>
        <div v-else>Type a password</div>
      </div>
      <button
        class="mt-3 btn"
        :disabled="!isFormValid"
        :class="{ 'success': isFormValid, 'light': !isFormValid }"
      >Submit</button>
    `,code2:`
    import { Validators } from "@/snowind";
    
    setup() {
      const form = reactive({
        name: {
          val: "", // initial value
          isValid: null, // initial state
          validator: (v: string) => v.length > 2,
        },
        password: {
          val: "", // initial value
          isValid: null, // initial state
          validator: (v: string) => v.length > 7,
        },
      });

      const isFormValid = computed<boolean>(() => {
        return form.name.isValid === true && form.password.isValid === true;
      });

      return {
        form,
        isFormValid
      }
    }
    `,isFormValid:a}}}),x=e("div",{class:"text-2xl"},"Form",-1),F=e("div",{class:"mt-8"},"A complete form example with validation and hints",-1),T={id:"form2",class:"mt-8"},B={class:"mt-3 text-sm text-gray-500 dark:text-gray-200"},C={key:0,class:"text-success"},N={key:1,class:"text-danger"},S={key:2},U={class:"mt-3 text-sm text-gray-500 dark:text-gray-200"},j={key:0,class:"text-success"},L={key:1,class:"text-danger"},O={key:2},$=["disabled"],P=e("div",{class:"mt-5"}," The form fields use a tristate: neutral when nothing has been typed, invalid when something has been typed but does not statisfy the validator conditions, and valid when the validator passes. We use a computed property to check the form validity and enable the submit button ",-1),z={class:"mt-5"},A=v(" Template: "),E=v("Script: ");function I(s,a,c,p,l,W){const n=r("sw-input"),m=r("code-block"),u=r("next-bar");return o(),t("div",null,[x,F,e("div",T,[d(n,{value:s.form.name.val,"onUpdate:value":a[0]||(a[0]=i=>s.form.name.val=i),isvalid:s.form.name.isValid,"onUpdate:isvalid":a[1]||(a[1]=i=>s.form.name.isValid=i),validator:s.form.name.validator,inlineLabel:"Username"},null,8,["value","isvalid","validator"]),e("div",B,[s.form.name.isValid===!0?(o(),t("div",C,"Ok")):s.form.name.isValid===!1?(o(),t("div",N,"Type 3 characters minimum")):(o(),t("div",S,"Type a username"))]),d(n,{class:"mt-5",value:s.form.password.val,"onUpdate:value":a[2]||(a[2]=i=>s.form.password.val=i),isvalid:s.form.password.isValid,"onUpdate:isvalid":a[3]||(a[3]=i=>s.form.password.isValid=i),validator:s.form.password.validator,inlineLabel:"Password",type:"password"},null,8,["value","isvalid","validator"]),e("div",U,[s.form.password.isValid===!0?(o(),t("div",j,"Ok")):s.form.password.isValid===!1?(o(),t("div",L,"Type 8 characters minimum")):(o(),t("div",O,"Type a password"))]),e("button",{class:_(["mt-3 btn",{success:s.isFormValid,light:!s.isFormValid}]),disabled:!s.isFormValid},"Submit",10,$)]),P,e("div",z,[A,d(m,{code:s.code1,class:"mb-3"},null,8,["code"]),E,d(m,{code:s.code2,lang:"typescript"},null,8,["code"])]),d(u,{class:"mt-24",prev:{link:"/switch",text:"Switch"}})])}var K=V(k,[["render",I]]);export{K as default};
