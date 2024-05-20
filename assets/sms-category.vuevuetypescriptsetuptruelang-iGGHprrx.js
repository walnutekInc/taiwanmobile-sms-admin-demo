import{_ as pe}from"./index.vuevuetypestyleindex0lang-BAtjMpJ7.js";import{_ as _e}from"./index-BxS_4WYd.js";import{_ as W}from"./index.vuevuetypescriptsetuptruelang-BBQ64wtr.js";import{k as X,_ as fe}from"./index-BBYcgvXw.js";import{d as J,r as I,f as v,W as d,_ as A,$ as o,k as a,ab as ye,u as t,H as Z,D as ge,o as ve,a0 as ke,X as b,G as p,E as xe,a4 as z,Y as k,F as Q,a3 as S,m as we,A as Ce}from"./vue-B4jB9Tcu.js";import{P as ee,N as H,Q as be,I as te,n as he,o as ae,r as se,F as oe,O as ne,H as Ne}from"./antd-DY4CO-8O.js";import{u as le}from"./sms-category-lx6Vb9og.js";import{F as Re}from"./request-BYOfeCit.js";const Te=J({__name:"sms-category-create",props:{saveCallbck:{type:Function,required:!0}},setup(G,{expose:O}){const x=G,$=X(),{checkSmsCategoryExist:K,createSmsCategory:P}=le(),r={categoryName:""},_=I(ee(r)),R=I({categoryName:[{async validator(T,c){if(H(c))return Promise.reject("請輸入訊息類別");const w=await K(c);return console.log(w),w?Promise.reject(`系統中已有「${c}」，請勿重複新增`):Promise.resolve()},trigger:"blur"}]}),{validateInfos:U,resetFields:m,validate:V}=be(_,R),n=v(!1);async function j(){m(r),n.value=!0}function f(){V().then(async()=>{var c;((c=(await P(_.categoryName)).data)==null?void 0:c.status)==="success"&&($.success({message:"訊息類別新增成功",placement:"top"}),x.saveCallbck(),n.value=!1)})}return O({show:j}),(T,c)=>{const w=te,h=he,E=ae,y=W,B=se,L=oe,Y=ne;return d(),A(Y,{open:t(n),"onUpdate:open":c[1]||(c[1]=N=>Z(n)?n.value=N:null),title:"新增訊息類別",centered:"",width:"440px","cancel-text":"取消","ok-text":"確定",onOk:f},{default:o(()=>[a(L,{class:"px-24px",layout:"vertical",autocomplete:"off",onSubmit:f},{default:o(()=>[a(B,{gutter:[16,0]},{default:o(()=>[a(E,{span:24},{default:o(()=>[a(h,ye({label:"訊息類別"},t(U).categoryName,{required:"",extra:"15字以內"}),{default:o(()=>[a(w,{value:t(_).categoryName,"onUpdate:value":c[0]||(c[0]=N=>t(_).categoryName=N),placeholder:"請輸入訊息類別",maxlength:15},null,8,["value"])]),_:1},16)]),_:1}),a(y,{class:"hidden","html-type":"submit"})]),_:1})]),_:1})]),_:1},8,["open"])}}}),Ye={class:"flex justify-between px-2 items-center mb-2"},De={key:1},Fe={key:1},Me={key:0},Se={class:"editable-cell-wrapper"},Ie={class:"text-sms-status-alert-red text-xs"},Oe={key:1,class:"editable-cell-wrapper"},$e=k("div",{class:"text-center px-30px py-20px w-328px text-base mx-auto"},[p(" 您選擇的訊息類別將永久刪除。"),k("br"),p(" 原本屬於該訊息類別的自訂訊息，"),k("br"),p(" 將改為未分類狀態。 ")],-1),qe=J({__name:"sms-category",setup(G){const{getSmsCategory:O,smsCategory:x,pagination:$,updateSmsCategory:K,deleteSmsCategory:P}=le(),r=I({}),_=v(!1);ge(async()=>{f()}),ve(()=>{_.value=!0});const R=X(),U=[{title:"訊息類別",dataIndex:"categoryName",key:"categoryName",sorter:!0,width:"320px"},{title:"訊息數量",dataIndex:"smsCount",key:"smsCount",sorter:!0,width:"160px",align:"right"},{title:"建立時間",dataIndex:"createTime",key:"createTime",defaultSortOrder:"descend",sorter:!0,width:"160px"},{title:"修改時間",dataIndex:"updateTime",key:"updateTime",sorter:!0}],m=I({selectedRowKeys:[],selectedRows:[],loading:!1});function V(s,e){console.log("selectedRowKeys changed: ",s,e),m.selectedRowKeys=s,m.selectedRows=e}const n=v({sortField:"createTime",sortOrder:"descend",createTime:void 0,updateTime:void 0,keyword:""}),j=v();async function f(s=1,e=10){const u={current:s,pageSize:e,...t(n)};await O(u)}function T(s){r[s]={...ee(x.value.filter(e=>s===e.key)[0]),msg:""}}async function c(s){var g;const e=r[s];if(H(e.categoryName)){r[s].msg="請輸入訊息類別";return}x.value.find(C=>e.categoryName===C.categoryName&&e.key!==C.key)?r[s].msg=`系統中已有「${r[s].categoryName}」，請勿重複新增`:((g=(await K(e.key,e.categoryName)).data)==null?void 0:g.status)==="success"&&(Object.assign(x.value.filter(D=>s===D.key)[0],e),delete r[s],R.success({message:"訊息類別編輯成功",placement:"top"}))}async function w(s,e,u){console.log("pagination:",s,"sorter:",u),n.value=Object.assign(n.value,{sortField:u.field,sortOrder:u.order}),await f(s.current,s.pageSize)}const h=v(null);function E(){var s;f(1),(s=h.value)==null||s.hide()}const y=v(!1);function B(){y.value=!0}async function L(){var e;((e=(await P(m.selectedRowKeys)).data)==null?void 0:e.status)==="success"&&(R.success({message:"訊息類別刪除成功",placement:"top"}),y.value=!1,m.selectedRowKeys=[],m.selectedRows=[])}const Y=v(null);function N(s){return{disabled:s.key==="0"}}return(s,e)=>{const u=fe,g=W,C=Ne,D=_e,q=ae,re=se,ce=oe,ie=ke("RouterLink"),ue=te,me=pe,de=ne;return d(),b(Q,null,[t(_)?(d(),A(xe,{key:0,to:"#extraContent"},[a(g,{status:"small1",onClick:e[0]||(e[0]=i=>{var l;return(l=t(Y))==null?void 0:l.show()})},{icon:o(()=>[a(u,{name:"plus",width:"16px"})]),default:o(()=>[p(" 新增訊息類別 ")]),_:1})])):z("",!0),k("div",Ye,[k("div",null,[a(g,{status:"small2",class:"me-2",disabled:t(m).selectedRowKeys.length===0,onClick:B},{icon:o(()=>[a(u,{name:"delete",width:"16px"})]),default:o(()=>[p(" 刪除 ")]),_:1},8,["disabled"])]),a(Re,{ref_key:"filterKeywordInputRef",ref:h,modelValue:t(n).keyword,"onUpdate:modelValue":e[4]||(e[4]=i=>t(n).keyword=i),class:"w-440px h-40px",placeholder:"搜尋訊息類別",onClearFilter:e[5]||(e[5]=()=>{n.value={...t(n),keyword:"",createTime:void 0,updateTime:void 0}})},{filterForm:o(()=>[a(ce,{ref_key:"formRef",ref:j,layout:"vertical",model:t(n),autocomplete:"off"},{default:o(()=>[a(re,{gutter:[16,12]},{default:o(()=>[a(q,{span:24},{default:o(()=>[a(D,{label:"建立時間",valueed:t(n).createTime},{default:o(()=>[a(C,{value:t(n).createTime,"onUpdate:value":e[1]||(e[1]=i=>t(n).createTime=i),class:"w-full",placement:"topLeft",format:"YYYY-MM-DD","value-format":"YYYY/MM/DD"},null,8,["value"])]),_:1},8,["valueed"])]),_:1}),a(q,{span:24},{default:o(()=>[a(D,{label:"修改時間",valueed:t(n).updateTime},{default:o(()=>[a(C,{value:t(n).updateTime,"onUpdate:value":e[2]||(e[2]=i=>t(n).updateTime=i),class:"w-full",placement:"topLeft",format:"YYYY-MM-DD","value-format":"YYYY/MM/DD"},null,8,["value"])]),_:1},8,["valueed"])]),_:1}),a(q,{span:24,class:"text-center"},{default:o(()=>[a(g,{status:"small2",class:"me-5",onClick:e[3]||(e[3]=i=>{var l;return(l=t(h))==null?void 0:l.hide()})},{default:o(()=>[p(" 取消 ")]),_:1}),a(g,{status:"small1",onClick:E},{default:o(()=>[p(" 確定 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),a(me,{"data-source":t(x),columns:U,size:"small","show-sorter-tooltip":!1,"row-selection":{selectedRowKeys:t(m).selectedRowKeys,onChange:V,getCheckboxProps:N},pagination:{...t($)},onChange:w},{bodyCell:o(({column:i,record:l,text:F})=>[i.dataIndex==="smsCount"?(d(),b(Q,{key:0},[F>0?(d(),A(ie,{key:0,href:"javascript:;",class:"text-sm text-sms-primary-blue-80 underline underline-2 underline-sms-primary-blue-80 font-400",hover:"text-sms-primary-blue-80 underline underline-2 underline-sms-primary-blue-80",to:{name:"CustomMessage",query:{tabActived:"customMessage",categoryId:l.key}}},{default:o(()=>[p(S(F),1)]),_:2},1032,["to"])):(d(),b("span",De,S(F),1))],64)):z("",!0),i.dataIndex==="categoryName"?(d(),b("div",Fe,[t(r)[l.key]?(d(),b("div",Me,[k("div",Se,[a(ue,{value:t(r)[l.key].categoryName,"onUpdate:value":M=>t(r)[l.key].categoryName=M,"max-length":15,status:t(r)[l.key].msg&&!t(H)(t(r)[l.key].msg)?"error":"",onPressEnter:M=>c(l.key)},null,8,["value","onUpdate:value","status","onPressEnter"]),a(u,{name:"save",class:"ms-1 text-sms-primary-blue-80 cursor-pointer",onClick:M=>c(l.key)},null,8,["onClick"])]),k("span",Ie,S(t(r)[l.key].msg),1)])):(d(),b("div",Oe,[p(S(F||" ")+" ",1),we(a(u,{name:"edit",class:"ms-1 text-sms-primary-blue-80 cursor-pointer",onClick:M=>T(l.key)},null,8,["onClick"]),[[Ce,l.key!=="0"]])]))])):z("",!0)]),_:1},8,["data-source","row-selection","pagination"]),a(Te,{ref_key:"smsCategoryCreateRef",ref:Y,"save-callbck":()=>f(1)},null,8,["save-callbck"]),a(de,{open:t(y),"onUpdate:open":e[6]||(e[6]=i=>Z(y)?y.value=i:null),title:"是否刪除選取的訊息類別？",centered:"","cancel-text":"取消","ok-text":"確定",width:"440px",onOk:L},{default:o(()=>[$e]),_:1},8,["open"])],64)}}});export{qe as _};
