import{d as e,r as t,o as l,a,b as n,w as r,e as s,t as o,i as u}from"./vendor.60add0e7.js";var i=e({props:{prev:{type:Object,default:null},next:{type:Object,default:null}}});const f={class:"flex justify-between"},d=n("i",{class:"mr-3 fas fa-long-arrow-alt-left"},null,-1),p=n("i",{class:"ml-3 fas fa-long-arrow-alt-right"},null,-1);i.render=function(e,i,v,x,c,k){const y=t("router-link");return l(),a("div",f,[n("div",null,[null!==e.prev?(l(),a(y,{key:0,to:e.prev.link},{default:r((()=>[d,s(" Previous: "+o(e.prev.text),1)])),_:1},8,["to"])):u("",!0)]),n("div",null,[null!==e.next?(l(),a(y,{key:0,to:e.next.link},{default:r((()=>[s(" Next: "+o(e.next.text)+" ",1),p])),_:1},8,["to"])):u("",!0)])])};export{i as _};
