import{_ as Pe}from"./index.vuevuetypescriptsetuptruelang-D49_PPmq.js";import{a as Ke,b as Ne}from"./index.vuevuetypescriptsetuptruelang-Bm_AOSIu.js";import{u as Ge,_ as Le,a as Be,b as Oe,c as Ve,d as Ye}from"./route-leave-DzYS2Z6M.js";import{_ as qe}from"./index.vuevuetypescriptsetuptruelang-DpQcR6qX.js";import{h as Ie,j as He,_ as ze}from"./index-D6D3dNFb.js";import{d as We,ad as Je,ac as Xe,c as C,r as K,D as Qe,f as y,w as Ze,W as M,_ as N,$ as n,k as a,ab as b,u as t,G as u,Y as l,a4 as et,m as G,B as tt,A as L,X as B,F as ae,a9 as oe,a3 as ne,a7 as at,H as ot}from"./vue-BMMYOVpY.js";import{E as O,K as nt,N as d,P as st,O as lt,U as rt,q as ut,o as it,p as pt,H as ct,I as dt,B as mt,G as ft,x as _t,J as gt,s as vt,F as yt,z as xt}from"./antd-CL-o36kY.js";import{i as bt}from"./isToday-BnJQkdBi.js";import{M as ht,_ as wt}from"./MessageTypeEnum-BWZBvkE8.js";import{u as kt,r as V}from"./custom-message-6_tfukZB.js";import{u as Mt}from"./auto-reply-MORcq0ez.js";import{b as A}from"./tools-DuR4KSGu.js";import{u as St}from"./group-label-Cw5IDIRi.js";import"./context-C8KA9EkZ.js";import"./index.esm-Dx6oysl1.js";import"./index.vuevuetypestyleindex0lang-BGNd5Gbb.js";import"./index.vuevuetypestyleindex0lang-Cj84r4o_.js";import"./index-D85zjsQy.js";import"./index.vuevuetypestyleindex0lang-F2HOAUlA.js";import"./request-C2-FuxhR.js";const Tt=l("span",{class:"pe-.5"},"接收關鍵字",-1),Ft=l("span",{class:"text-red-500 pe-2"},"*",-1),Ct={href:"javascript:;"},$t=l("br",null,null,-1),jt=l("br",null,null,-1),Rt=l("br",null,null,-1),Dt={class:"flex justify-between w-full items-center"},Ut=l("span",{class:"pe-1"},"群組標籤設定",-1),At={href:"javascript:;"},Et=l("span",null,"新增群組標籤",-1),Pt=l("span",{class:"pe-.5"},"訊息類型",-1),Kt=l("span",{class:"text-red-500 pe-2"},"*",-1),Nt={href:"javascript:;"},Gt=l("br",null,null,-1),Lt=l("span",{class:"pe-.5"},"自動回覆訊息內容",-1),Bt=l("span",{class:"text-red-500 pe-2"},"*",-1),Ot={href:"javascript:;"},Vt=l("br",null,null,-1),Yt=l("br",null,null,-1),qt={class:"flex gap-2 overflow-y-auto h-95px"},It={class:"text-sms-grayscale-60 text-xs font-500 font-sans text-center break-words"},Ht=l("div",{class:"text-center px-30px py-20px w-328px text-base mx-auto"}," 刪除的檔案將無法復原 ",-1),zt=l("div",{class:"text-center px-30px py-20px w-328px text-base mx-auto"},[u(" 您編輯過的內容將全部清空 "),l("br"),l("p",null,[u(" 提醒您，SMS支援的字數較MMS少，"),l("br"),u(" 且不能上傳多媒體附件 ")])],-1),ga=We({__name:"auto-reply-form",setup(Wt){O.extend(bt);const{getGroupLabelOption:se,groupOptions:Y}=St(),{setHideAlert:q,setShowAlert:le}=Ge(),re=Je(),ue=Ie(),E=Xe(),ie=He(),{replaceFieldToHtml:I}=kt(),{autoReply:m,getAutoReply:pe,updateAutoReply:ce,createAutoReply:de,checkAcceptKeywordExist:me}=Mt(),$=C(()=>E.name==="AutoReplyCreate");let j={phone:void 0,acceptKeyword:"",subject:"",messageType:"SMS",multimediaFile:[],group:void 0,newGroupName:"",takeEffectDates:void 0,content:""};const o=K(nt(j)),R=C(()=>o.messageType==="SMS"?335:1e3),fe=K({phone:[{required:!0,message:"請選擇發送門號",trigger:"blur"}],acceptKeyword:[{async validator(s,e){return d(e)?Promise.reject("請輸入接收關鍵字"):!d(e)&&await me(e)?Promise.reject(`生效開始與結束日期已存在接收關鍵字「 ${e} 」的設定，請勿重複新增`):Promise.resolve()},trigger:"blur"}],takeEffectDates:[{required:!0,message:"請選擇生效起迄日",trigger:"blur"}],subject:[{async validator(s,e){return o.messageType==="MMS"&&d(e)?Promise.reject("請輸入訊息主旨"):Promise.resolve()},trigger:"blur"}],content:[{async validator(s,e){var i;return d(e)?Promise.reject("請輸入自動回覆訊息內容"):!d(e)&&((i=o.content)==null?void 0:i.replace(V,"").length)>R.value?Promise.reject(`限制輸入 ${R.value} 字以內`):Promise.resolve()},trigger:"blur"}]}),{validateInfos:x,validate:_e,clearValidate:ge,resetFields:ve}=st(o,fe);Qe(async()=>{var s,e,i,_,p,c,g,w,D,k,U;$.value||(await pe(E.params.id),j={phone:(s=m.value)==null?void 0:s.phone,acceptKeyword:((e=m.value)==null?void 0:e.acceptKeyword)??"",subject:((i=m.value)==null?void 0:i.subject)??"",messageType:((_=m.value)==null?void 0:_.messageType)??"SMS",multimediaFile:((p=m.value)==null?void 0:p.multimediaFile)??[],group:(g=(c=m.value)==null?void 0:c.group)!=null&&g.id?[(w=m.value)==null?void 0:w.group.id]:void 0,newGroupName:"",takeEffectDates:(D=m.value)!=null&&D.startDate&&((k=m.value)!=null&&k.endDate)?[m.value.startDate,m.value.endDate]:void 0,content:I((U=m.value)==null?void 0:U.content)},ve(j)),ue.handleSelectedKeys(["/sms-marketing/auto-reploy"]),se()});const H=y(),ye=C(()=>lt(o.group)||d(o.group)?Y.value:Y.value.map(s=>({...s,class:"pointer-events-none"}))),S=y(!0),z=C(()=>$.value?"新增自動回覆":"編輯自動回覆");Ze(()=>o,s=>{rt(s,j)?q():le()},{deep:!0});function xe(){_e().then(async()=>{var i;((i=(await(t($)?de:ce)(o,E.params.id)).data)==null?void 0:i.status)==="success"&&(ie.success({message:t($)?"自動回覆新增成功":"自動回覆編輯成功",placement:"top"}),q(),re.push("/sms-marketing/auto-reply"))}).catch(s=>{console.log(s)})}const W=y(null);function J(s){o.content=I(s)}const P=y(null),be=y(null);function he(s){var e;for(const i of s)(e=P.value)==null||e.insertFun(`<span>${i}</span>`)}const X=y(null);function we(s){var e;(e=P.value)==null||e.insertFun(`<a href="${s}">${s}</a>`)}const Q=y(null);function ke(s){const e=O().add(1,"year"),i=O().subtract(1,"d");return s<i||s>=e}const Me=C(()=>{const s=[];if(d(o.acceptKeyword)||s.push({content:o.acceptKeyword,messageType:"GET",contentType:"text"}),(!d(o.content)||!d(o.subject))&&s.push({phone:o.phone,content:o.content,...o.messageType==="MMS"&&{subject:o.subject},messageType:"SENT",contentType:"text"}),!d(o.multimediaFile))for(const e of o.multimediaFile)s.push({phone:o.phone,content:e.url,messageType:"SENT",contentType:e.type});return s.map((e,i)=>({...e,key:i}))}),Z=y(null);function Se(s){o.multimediaFile=s}const T=K({open:!1});function Te(s){Object.assign(T,{open:!0,delFile:s})}function Fe(){o.multimediaFile=o.multimediaFile.filter(s=>{var e;return s.url!==((e=T.delFile)==null?void 0:e.url)}),Object.assign(T,{open:!1,delFile:void 0})}const F=y(!1);function Ce(){o.messageType==="SMS"?!d(o.content)||!d(o.multimediaFile)?F.value=!0:o.messageType="SMS":o.messageType="MMS"}return(s,e)=>{const i=ut,_=it,p=pt,c=ze,g=ct,w=dt,D=mt,k=qe,U=ft,$e=_t,je=gt,Re=Ke,De=Ye,ee=vt,Ue=yt,Ae=Ne,te=xt,Ee=Pe;return M(),N(Ee,{title:t(z),"custom-breadcrumb":[{title:"訊息行銷活動"},{path:"/sms-marketing/auto-reply",title:"自動回覆"},{title:t(z)}]},{default:n(()=>[a(ee,{class:"bg-sms-grayscale-0 rounded-4 p-10 pl-1",wrap:!1},{default:n(()=>[a(p,{flex:"auto"},{default:n(()=>[a(Ue,{class:"px-32px",layout:"vertical",autocomplete:"off",onSubmit:xe},{default:n(()=>[a(ee,{gutter:[16,14]},{default:n(()=>[a(p,{span:24},{default:n(()=>[a(_,b(t(x).phone,{label:"發送門號",required:""}),{default:n(()=>[a(i,{value:t(o).phone,"onUpdate:value":e[0]||(e[0]=r=>t(o).phone=r),options:[{label:"0935-111-111",value:"0935-111-111"},{label:"0947-127-998",value:"0947-127-998"},{label:"0958-892-006",value:"0958-892-006"}],"allow-clear":"",placeholder:"請選擇發送門號"},null,8,["value"])]),_:1},16)]),_:1}),a(p,{span:24},{default:n(()=>[a(_,b(t(x).acceptKeyword,{extra:"最少 1 個字"}),{label:n(()=>[Tt,Ft,a(g,{placement:"top","get-popup-container":t(A)},{title:n(()=>[u(" 假設情境："),$t,u(" Step1. 於此處設定接收關鍵字為「1」"),jt,u(" Step2. 傳送訊息，請客戶回覆「1」"),Rt,u(" Step3. 若客戶回覆「1」，立即觸發自動回覆功能 ")]),default:n(()=>[l("a",Ct,[a(c,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),default:n(()=>[a(w,{value:t(o).acceptKeyword,"onUpdate:value":e[1]||(e[1]=r=>t(o).acceptKeyword=r),placeholder:"請輸入接收關鍵字"},null,8,["value"])]),_:1},16)]),_:1}),a(p,{span:24},{default:n(()=>[a(_,b(t(x).group,{"html-for":"","label-col":{style:{width:"100%"}},extra:"可選擇或新增 1 個標籤"}),{label:n(()=>[l("div",Dt,[l("div",null,[Ut,a(g,{placement:"top","get-popup-container":t(A)},{title:n(()=>[u(" 將回傳該「接收關鍵字」的多筆門號打包至單一群組標籤，後續可進行再行銷 ")]),default:n(()=>[l("a",At,[a(c,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),t(S)?(M(),N(D,{key:0,type:"link",class:"m-0 p-0",onClickCapture:e[2]||(e[2]=()=>S.value=!1)},{icon:n(()=>[a(c,{name:"plus"})]),default:n(()=>[u(" 新增群組標籤 ")]),_:1})):et("",!0)])]),default:n(()=>[a(i,{ref_key:"groupRef",ref:H,value:t(o).group,"onUpdate:value":e[3]||(e[3]=r=>t(o).group=r),options:t(ye),"allow-clear":"","show-arrow":"",disabled:!t(S),placeholder:"請輸入",mode:"multiple",class:"w-full","option-filter-prop":"label","menu-item-selected-icon":" ",onSelect:e[4]||(e[4]=r=>{var h;return(h=t(H))==null?void 0:h.blur()})},null,8,["value","options","disabled"])]),_:1},16)]),_:1}),G(a(p,{span:24,class:"bg-sms-bg-light-mode-gray rounded-md !p-2 !px-3"},{default:n(()=>[a(_,b({"html-for":"",extra:"只能新增 1 個群組標籤，15 字以內。"},t(x).newSmsCategory,{"label-col":{style:{width:"100%"}}}),{label:n(()=>[Et,a(k,{status:"small3",class:"m-0 p-0 ms-auto",onClick:e[5]||(e[5]=tt(()=>{t(ge)("newSmsCategory"),S.value=!0},["prevent"]))},{icon:n(()=>[a(c,{name:"close"})]),_:1})]),default:n(()=>[a(w,{value:t(o).newGroupName,"onUpdate:value":e[6]||(e[6]=r=>t(o).newGroupName=r),placeholder:"請輸入新群組標籤",maxlength:15},null,8,["value"])]),_:1},16)]),_:1},512),[[L,!t(S)]]),a(p,{span:24},{default:n(()=>[a(_,b(t(x).takeEffectDates,{label:"生效開始與結束日期",extra:"最多可設定 1 年"}),{default:n(()=>[a(U,{value:t(o).takeEffectDates,"onUpdate:value":e[7]||(e[7]=r=>t(o).takeEffectDates=r),format:"YYYY/MM/DD","value-format":"YYYY/MM/DD",placeholder:["請選擇生效開始結束日期",""],class:"w-full",separator:"～","disabled-date":ke},null,8,["value"])]),_:1},16)]),_:1}),a(p,{span:24},{default:n(()=>[a(_,b({"html-for":""},t(x).messageType),{label:n(()=>[Pt,Kt,a(g,{placement:"top","get-popup-container":t(A)},{title:n(()=>[u(" SMS：上限 335 字"),Gt,u(" MMS：上限 1,000 字，可上傳多媒體 ")]),default:n(()=>[l("a",Nt,[a(c,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),default:n(()=>[a(je,{value:t(o).messageType,"onUpdate:value":e[8]||(e[8]=r=>t(o).messageType=r),onChange:Ce},{default:n(()=>[(M(!0),B(ae,null,oe(Object.entries(t(ht)),([r,h])=>(M(),N($e,{key:r,value:r},{default:n(()=>[u(ne(h),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1},16)]),_:1}),G(a(p,{span:24},{default:n(()=>[a(_,b({label:"訊息主旨"},t(x).subject,{required:"",extra:"15 字以內"}),{default:n(()=>[a(w,{value:t(o).subject,"onUpdate:value":e[9]||(e[9]=r=>t(o).subject=r),placeholder:"請輸入訊息主旨",maxlength:15},null,8,["value"])]),_:1},16)]),_:1},512),[[L,t(o).messageType==="MMS"]]),a(p,{span:24},{default:n(()=>{var r;return[a(_,b({"html-for":""},t(x).content,{class:"relative",extra:`${t(o).messageType} 上限 ${t(R).toLocaleString()} 字，目前 ${t(d)(t(o).content)?"--":(r=t(o).content)==null?void 0:r.replace(t(V),"").length} 字`}),{label:n(()=>[Lt,Bt,a(g,{placement:"top","get-popup-container":t(A)},{title:n(()=>[u(" 假設情境："),Vt,u(" Step1. 客戶回覆包含「接收關鍵字」的訊息"),Yt,u(" Step2. 系統自動回覆此欄位內的內容 ")]),default:n(()=>[l("a",Ot,[a(c,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),default:n(()=>{var h;return[a(De,{ref_key:"tagTextareaRef",ref:P,modelValue:t(o).content,"onUpdate:modelValue":e[14]||(e[14]=v=>t(o).content=v),contenteditable:"true",style:{height:"292px"},"content-len":(h=t(o).content)==null?void 0:h.replace(t(V),"").length,"max-len":t(R),placeholder:"請輸入文字"},at({default:n(()=>[a(g,null,{title:n(()=>[u(" 載入現有的自訂訊息 ")]),default:n(()=>[a(c,{name:"import",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:e[10]||(e[10]=v=>{var f;return(f=t(W))==null?void 0:f.show()})})]),_:1}),a(g,null,{title:n(()=>[u(" 增加縮網址 ")]),default:n(()=>[a(c,{name:"link",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:e[11]||(e[11]=v=>{var f;return(f=t(X))==null?void 0:f.show()})})]),_:1}),a(g,null,{title:n(()=>[u(" 多媒體附件上傳 ")]),default:n(()=>[G(a(c,{name:"cloud-upload",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:e[12]||(e[12]=v=>{var f;return(f=t(Z))==null?void 0:f.show(t(o).multimediaFile)})},null,512),[[L,t(o).messageType==="MMS"]])]),_:1}),a(g,null,{title:n(()=>[u(" AI 文字生成訊息 ")]),default:n(()=>[a(c,{name:"AI",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:e[13]||(e[13]=v=>{var f;return(f=t(Q))==null?void 0:f.show()})})]),_:1})]),_:2},[t(o).multimediaFile.length>0?{name:"multimediaBlock",fn:n(()=>[l("div",qt,[(M(!0),B(ae,null,oe(t(o).multimediaFile,v=>(M(),B("div",{key:v.url,class:"w-90px max-h-60px"},[a(Re,{source:{url:v.url,type:v.type},"show-file-name":!1,"can-play":!1,size:"small","image-class":"object-cover w-full h-full","show-del-btn":!0,"toopltip-arrow":!0,"tooltip-placement":"top",tooltip:!0,onDeleteVideo:f=>Te(v)},null,8,["source","onDeleteVideo"]),l("div",It,ne(v.fileName),1)]))),128))])]),key:"0"}:void 0]),1032,["modelValue","content-len","max-len"])]}),_:1},16,["extra"])]}),_:1}),a(p,{span:24,class:"text-end"},{default:n(()=>[a(k,{status:"small2",class:"me-2",onClick:e[15]||(e[15]=r=>s.$router.push("/sms-marketing/custom-message?tabActived=customMessage"))},{default:n(()=>[u(" 取消 ")]),_:1}),a(k,{status:"small1","html-type":"submit"},{default:n(()=>[u(" 確定 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(p,{flex:"428px",class:"relative"},{default:n(()=>[a(Ae,{message:t(Me),tooltip:!0,"tooltip-placement":"left","toopltip-arrow":!1},null,8,["message"])]),_:1})]),_:1}),a(Le,{ref_key:"importCustomMessageRef",ref:W,content:t(o).content,onUpdateContent:J},null,8,["content"]),a(Be,{ref_key:"addFieldRef",ref:be,onAddFieldToContent:he},null,512),a(Oe,{ref_key:"addLinkRef",ref:X,onAddLinkToContent:we},null,512),a(Ve,{ref_key:"aiTextGenerationRef",ref:Q,content:t(o).content,onUpdateContent:J},null,8,["content"]),a(wt,{ref_key:"multimediaUploadRef",ref:Z,onUpdateMultimediaFile:Se},null,512),a(te,{open:t(T).open,"onUpdate:open":e[16]||(e[16]=r=>t(T).open=r),title:"是否刪除已上傳的檔案？",centered:"","cancel-text":"取消","ok-text":"確定",width:"400px",onOk:Fe},{default:n(()=>[Ht]),_:1},8,["open"]),a(te,{open:t(F),"onUpdate:open":e[17]||(e[17]=r=>ot(F)?F.value=r:null),title:"是否放棄目前編輯的內容？",centered:"","cancel-text":"取消","ok-text":"確定",width:"400px",onCancel:e[18]||(e[18]=r=>t(o).messageType="MMS"),onOk:e[19]||(e[19]=()=>{t(o).content="",t(o).multimediaFile=[],t(o).subject="",F.value=!1})},{default:n(()=>[zt]),_:1},8,["open"])]),_:1},8,["title","custom-breadcrumb"])}}});export{ga as default};
