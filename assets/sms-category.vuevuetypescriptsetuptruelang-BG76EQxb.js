import{_ as _e}from"./index.vuevuetypestyleindex0lang-C1xmgeFk.js";import{_ as fe}from"./index-BTSAuDsF.js";import{_ as W}from"./index.vuevuetypescriptsetuptruelang-JVP7TRv3.js";import{j as X,_ as ye}from"./index-DiogPAzz.js";import{d as J,r as I,f as v,W as d,_ as A,$ as o,k as a,ab as ge,u as t,H as Z,D as ve,o as ke,a0 as xe,X as h,G as p,E as we,a4 as z,Y as k,F as Q,a3 as F,m as Ce,A as be}from"./vue-BvWPEeCa.js";import{O as ee,P as G,Q as he,I as te,o as Ne,p as ae,s as se,F as oe,z as ne,G as Re}from"./antd-BeRLmHJE.js";import{u as le}from"./sms-category-DTXfBY41.js";import{_ as Te}from"./request-CdXHKby5.js";const Ye=J({__name:"sms-category-create",props:{saveCallbck:{type:Function,required:!0}},setup(H,{expose:O}){const x=H,N=X(),{checkSmsCategoryExist:$,createSmsCategory:P}=le(),r={categoryName:""},f=I(ee(r)),T=I({categoryName:[{async validator(Y,i){if(G(i))return Promise.reject("請輸入訊息類別");const w=await $(i);return console.log(w),w?Promise.reject(`系統中已有「${i}」，請勿重複新增`):Promise.resolve()},trigger:"blur"}]}),{validateInfos:K,resetFields:m,validate:U}=he(f,T),n=v(!1);async function j(){m(r),n.value=!0}function _(){U().then(async()=>{var i;((i=(await P(f.categoryName)).data)==null?void 0:i.status)==="success"&&(N.success({message:"訊息類別新增成功",placement:"top"}),x.saveCallbck(),n.value=!1)})}return O({show:j}),(Y,i)=>{const w=te,V=Ne,R=ae,E=W,y=se,B=oe,L=ne;return d(),A(L,{open:t(n),"onUpdate:open":i[1]||(i[1]=C=>Z(n)?n.value=C:null),title:"新增訊息類別",centered:"",width:"440px","cancel-text":"取消","ok-text":"確定",onOk:_},{default:o(()=>[a(B,{class:"px-24px",layout:"vertical",autocomplete:"off",onSubmit:_},{default:o(()=>[a(y,{gutter:[16,0]},{default:o(()=>[a(R,{span:24},{default:o(()=>[a(V,ge({label:"訊息類別"},t(K).categoryName,{required:"",extra:"15字以內"}),{default:o(()=>[a(w,{value:t(f).categoryName,"onUpdate:value":i[0]||(i[0]=C=>t(f).categoryName=C),placeholder:"請輸入訊息類別",maxlength:15},null,8,["value"])]),_:1},16)]),_:1}),a(E,{class:"hidden","html-type":"submit"})]),_:1})]),_:1})]),_:1},8,["open"])}}}),De={class:"flex justify-between px-2 items-center mb-2"},Me={key:1},Se={key:1},Fe={key:0},Ie={class:"editable-cell-wrapper"},Oe={class:"text-sms-status-alert-red text-xs"},$e={key:1,class:"editable-cell-wrapper"},Pe=k("div",{class:"text-center px-30px py-20px w-328px text-base mx-auto"},[p(" 您選擇的訊息類別將永久刪除。"),k("br"),p(" 原本屬於該訊息類別的自訂訊息，"),k("br"),p(" 將改為未分類狀態。 ")],-1),ze=J({__name:"sms-category",setup(H){const{getSmsCategory:O,smsCategory:x,pagination:N,updateSmsCategory:$,deleteSmsCategory:P}=le(),r=I({}),f=v(!1);ve(async()=>{_()}),ke(()=>{f.value=!0});const T=X(),K=[{title:"訊息類別",dataIndex:"categoryName",key:"categoryName",sorter:!0,width:"320px"},{title:"訊息數量",dataIndex:"smsCount",key:"smsCount",sorter:!0,width:"160px",align:"right"},{title:"建立時間",dataIndex:"createTime",key:"createTime",defaultSortOrder:"descend",sorter:!0,width:"160px"},{title:"修改時間",dataIndex:"updateTime",key:"updateTime",sorter:!0}],m=I({selectedRowKeys:[],selectedRows:[],loading:!1});function U(s,e){console.log("selectedRowKeys changed: ",s,e),m.selectedRowKeys=s,m.selectedRows=e}const n=v({sortField:"createTime",sortOrder:"descend",createTime:void 0,updateTime:void 0,keyword:""}),j=v();async function _(s=1,e=10){const u={current:s,pageSize:e,...t(n)};await O(u)}function Y(s){r[s]={...ee(x.value.filter(e=>s===e.key)[0]),msg:""}}async function i(s){var g;const e=r[s];if(G(e.categoryName)){r[s].msg="請輸入訊息類別";return}x.value.find(b=>e.categoryName===b.categoryName&&e.key!==b.key)?r[s].msg=`系統中已有「${r[s].categoryName}」，請勿重複新增`:((g=(await $(e.key,e.categoryName)).data)==null?void 0:g.status)==="success"&&(Object.assign(x.value.filter(D=>s===D.key)[0],e),delete r[s],T.success({message:"訊息類別編輯成功",placement:"top"}))}async function w(s,e,u){console.log("sorter:",u),n.value=Object.assign(n.value,{sortField:u.field,sortOrder:u.order}),await _(N.value.current,N.value.pageSize)}async function V(s,e){await _(s,e)}const R=v(null);function E(){var s;_(1),(s=R.value)==null||s.hide()}const y=v(!1);function B(){y.value=!0}async function L(){var e;((e=(await P(m.selectedRowKeys)).data)==null?void 0:e.status)==="success"&&(T.success({message:"訊息類別刪除成功",placement:"top"}),y.value=!1,m.selectedRowKeys=[],m.selectedRows=[])}const C=v(null);function re(s){return{disabled:s.key==="0"}}return(s,e)=>{const u=ye,g=W,b=Re,D=fe,q=ae,ie=se,ce=oe,ue=xe("RouterLink"),me=te,de=_e,pe=ne;return d(),h(Q,null,[t(f)?(d(),A(we,{key:0,to:"#extraContent"},[a(g,{status:"small1",onClick:e[0]||(e[0]=c=>{var l;return(l=t(C))==null?void 0:l.show()})},{icon:o(()=>[a(u,{name:"plus",width:"16px"})]),default:o(()=>[p(" 新增訊息類別 ")]),_:1})])):z("",!0),k("div",De,[k("div",null,[a(g,{status:"small2",class:"me-2",disabled:t(m).selectedRowKeys.length===0,onClick:B},{icon:o(()=>[a(u,{name:"delete",width:"16px"})]),default:o(()=>[p(" 刪除 ")]),_:1},8,["disabled"])]),a(Te,{ref_key:"filterKeywordInputRef",ref:R,modelValue:t(n).keyword,"onUpdate:modelValue":e[4]||(e[4]=c=>t(n).keyword=c),class:"w-440px h-40px",placeholder:"搜尋訊息類別",onClearFilter:e[5]||(e[5]=()=>{n.value={...t(n),keyword:"",createTime:void 0,updateTime:void 0}})},{filterForm:o(()=>[a(ce,{ref_key:"formRef",ref:j,layout:"vertical",model:t(n),autocomplete:"off"},{default:o(()=>[a(ie,{gutter:[16,12]},{default:o(()=>[a(q,{span:24},{default:o(()=>[a(D,{label:"建立時間",valueed:t(n).createTime},{default:o(()=>[a(b,{value:t(n).createTime,"onUpdate:value":e[1]||(e[1]=c=>t(n).createTime=c),class:"w-full",placement:"topLeft",format:"YYYY-MM-DD","value-format":"YYYY/MM/DD"},null,8,["value"])]),_:1},8,["valueed"])]),_:1}),a(q,{span:24},{default:o(()=>[a(D,{label:"修改時間",valueed:t(n).updateTime},{default:o(()=>[a(b,{value:t(n).updateTime,"onUpdate:value":e[2]||(e[2]=c=>t(n).updateTime=c),class:"w-full",placement:"topLeft",format:"YYYY-MM-DD","value-format":"YYYY/MM/DD"},null,8,["value"])]),_:1},8,["valueed"])]),_:1}),a(q,{span:24,class:"text-center"},{default:o(()=>[a(g,{status:"small2",class:"me-5",onClick:e[3]||(e[3]=c=>{var l;return(l=t(R))==null?void 0:l.hide()})},{default:o(()=>[p(" 取消 ")]),_:1}),a(g,{status:"small1",onClick:E},{default:o(()=>[p(" 確定 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),a(de,{"data-source":t(x),columns:K,size:"small","show-sorter-tooltip":!1,"row-selection":{selectedRowKeys:t(m).selectedRowKeys,onChange:U,getCheckboxProps:re},pagination:{...t(N)},onChange:w,onChangePagination:V},{bodyCell:o(({column:c,record:l,text:M})=>[c.dataIndex==="smsCount"?(d(),h(Q,{key:0},[M>0?(d(),A(ue,{key:0,href:"javascript:;",class:"text-sm text-sms-primary-blue-80 underline underline-2 underline-sms-primary-blue-80 font-400",hover:"text-sms-primary-blue-80 underline underline-2 underline-sms-primary-blue-80",to:{name:"CustomMessage",query:{tabActived:"customMessage",categoryId:l.key}}},{default:o(()=>[p(F(M),1)]),_:2},1032,["to"])):(d(),h("span",Me,F(M),1))],64)):z("",!0),c.dataIndex==="categoryName"?(d(),h("div",Se,[t(r)[l.key]?(d(),h("div",Fe,[k("div",Ie,[a(me,{value:t(r)[l.key].categoryName,"onUpdate:value":S=>t(r)[l.key].categoryName=S,maxlength:15,status:t(r)[l.key].msg&&!t(G)(t(r)[l.key].msg)?"error":"",onPressEnter:S=>i(l.key)},null,8,["value","onUpdate:value","status","onPressEnter"]),a(u,{name:"save",class:"ms-1 text-sms-primary-blue-80 cursor-pointer",onClick:S=>i(l.key)},null,8,["onClick"])]),k("span",Oe,F(t(r)[l.key].msg),1)])):(d(),h("div",$e,[p(F(M||" ")+" ",1),Ce(a(u,{name:"edit",class:"ms-1 text-sms-primary-blue-80 cursor-pointer",onClick:S=>Y(l.key)},null,8,["onClick"]),[[be,l.key!=="0"]])]))])):z("",!0)]),_:1},8,["data-source","row-selection","pagination"]),a(Ye,{ref_key:"smsCategoryCreateRef",ref:C,"save-callbck":()=>_(1)},null,8,["save-callbck"]),a(pe,{open:t(y),"onUpdate:open":e[6]||(e[6]=c=>Z(y)?y.value=c:null),title:"是否刪除選取的訊息類別？",centered:"","cancel-text":"取消","ok-text":"確定",width:"440px",onOk:L},{default:o(()=>[Pe]),_:1},8,["open"])],64)}}});export{ze as _};
