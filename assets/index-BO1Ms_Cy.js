import{_ as V}from"./index.vuevuetypescriptsetuptruelang-DfpYyfOk.js";import{_ as B}from"./index.vuevuetypestyleindex0lang-BGNd5Gbb.js";import{_ as E}from"./index-AissqEby.js";import{_ as P}from"./index.vuevuetypescriptsetuptruelang-DpQcR6qX.js";import{_ as j}from"./index-CcLunYFo.js";import{E as x,N as U,G,I as W,o as X,F as q,z as H}from"./antd-CL-o36kY.js";import{u as J}from"./request-C_CmeEnJ.js";import{f as A,d as K,o as Q,u as a,W as k,_ as Z,$ as i,k as s,G as D,Y as h,X as N,F as b,a3 as C,a4 as Y,y as ee}from"./vue-BMMYOVpY.js";import"./context-1rSUtUWu.js";import"./index.vuevuetypestyleindex0lang-Cj84r4o_.js";const _=[{key:"1",revenueDate:"2024/03/31",name:"N/A",method:"ATM",price:1e4,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"2",revenueDate:"2024/03/29",name:"N/A",method:"ATM",price:5e3,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"3",revenueDate:"2024/03/22",name:"Mona Chuang",method:"CARD",price:3e3,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"4",revenueDate:"2024/03/17",name:"Nelson Ma",method:"CARD",price:12e3,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"5",revenueDate:"2024/03/10",name:"N/A",method:"TRANSFER",price:6e3,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"6",revenueDate:"2024/02/28",name:"N/A",method:"ATM",price:1e3,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"7",revenueDate:"2024/02/25",name:"Nelson Ma",method:"CARD",price:1e3,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"8",revenueDate:"2024/02/24",name:"N/A",method:"ATM",price:1e3,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"9",revenueDate:"2024/02/12",name:"Nelson Ma",method:"CARD",price:8e3,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"10",revenueDate:"2024/02/09",name:"N/A",method:"TRANSFER",price:1e4,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"11",revenueDate:"2024/02/12",name:"Nelson Ma",method:"CARD",price:15e3,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"}];function te(){const{list:u,pagination:f,setResponseList:g}=J(),p=async e=>{const d=(e.current-1)*e.pageSize,o=Math.ceil(_.length/e.pageSize);g({total:_.length,pages:o,current:e.current,pageSize:e.pageSize,records:_.slice(d,e.current*e.pageSize)})},T=async e=>({data:{status:"success",id:"123"}}),c=async(e,d)=>({data:{status:"success",id:"123"}}),y=async e=>({data:{status:"success"}}),m=A();return{getAccountings:p,accountingList:u,pagination:f,createAccounting:T,updateAccounting:c,getAccounting:async e=>{const d=_.find(o=>o.key===e);return m.value=d,{data:{...d}}},accounting:m,deleteAccounting:y}}var w=(u=>(u.ATM="匯款或ATM轉帳",u.CARD="刷卡",u.TRANSFER="帳務異動",u))(w||{});const ae={class:"flex justify-between px-2 items-center py-4 bg-sms-grayscale-0 rounded-t-12px"},ne=h("div",{class:"text-sms-primary-blue-80 text-xl font-500"}," 目前餘額：NT$ 30,120.00 ",-1),oe={class:"px-30px py-20px w-376px text-base mx-auto"},fe=K({__name:"index",setup(u){const{getAccountings:f,accountingList:g,pagination:p}=te(),T=[{title:"儲值日期",dataIndex:"revenueDate",key:"revenueDate",sorter:!0,width:"274px"},{title:"帳號名稱",dataIndex:"name",key:"name",width:"274px"},{title:"儲值方式",dataIndex:"method",key:"method",width:"274px"},{title:"儲值金額",dataIndex:"price",key:"price",width:"274px"}];Q(()=>{l(1)});const c=A({sortField:"createTime",sortOrder:"descend",createTime:[x().format("YYYY/MM/DD"),x().add(3,"M").format("YYYY/MM/DD")]});async function y(o,t,r){console.log("sorter:",r),c.value=Object.assign(c.value,{sortField:r.field,sortOrder:r.order}),await l(p.value.current,p.value.pageSize)}async function m(o,t){await l(o,t)}async function l(o=1,t=10){const r={current:o,pageSize:t,...a(c)};await f(r)}const e=A({open:!1,price:""});async function d(o){const v=o.target.value.replace(/^\D/g,"").slice(0,6);await ee(),e.value.price=v}return(o,t)=>{const r=j,v=P,R=G,S=E,I=B,F=W,$=X,z=q,L=H,O=V;return k(),Z(O,{title:"儲值管理"},{extraContent:i(()=>[s(v,{status:"small1",onClick:t[0]||(t[0]=()=>e.value={open:!0,price:""})},{icon:i(()=>[s(r,{name:"money",width:"16px"})]),default:i(()=>[D(" 我要儲值 ")]),_:1})]),default:i(()=>[h("div",ae,[ne,s(S,{label:"建立時間",valueed:a(c).createTime},{default:i(()=>[s(R,{value:a(c).createTime,"onUpdate:value":t[1]||(t[1]=n=>a(c).createTime=n),"disabled-date":n=>n&&n>a(x)().endOf("day"),class:"w-full",placement:"topLeft",format:"YYYY-MM-DD","value-format":"YYYY/MM/DD"},null,8,["value","disabled-date"])]),_:1},8,["valueed"])]),s(I,{"data-source":a(g),columns:T,size:"small","show-sorter-tooltip":!1,pagination:{...a(p)},onChange:y,onChangePagination:m},{bodyCell:i(({column:n,text:M})=>[n.dataIndex==="price"?(k(),N(b,{key:0},[D(" NT$ "+C(M.toLocaleString()),1)],64)):Y("",!0),n.dataIndex==="method"?(k(),N(b,{key:1},[D(C(a(w)[M]),1)],64)):Y("",!0)]),_:1},8,["data-source","pagination"]),s(L,{open:a(e).open,"onUpdate:open":t[3]||(t[3]=n=>a(e).open=n),title:"儲值金額",centered:"","cancel-text":"取消","ok-text":"確定",width:"440px","ok-button-props":{disabled:a(U)(a(e).price)||parseInt(a(e).price)<1e3},onOk:t[4]||(t[4]=n=>a(e).open=!1)},{default:i(()=>[h("div",oe,[s(z,{layout:"vertical",autocomplete:"off"},{default:i(()=>[s($,{"html-for":"",extra:"單次最低儲值 NT$1,000"},{default:i(()=>[s(F,{value:a(e).price,"onUpdate:value":t[2]||(t[2]=n=>a(e).price=n),"addon-before":"NT$",type:"number",placeholder:"請輸入金額",onInput:d},null,8,["value"])]),_:1})]),_:1})])]),_:1},8,["open","ok-button-props"])]),_:1})}}});export{fe as default};
