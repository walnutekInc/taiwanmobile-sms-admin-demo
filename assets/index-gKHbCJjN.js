import{_ as Ce}from"./index.vuevuetypescriptsetuptruelang-D0bWLTM0.js";import{i as Ie,_ as Oe}from"./isSameOrBefore-CEUI6AK9.js";import{_ as te,a as Ve}from"./MessageTypeEnum-gpt6Oag_.js";import{j as Ne,_ as Ue}from"./index-C1AvcV_o.js";import{_ as Fe}from"./request-Cht3mzI3.js";import{_ as $e}from"./index.vuevuetypescriptsetuptruelang-DtpB6Cde.js";import{_ as Ye,a as De}from"./index.vuevuetypescriptsetuptruelang-DLLV04Yk.js";import{_ as je}from"./index-CA5s4HlQ.js";import{i as Ae}from"./isToday-C81MXPQm.js";import{z as le,E as V,q as Be,p as Pe,I as ze,G as Le,s as Ge,F as He,H as Ke,J as Xe,x as qe,K as Je,o as We}from"./antd-C_UvAipJ.js";import{_ as Qe,u as Ze,M as et}from"./create-or-update-form.vuevuetypescriptsetuptruelang-DvroKCoT.js";import{d as ie,f as _,ag as de,W as p,X as g,k as t,$ as s,u as e,H as B,F as T,Y as o,D as tt,w as st,b as at,_ as nt,G as r,a9 as se,a5 as ae,a3 as m,a4 as N,y as ne}from"./vue-Cot4Dobd.js";import{g as ot,a as oe,b as A}from"./tools-DuR4KSGu.js";import"./context-e8fZyaZG.js";import"./index.vuevuetypescriptsetuptruelang-DW3HDLpP.js";import"./route-leave-DSt1F7kY.js";import"./index.esm-BZKKJbd0.js";import"./index.vuevuetypestyleindex0lang-DRI_kzvm.js";import"./custom-message-CA02Aez8.js";import"./index.vuevuetypescriptsetuptruelang-9TnnHm4G.js";import"./contact-person-BWLUWf58.js";import"./group-label-DY0gFQw3.js";const lt=o("div",{class:"text-center px-30px py-20px w-328px text-base mx-auto"}," 編輯的內容將不會儲存 ",-1),it=ie({__name:"message-sending-edit-modal",setup(v,{expose:i}){const x=_(!1),b=_();function U(y){b.value=y,x.value=!0}const{post:F}=de({name:"in-message-sending-page"}),h=_(!1);function M(y,f){y?(x.value=!1,f&&F(f)):h.value=!0}return i({show:U}),(y,f)=>{const O=le;return p(),g(T,null,[t(O,{open:e(x),"onUpdate:open":f[0]||(f[0]=l=>B(x)?x.value=l:null),title:"編輯訊息行銷活動",width:"960px","destroy-on-close":!0,footer:null,"mask-closable":!1},{default:s(()=>[t(Qe,{id:e(b),"is-create":!1,"edit-callback":M},null,8,["id"])]),_:1},8,["open"]),t(O,{open:e(h),"onUpdate:open":f[1]||(f[1]=l=>B(h)?h.value=l:null),title:"是否取消編輯？",width:"400px",centered:"","z-index":2e3,onOk:f[2]||(f[2]=()=>{x.value=!1,h.value=!1})},{default:s(()=>[lt]),_:1},8,["open"])],64)}}});var P=(v=>(v.RESERVATION="預約中",v.EXECUTING="執行中",v.IS_SENT="已發送",v.RESERVATION_FAILED="預約失敗",v))(P||{});const dt={class:"pt-4 flex items-center pb-3"},ut=["onClick"],rt={class:"flex flex-col gap-4"},ct={class:"flex justify-between items-center mb-2"},mt={class:"font-600 text-sm pe-2"},pt={class:"flex flex-col gap-1 justify-end items-end"},_t={class:"text-sms-grayscale-60 font-500 text-xs"},ft={class:"font-400 text-sm text-sms-grayscale-80 tracking-[0.02em] whitespace-pre-wrap line-clamp-2"},gt={class:"text-end py-4"},xt=o("br",null,null,-1),vt={key:0,class:"flex items-center pb-4"},ht={key:0,id:"chat-message-content"},bt=o("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 活動名稱 ",-1),yt={class:"text-base font-400 text-sms-grayscale-100"},wt=o("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 帳號 ",-1),kt={class:"text-base font-400 text-sms-grayscale-100"},St=o("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 發送時間 ",-1),Tt={class:"text-base font-400 text-sms-grayscale-100"},Mt=o("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 發送編號 ",-1),Et={class:"text-base font-400 text-sms-grayscale-100"},Rt=o("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 訊息類型 ",-1),Ct={class:"text-base font-400 text-sms-grayscale-100"},It=o("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 發送門號 ",-1),Ot={class:"text-base font-400 text-sms-grayscale-100"},Vt=o("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 接收門號明細 ",-1),Nt={class:"flex flex-col"},Ut={class:"border-t-solid border-t border-t-sms-border-light-mode-light-gary p-4 mb-2"},Ft=o("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 訊息內容 ",-1),$t=["innerHTML"],Yt={key:0,class:"px-4 pb-0 h-full"},Dt=o("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 多媒體檔案 ",-1),jt={class:"flex gap-2"},At={class:"max-h-60px mb-2"},Bt={class:"text-sms-grayscale-60 text-xs font-500 font-sans text-center break-words"},Pt={class:"mt-4 p-4 border-t-solid border-t border-t-sms-border-light-mode-light-gary"},zt={class:"text-sm font-400 text-sms-grayscale-80 mb-1"},Lt={href:"javascript:;"},Gt=o("div",{class:"text-center px-30px py-20px w-328px text-base mx-auto"}," 刪除的訊息將無法復原 ",-1),Ht={class:"px-30px py-20px w-328px text-base mx-auto"},Kt=o("span",{class:"me-2"},"訊息類型",-1),Xt={href:"javascript:;"},qt=o("br",null,null,-1),vs=ie({__name:"index",setup(v){V.extend(Ae),V.extend(Ie);const i=_(),x=_(),b=_(),U=Ne(),{getMessageSendings:F,messageSendings:h,pagination:M,getActiveStatusLabel:y,getMessageSending:f,messageSending:O}=Ze(),l=_({keyword:"",name:"",phone:void 0,sendStatus:[],messageStatus:[],sendTime:void 0});async function ue(d){i.value=d,await ne();const n=document.getElementById("message-content");n&&(n.scrollTop=0)}tt(()=>{$()});async function $(d=1,n=10){const C={current:d,pageSize:n,...e(l)};await F(C)}function re(d,n){$(d,n??10)}function ce(){var d;$(1),(d=b.value)==null||d.hide()}const me=_(["10","20","30","50"]),pe={RESERVATION:"text-sms-yellow-60 bg-#F7F2E8",EXECUTING:"text-sms-primary-blue-80 bg-sms-primary-blue-30",IS_SENT:"text-sms-green-80 bg-sms-green-30",RESERVATION_FAILED:"text-sms-status-alert-red bg-sms-light-red-40"},E=_([]);async function _e(d,n){await ne(),E.value&&E.value[n]&&(d?E.value[n].playVideo():E.value[n].pauseVideo())}const R=_(!1);function fe(){R.value=!0}function ge(){i.value=void 0,R.value=!1,U.success({message:"訊息刪除成功",placement:"top"})}const z=[{label:"0935-111-111",value:"0935-111-111"},{label:"0947-127-998",value:"0947-127-998"},{label:"0958-892-006",value:"0958-892-006"}],L=Object.entries(P).map(([d,n])=>({label:n,value:d})),G=Object.entries(et).map(([d,n])=>({label:n,value:d})),w=_({open:!1,isParameter:!1}),H=_(null);function xe(){var d;i.value&&((d=H.value)==null||d.show(i.value.key))}const{data:ve,close:he}=de({name:"in-message-sending-page"});return st(ve,async d=>{await f(d),i.value=O.value}),at(()=>{he()}),(d,n)=>{const C=Be,I=je,c=Pe,K=Ye,X=De,be=ze,ye=Le,k=$e,q=Ge,J=He,we=Fe,S=Ue,ke=Ke,Y=Xe,Se=Ve,Te=Oe,W=le,Q=qe,Me=Je,Ee=We,Re=Ce;return p(),nt(Re,{title:"訊息發送"},{default:s(()=>[t(Te,{"show-right-empty":!e(i)},{leftTop:s(()=>[o("div",dt,[t(we,{ref_key:"filterKeywordInputRef",ref:b,modelValue:e(l).keyword,"onUpdate:modelValue":n[8]||(n[8]=a=>e(l).keyword=a),height:"40px",class:"flex-1 me-2",placeholder:"搜尋活動名稱、訊息內容",onClearFilter:n[9]||(n[9]=()=>{l.value={...e(l),keyword:"",name:"",phone:void 0,sendStatus:[],messageStatus:[],sendTime:void 0}})},{filterForm:s(()=>[t(J,{ref_key:"formRef",ref:x,layout:"vertical",model:e(l),autocomplete:"off"},{default:s(()=>[t(q,{gutter:[16,12]},{default:s(()=>[t(c,{span:24},{default:s(()=>[t(I,{label:"發送門號",valueed:e(ot)(e(l).phone,z)},{default:s(()=>[t(C,{value:e(l).phone,"onUpdate:value":n[0]||(n[0]=a=>e(l).phone=a),options:z,"allow-clear":"",class:"w-full"},null,8,["value"])]),_:1},8,["valueed"])]),_:1}),t(c,{span:24},{default:s(()=>[t(I,{label:"活動狀態",valueed:e(oe)(e(l).sendStatus)},{default:s(()=>[t(C,{value:e(l).sendStatus,"onUpdate:value":n[2]||(n[2]=a=>e(l).sendStatus=a),options:e(L),"max-tag-count":2,"show-arrow":!0,"show-search":!1,mode:"multiple",class:"w-full","menu-item-selected-icon":" "},{dropdownRender:s(({menuNode:a})=>[t(K,{modelValue:e(l).sendStatus,"onUpdate:modelValue":n[1]||(n[1]=u=>e(l).sendStatus=u),menu:a,options:e(L)},null,8,["modelValue","menu","options"])]),option:s(({value:a,label:u})=>[t(X,{values:e(l).sendStatus,value:a,label:u},null,8,["values","value","label"])]),_:1},8,["value","options"])]),_:1},8,["valueed"])]),_:1}),t(c,{span:24},{default:s(()=>[t(I,{label:"活動名稱",valueed:e(l).name},{default:s(()=>[t(be,{value:e(l).name,"onUpdate:value":n[3]||(n[3]=a=>e(l).name=a)},null,8,["value"])]),_:1},8,["valueed"])]),_:1}),t(c,{span:24},{default:s(()=>[t(I,{label:"訊息類型",valueed:e(oe)(e(l).messageStatus)},{default:s(()=>[t(C,{value:e(l).messageStatus,"onUpdate:value":n[5]||(n[5]=a=>e(l).messageStatus=a),options:e(G),"max-tag-count":2,"show-arrow":!0,"show-search":!1,mode:"multiple",class:"w-full","menu-item-selected-icon":" "},{dropdownRender:s(({menuNode:a})=>[t(K,{modelValue:e(l).messageStatus,"onUpdate:modelValue":n[4]||(n[4]=u=>e(l).messageStatus=u),menu:a,options:e(G)},null,8,["modelValue","menu","options"])]),option:s(({value:a,label:u})=>[t(X,{values:e(l).messageStatus,value:a,label:u},null,8,["values","value","label"])]),_:1},8,["value","options"])]),_:1},8,["valueed"])]),_:1}),t(c,{span:24},{default:s(()=>[t(I,{label:"發送時間",valueed:e(l).sendTime},{default:s(()=>[t(ye,{value:e(l).sendTime,"onUpdate:value":n[6]||(n[6]=a=>e(l).sendTime=a),class:"w-full",placement:"topLeft",format:"YYYY-MM-DD","value-format":"YYYY/MM/DD"},null,8,["value"])]),_:1},8,["valueed"])]),_:1}),t(c,{span:24,class:"text-center"},{default:s(()=>[t(k,{status:"small2",class:"me-5",onClick:n[7]||(n[7]=a=>{var u;return(u=e(b))==null?void 0:u.hide()})},{default:s(()=>[r(" 取消 ")]),_:1}),t(k,{status:"small1",onClick:ce},{default:s(()=>[r(" 確定 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),t(k,{status:"small1",onClick:n[10]||(n[10]=()=>{w.value={open:!0,isParameter:!1}})},{icon:s(()=>[t(S,{name:"plus",width:"16px"})]),default:s(()=>[r(" 新增訊息行銷活動 ")]),_:1})])]),left:s(()=>[o("ul",null,[(p(!0),g(T,null,se(e(h),a=>{var u;return p(),g("li",{key:a.key,class:ae(["p-4 border-b-solid border-b-1 border-b-sms-light-gray-60 last:mb-2 cursor-pointer",{"bg-sms-bg-light-mode-gray":a.key===((u=e(i))==null?void 0:u.key)}]),onClick:D=>ue(a)},[o("div",rt,[o("div",ct,[o("span",mt,m(a.name),1),o("div",pt,[o("span",{class:ae(["rounded-2 text-center py-1 px-2 text-xs font-500",{[pe[a.sendStatus]]:!0}])},m(e(P)[a.sendStatus]),3),o("span",_t,m(e(V)(a.sendTime).isToday()?"今天":e(V)(a.sendTime).format("YYYY/MM/DD")),1)])]),o("div",ft,m(a.content),1)])],10,ut)}),128))])]),leftBottom:s(()=>[o("div",gt,[t(ke,{current:e(M).current,"onUpdate:current":n[11]||(n[11]=a=>e(M).current=a),total:e(M).total,"show-quick-jumper":"","page-size-options":e(me),"show-size-changer":"","show-less-items":"","show-total":a=>`共 ${a} 筆`,onChange:re},null,8,["current","total","page-size-options","show-total"])])]),rightEmptyMessage:s(()=>[r(" 點擊左側行銷活動"),xt,r("檢視行銷活動資訊 ")]),rightTop:s(()=>[e(i)?(p(),g("div",vt,[t(k,{status:"small2",class:"me-2",disabled:e(i).sendStatus!=="RESERVATION",onClick:xe},{icon:s(()=>[t(S,{name:"edit",width:"16px"})]),default:s(()=>[r(" 編輯 ")]),_:1},8,["disabled"]),t(k,{status:"small2",class:"me-2",disabled:e(i).sendStatus!=="RESERVATION",onClick:fe},{icon:s(()=>[t(S,{name:"delete",width:"16px"})]),default:s(()=>[r(" 刪除預約 ")]),_:1},8,["disabled"])])):N("",!0)]),right:s(()=>[e(i)?(p(),g("div",ht,[t(q,{gutter:[16,16],class:"mb-4 px-4"},{default:s(()=>[t(c,{span:24},{default:s(()=>[bt,o("div",yt,m(e(i).name),1)]),_:1}),t(c,{span:8},{default:s(()=>[wt,o("div",kt,m(e(i).account),1)]),_:1}),t(c,{span:8},{default:s(()=>[St,o("div",Tt,m(e(i).sendTime),1)]),_:1}),t(c,{span:8},{default:s(()=>[Mt,o("div",Et,m(e(i).sendNumber),1)]),_:1}),t(c,{span:8},{default:s(()=>[Rt,o("div",Ct,m(e(y)(e(i).messageType,e(i).isParameter)),1)]),_:1}),t(c,{span:8},{default:s(()=>[It,o("div",Ot,m(e(i).phone),1)]),_:1}),t(c,{span:8},{default:s(()=>[Vt,o("div",null,[t(k,{status:"small2",class:"me-2"},{icon:s(()=>[t(S,{name:"download",width:"16px"})]),default:s(()=>[r(" 匯出 ")]),_:1})])]),_:1})]),_:1}),o("div",Nt,[o("div",Ut,[Ft,o("div",{class:"break-words text-base",innerHTML:e(i).content},null,8,$t)]),e(i).multimediaFile&&e(i).messageType==="MMS"&&e(i).multimediaFile.length>0?(p(),g("div",Yt,[Dt,o("div",jt,[(p(!0),g(T,null,se(e(i).multimediaFile,(a,u)=>{var D,Z,ee;return p(),g("div",{key:a.url,class:"w-120px"},[t(Y,{placement:(D=e(i))!=null&&D.multimediaFile&&u===((ee=(Z=e(i))==null?void 0:Z.multimediaFile)==null?void 0:ee.length)-1?"topRight":"top","get-popup-container":e(A),"overlay-inner-style":{width:"384px",height:"304px"},arrow:"center",onOpenChange:j=>_e(j,u)},{title:s(()=>[t(te,{ref_for:!0,ref:j=>e(E)[u]=j,source:a,size:"small","show-del-btn":!1,"show-file-name":!1,"image-class":"object-cover w-80% h-full mx-auto block"},null,8,["source"])]),default:s(()=>[o("div",At,[t(te,{source:a,size:"small","show-del-btn":!1,"can-play":!1,"show-file-name":!1,"image-class":"object-cover w-80% h-full mx-auto block"},null,8,["source"])]),o("div",Bt,m(a.fileName),1)]),_:2},1032,["placement","get-popup-container","onOpenChange"])])}),128))])])):N("",!0),o("div",Pt,[o("div",zt,[r(" 發送統計 "),t(Y,{placement:"top","get-popup-container":e(A)},{title:s(()=>[r(" 發送失敗的接收門號和原因，可參考報表細節或匯出明細，發送中和發送成功以外皆為發送失敗，例如: 發送過期、主帳號有設定黑名單等狀況 ")]),default:s(()=>[o("a",Lt,[t(S,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),t(Se,{columns:[{title:"發送總數",dataIndex:"total",key:"total",width:"89px",align:"center"},{title:"發送中",dataIndex:"sending",key:"sending",width:"89px",align:"center"},{title:"發送成功",dataIndex:"success",key:"success",width:"89px",align:"center"},{title:"發送失敗",dataIndex:"fail",key:"fail",width:"89px",align:"center"},{title:"成功率",dataIndex:"successRate",key:"successRate",width:"89px",align:"center"}],"data-source":[e(i).statistics]},{bodyCell:s(({column:a,text:u})=>[e(i).sendStatus==="RESERVATION"&&a.dataIndex!=="total"?(p(),g(T,{key:0},[r(" - ")],64)):(p(),g(T,{key:1},[a.dataIndex==="successRate"?(p(),g(T,{key:0},[r(m(u)+"% ",1)],64)):N("",!0)],64))]),_:1},8,["data-source"])])])])):N("",!0)]),_:1},8,["show-right-empty"]),t(W,{open:e(R),"onUpdate:open":n[12]||(n[12]=a=>B(R)?R.value=a:null),title:"是否刪除已預約的訊息？",centered:"","cancel-text":"取消","ok-text":"確定",width:"440px",onOk:ge},{default:s(()=>[Gt]),_:1},8,["open"]),t(W,{open:e(w).open,"onUpdate:open":n[14]||(n[14]=a=>e(w).open=a),title:"選擇訊息類型",centered:"","cancel-text":"取消","ok-text":"確定",width:"440px",onOk:n[15]||(n[15]=()=>{d.$router.push({name:e(w).isParameter?"MessageSendingParameterCreate":"MessageSendingGeneralCreate"})})},{default:s(()=>[o("div",Ht,[t(J,{layout:"vertical",autocomplete:"off"},{default:s(()=>[t(Ee,{"html-for":""},{label:s(()=>[Kt,t(Y,{placement:"top","get-popup-container":e(A)},{title:s(()=>[r(" 一般訊息支援 SMS 和 MMS，"),qt,r(" 若想批次使用參數發送訊息，請選擇參數訊息 ")]),default:s(()=>[o("a",Xt,[t(S,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),default:s(()=>[t(Me,{value:e(w).isParameter,"onUpdate:value":n[13]||(n[13]=a=>e(w).isParameter=a)},{default:s(()=>[t(Q,{value:!1},{default:s(()=>[r(" 一般訊息 ")]),_:1}),t(Q,{value:!0},{default:s(()=>[r(" 參數訊息 ")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1})])]),_:1},8,["open"]),t(it,{ref_key:"messageSendingEditModal",ref:H},null,512)]),_:1})}}});export{vs as default};
