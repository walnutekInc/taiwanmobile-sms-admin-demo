import{_ as ne}from"./index.vuevuetypescriptsetuptruelang-Byx7QoIE.js";import{i as oe,_ as re}from"./isSameOrBefore-rtIsR6US.js";import{u as le,_ as ie,a as me}from"./request-DSiPDDeB.js";import{l as ce,j as ue,_ as de}from"./index-R-qz9I0f.js";import{_ as pe}from"./index.vuevuetypescriptsetuptruelang-CxDHX7AS.js";import{_ as _e}from"./index-C91rZXpu.js";import{i as fe}from"./isToday-BjBuj7TK.js";import{Y as ge,c as Ye,E as e,q as ye,p as he,I as Me,G as xe,s as De,F as ke,H as ve}from"./antd-DcYYAuBl.js";import{g as be,b as F}from"./tools-DuR4KSGu.js";import{d as Te,ad as we,f as E,D as Ce,u as n,ag as He,w as Ee,b as Se,W as f,_ as Re,$ as t,k as o,Y as a,G as D,X as g,F as S,a9 as j,a5 as R,a3 as Y,a4 as Le,y as Ne}from"./vue-BMMYOVpY.js";import"./context-Wcqp34b-.js";var Be={exports:{}};(function(y,k){(function(p,h){y.exports=h(ge)})(Ye,function(p){function h(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var v=h(p),b={name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(c,i){return i==="W"?c+"週":c+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"},meridiem:function(c,i){var u=100*c+i;return u<600?"凌晨":u<900?"早上":u<1100?"上午":u<1300?"中午":u<1800?"下午":"晚上"}};return v.default.locale(b,null,!0),b})})(Be);e.locale("zh-tw");var G=(y=>(y.READ="已讀",y.UNREAD="未讀",y))(G||{});const U=[{key:"1",phone:"0963-123-123",content:"您好，我想索取試用品DM和序號",unreadCount:0,createTime:e().format("YYYY/MM/DD"),updateTime:e().format("YYYY/MM/DD")},{key:"2",phone:"0928-391-699",content:"請問活動截止日期到什麼時候 ?",unreadCount:2,createTime:e().format("YYYY/MM/DD"),updateTime:e().format("YYYY/MM/DD")},{key:"3",phone:"0938-127-498",content:`請問上個月的抽獎結果什麼時候會公佈？
網路上已經看到外洩的名單，但官方似乎沒有正式公告，希望主辦單位可以即時通知我們網路上已經看到外洩的名單，但官方似乎沒有正式公告，希望主辦單位可以即時通知我們網路上已經看到外洩的名單，但官方似乎沒有正式公告，希望主辦單位可以即時通知我們網路上已經看到外洩的名單，但官方似乎沒有正式公告，希望主辦單位可以即時通知我們網路上已經看到外洩的名單，但官方似乎沒有正式公告，希望主辦單位可以即時通知我們`,unreadCount:5,createTime:e().subtract(2,"d").format("YYYY/MM/DD"),updateTime:e().format("YYYY/MM/DD")},{key:"4",phone:"0958-128-815",content:`黃茵茵
huangyiyi@gmail.com`,unreadCount:0,createTime:e().subtract(3,"d").format("YYYY/MM/DD"),updateTime:e().format("YYYY/MM/DD")},{key:"5",phone:"0963-123-123",content:"您好，我想索取試用品DM和序號",unreadCount:0,createTime:e().subtract(4,"d").format("YYYY/MM/DD"),updateTime:e().format("YYYY/MM/DD")},{key:"6",phone:"0937-129-488",content:"我要參加活動，請通知下一步",unreadCount:0,createTime:e().subtract(5,"d").format("YYYY/MM/DD"),updateTime:e().format("YYYY/MM/DD")},{key:"7",phone:"0937-129-488",content:"我要參加活動，請通知下一步",unreadCount:0,createTime:e().subtract(5,"d").format("YYYY/MM/DD"),updateTime:e().format("YYYY/MM/DD")},{key:"8",phone:"0937-129-488",content:"我要參加活動，請通知下一步",unreadCount:0,createTime:e().subtract(5,"d").format("YYYY/MM/DD"),updateTime:e().format("YYYY/MM/DD")},{key:"9",phone:"0937-129-488",content:"我要參加活動，請通知下一步",unreadCount:0,createTime:e().subtract(5,"d").format("YYYY/MM/DD"),updateTime:e().format("YYYY/MM/DD")},{key:"10",phone:"0937-129-488",content:"我要參加活動，請通知下一步",unreadCount:0,createTime:e().subtract(5,"d").format("YYYY/MM/DD"),updateTime:e().format("YYYY/MM/DD")}],je={[e().format("YYYY/MM/DD (dd)")]:[{key:"1",phone:{key:"0935-111-111",label:"0935-111-111"},type:"SENT",createTime:e().format("HH:mm"),message:`親愛的會員您好，邀請您參加活動，若想參加請回覆 12:00pm
親愛的會員您好，邀請您參加活動，若想參加請回覆 12:00pm`},{key:"2",type:"GET",phone:void 0,createTime:e().format("HH:mm"),message:"是的，我想參加活動"},{key:"3",type:"GET",phone:void 0,createTime:e().format("HH:mm"),message:`何小偉 
 kkk@gmail.com`},{key:"4",phone:{key:"0935-111-111",label:"0935-111-111"},type:"SENT",createTime:e().format("HH:mm"),message:"您好，請回覆您的姓名與Email"}],今天:[{key:"1",type:"SENT",phone:{key:"0935-111-111",label:"0935-111-111"},createTime:e().format("HH:mm"),message:`親愛的會員您好，邀請您參加活動，若想參加請回覆 12:00pm
親愛的會員您好，邀請您參加活動，若想參加請回覆 12:00pm`},{key:"2",type:"GET",phone:{key:"0935-111-111",label:"0935-111-111"},createTime:e().format("HH:mm"),message:"是的，我想參加活動"},{key:"3",type:"GET",phone:{key:"0935-111-111",label:"0935-111-111"},createTime:e().format("HH:mm"),message:`何小偉 
 kkk@gmail.com`},{key:"4",type:"SENT",phone:{key:"0935-111-111",label:"0935-111-111"},createTime:e().format("HH:mm"),message:"您好，請回覆您的姓名與Email"}]};function Ue(){const y=ce(),{list:k,pagination:p,setResponseList:h}=le();return{getChatMessages:async i=>{const u=(i.current-1)*i.pageSize,L=Math.ceil(U.length/i.pageSize);h({total:U.length,pages:L,current:i.current,pageSize:i.pageSize,records:U.slice(u,i.current*i.pageSize)})},chatMessages:k,pagination:p,getChatMessageHistory:async i=>(console.log(i),je),updateChatMessageUnRead:async i=>{i.unreadCount>0&&(y.updateUnReadCount(0),k.value=k.value.map(u=>({...u,...u.key===i.key&&{unreadCount:0}})))}}}const Ge=a("span",{"text-24px":"","line-height-28px":"","mr-12px":"","mb-0":"","font-700":"","text-sms-grayscale-100":""},"雙向訊息",-1),$e=a("span",{"text-sm":"","text-sms-primary-blue-80":"","font-400":""},"※不區分帳號是否使用共用門號，只認發送門號全部顯示",-1),ze={class:"pt-4 flex items-center pb-3"},Ae=["onClick"],Ve={class:"flex flex-col gap-4"},Fe={class:"flex justify-between items-center mb-2"},Pe={class:"font-600 text-sm pe-2"},Ie={key:0,class:"text-xs bg-sms-green-30 px-2 py-1 rounded-2 text-sms-green-80"},Oe={key:1,class:"text-xs bg-sms-light-red-20 px-2 py-1 rounded-2 text-sms-light-red-70"},We={class:"text-sms-grayscale-60 font-500 text-xs"},qe={class:"font-400 text-sm text-sms-grayscale-80 tracking-[0.02em] whitespace-pre-wrap line-clamp-2"},Ke={class:"text-end py-4"},Xe=a("br",null,null,-1),Je={class:"flex justify-between items-center border-b-solid border-b-1 border-b-sms-light-gray-60 pb-4"},Qe={class:"flex flex-col"},Ze=a("span",{class:"font-400 text-sm tracking-[0.02em] pe-2 text-sms-grayscale-80"},"接收門號",-1),et={href:"javascript:;"},tt=a("span",null,"檢視三個月內，與該門號的所有雙向訊息",-1),st={class:"font-inter font-400 text-base"},at={href:"javascript:;"},nt=a("span",null,"下載三年內，與該門號的雙向訊息紀錄",-1),ot={key:0,id:"chat-message-content",class:"pt-4"},rt={class:"text-center mb-4"},lt={class:"text-sm tracking-[0.02em] text-sms-grayscale-0 bg-sms-grayscale-40 rounded-38px px-2 py-1.5"},it={class:"text-sms-grayscale-60 text-sm font-400 font-inter text-sm text-right"},mt={class:"text-xs font-500 text-sms-grayscale-40"},ct={class:"text-end"},Dt=Te({__name:"index",setup(y){e.extend(fe),e.extend(oe);const k=we(),p=E(),h=E(),v=E(),b=[{value:"READ",label:G.READ},{value:"UNREAD",label:G.UNREAD}],{getChatMessages:c,pagination:i,chatMessages:u,getChatMessageHistory:L,updateChatMessageUnRead:P}=Ue(),T=E(),m=E({keyword:"",status:void 0,phone:"",sendDate:void 0});Ce(()=>{N()});async function N(l=1,s=10){const M={current:l,pageSize:s,...n(m)};await c(M)}function I(l,s){console.log(l,s),N(l,s??10)}function O(){var l;N(1),(l=v.value)==null||l.hide()}async function W(l){p.value=l,await P(l),T.value=await L(l.key),await Ne();const s=document.getElementById("message-content");s&&(s.scrollTop=s.scrollHeight)}function q(l){const s=e().subtract(3,"month");return l.isBefore(s)||l>=e()}const K=ue(),{data:X,close:J}=He({name:"in-chat-message-page"});Ee(X,async l=>{console.log(l),K.success({message:"訊息回覆成功",placement:"top"})}),Se(()=>{J()});function $(l,s){let M=null;if(s&&T.value){const x=Object.entries(T.value);M=x[x.length-1].reverse()[0].filter(B=>B.type!=="GET").reverse()[0].phone.key}const w=k.resolve({name:"MessageSendingGeneralCreate",query:{isRe:"true",...l&&{recipientsPhone:l.replace(/-/g,"")},...M!==null&&{rePhone:M}}});window.open(w.href,"_blank")}return(l,s)=>{const M=ye,w=_e,x=he,z=Me,B=xe,C=pe,Q=De,Z=ke,ee=ie,H=de,te=me,A=ve,se=re,ae=ne;return f(),Re(ae,{title:"雙向訊息"},{title:t(()=>[Ge,$e]),default:t(()=>[o(se,{"show-right-empty":!n(p)},{leftTop:t(()=>[a("div",ze,[o(ee,{ref_key:"filterKeywordInputRef",ref:v,modelValue:n(m).keyword,"onUpdate:modelValue":s[4]||(s[4]=r=>n(m).keyword=r),height:"40px",class:"flex-1 me-2",placeholder:"搜尋訊息內容",onClearFilter:s[5]||(s[5]=()=>{m.value={...n(m),phone:"",status:void 0,sendDate:void 0,keyword:""}})},{filterForm:t(()=>[o(Z,{ref_key:"formRef",ref:h,layout:"vertical",model:n(m),autocomplete:"off"},{default:t(()=>[o(Q,{gutter:[16,12]},{default:t(()=>[o(x,{span:24},{default:t(()=>[o(w,{label:"訊息狀態",valueed:n(be)(n(m).status,b)},{default:t(()=>[o(M,{value:n(m).status,"onUpdate:value":s[0]||(s[0]=r=>n(m).status=r),options:b,"max-tag-count":2,"show-arrow":!0,"show-search":!1,class:"w-full"},null,8,["value"])]),_:1},8,["valueed"])]),_:1}),o(x,{span:24},{default:t(()=>[o(w,{label:"接收門號",valueed:n(m).phone},{default:t(()=>[o(z,{value:n(m).phone,"onUpdate:value":s[1]||(s[1]=r=>n(m).phone=r)},null,8,["value"])]),_:1},8,["valueed"])]),_:1}),o(x,{span:24},{default:t(()=>[o(w,{label:"訊息發送日期",valueed:n(m).sendDate},{default:t(()=>[o(B,{value:n(m).sendDate,"onUpdate:value":s[2]||(s[2]=r=>n(m).sendDate=r),class:"w-full",placement:"topLeft",format:"YYYY-MM-DD","value-format":"YYYY/MM/DD","disabled-date":q},null,8,["value"])]),_:1},8,["valueed"])]),_:1}),o(x,{span:24,class:"text-center"},{default:t(()=>[o(C,{status:"small2",class:"me-5",onClick:s[3]||(s[3]=r=>{var _;return(_=n(v))==null?void 0:_.hide()})},{default:t(()=>[D(" 取消 ")]),_:1}),o(C,{status:"small1",onClick:O},{default:t(()=>[D(" 確定 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),o(C,{status:"small1",onClick:s[6]||(s[6]=r=>$())},{icon:t(()=>[o(H,{name:"plus",width:"16px"})]),default:t(()=>[D(" 新增訊息 ")]),_:1})])]),left:t(()=>[a("ul",null,[(f(!0),g(S,null,j(n(u),r=>{var _;return f(),g("li",{key:r.key,class:R(["p-4 border-b-solid border-b-1 border-b-sms-light-gray-60 last:mb-2 cursor-pointer",{"bg-sms-bg-light-mode-gray":r.key===((_=n(p))==null?void 0:_.key)}]),onClick:d=>W(r)},[a("div",Ve,[a("div",Fe,[a("div",null,[a("span",Pe,Y(r.phone),1),r.unreadCount===0?(f(),g("span",Ie,"已讀")):(f(),g("span",Oe,"未讀 "+Y(r.unreadCount),1))]),a("span",We,Y(n(e)(r.createTime).isToday()?"今天":n(e)(r.createTime).format("YYYY/MM/DD")),1)]),a("div",qe,Y(r.content),1)])],10,Ae)}),128))])]),leftBottom:t(()=>[a("div",Ke,[o(te,{pagination:n(i),onChange:I},null,8,["pagination"])])]),rightEmptyMessage:t(()=>[D(" 點擊左側接收門號列表"),Xe,D("檢視雙向訊息 ")]),rightTop:t(()=>{var r;return[a("div",Je,[a("div",Qe,[a("div",null,[Ze,o(A,{placement:"top","get-popup-container":n(F)},{title:t(()=>[tt]),default:t(()=>[a("a",et,[o(H,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),a("div",st,Y((r=n(p))==null?void 0:r.phone),1)]),a("div",null,[o(C,{status:"small2",class:"me-2"},{icon:t(()=>[o(H,{name:"download",width:"16px"})]),default:t(()=>[D(" 下載CSV ")]),_:1}),o(A,{placement:"topRight","get-popup-container":n(F),"merged-arrow":!0},{title:t(()=>[nt]),default:t(()=>[a("a",at,[o(H,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])])])]}),right:t(()=>[n(T)?(f(),g("div",ot,[(f(!0),g(S,null,j(Object.entries(n(T)),([r,_])=>(f(),g(S,{key:r},[a("div",rt,[a("span",lt,Y(r),1)]),(f(!0),g(S,null,j(_,d=>{var V;return f(),g("div",{key:d.key,class:R(["flex flex-col mb-4",{"me-20 ":d.type==="GET","ms-20 ":d.type==="SENT"}])},[a("div",it,Y((V=d==null?void 0:d.phone)==null?void 0:V.label),1),a("div",{class:R(["flex w-full items-end justify-end gap-2",{"flex-row-reverse ":d.type==="GET"}])},[a("span",mt,Y(d.createTime),1),a("div",{class:R(["bg-sms-grayscale-20 py-3 px-3 rounded-2 whitespace-pre-wrap text-17px",{"bg-sms-primary-blue-20":d.type==="SENT"}])},Y(d.message),3)],2)],2)}),128))],64))),128))])):Le("",!0)]),rightBottom:t(()=>[a("div",ct,[o(C,{status:"small1",onClick:s[7]||(s[7]=r=>{var _;return $((_=n(p))==null?void 0:_.phone,!0)})},{icon:t(()=>[o(H,{name:"edit",width:"16px"})]),default:t(()=>[D(" 回覆訊息 ")]),_:1})])]),_:1},8,["show-right-empty"])]),_:1})}}});export{Dt as default};
