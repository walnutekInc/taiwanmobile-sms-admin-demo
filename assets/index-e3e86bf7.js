import{_ as f}from"./index.vuevuetypescriptsetuptruelang-f9e9a2a7.js";import{_ as v}from"./custom-message.vuevuetypescriptsetuptruelang-d54501b3.js";import{_ as b}from"./sms-category.vuevuetypescriptsetuptruelang-d510209c.js";import{d as g,ac as y,ad as k,f as C,w as x,W as h,_ as B,$ as e,k as a,u as o,H as M,Y as $}from"./vue-b9a22f97.js";import{z as A,y as q,T as w}from"./antd-16a0cd46.js";import"./index-b55f1cdf.js";import"./context-71cd8e16.js";import"./request-3552e6c3.js";import"./index-4b80b22a.js";import"./index.vuevuetypescriptsetuptruelang-8068f11a.js";import"./index.vuevuetypescriptsetuptruelang-374ce0ee.js";import"./sms-category-88642280.js";import"./custom-message-45117b67.js";const K=$("div",{id:"extraContent"},null,-1);var r=(s=>(s.customMessage="自訂訊息",s.smsCategory="類別管理",s))(r||{});const E=g({__name:"index",setup(s){const m=y(),{replace:_}=k(),t=C("customMessage"),i=()=>{_({query:{...t.value==="customMessage"&&{...m.query},tabActived:t.value}})};return x(()=>m.query.tabActived,n=>{t.value=A(n)?"customMessage":n,i()},{immediate:!0}),(n,c)=>{const u=q,p=w,d=f;return h(),B(d,{title:r[o(t)],customBreadcrumb:[{path:"/sms-marketing",title:"訊息行銷活動"},{path:`/sms-marketing/custom-message?tabActived=${o(t)}`,title:r[o(t)]}]},{extraContent:e(()=>[K]),default:e(()=>[a(p,{activeKey:o(t),"onUpdate:activeKey":c[0]||(c[0]=l=>M(t)?t.value=l:null),type:"card",destroyInactiveTabPane:!0,onChange:i},{default:e(()=>[a(u,{key:"customMessage",tab:"自訂訊息"},{default:e(()=>[a(v)]),_:1},8,["tab"]),a(u,{key:"smsCategory",tab:"類別管理"},{default:e(()=>[a(b)]),_:1},8,["tab"])]),_:1},8,["activeKey"])]),_:1},8,["title","customBreadcrumb"])}}});export{E as default};
