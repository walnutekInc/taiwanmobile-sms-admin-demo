import{_ as v}from"./index.vuevuetypescriptsetuptruelang-CtVkjESj.js";import{_ as b}from"./contact-person-archived.vuevuetypescriptsetuptruelang-DY9ue-g6.js";import{_ as y}from"./contact-person.vuevuetypescriptsetuptruelang-DGICqHM2.js";import{_ as P}from"./group-label.vuevuetypescriptsetuptruelang-CHNiDA-V.js";import{d as x,ad as g,ac as h,f as k,w as A,W as C,_ as $,$ as a,k as e,u as n,H as q,Y as w}from"./vue-Ckfa8DnP.js";import{y as B,x as K,T as R}from"./antd-CCbBcq8G.js";import"./index-BD0gHMId.js";import"./context-CNmEAB52.js";import"./index.vuevuetypestyleindex0lang-B6Nhna9q.js";import"./index.vuevuetypescriptsetuptruelang-dt5mApfm.js";import"./index.vuevuetypescriptsetuptruelang-CCK1QI6A.js";import"./index.vuevuetypescriptsetuptruelang-DkGXW9D7.js";import"./tools-a0gbWjD6.js";import"./index-X5bJU7G4.js";import"./index.vuevuetypescriptsetuptruelang-CGx5Uo-M.js";import"./request-DqzT16_i.js";import"./GenderEnum-B7Somsep.js";import"./group-label-Bop0HokA.js";import"./index.esm-D-mEzxO1.js";const N=w("div",{id:"extraContent",class:"h-32px"},null,-1);var i=(o=>(o.contactPerson="聯絡人",o.group="群組標籤",o.contactPersonActived="封存區",o))(i||{});const X=x({__name:"index",setup(o){const{replace:_}=g(),m=h(),t=k("contactPerson");function r(){_({query:{...t.value==="contactPerson"&&{...m.query},tabActived:t.value}})}function u(){t.value="contactPerson",r()}return A(()=>m.query.tabActived,c=>{t.value=B(c)?"contactPerson":c,r()},{immediate:!0}),(c,p)=>{const s=K,d=R,l=v;return C(),$(l,{title:i[n(t)],"custom-breadcrumb":[{path:"/list-management",title:"名單管理"},{path:`/list-management?tabActived=${n(t)}`,title:i[n(t)]}]},{extraContent:a(()=>[N]),default:a(()=>[e(d,{activeKey:n(t),"onUpdate:activeKey":p[0]||(p[0]=f=>q(t)?t.value=f:null),type:"card","destroy-inactive-tab-pane":!0,onChange:r},{default:a(()=>[e(s,{key:"contactPerson",tab:"聯絡人"},{default:a(()=>[e(y)]),_:1},8,["tab"]),e(s,{key:"group",tab:"群組標籤"},{default:a(()=>[e(P)]),_:1},8,["tab"]),e(s,{key:"contactPersonActived",tab:"封存區"},{default:a(()=>[e(b,{"to-contact-person":u})]),_:1},8,["tab"])]),_:1},8,["activeKey"])]),_:1},8,["title","custom-breadcrumb"])}}});export{X as default};
