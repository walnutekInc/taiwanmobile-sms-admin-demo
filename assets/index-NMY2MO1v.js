import{_ as v}from"./index.vuevuetypescriptsetuptruelang-Lon1-MdD.js";import{_ as b}from"./contact-person-archived.vuevuetypescriptsetuptruelang-DPc7FCfJ.js";import{_ as y}from"./contact-person.vuevuetypescriptsetuptruelang-Czvrkgp8.js";import{_ as P}from"./group-label.vuevuetypescriptsetuptruelang-BeAf1TXv.js";import{d as g,af as x,ae as h,f as k,w as A,W as C,_ as $,$ as a,k as e,u as n,H as q,Y as w}from"./vue-BtcszhJV.js";import{q as B,U as K,W as R}from"./antd-CeareF1k.js";import"./index-CHIzCeVg.js";import"./context-8GCFAKJ7.js";import"./index.vuevuetypestyleindex0lang-CcFzt3O-.js";import"./index.vuevuetypestyleindex0lang-l354ccN2.js";import"./index.vuevuetypescriptsetuptruelang-B8YBH0yr.js";import"./index.vuevuetypescriptsetuptruelang-DlliyulR.js";import"./index.vuevuetypescriptsetuptruelang-BxQ8nJie.js";import"./tools-DInPKiE1.js";import"./index-BqM0lDzB.js";import"./index.vuevuetypescriptsetuptruelang-DAISk7I9.js";import"./index-CNyllm3c.js";import"./contact-person-CnlvA0zw.js";import"./request-CkM0Z-He.js";import"./group-label-Dt5cvnDv.js";import"./GenderEnum-DlheD0SA.js";import"./index.esm-CLFC3Zjv.js";const U=w("div",{id:"extraContent",class:"h-32px"},null,-1);var i=(o=>(o.contactPerson="聯絡人",o.group="群組標籤",o.contactPersonActived="封存區",o))(i||{});const et=g({__name:"index",setup(o){const{replace:_}=x(),m=h(),t=k("contactPerson");function r(){_({query:{...t.value==="contactPerson"&&{...m.query},tabActived:t.value}})}function u(){t.value="contactPerson",r()}return A(()=>m.query.tabActived,s=>{t.value=B(s)?"contactPerson":s,r()},{immediate:!0}),(s,p)=>{const c=K,d=R,f=v;return C(),$(f,{title:i[n(t)],"custom-breadcrumb":[{path:"/list-management",title:"名單管理"},{path:`/list-management?tabActived=${n(t)}`,title:i[n(t)]}]},{extraContent:a(()=>[U]),default:a(()=>[e(d,{activeKey:n(t),"onUpdate:activeKey":p[0]||(p[0]=l=>q(t)?t.value=l:null),type:"card","destroy-inactive-tab-pane":!0,onChange:r},{default:a(()=>[e(c,{key:"contactPerson",tab:"聯絡人"},{default:a(()=>[e(y)]),_:1},8,["tab"]),e(c,{key:"group",tab:"群組標籤"},{default:a(()=>[e(P)]),_:1},8,["tab"]),e(c,{key:"contactPersonActived",tab:"封存區"},{default:a(()=>[e(b,{"to-contact-person":u})]),_:1},8,["tab"])]),_:1},8,["activeKey"])]),_:1},8,["title","custom-breadcrumb"])}}});export{et as default};
