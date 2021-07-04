import{_ as e}from"./CodeBlock.e6b73aa1.js";import{F as a}from"./input.es.7731e947.js";import{_ as l}from"./CodeButton.34f88857.js";import{d as n,n as t,q as s,r as o,o as r,a as d,b as i,F as p,e as u,m as c}from"./vendor.60add0e7.js";import{_ as m}from"./NextBar.81528991.js";import{_ as v}from"./PropsTable.397b0864.js";import{_ as f}from"./EventsTable.b95973c6.js";var b=n({components:{CodeBlock:e,SwInput:a,CodeButton:l},setup(){const e=t(!0);return{form:s({name:{val:"",isValid:null,validator:e=>e.length>2}}),code1:'\n      <sw-input\n        id="username"\n        v-model:value="form.name.val"\n        v-model:isvalid="form.name.isValid"\n        :validator="form.name.validator"\n        placeholder="username"\n        required>\n      </sw-input>\n      <div class="mt-3 text-sm">\n        <div v-if="form.name.isValid === true" class="text-success dark:text-success-dark">Ok</div>\n        <div\n          v-else-if="form.name.isValid === false"\n          class="text-danger dark:text-danger-dark"\n        >Type 3 characters minimum</div>\n        <div v-else class="text-neutral dark:text-neutral-dark">Type a username</div>\n      </div>\n    ',code2:'\n      import SwInput from "@snowind/input";\n      \n      components: {\n        SwInput\n      },\n      setup() {\n        const form = reactive({\n          name: {\n            val: "",\n            isValid: null,\n            validator: (v: string) => v.length > 2\n          }\n        });\n\n        return {\n          form\n        }\n      }\n    ',collapse:e}}});const g={id:"form"},h={class:"mt-3 text-sm"},y={key:0,class:"text-success dark:text-success-dark"},w={key:1,class:"text-danger dark:text-danger-dark"},x={key:2,class:"text-neutral dark:text-neutral-dark"},k=u(" Template: "),T=u("Script: "),V=i("div",{class:"mt-5"},[u(" The input field has a tristate: "),i("code",{class:"variable"},"null"),u(" : nothing has been edited, "),i("code",{class:"variable"},"false"),u(": invalid input and "),i("code",{class:"variable"},"true"),u(": valid input ")],-1);b.render=function(e,a,l,n,t,s){const u=o("sw-input"),c=o("code-block"),m=o("code-button");return r(),d(p,null,[i("div",g,[i(u,{id:"form-username",value:e.form.name.val,"onUpdate:value":a[1]||(a[1]=a=>e.form.name.val=a),isvalid:e.form.name.isValid,"onUpdate:isvalid":a[2]||(a[2]=a=>e.form.name.isValid=a),validator:e.form.name.validator,placeholder:"username",required:""},null,8,["value","isvalid","validator"]),i("div",h,[!0===e.form.name.isValid?(r(),d("div",y,"Ok")):!1===e.form.name.isValid?(r(),d("div",w,"Type 3 characters minimum")):(r(),d("div",x,"Type a username"))])]),i("div",{class:[{"slide-y":!0,slideup:!0===e.collapse,slidedown:!1===e.collapse},"mt-4"]},[k,i(c,{code:e.code1,class:"my-3"},null,8,["code"]),T,i(c,{code:e.code2,lang:"typescript",class:"mt-3"},null,8,["code"])],2),i(m,{class:"mt-3",collapse:e.collapse,onToggle:a[3]||(a[3]=a=>e.collapse=!e.collapse)},null,8,["collapse"]),V],64)};var q=n({components:{CodeBlock:e,SwInput:a,CodeButton:l},setup(){const e=t(!0);return{form:s({name:{val:"",isValid:null,validator:e=>e.length>=3},password:{val:"",isValid:!1,validator:e=>e.length>=6}}),code1:'\n    <sw-input\n      v-model:value="form.name.val"\n      v-model:isvalid="form.name.isValid"\n      :validator="form.name.validator"\n      inlineLabel="Username">\n    </sw-input>\n    <sw-input\n      class="mt-5"\n      v-model:value="form.password.val"\n      v-model:isvalid="form.password.isValid"\n      :validator="form.password.validator"\n      inlineLabel="Password"\n      type="password">\n    </sw-input>\n    ',code2:'\n    setup() {\n      const form = reactive({\n        name: {\n          val: "",\n          isValid: null,\n          validator: (v: string) => v.length >= 3\n        },\n        password: {\n          val: "",\n          isValid: false,\n          validator: (v: string) => v.length >= 6\n        },\n      });\n\n      return {\n        form,\n      }\n    }\n    ',collapse:e}}});const I={id:"form2"},B=u(" Template: "),C=u("Script: ");q.render=function(e,a,l,n,t,s){const u=o("sw-input"),c=o("code-block"),m=o("code-button");return r(),d(p,null,[i("div",I,[i(u,{value:e.form.name.val,"onUpdate:value":a[1]||(a[1]=a=>e.form.name.val=a),isvalid:e.form.name.isValid,"onUpdate:isvalid":a[2]||(a[2]=a=>e.form.name.isValid=a),validator:e.form.name.validator,inlineLabel:"Username"},null,8,["value","isvalid","validator"]),i(u,{class:"mt-5",value:e.form.password.val,"onUpdate:value":a[3]||(a[3]=a=>e.form.password.val=a),isvalid:e.form.password.isValid,"onUpdate:isvalid":a[4]||(a[4]=a=>e.form.password.isValid=a),validator:e.form.password.validator,inlineLabel:"Password",type:"password"},null,8,["value","isvalid","validator"])]),i("div",{class:[{"slide-y":!0,slideup:!0===e.collapse,slidedown:!1===e.collapse},"mt-4"]},[B,i(c,{code:e.code1,class:"mb-3"},null,8,["code"]),C,i(c,{code:e.code2,lang:"typescript"},null,8,["code"])],2),i(m,{class:"mt-3",collapse:e.collapse,onToggle:a[5]||(a[5]=a=>e.collapse=!e.collapse)},null,8,["collapse"])],64)};var U=n({components:{CodeBlock:e,SwInput:a,CodeButton:l},setup(){const e=t(!0);return{form:s({name:{val:"",isValid:null,validator:e=>0===e.length?null:e.length>=3}}),code1:'\n    <div id="form">\n      <sw-input\n        v-model:value="form.name.val"\n        v-model:isvalid="form.name.isValid"\n        :validator="form.name.validator"\n        placeholder="username">\n      </sw-input>\n    </div>\n    ',code2:'\n    <style lang="sass">\n      #form\n        & input\n          @apply ring-0 dark:bg-transparent border-b border-t-0 border-l-0 border-r-0 w-40\n          &.neutral\n            @apply border-secondary dark:border-secondary-dark\n          &.invalid\n            @apply bg-danger dark:bg-danger-dark text-danger-r dark:text-danger-r-dark\n          &.valid\n            @apply border-success dark:border-success-dark text-success dark:text-success-dark\n    </style>\n    ',collapse:e}}});const S=i("div",{class:"mb-5"},"The validation state can be customized with css:",-1),D={id:"form3"};U.render=function(e,a,l,n,t,s){const u=o("sw-input"),c=o("code-block"),m=o("code-button");return r(),d(p,null,[S,i("div",D,[i(u,{value:e.form.name.val,"onUpdate:value":a[1]||(a[1]=a=>e.form.name.val=a),isvalid:e.form.name.isValid,"onUpdate:isvalid":a[2]||(a[2]=a=>e.form.name.isValid=a),validator:e.form.name.validator,placeholder:"username"},null,8,["value","isvalid","validator"])]),i("div",{class:[{"slide-y":!0,slideup:!0===e.collapse,slidedown:!1===e.collapse},"mt-4"]},[i(c,{code:e.code1,class:"mb-3"},null,8,["code"]),i(c,{code:e.code2,lang:"html",class:"mb-3"},null,8,["code"])],2),i(m,{class:"mt-3",collapse:e.collapse,onToggle:a[3]||(a[3]=a=>e.collapse=!e.collapse)},null,8,["collapse"])],64)};var j=n({components:{InputA:b,InputB:q,InputC:U,NextBar:m,CodeBlock:e,PropsTable:v,EventsTable:f},setup:()=>({propsData:[{prop:"id",description:"The id of the widget, it will be autogenerated if not provided",type:"string",values:"any string",default:"",required:!1},{prop:"v-model:value",description:"The initial value of the input",type:"string",values:"any string",default:"",required:!1},{prop:"v-model:isvalid",description:"The validity property of the input",type:"boolean or null",values:"false, true or null",default:"null",required:!1},{prop:"type",description:"The input type",type:"string",values:'<a class="underline" href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input">standard input types</a>',default:"text",required:!1},{prop:"validator",description:"The validator function",type:"<pre>(value: T) => boolean</pre>",values:"a validator function",default:"",required:!1},{prop:"placeholder",description:"The placeholder text",type:"string",values:"any string",default:"",required:!1},{prop:"inlineLabel",description:"The inline label for inline input",type:"string",values:"any string",default:"",required:!1},{prop:"required",description:"The html required attribute",type:"boolean",values:"true, false",default:"false",required:!1}],eventsData:[{name:"update:value",description:"Event emitted when the input value changes",returnType:"string"},{name:"update:isvalid",description:"Event emitted when the input value becomes valid",returnType:"boolean"}]})});const E=i("div",{class:"mb-8 text-2xl"},"Input",-1),L=i("div",{class:"mb-5"},"Input form control with validation:",-1),P=i("div",{class:"mt-12 mb-8 text-xl"},"Inline label",-1),_=i("div",{class:"mt-12 mb-8 text-xl"},"Style",-1),z=c('<div class="mt-12 mb-8 text-xl">Install</div><code lang="bash">npm install @snowind/input</code><br><code class="mt-3 text-neutral"># or</code><br><code class="mt-3">yarn add @snowind/input</code><div class="mt-12 mb-8 text-xl">Props</div>',7),F=i("div",{class:"mt-12 mb-8 text-xl"},"Events",-1);j.render=function(e,a,l,n,t,s){const u=o("input-a"),c=o("input-b"),m=o("input-c"),v=o("props-table"),f=o("events-table"),b=o("next-bar");return r(),d(p,null,[E,L,i(u),P,i(c),_,i(m),z,i(v,{tableData:e.propsData},null,8,["tableData"]),F,i(f,{tableData:e.eventsData},null,8,["tableData"]),i(b,{class:"mt-24",prev:{link:"/collapse",text:"Collapse"},next:{link:"/sidebar",text:"Sidebar"}})],64)};export default j;