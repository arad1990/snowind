import{_ as p}from"./index.50d7b35f.js";import{d as c,o as s,c as a,a as t,F as d,x as l,t as r}from"./vendor.36fa6795.js";const i=c({props:{tableData:{type:Array,required:!0}}}),_={class:"w-full py-5"},u=t("thead",{class:"text-neutral dark:text-neutral-dark"},[t("tr",null,[t("th",{class:"px-8 py-3"},"Name"),t("th",{class:"px-8 py-3"},"Description"),t("th",{class:"px-8 py-3"},"Return type")])],-1),y={class:"divide-y"},x={class:"px-8 py-3 font-bold"},f={class:"px-8 py-3"},h={class:"px-8 py-3"};function m(n,b,k,v,D,$){return s(),a("table",_,[u,t("tbody",y,[(s(!0),a(d,null,l(n.tableData,(e,o)=>(s(),a("tr",{key:o},[t("td",x,r(e.name),1),t("td",f,r(e.description),1),t("td",h,[t("code",null,r(e.returnType),1)])]))),128))])])}var g=p(i,[["render",m]]);export{g as E};
