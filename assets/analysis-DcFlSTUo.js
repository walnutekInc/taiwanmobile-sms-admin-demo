import{_ as q,b as z}from"./index-_Xl6GzYg.js";import{_ as E}from"./index.vuevuetypescriptsetuptruelang-a-_FUEHv.js";import{M as h,m as G,B as H,I as W,n as X,o as J,p as Q,q as Z,r as ee,s as ae,S as te,t as le,u as se,v as ne,w as oe,F as ce,x as de,T as ue}from"./antd-nVhrCAb3.js";import{d as _e,r as T,f as k,w as ie,W as pe,X as me,Y as n,k as e,$ as a,G as o,l as g,u as t,H as p,a3 as B,F as re,ae as fe,af as he}from"./vue-B4jB9Tcu.js";const m=w=>(fe("data-v-1158d022"),w=w(),he(),w),be={class:"mb-2"},ve=m(()=>n("h2",{h2:"","mb-6":""}," small1 btn list ",-1)),ke={class:"mb-2"},ge=m(()=>n("h2",{h2:"","mb-6":""}," small2 btn list ",-1)),we={class:"mb-2"},xe=m(()=>n("h2",{h2:"","mb-6":""}," small3 btn list ",-1)),ye={class:"mb-2"},Ue=m(()=>n("h2",{h2:"","mb-6":""}," small4 btn list ",-1)),Ie={class:"mb-2"},Ae=m(()=>n("h2",{h2:"","mb-6":""}," small5 btn list ",-1)),Se=m(()=>n("h2",null,"Form 表單",-1)),Ce={class:"flex justify-between items-center w-full"},Le=m(()=>n("span",null,"Price",-1)),Oe=m(()=>n("span",{"w.5":""},B(""),-1)),Pe={class:"ms-2 ant-select-suffix"},Te={class:"rotate-0 overflow-hidden flex items-center"},Be=_e({__name:"analysis",setup(w){const b=T({pass:"",checkPass:""}),D={pass:[{required:!0,trigger:"change"}]},F=k([{value:"a1",label:"a1"},{value:"a2",label:"a2"},{value:"a3",label:"a3"},{value:"a4",label:"a4"},{value:"a5",label:"a5"},{value:"a6",label:"a6"}]),v=k([]),r=k(),d=k(!1),x=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0}],u=T({indeterminate:!0,checkAll:!1,checkedList:["Apple"]});function Y(f){Object.assign(u,{checkedList:f.target.checked?x:[],indeterminate:!1})}ie(()=>u.checkedList,f=>{u.indeterminate=!!f.length&&f.length<x.length,u.checkAll=f.length===x.length});const y=k("1");return(f,l)=>{const c=E,K=H,I=W,i=X,_=J,M=Q,A=q,S=Z,C=ee,L=ae,O=te,R=le,$=se,N=ne,P=oe,V=ce,U=de,j=ue;return pe(),me(re,null,[n("div",null,[n("div",be,[ve,e(c,{status:"small1",class:"me-2"},{default:a(()=>[o(" 編輯 ")]),_:1}),e(c,{status:"small1",disabled:"",class:"me-2"},{default:a(()=>[o(" 編輯 disabled ")]),_:1}),e(c,{status:"small1",icon:g(t(h)),class:"me-2"},{default:a(()=>[o(" 編輯wihtIcon ")]),_:1},8,["icon"])]),n("div",ke,[ge,e(c,{status:"small2",class:"me-2"},{default:a(()=>[o(" 編輯 ")]),_:1}),e(c,{status:"small2",disabled:"",class:"me-2"},{default:a(()=>[o(" 編輯 disabled ")]),_:1}),e(c,{status:"small2",icon:g(t(h)),class:"me-2"},{default:a(()=>[o(" 編輯wihtIcon ")]),_:1},8,["icon"])]),n("div",we,[xe,e(c,{status:"small3",class:"me-2"},{default:a(()=>[o(" 編輯 ")]),_:1}),e(c,{status:"small3",disabled:"",class:"me-2"},{default:a(()=>[o(" 編輯 disabled ")]),_:1}),e(c,{status:"small3",icon:g(t(h)),class:"me-2"},{default:a(()=>[o(" 編輯wihtIcon ")]),_:1},8,["icon"])]),n("div",ye,[Ue,e(c,{status:"small4",disabled:"",icon:g(t(h))},null,8,["icon"]),e(c,{status:"small4",icon:g(t(h))},null,8,["icon"])]),n("div",Ie,[Ae,e(c,{status:"small5",class:"me-2"},{default:a(()=>[o(" 編輯 ")]),_:1}),e(c,{status:"small5",disabled:"",class:"me-2"},{default:a(()=>[o(" 編輯 disabled ")]),_:1}),e(c,{status:"small5",class:"me-2"},{icon:a(()=>[e(t(h))]),default:a(()=>[o(" 編輯wihtIcon ")]),_:1})])]),n("div",null,[Se,e(V,{layout:"vertical",model:t(b),rules:D,"label-col":{span:24}},{default:a(()=>[e(C,{gutter:12},{default:a(()=>[e(_,{span:12},{default:a(()=>[e(i,{name:"pass","label-align":"right",extra:"補充資訊"},{label:a(()=>[n("div",Ce,[Le,e(K,{type:"link",class:"m-0 p-0"},{default:a(()=>[o(" 新增 ")]),_:1})])]),default:a(()=>[e(I,{value:t(b).pass,"onUpdate:value":l[0]||(l[0]=s=>t(b).pass=s)},null,8,["value"])]),_:1})]),_:1}),e(_,{span:12},{default:a(()=>[e(i,{name:"value",extra:"補充資訊"},{label:a(()=>[Oe]),default:a(()=>[e(M,{value:t(v),"onUpdate:value":l[1]||(l[1]=s=>p(v)?v.value=s:null),class:"testSelect","show-arrow":!0,"show-search":!1,"token-separators":[","],placeholder:"Automatic tokenization",options:t(F),"menu-item-selected-icon":()=>""},{suffixIcon:a(()=>[n("div",Pe,[o(B(t(v).length>0?`已選擇(${t(v).length})`:"")+" ",1),e(t(G))])]),_:1},8,["value","options"])]),_:1})]),_:1}),e(_,{span:12},{default:a(()=>[e(i,{name:"pass",label:"Price",extra:"補充資訊"},{default:a(()=>[e(I,{value:t(b).pass,"onUpdate:value":l[2]||(l[2]=s=>t(b).pass=s)},{prefix:a(()=>[e(A,{name:"search",width:"16px",color:"var(--grayscale-40)"})]),suffix:a(()=>[n("span",Te,[e(A,{name:"filter",width:"24px",color:"var(--grayscale-80)",class:"hover:bg-sms-secondary-dark-blue-20 hover:rounded-full"})])]),_:1},8,["value"])]),_:1})]),_:1}),e(_,{span:12},{default:a(()=>[e(C,{gutter:12},{default:a(()=>[e(_,{span:12},{default:a(()=>[e(i,{name:"value1",label:"date",extra:"補充資訊"},{default:a(()=>[e(S,{value:t(r),"onUpdate:value":l[3]||(l[3]=s=>p(r)?r.value=s:null),class:"w-full",placeholder:"YYYY/MM/DD",placement:"topLeft"},null,8,["value"])]),_:1})]),_:1}),e(_,{span:12},{default:a(()=>[e(i,{name:"value1",label:"date disabled",extra:"補充資訊"},{default:a(()=>[e(S,{value:t(r),"onUpdate:value":l[4]||(l[4]=s=>p(r)?r.value=s:null),class:"w-full",disabled:"",placement:"topLeft"},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{span:12},{default:a(()=>[e(O,null,{default:a(()=>[e(i,{name:"checked",label:"switch",extra:"補充資訊"},{default:a(()=>[e(L,{checked:t(d),"onUpdate:checked":l[5]||(l[5]=s=>p(d)?d.value=s:null)},null,8,["checked"])]),_:1}),e(i,{name:"checked",label:"switch disabled",extra:"補充資訊"},{default:a(()=>[e(L,{checked:t(d),"onUpdate:checked":l[6]||(l[6]=s=>p(d)?d.value=s:null),disabled:""},null,8,["checked"])]),_:1})]),_:1})]),_:1}),e(_,{span:12},{default:a(()=>[e(O,null,{default:a(()=>[n("div",null,[e(R,{checked:t(u).checkAll,"onUpdate:checked":l[7]||(l[7]=s=>t(u).checkAll=s),indeterminate:t(u).indeterminate,onChange:Y},{default:a(()=>[o(" Check all ")]),_:1},8,["checked","indeterminate"])]),e($),e(N,{value:t(u).checkedList,"onUpdate:value":l[8]||(l[8]=s=>t(u).checkedList=s),options:x},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(_,{span:12},{default:a(()=>[e(P,{checked:t(d),"onUpdate:checked":l[9]||(l[9]=s=>p(d)?d.value=s:null)},{default:a(()=>[o(" Radio ")]),_:1},8,["checked"]),e(P,{checked:t(d),"onUpdate:checked":l[10]||(l[10]=s=>p(d)?d.value=s:null),disabled:""},{default:a(()=>[o(" Radio ")]),_:1},8,["checked"])]),_:1}),e(i,null,{default:a(()=>[e(c,{status:"small1",class:"me-2","html-type":"submit"},{default:a(()=>[o(" 送出 ")]),_:1})]),_:1})]),_:1},8,["model"]),e(j,{activeKey:t(y),"onUpdate:activeKey":l[11]||(l[11]=s=>p(y)?y.value=s:null),type:"card"},{default:a(()=>[e(U,{key:"1",tab:"Tab 1"}),e(U,{key:"2",tab:"Tab 2"}),e(U,{key:"3",tab:"Tab 3"})]),_:1},8,["activeKey"])])],64)}}}),Me=z(Be,[["__scopeId","data-v-1158d022"]]);export{Me as default};
