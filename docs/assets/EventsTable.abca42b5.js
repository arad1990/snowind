import{_ as c}from"./index.6acf82f6.js";import{d as p,o as s,c as a,a as t,F as d,z as l,t as r}from"./vendor.d513a3f4.js";const i=p({props:{tableData:{type:Array,required:!0}}}),_={class:"w-full py-5"},u=t("thead",{class:"text-neutral dark:text-neutral-dark"},[t("tr",null,[t("th",{class:"px-8 py-3"},"Name"),t("th",{class:"px-8 py-3"},"Description"),t("th",{class:"px-8 py-3"},"Return type")])],-1),y={class:"divide-y"},f={class:"px-8 py-3 font-bold"},h={class:"px-8 py-3"},x={class:"px-8 py-3"};function m(n,b,k,v,D,$){return s(),a("table",_,[u,t("tbody",y,[(s(!0),a(d,null,l(n.tableData,(e,o)=>(s(),a("tr",{key:o},[t("td",f,r(e.name),1),t("td",h,r(e.description),1),t("td",x,[t("code",null,r(e.returnType),1)])]))),128))])])}var g=c(i,[["render",m]]);export{g as E};
