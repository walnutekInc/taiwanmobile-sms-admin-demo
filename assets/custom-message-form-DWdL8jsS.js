import{_ as de}from"./index.vuevuetypescriptsetuptruelang-JnDo2bMi.js";import{u as pe,_ as _e,a as fe,b as ge,c as ve,d as we}from"./route-leave-CXybySMb.js";import{_ as xe}from"./index.vuevuetypescriptsetuptruelang-CGx5Uo-M.js";import{h as ye,k as be,_ as Ce}from"./index-CPwuV5tw.js";import{d as ke,ad as he,ac as Se,c as U,r as N,D as Me,f as _,w as $e,W as P,_ as D,$ as n,k as s,ab as y,u as e,Y as c,B as Fe,G as m,a4 as Re,m as H,A as j}from"./vue-Ckfa8DnP.js";import{Q as Ae,K as b,U as Ie,V as Te,B as Ve,p as Le,n as qe,o as Be,I as Ue,J as Ne,r as Pe,F as De}from"./antd-CCbBcq8G.js";import{u as He,r as S,a as je}from"./custom-message-xqVvFHok.js";import{u as Ee}from"./sms-category-D3wYSWA4.js";import"./context-DnAYe9nW.js";import"./index.esm-D-mEzxO1.js";import"./index.vuevuetypestyleindex0lang-B6Nhna9q.js";import"./request-DTtdgrKt.js";const Ge="/taiwanmobile-sms-admin-demo/assets/phone-DdWahJd9.png",We={class:"flex justify-between w-full items-center"},Je=c("span",{class:""},"訊息類別",-1),Ke=c("span",null,"新增訊息類別",-1),Oe=["src"],Qe={class:"max-h-450px overflow-auto absolute top-[150px] left-[30px] w-[calc(100%-50px)]"},Ye=["innerHTML"],mt=ke({__name:"custom-message-form",setup(ze){const{setHideAlert:M,setShowAlert:E}=pe(),G=he(),W=ye(),C=Se(),J=be(),{getSmsCategoryOption:K,smsCategoryOption:O,checkSmsCategoryExist:Q}=Ee(),{customMeesage:k,getCustomMessage:Y,updateCustomMessage:z,createCustomMessage:X,replaceFieldToHtml:$}=He(),f=U(()=>C.name==="CustomMessageCreate");let g={categoryId:void 0,newSmsCategory:"",name:"",content:""};const o=N(Ae(g)),Z=N({name:[{required:!0,message:"請輸入訊息名稱",trigger:"blur"}],content:[{required:!0,message:"請輸入訊息內容",trigger:"blur"},{async validator(a,t){var l;return!b(t)&&((l=o.content)==null?void 0:l.replace(S,"").length)>1e3?Promise.reject("限制輸入 1,000 字以內"):Promise.resolve()},trigger:"blur"}],newSmsCategory:[{async validator(a,t){return!b(t)&&await Q(t)?Promise.reject(`系統中已有「${t}」 ，請勿重複新增`):Promise.resolve()},trigger:"blur"}]}),{validateInfos:v,validate:ee,clearValidate:te,resetFields:se,initialModel:ne}=Ie(o,Z);Me(async()=>{var a,t,l;f.value||(await Y(C.params.id),g={categoryId:(a=k.value)==null?void 0:a.categoryId,newSmsCategory:"",name:((t=k.value)==null?void 0:t.name)??"",content:$((l=k.value)==null?void 0:l.content)},se(g)),W.handleSelectedKeys(["/sms-marketing/custom-message"]),K()});const d=_(!0),F=U(()=>f.value?"新增自訂訊息":"編輯自訂訊息");$e(()=>o,a=>{Te(a,g)?M():E()},{deep:!0});function oe(){console.log(ne),ee().then(async()=>{var l;((l=(await(e(f)?X:z)(o,C.params.id)).data)==null?void 0:l.status)==="success"&&(J.success({message:e(f)?"自訂訊息新增成功":"自訂訊息編輯成功",placement:"top"}),M(),G.push("/sms-marketing/custom-message?tabActived=customMessage"))}).catch(a=>{console.log(a)})}const R=_(null);function A(a){o.content=$(a)}const I=_(null);function ae(a){for(const t of a)o.content=`${o.content}<span>${t}</span>`}const T=_(null);function le(a){o.content=`${o.content}<a href="${a}">${a}</a>`}const V=_(null);return(a,t)=>{const l=Ce,re=Ve,ue=Le,w=qe,i=Be,h=xe,L=Ue,x=Ne,ie=we,q=Pe,me=De,ce=de;return P(),D(ce,{title:e(F),"custom-breadcrumb":[{title:"訊息行銷活動"},{path:"/sms-marketing/custom-message?tabActived=customMessage",title:"自訂訊息"},{title:e(F)}]},{default:n(()=>[s(q,{class:"bg-sms-grayscale-0 rounded-4 p-10",wrap:!1},{default:n(()=>[s(i,{flex:"auto"},{default:n(()=>[s(me,{class:"px-32px",layout:"vertical",autocomplete:"off",onSubmit:oe},{default:n(()=>[s(q,{gutter:[16,16]},{default:n(()=>[s(i,{span:24},{default:n(()=>[s(w,y({"html-for":""},e(v).categoryId,{extra:"15 字以內。若無選擇/新增，將自動歸類為「未分類」。","label-col":{style:{width:"100%"}}}),{label:n(()=>[c("div",We,[Je,e(d)?(P(),D(re,{key:0,type:"link",class:"m-0 p-0",onClick:t[0]||(t[0]=Fe(()=>d.value=!1,["prevent"]))},{icon:n(()=>[s(l,{name:"plus"})]),default:n(()=>[m(" 新增訊息類別 ")]),_:1})):Re("",!0)])]),default:n(()=>[s(ue,{value:e(o).categoryId,"onUpdate:value":t[1]||(t[1]=r=>e(o).categoryId=r),options:e(O),"allow-clear":"",disabled:!e(d),placeholder:"請選擇訊息類別"},null,8,["value","options","disabled"])]),_:1},16)]),_:1}),H(s(i,{span:24,class:"bg-sms-bg-light-mode-gray rounded-md !p-2 !px-3"},{default:n(()=>[s(w,y({"html-for":"",extra:"15 字以內。若同時選擇和新增訊息類別，系統只會紀錄「新增訊息類別」。"},e(v).newSmsCategory,{"label-col":{style:{width:"100%"}}}),{label:n(()=>[Ke,s(h,{status:"small3",class:"m-0 p-0 ms-auto",onClick:t[2]||(t[2]=()=>{e(te)("newSmsCategory"),d.value=!0})},{icon:n(()=>[s(l,{name:"close"})]),_:1})]),default:n(()=>[s(L,{value:e(o).newSmsCategory,"onUpdate:value":t[3]||(t[3]=r=>e(o).newSmsCategory=r),placeholder:"請輸入訊息類別",maxlength:15},null,8,["value"])]),_:1},16)]),_:1},512),[[j,!e(d)]]),s(i,{span:24},{default:n(()=>[s(w,y({label:"訊息名稱"},e(v).name,{extra:"15 字以內",required:""}),{default:n(()=>[s(L,{value:e(o).name,"onUpdate:value":t[4]||(t[4]=r=>e(o).name=r),placeholder:"請輸入訊息名稱",maxlength:15},null,8,["value"])]),_:1},16)]),_:1}),s(i,{span:24},{default:n(()=>{var r;return[s(w,y({label:"訊息內容"},e(v).content,{class:"relative",extra:`MMS 上限 1,000 字，SMS 上限 335 字，目前 ${e(b)(e(o).content)?"--":(r=e(o).content)==null?void 0:r.replace(e(S),"").length} 字(不含參數字數)`,required:""}),{default:n(()=>{var B;return[s(ie,{modelValue:e(o).content,"onUpdate:modelValue":t[9]||(t[9]=p=>e(o).content=p),contenteditable:"true","content-len":(B=e(o).content)==null?void 0:B.replace(e(S),"").length,"max-len":1e3,placeholder:"請輸入訊息名稱"},{default:n(()=>[s(x,null,{title:n(()=>[m(" 載入現有的自訂訊息 ")]),default:n(()=>[s(l,{name:"import",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:t[5]||(t[5]=p=>{var u;return(u=e(R))==null?void 0:u.show()})})]),_:1}),s(x,null,{title:n(()=>[m(" 加入參數 ")]),default:n(()=>[s(l,{name:"code",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:t[6]||(t[6]=p=>{var u;return(u=e(I))==null?void 0:u.show()})})]),_:1}),s(x,null,{title:n(()=>[m(" 增加縮網址 ")]),default:n(()=>[s(l,{name:"link",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:t[7]||(t[7]=p=>{var u;return(u=e(T))==null?void 0:u.show()})})]),_:1}),s(x,null,{title:n(()=>[m(" AI 文字生成訊息 ")]),default:n(()=>[s(l,{name:"AI",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:t[8]||(t[8]=p=>{var u;return(u=e(V))==null?void 0:u.show()})})]),_:1})]),_:1},8,["modelValue","content-len"])]}),_:1},16,["extra"])]}),_:1}),s(i,{span:24,class:"text-end"},{default:n(()=>[s(h,{status:"small2",class:"me-2",onClick:t[10]||(t[10]=r=>a.$router.push("/sms-marketing/custom-message?tabActived=customMessage"))},{default:n(()=>[m(" 取消 ")]),_:1}),s(h,{status:"small1","html-type":"submit"},{default:n(()=>[m(" 確定 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(i,{flex:"428px",class:"relative"},{default:n(()=>{var r;return[c("img",{src:e(Ge),class:"w-428px"},null,8,Oe),c("div",Qe,[H(c("div",{class:"bg-sms-grayscale-20 p-2 rounded-2 whitespace-pre-wrap max-w-[215px] inline-block break-words",innerHTML:(r=e(o).content)==null?void 0:r.replace(e(je),"")},null,8,Ye),[[j,!e(b)(e(o).content)]])])]}),_:1})]),_:1}),s(_e,{ref_key:"importCustomMessageRef",ref:R,content:e(o).content,onUpdateContent:A},null,8,["content"]),s(fe,{ref_key:"addFieldRef",ref:I,onAddFieldToContent:ae},null,512),s(ge,{ref_key:"addLinkRef",ref:T,onAddLinkToContent:le},null,512),s(ve,{ref_key:"aiTextGenerationRef",ref:V,content:e(o).content,onUpdateContent:A},null,8,["content"])]),_:1},8,["title","custom-breadcrumb"])}}});export{mt as default};
