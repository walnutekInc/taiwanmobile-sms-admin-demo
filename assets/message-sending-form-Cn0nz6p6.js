import{_ as tt}from"./index.vuevuetypescriptsetuptruelang-B6cl8gUO.js";import{u as st,S as nt,_ as at}from"./create-or-update-form.vuevuetypescriptsetuptruelang-BhKQxd5V.js";import{a as ot,b as lt,_ as it,c as rt}from"./MessageTypeEnum-DMSeJ8ko.js";import{u as dt,_ as ct,a as mt,b as ut,c as pt,d as ft}from"./route-leave-BM1GkG1j.js";import{_ as Se}from"./index.vuevuetypescriptsetuptruelang-DSiX2Owk.js";import{_ as me,j as _t,h as xt}from"./index-SyJk22Nu.js";import{d as pe,f as g,W as u,_ as D,$ as n,Y as s,G as l,k as t,X as S,F as L,a3 as _,u as e,H as se,ad as gt,z as he,r as ie,c as ue,o as vt,w as yt,m as A,ab as P,a9 as re,A as O,a7 as ht,a5 as X,a4 as de,ac as bt,D as Mt}from"./vue-BvWPEeCa.js";import{z as Te,E as U,K as St,N as F,O as Tt,P as be,Q as Me,H as kt,I as Ct,o as wt,p as $t,q as Ft,B as jt,x as Rt,J as Dt,r as It,s as Pt,F as Nt}from"./antd-x_nIKmzG.js";import{i as Et}from"./isToday-b1DZ_jHd.js";import{u as At,r as ce}from"./custom-message-BhUkYmr2.js";import{b as R}from"./tools-DuR4KSGu.js";import"./context-BzTW3VLM.js";import"./index.vuevuetypestyleindex0lang-DE_vMFqr.js";import"./request-hqIn3XrK.js";import"./contact-person-DlOWdw-G.js";import"./group-label-6nP2gAMT.js";import"./index.esm-NGw4E6pY.js";const Ot={class:"px-20px pb-24px font-400 text-base text-sms-grayscale-80"},Ut=s("p",{class:"mb-4"},[l("SMS：上限 335 字"),s("br"),l(" MMS：上限 1,000 字，可上傳多媒體")],-1),Lt=s("p",{class:"font-700 mb-4"},"方式一：接收門號不同，且訊息內容不同 (支援SMS/MMS)",-1),Bt={class:"list-decimal pl-20px m-0"},Vt=s("li",null,"若選擇 MMS 訊息，必須輸入訊息主旨與上傳多媒體檔案，請留意多媒體組別",-1),Yt=s("li",null,"系統將直接發送訊息內容到相應的手機號碼，請確保欄位為有效門號和訊息內容，不允許有空白欄位 ",-1),Ht=s("p",{class:"font-700 mb-4"},"方式二：接收門號不同，訊息內容可使用 5 個參數 (支援SMS/MMS)",-1),qt={class:"list-decimal pl-20px m-0"},Wt=s("li",null,"承上，請注意每個參數欄位上限 50 字",-1),zt=s("li",null,"上傳檔案進行發送參數訊息，系統將自動將訊息內容中的參數替換為參數檔案門號列",-1),Gt={class:"text-xs"},Kt=s("li",{class:"mb-4"},[l("訊息內容輸入： "),s("div",{class:"py-12.5px px-12px mt-4 rounded-12px border-sms-border-light-mode-light-gary border-solid -ms-20px"},[l(" %field1% 您好，您所填入的資料如下"),s("br"),l(" 會員編號： %field2% "),s("br"),l(" 性別： %field3% "),s("br"),l(" 生日： %field4% "),s("br"),l(" 年齡： %field5% ")])],-1),Xt=s("li",null,[l("兩門號收到的訊息分別如下： "),s("div",{class:"py-12.5px px-12px mt-4 rounded-12px border-sms-border-light-mode-light-gary border-solid -ms-20px"},[l(" 珊珊您好，您所填入的資料如下"),s("br"),l(" 會員編號： 9412918"),s("br"),l(" 性別： 女"),s("br"),l(" 生日： 08/22"),s("br"),l(" 年齡： 25"),s("br")]),s("div",{class:"py-12.5px px-12px mt-4 rounded-12px border-sms-border-light-mode-light-gary border-solid -ms-20px"},[l(" 馬可您好，您所填入的資料如下"),s("br"),l(" 會員編號： 5439577"),s("br"),l(" 性別： 男"),s("br"),l(" 生日： 08/29"),s("br"),l(" 年齡： 17"),s("br")])],-1),Jt=pe({__name:"instructions-modal",setup(T,{expose:M}){const k=g(!1);function N(){k.value=!0}return M({show:N}),(B,V)=>{const C=me,p=Se,x=ot,ne=Te;return u(),D(ne,{open:e(k),"onUpdate:open":V[0]||(V[0]=j=>se(k)?k.value=j:null),"ok-text":"確定","cancel-text":"取消",title:"操作說明",width:"600px"},{default:n(()=>[s("div",Ot,[Ut,Lt,s("ul",Bt,[s("li",null,[l("請下載Excel範例並填寫後上傳 "),t(p,{status:"small3",class:"!px-0 !py-0 !text-sms-primary-blue-80"},{icon:n(()=>[t(C,{name:"download"})]),default:n(()=>[l(" SMS匯出範例 ")]),_:1}),t(p,{status:"small3",class:"!pl-2 !py-0 !text-sms-primary-blue-80"},{icon:n(()=>[t(C,{name:"download"})]),default:n(()=>[l(" MMS匯出範例 ")]),_:1})]),Vt,Yt,s("li",null,[l("SMS 範例如下，兩個門號將收到不同內容的訊息： "),t(x,{class:"!-ms-20px mb-4",columns:[{key:"phone",dataIndex:"phone",title:"接收門號"},{key:"content",dataIndex:"content",title:"訊息內容"}],"data-source":[{phone:"0922333111",content:"VIP會員你好，邀請你參加會員專屬活動"},{phone:"0908111111",content:"你好，歡迎加入 ooo 專屬品牌會員"}]})]),s("li",null,[l("MMS 範例如下，每個門號將收到不同文字內容和多媒體的訊息： "),t(x,{class:"!-ms-20px mb-4",columns:[{key:"phone",dataIndex:"phone",title:"接收門號"},{key:"content",dataIndex:"content",title:"訊息內容"},{key:"group",dataIndex:"group",title:"對應組別"}],"data-source":[{phone:"0922333111",content:"VIP會員你好，邀請你參加會員專屬活動...",group:"第一組"},{phone:"0908111111",content:"邀請你參加會員專屬活動，點擊下方連結...",group:"第二組"},{phone:"0908111111",content:"邀請你參加會員專屬活動，點擊下方連結...",group:"第二組"}]})])]),Ht,s("ul",qt,[s("li",null,[l("請下載Excel範例並填寫後上傳 "),t(p,{status:"small3",class:"!px-0 !py-0 !text-sms-primary-blue-80"},{icon:n(()=>[t(C,{name:"download"})]),default:n(()=>[l(" SMS匯出範例 ")]),_:1}),t(p,{status:"small3",class:"!pl-2 !py-0 !text-sms-primary-blue-80"},{icon:n(()=>[t(C,{name:"download"})]),default:n(()=>[l(" MMS匯出範例 ")]),_:1})]),Wt,s("li",null,[l("訊息輸入內容中使用 "),t(C,{name:"link"}),l(" 插入參數（%field1% 至 %field5%），系統將自動替換為檔案中的欄位參數內容")]),zt,s("li",null,[l("若上傳檔案的內容如下： "),t(x,{class:"!-ms-20px mb-4 max-w-none instruction-table2",columns:[{key:"phone",dataIndex:"phone",title:"接收門號",width:"104px"},{key:"field1",dataIndex:"field1",title:`參數1
(%field1%)`,width:"74px"},{key:"field2",dataIndex:"field2",title:`參數2
(%field2%)`,width:"74px"},{key:"field3",dataIndex:"field3",title:`參數3
(%field3%)`,width:"74px"},{key:"field4",dataIndex:"field4",title:`參數4
(%field4%)`,width:"74px"},{key:"field5",dataIndex:"field5",title:`參數5
(%field5%)`,width:"74px"}],"data-source":[{phone:"0922333111",field1:"珊珊",field2:"9412918",field3:"女",field4:"08/22",field5:"25"},{phone:"0946184761",field1:"馬克",field2:"5439577",field3:"男",field4:"08/29",field5:"17"}]},{headerCell:n(({column:j})=>[j.key!=="phone"?(u(),S(L,{key:0},[l(_(j.key)+" ",1),s("span",Gt,"(%"+_(j.key)+"%)",1)],64)):(u(),S(L,{key:1},[l(_(j.title),1)],64))]),_:1})]),Kt,Xt])])]),_:1},8,["open"])}}}),Qt=s("span",{class:"pe-.5"},"活動名稱",-1),Zt=s("span",{class:"text-red-500 pe-2"},"*",-1),es={href:"javascript:;"},ts=s("span",{class:"pe-.5"},"參數訊息類型",-1),ss=s("span",{class:"text-red-500"},"*",-1),ns=s("span",{class:"pe-.5"},"上傳參數檔案",-1),as=s("span",{class:"text-red-500 pe-2"},"*",-1),os={href:"javascript:;"},ls=s("br",null,null,-1),is={class:"flex gap-2 overflow-y-auto h-95px"},rs={class:"text-sms-grayscale-60 text-xs font-500 font-sans text-center break-words"},ds=s("span",{class:"pe-.5"},"發送時間",-1),cs=s("span",{class:"text-red-500 pe-2"},"*",-1),ms={href:"javascript:;"},us=s("span",{class:"pe-.5"},"有效時間",-1),ps=s("span",{class:"text-red-500 pe-2"},"*",-1),fs={href:"javascript:;"},_s={key:0,id:"confirmDetail",class:"px-32px"},xs=s("div",{class:"mb-4"},[s("h2",{class:"font-500 text-22px text-sms-secondary-dark-blue-100"}," 內容確認 "),s("p",{class:"text-sm text-sms-grayscale-80"}," 若有使用縮網址功能，請在發送訊息前再次確認短網址有效性，平台不會檢驗短網址有效性 ")],-1),gs={class:"border border-solid border-sms-light-gray-60 p-16px pb-24px rounded-12px mb-2"},vs=s("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 活動名稱 ",-1),ys={class:"text-base font-400 text-sms-grayscale-100"},hs=s("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 發送時間 ",-1),bs={key:0,class:"text-base font-400 text-sms-grayscale-100"},Ms=s("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 訊息類型 ",-1),Ss={class:"text-base font-400 text-sms-grayscale-100"},Ts=s("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 發送門號 ",-1),ks={class:"text-base font-400 text-sms-grayscale-100"},Cs=s("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 訊息總數 (長訊息) ",-1),ws={class:"text-base font-400 text-sms-grayscale-100"},$s=s("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 單價 ",-1),Fs={class:"text-base font-400 text-sms-grayscale-100"},js={class:"text-sm font-400 text-sms-grayscale-80 mb-1"},Rs={href:"javascript:;"},Ds={class:"text-base font-400 text-sms-grayscale-100"},Is=s("span",{class:"text-sms-grayscale-60 text-sm"}," (非最終數量)",-1),Ps={class:"text-sm font-400 text-sms-grayscale-80 mb-1"},Ns={href:"javascript:;"},Es={class:"text-base font-400 text-sms-grayscale-100"},As=s("span",{class:"text-sms-grayscale-60 text-sm"}," (非最終數量)",-1),Os={class:"text-sm font-400 text-sms-grayscale-80 mb-1"},Us={href:"javascript:;"},Ls=s("br",null,null,-1),Bs={class:"text-base font-400 text-sms-grayscale-100"},Vs={class:"text-sm font-400 text-sms-grayscale-80 mb-1"},Ys={href:"javascript:;"},Hs=s("div",{class:"text-center px-30px py-20px w-328px text-base mx-auto"}," 刪除的檔案將無法復原 ",-1),qs=s("div",{class:"text-center px-30px py-20px w-328px text-base mx-auto"},[l(" 您編輯過的內容將全部清空 "),s("br"),s("p",null,[l(" 提醒您，SMS支援的字數較MMS少，"),s("br"),l(" 且不能上傳多媒體附件 ")])],-1),Ws=s("div",{class:"text-center px-30px py-20px w-328px text-base mx-auto"},[s("p",{class:"text-base text-center text-sms-gary-80"},[l(" 正確的格式範例 "),s("a",{class:"text-sms-primary-blue-80 ms-1 underline underline-offset-2",href:"",download:""},"點擊此處下載")])],-1);var ke=(T=>(T.smsDiffContent="接收門號不同，且訊息內容不同 (SMS)",T.mmsDiffContent="接收門號不同，且訊息內容不同 (MMS)",T.smsCommonContent="接收門號不同，訊息內容可使用 5 個參數 (SMS)",T.mmsCommonContent="接收門號不同，訊息內容可使用 5 個參數 (MMS)",T))(ke||{});const zs=pe({__name:"create-or-update-form",props:{isCreate:{type:Boolean,default:!1},id:{},editCallback:{},showPreview:{type:Boolean,default:!0}},setup(T){const M=T;U.extend(Et);const{setHideAlert:k,setShowAlert:N}=dt(),B=g(null),V=_t(),C=gt(),p=he(M,"isCreate"),x=he(M,"id"),ne=g(null),{replaceFieldToHtml:j}=At(),v=g(),{updateParameterMessageSending:Ce,getParameterMessageSending:we,createParameterMessageSending:$e,effectiveTimeOption:Fe,getActiveStatusLabel:je,checkMessageSendingNameExist:Re}=st(),Y=g(""),J=g("smsDiffContent");let E={name:"",phone:void 0,isCommonContent:!1,messageType:"SMS",subject:"",multimediaFile:[],sendTimeType:"NOW",content:"",effectiveTime:"",reservationTime:"",multimediaFileWithSubject:[],recipients:[]};const De=[{label:"0935-111-111",value:"0935-111-111"},{label:"0947-127-998",value:"0947-127-998"},{label:"0958-892-006",value:"0958-892-006"}],ae=g(!1),o=ie(St(E)),Q=ue(()=>o.messageType==="SMS"?335:1e3),Ie=ie({name:[{async validator(i,a){return F(a)?Promise.reject("請輸入活動名稱"):await Re(a,x.value)?Promise.reject("此活動名稱已存在，請重新命名 "):Promise.resolve()},trigger:"blur"}],phone:[{required:!0,message:"請選擇發送門號",trigger:"blur"}],subject:[{async validator(i,a){return o.messageType==="MMS"&&F(a)?Promise.reject("請輸入訊息主旨"):Promise.resolve()},trigger:"blur"}],recipients:[],content:[{async validator(i,a){var d;return F(a)?Promise.reject("請輸入訊息內容"):!F(a)&&((d=o.content)==null?void 0:d.replace(ce,"").length)>Q.value?Promise.reject(`限制輸入 ${Q.value} 字以內`):Promise.resolve()},trigger:"blur"}],reservationTime:[{async validator(i,a){if(o.sendTimeType==="RESERVATION"){if(F(a))return Promise.reject("請選擇預約日期或現在發送");if(U().diff(U(a),"minute")>0)return Promise.reject("閒置過久，請重新選擇預約時間")}return Promise.resolve()},trigger:"blur"}]}),{validateInfos:I,validate:Pe,resetFields:Ne}=Tt(o,Ie);vt(async()=>{var i,a,d,f,q,h,c,W,z,G,K,te;if(Y.value=U().format("YYYY/MM/DD_HH:mm"),!p.value&&x.value){const w=await we(x.value);w.data&&(v.value=w.data,E={name:((i=v.value)==null?void 0:i.name)??e(Y),phone:((a=v.value)==null?void 0:a.phone)??void 0,isCommonContent:((d=v.value)==null?void 0:d.isCommonContent)??!1,messageType:((f=v.value)==null?void 0:f.messageType)??"SMS",subject:((q=v.value)==null?void 0:q.subject)??"",multimediaFile:((h=v.value)==null?void 0:h.multimediaFile)??[],sendTimeType:((c=v.value)==null?void 0:c.sendTimeType)??"NOW",content:((W=v.value)==null?void 0:W.content)??"",effectiveTime:((z=v.value)==null?void 0:z.effectiveTime)??"",reservationTime:((G=v.value)==null?void 0:G.reservationTime)??"",recipients:((K=v.value)==null?void 0:K.recipients)??[],multimediaFileWithSubject:((te=v.value)==null?void 0:te.multimediaFileWithSubject)??[]})}E.name=e(Y),Ne(E)}),yt(()=>o,i=>{const a=be(i,E);p.value&&!x.value&&(a?k():N())},{deep:!0});const m=g(null);function Ee(){Pe().then(async()=>{}).catch(i=>{console.log(i)})}async function Ae(){var d;((d=(await(e(p)?$e:Ce)(o,x.value)).data)==null?void 0:d.status)==="success"&&(p.value&&!x.value?k():(M.editCallback&&M.editCallback(!0,x.value),V.success({message:"訊息編輯成功",placement:"top"})))}const fe=g(null);function _e(i){o.content=j(i)}const Oe=g(null);function Ue(i){for(const a of i)o.content=`${o.content}<span>${a}</span>`}const xe=g(null);function Le(i){o.content=`${o.content}<a href="${i}">${i}</a>`}const ge=g(null),Be=ue(()=>{const i=[];if((!F(o.content)||!F(o.subject))&&i.push({phone:o.phone,content:o.content,...o.messageType==="MMS"&&{subject:o.subject},messageType:"SENT",contentType:"text"}),!F(o.multimediaFile))for(const a of o.multimediaFile)i.push({phone:o.phone,content:a.url,messageType:"SENT",contentType:a.type});return i.map((a,d)=>({...a,key:d}))}),ve=g(null);function Ve(i){o.multimediaFile=i}const H=ie({open:!1});function Ye(i){Object.assign(H,{open:!0,delFile:i})}function He(){o.multimediaFile=o.multimediaFile.filter(i=>{var a;return i.url!==((a=H.delFile)==null?void 0:a.url)}),Object.assign(H,{open:!1,delFile:void 0})}const Z=g(!1),ee=g(!1),ye=U();function qe(i){const a=ye.add(1,"year");return i&&(i<ye||i>=a)}function We(i){if(i&&i.isToday()){const a=U().add(5,"minute"),d=a.hour(),f=a.minute();return{disabledHours:()=>Me(0,24).slice(0,d),disabledMinutes:()=>Me(0,60).slice(0,f)}}return{}}function ze(){const i=be(o,E);M.editCallback&&M.editCallback(i)}function Ge(){p.value&&!x.value?C.push("/sms-marketing/message-sending"):ze()}function Ke(){switch(e(J)){case"smsCommonContent":o.messageType="SMS",o.isCommonContent=!0;break;case"mmsCommonContent":o.messageType="MMS",o.isCommonContent=!0;break;case"mmsDiffContent":o.messageType="MMS",o.isCommonContent=!1;break;default:o.messageType="SMS",o.isCommonContent=!1;break}}return(i,a)=>{const d=me,f=kt,q=Ct,h=wt,c=$t,W=Ft,z=jt,G=Rt,K=Dt,te=me,w=Se,Xe=it,Je=ft,Qe=It,oe=Pt,Ze=Nt,et=rt,le=Te;return u(),S(L,null,[t(oe,{class:X(["bg-sms-grayscale-0 rounded-4",{"p-10 pl-1":e(p)&&!e(x)}]),wrap:!1},{default:n(()=>[t(c,{flex:"auto"},{default:n(()=>[A(t(Ze,{class:"px-32px",layout:"vertical",autocomplete:"off",onSubmit:Ee},{default:n(()=>[t(oe,{gutter:[16,14]},{default:n(()=>[t(c,{span:24},{default:n(()=>[t(h,P(e(I).name,{"html-for":""}),{label:n(()=>[Qt,Zt,t(f,{placement:"top","get-popup-container":e(R)},{title:n(()=>[l(" 活動名稱可使用系統預設或自行輸入，但不可重複 ")]),default:n(()=>[s("a",es,[t(d,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),default:n(()=>[t(q,{value:e(o).name,"onUpdate:value":a[0]||(a[0]=r=>e(o).name=r),placeholder:"請輸入文字",maxlength:30,onFocus:a[1]||(a[1]=()=>{e(o).name===e(Y)&&(e(o).name="")}),onBlur:a[2]||(a[2]=()=>{e(o).name===""&&(e(o).name=e(Y))})},null,8,["value"])]),_:1},16)]),_:1}),t(c,{span:24},{default:n(()=>[t(h,P(e(I).phone,{label:"發送門號",required:""}),{default:n(()=>[t(W,{value:e(o).phone,"onUpdate:value":a[3]||(a[3]=r=>e(o).phone=r),options:De,"allow-clear":"",placeholder:"請選擇發送門號"},null,8,["value"])]),_:1},16)]),_:1}),t(c,{span:24},{default:n(()=>[t(h,{"html-for":""},{label:n(()=>[ts,ss,t(z,{type:"link",status:"small3",onClick:a[4]||(a[4]=r=>{var $;return($=e(B))==null?void 0:$.show()})},{icon:n(()=>[t(d,{name:"doc",width:"16px"})]),default:n(()=>[l(" 操作說明 ")]),_:1})]),default:n(()=>[t(K,{value:e(J),"onUpdate:value":a[5]||(a[5]=r=>se(J)?J.value=r:null),onChange:Ke},{default:n(()=>[(u(!0),S(L,null,re(Object.entries(ke),([r,$])=>(u(),D(G,{style:{display:"flex",alignItems:"center",marginBottom:"10.5px"},value:r,key:r},{default:n(()=>[l(_($)+" ",1),t(z,{type:"link",class:"!py-4px !px-0"},{icon:n(()=>[t(d,{name:"download"})]),default:n(()=>[l(" 匯出範例 ")]),_:1})]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1}),t(c,{span:24},{default:n(()=>[t(h,P({"html-for":""},e(I).file),{label:n(()=>[ns,as,t(f,{placement:"top","get-popup-container":e(R)},{title:n(()=>[l(" 1.每則訊息字數(含參數)不能超過限制。SMS 上限 335 字，MMS 上限1,000 字。"),ls,l(" 2.每個參數欄位上限 50 字 ")]),default:n(()=>[s("a",os,[t(d,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),default:n(()=>[s("input",{type:"file",class:"!hidden",ref_key:"uploadFileRef",ref:ne},null,512),t(w,{status:"small2"},{icon:n(()=>[t(te,{name:"upload"})]),default:n(()=>[l(" 上傳EXCEL ")]),_:1})]),_:1},16)]),_:1}),A(t(c,{span:24},{default:n(()=>[t(h,P({label:"訊息主旨"},e(I).subject,{required:"",extra:"15 字以內"}),{default:n(()=>[t(q,{value:e(o).subject,"onUpdate:value":a[6]||(a[6]=r=>e(o).subject=r),placeholder:"請輸入訊息主旨",maxlength:15},null,8,["value"])]),_:1},16)]),_:1},512),[[O,e(o).messageType==="MMS"&&e(o).isCommonContent]]),A(t(c,{span:24},{default:n(()=>{var r;return[t(h,P({"html-for":"",label:"訊息內容"},e(I).content,{class:"relative",extra:`${e(o).messageType} 上限 ${e(Q).toLocaleString()} 字，目前 ${e(F)(e(o).content)?"--":(r=e(o).content)==null?void 0:r.replace(e(ce),"").length} 字`}),{default:n(()=>{var $;return[t(Je,{modelValue:e(o).content,"onUpdate:modelValue":a[11]||(a[11]=b=>e(o).content=b),contenteditable:"true",style:{height:"292px"},"content-len":($=e(o).content)==null?void 0:$.replace(e(ce),"").length,"max-len":e(Q),placeholder:"請輸入文字"},ht({default:n(()=>[t(f,null,{title:n(()=>[l(" 載入現有的自訂訊息 ")]),default:n(()=>[t(d,{name:"import",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:a[7]||(a[7]=b=>{var y;return(y=e(fe))==null?void 0:y.show()})})]),_:1}),t(f,null,{title:n(()=>[l(" 增加縮網址 ")]),default:n(()=>[t(d,{name:"link",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:a[8]||(a[8]=b=>{var y;return(y=e(xe))==null?void 0:y.show()})})]),_:1}),t(f,null,{title:n(()=>[l(" 多媒體附件上傳 ")]),default:n(()=>[A(t(d,{name:"cloud-upload",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:a[9]||(a[9]=b=>{var y;return(y=e(ve))==null?void 0:y.show(e(o).multimediaFile)})},null,512),[[O,e(o).messageType==="MMS"]])]),_:1}),t(f,null,{title:n(()=>[l(" AI 文字生成訊息 ")]),default:n(()=>[t(d,{name:"AI",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:a[10]||(a[10]=b=>{var y;return(y=e(ge))==null?void 0:y.show()})})]),_:1})]),_:2},[e(o).multimediaFile.length>0?{name:"multimediaBlock",fn:n(()=>[s("div",is,[(u(!0),S(L,null,re(e(o).multimediaFile,b=>(u(),S("div",{key:b.url,class:"w-90px max-h-60px"},[t(Xe,{source:{url:b.url,type:b.type},"show-file-name":!1,"can-play":!1,size:"small","image-class":"object-cover w-full h-full",onDeleteVideo:y=>Ye(b)},null,8,["source","onDeleteVideo"]),s("div",rs,_(b.fileName),1)]))),128))])]),key:"0"}:void 0]),1032,["modelValue","content-len","max-len"])]}),_:1},16,["extra"])]}),_:1},512),[[O,e(o).isCommonContent]]),t(c,{span:24,class:"bg-sms-bg-light-mode-gray rounded-md !p-20px"},{default:n(()=>[t(h,P(e(I).reservationTime,{"html-for":"",class:"mb-4"}),{label:n(()=>[ds,cs,t(f,{placement:"top","get-popup-container":e(R)},{title:n(()=>[l(" 最快可預約5分鐘之後以及系統當下 1 年內時間，惟實際發送時間以系統排程為主 ")]),default:n(()=>[s("a",ms,[t(d,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),default:n(()=>[t(K,{value:e(o).sendTimeType,"onUpdate:value":a[12]||(a[12]=r=>e(o).sendTimeType=r)},{default:n(()=>[(u(!0),S(L,null,re(Object.entries(e(nt)),([r,$])=>(u(),D(G,{key:r,value:r},{default:n(()=>[l(_($),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"]),A(t(Qe,{value:e(o).reservationTime,"onUpdate:value":a[13]||(a[13]=r=>e(o).reservationTime=r),format:"YYYY/MM/DD HH:mm","value-format":"YYYY/MM/DD HH:mm","disabled-date":qe,"disabled-time":We,"show-time":!0,"show-now":!1},null,8,["value"]),[[O,e(o).sendTimeType==="RESERVATION"]])]),_:1},16),t(h,P(e(I).sendTimeType,{"html-for":""}),{label:n(()=>[us,ps,t(f,{placement:"top","get-popup-container":e(R)},{title:n(()=>[l(" 因接收門號而無法成功送達訊息，會在此設定有效時間內重複嘗試發送 ")]),default:n(()=>[s("a",fs,[t(d,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),default:n(()=>[t(W,{value:e(o).effectiveTime,"onUpdate:value":a[14]||(a[14]=r=>e(o).effectiveTime=r),options:e(Fe),"list-height":300,placeholder:"請選擇有效時間"},null,8,["value","options"])]),_:1},16)]),_:1}),t(c,{span:24,class:X({"text-end":e(p)&&!e(x),"text-center py-6 ":!e(p)&&e(x)})},{default:n(()=>[t(w,{status:"small2",class:"me-2",onClick:Ge},{default:n(()=>[l(" 取消 ")]),_:1}),t(w,{status:"small1","html-type":"submit"},{default:n(()=>[l(" 確定 ")]),_:1})]),_:1},8,["class"])]),_:1})]),_:1},512),[[O,!e(ae)]]),e(ae)&&e(m)?(u(),S("div",_s,[xs,s("div",gs,[t(oe,{gutter:[16,16]},{default:n(()=>[t(c,{span:24,class:"mb-"},{default:n(()=>[vs,s("div",ys,_(e(m).name),1)]),_:1}),t(c,{span:8},{default:n(()=>[hs,e(m).sendTimeType==="RESERVATION"?(u(),S("div",bs,_(e(m).reservationTime),1)):(u(),S("div",{key:1,class:X(["text-base font-400 text-sms-grayscale-100",{"text-sms-status-alert-red":Math.sign(e(m).estimatedRemainingAmount)===-1}])}," 現在 ",2))]),_:1}),t(c,{span:8},{default:n(()=>[Ms,s("div",Ss,_(e(je)(e(m).messageType,e(m).isParameter)),1)]),_:1}),t(c,{span:8},{default:n(()=>[Ts,s("div",ks,_(e(m).phone),1)]),_:1}),e(m).messageType==="SMS"?(u(),D(c,{key:0,span:8},{default:n(()=>[Cs,s("div",ws,_(e(m).totalLongMessages),1)]),_:1})):de("",!0),t(c,{span:8},{default:n(()=>[$s,s("div",Fs," NT$ "+_(e(m).price),1)]),_:1}),t(c,{span:8},{default:n(()=>[s("div",js,[l(" 接收門號總數 "),t(f,{placement:"top","get-popup-container":e(R)},{title:n(()=>[l(" 未過濾所有黑名單，發送時會再檢核，最終接收門號數量可能變動 ")]),default:n(()=>[s("a",Rs,[t(d,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),s("div",Ds,[l(_(e(m).recipientsCount.toLocaleString())+" ",1),Is])]),_:1}),t(c,{span:8},{default:n(()=>[s("div",Ps,[l(" 黑名單門號總數 "),t(f,{placement:"top","get-popup-container":e(R)},{title:n(()=>[l(" 目前已篩選掉該黑名單數量，發送時會再檢核最新黑名單，最終黑名單門號總數可能變動 ")]),default:n(()=>[s("a",Ns,[t(d,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),s("div",Es,[l(_(e(m).isBlackListCount.toLocaleString())+" ",1),As])]),_:1}),t(c,{span:8},{default:n(()=>[s("div",Os,[l(" 預估發送總金額 "),t(f,{placement:"top","get-popup-container":e(R),"overlay-inner-style":{width:"397px"}},{title:n(()=>[l(" 發送總金額 = 訊息總數 x ( 接收門號總數 - 黑名單門號總數 ) x 單價"),Ls,l(" 參數訊息之訊息總數以一則計算，實際計價以發送字數等於幾則來計價 ")]),default:n(()=>[s("a",Us,[t(d,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),s("div",Bs," NT$ "+_(e(m).estimatedTotalAmount.toLocaleString()),1)]),_:1}),t(c,{span:8},{default:n(()=>[s("div",Vs,[l(" 預估剩餘金額 "),t(f,{placement:"top","get-popup-container":e(R)},{title:n(()=>[l(" 餘額不足仍可預約，請注意於預約時間前進行儲值才可成功發送訊息 ")]),default:n(()=>[s("a",Ys,[t(d,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),s("div",{class:X(["text-base font-400 text-sms-grayscale-100",{"text-sms-status-alert-red":Math.sign(e(m).estimatedRemainingAmount)===-1}])}," NT$ "+_(e(m).estimatedRemainingAmount.toLocaleString()),3)]),_:1})]),_:1})]),s("div",{class:X(["flex items-center justify-end",{"py-4":!e(p)&&e(x)}])},[A(s("div",{class:"text-sms-status-alert-red text-base me-4"},_(e(m).sendTimeType==="RESERVATION"?"可預約，請於發送時間之前儲值完畢，以免發送失敗":"剩餘金額不足，建議回上一步改成預約發送後再盡快儲值"),513),[[O,Math.sign(e(m).estimatedRemainingAmount)===-1]]),t(w,{status:"small2",class:"me-2",onClick:a[15]||(a[15]=()=>{ae.value=!1,m.value=null})},{default:n(()=>[l(" 上一步 ")]),_:1}),t(w,{onClick:Ae},{default:n(()=>[l(" 確定 ")]),_:1})],2)])):de("",!0)]),_:1}),i.showPreview?(u(),D(c,{key:0,flex:"428px",class:"relative"},{default:n(()=>[t(et,{message:e(Be)},null,8,["message"])]),_:1})):de("",!0)]),_:1},8,["class"]),t(ct,{ref_key:"importCustomMessageRef",ref:fe,content:e(o).content,onUpdateContent:_e},null,8,["content"]),t(mt,{ref_key:"addFieldRef",ref:Oe,onAddFieldToContent:Ue},null,512),t(ut,{ref_key:"addLinkRef",ref:xe,onAddLinkToContent:Le},null,512),t(pt,{ref_key:"aiTextGenerationRef",ref:ge,content:e(o).content,onUpdateContent:_e},null,8,["content"]),t(lt,{ref_key:"multimediaUploadRef",ref:ve,onUpdateMultimediaFile:Ve},null,512),t(le,{open:e(H).open,"onUpdate:open":a[16]||(a[16]=r=>e(H).open=r),title:"是否刪除已上傳的檔案？",centered:"","cancel-text":"取消","ok-text":"確定",width:"400px",onOk:He},{default:n(()=>[Hs]),_:1},8,["open"]),t(le,{open:e(Z),"onUpdate:open":a[17]||(a[17]=r=>se(Z)?Z.value=r:null),title:"是否放棄目前編輯的內容？",centered:"","cancel-text":"取消","ok-text":"確定",width:"400px",onCancel:a[18]||(a[18]=r=>e(o).messageType="MMS"),onOk:a[19]||(a[19]=()=>{e(o).content="",e(o).multimediaFile=[],e(o).subject="",Z.value=!1})},{default:n(()=>[qs]),_:1},8,["open"]),t(le,{open:e(ee),"onUpdate:open":a[21]||(a[21]=r=>se(ee)?ee.value=r:null),title:"資料格式有誤，請重新確認上傳",width:"400px",centered:""},{footer:n(()=>[t(w,{onClick:a[20]||(a[20]=r=>ee.value=!1)},{default:n(()=>[l(" 確定 ")]),_:1})]),default:n(()=>[Ws]),_:1},8,["open"]),t(Jt,{ref_key:"instructionsModalRef",ref:B},null,512)],64)}}}),un=pe({__name:"message-sending-form",setup(T){const M=xt(),k=bt();Mt(async()=>{M.handleSelectedKeys(["/sms-marketing/message-sending"])});const N=ue(()=>k.meta.title??"");return(B,V)=>{const C=tt;return u(),D(C,{title:e(N),"custom-breadcrumb":[{title:"訊息行銷活動"},{path:"/sms-marketing/message-sending",title:"訊息發送"},{title:e(N)}]},{default:n(()=>{var p;return[(p=B.$route.name)!=null&&p.toString().includes("General")?(u(),D(at,{key:0,"is-create":!0})):(u(),D(zs,{key:1,"is-create":!0}))]}),_:1},8,["title","custom-breadcrumb"])}}});export{un as default};
