import{_ as Q}from"./index.vuevuetypestyleindex0lang-C1xmgeFk.js";import{_ as Z}from"./index-BTSAuDsF.js";import{_ as ee,a as te}from"./index.vuevuetypescriptsetuptruelang-B10Rmm3B.js";import{_ as ae}from"./index.vuevuetypescriptsetuptruelang-JVP7TRv3.js";import{h as oe,j as ne,_ as se}from"./index-DiogPAzz.js";import{_ as le}from"./request-CdXHKby5.js";import{u as ue}from"./sms-category-DTXfBY41.js";import{a as de}from"./tools-DuR4KSGu.js";import{u as re}from"./custom-message-BwKx7yft.js";import{d as ie,f as g,ad as ce,ac as me,D as pe,o as _e,r as fe,u as e,W as w,X as Y,_ as ge,k as a,$ as n,G as v,E as ve,a4 as K,Y as x,a3 as ye,H as we,F as xe}from"./vue-BvWPEeCa.js";import{q as ke,p as Ce,I as Re,G as Me,s as Ie,F as be,z as Te}from"./antd-BeRLmHJE.js";const he={class:"flex justify-between px-2 items-center mb-2"},Ye={key:0,class:"line-clamp-2"},Ke=x("div",{class:"text-center px-30px py-20px w-328px text-base mx-auto"}," 您選擇的自訂訊息將永久刪除。 ",-1),ze=ie({__name:"custom-message",setup(De){var b;const{getSmsCategoryOption:D,smsCategoryOption:k}=ue(),{customMessages:C,getCustomMessages:O,pagination:i,deleteCustomMessage:S}=re(),R=g(!1),M=oe(),V=ce(),I=me();pe(async()=>{await D(),m(),M.handleOpenKeys(["/sms-marketing"]),M.handleSelectedKeys(["/sms-marketing/custom-message"])}),_e(()=>{R.value=!0});const F=[{title:"訊息類別",dataIndex:"categoryName",key:"categoryName",sorter:!0,width:"160px"},{title:"訊息名稱",dataIndex:"name",key:"name",sorter:!0,width:"160px"},{title:"訊息內容",dataIndex:"content",key:"content",sorter:!0,width:"265px"},{title:"建立時間",dataIndex:"createTime",key:"createTime",defaultSortOrder:"descend",sorter:!0,width:"180px"},{title:"修改時間",dataIndex:"updateTime",key:"updateTime",sorter:!0,width:"180px"}],u=fe({selectedRowKeys:[],selectedRows:[],loading:!1});function N(l,t){console.log("selectedRowKeys changed: ",l,t),u.selectedRowKeys=l,u.selectedRows=t}const o=g({categoryIds:(b=I.query)!=null&&b.categoryId?I.query.categoryId:[],keyword:"",name:"",content:"",createTime:void 0,updateTime:void 0,sortField:"createTime",sortOrder:"descend"}),U=g();async function m(l=1,t=10){const d={current:l,pageSize:t,...e(o)};await O(d)}async function $(l,t,d){console.log("sorter:",d),o.value=Object.assign(o.value,{sortField:d.field,sortOrder:d.order}),await m(i.value.current,i.value.pageSize)}async function B(l,t){await m(l,t)}function L(){V.push({name:"CustomMessageEdit",params:{id:u.selectedRowKeys[0]}})}const y=g(null);function j(){var l;m(1),(l=y.value)==null||l.hide()}const q=ne(),p=g(!1);function z(){p.value=!0}async function E(){var t;((t=(await S(u.selectedRowKeys)).data)==null?void 0:t.status)==="success"&&(q.success({message:"自訂訊息刪除成功",placement:"top"}),m(i.value.current===1||C.value.length-u.selectedRowKeys.length>1?i.value.current:i.value.current-1,i.value.pageSize),p.value=!1,u.selectedRowKeys=[],u.selectedRows=[])}return(l,t)=>{const d=se,_=ae,G=ee,P=te,H=ke,f=Z,c=Ce,T=Re,h=Me,W=Ie,X=be,A=Q,J=Te;return w(),Y(xe,null,[e(R)?(w(),ge(ve,{key:0,to:"#extraContent"},[a(_,{status:"small1",onClick:t[0]||(t[0]=()=>l.$router.push({name:"CustomMessageCreate"}))},{icon:n(()=>[a(d,{name:"plus",width:"16px"})]),default:n(()=>[v(" 新增自訂訊息 ")]),_:1})])):K("",!0),x("div",he,[x("div",null,[a(_,{status:"small2",class:"me-2",disabled:e(u).selectedRowKeys.length===0||e(u).selectedRowKeys.length>1,onClick:L},{icon:n(()=>[a(d,{name:"edit",width:"16px"})]),default:n(()=>[v(" 編輯 ")]),_:1},8,["disabled"]),a(_,{status:"small2",class:"me-2",disabled:e(u).selectedRowKeys.length===0,onClick:z},{icon:n(()=>[a(d,{name:"delete",width:"16px"})]),default:n(()=>[v(" 刪除 ")]),_:1},8,["disabled"])]),a(le,{ref_key:"filterKeywordInputRef",ref:y,modelValue:e(o).keyword,"onUpdate:modelValue":t[8]||(t[8]=s=>e(o).keyword=s),class:"w-440px h-40px",placeholder:"搜尋訊息類別、名稱和內容",onClearFilter:t[9]||(t[9]=()=>{o.value={...e(o),categoryIds:[],keyword:"",name:"",content:"",createTime:void 0,updateTime:void 0}})},{filterForm:n(()=>[a(X,{ref_key:"formRef",ref:U,layout:"vertical",model:e(o),autocomplete:"off"},{default:n(()=>[a(W,{gutter:[16,12]},{default:n(()=>[a(c,{span:24},{default:n(()=>[a(f,{id:"group",label:"訊息類別",valueed:e(de)(e(o).categoryIds)},{default:n(()=>[a(H,{value:e(o).categoryIds,"onUpdate:value":t[2]||(t[2]=s=>e(o).categoryIds=s),options:e(k),"max-tag-count":2,"show-arrow":!0,mode:"multiple",class:"w-full","option-filter-prop":"label"},{dropdownRender:n(({menuNode:s})=>[a(G,{modelValue:e(o).categoryIds,"onUpdate:modelValue":t[1]||(t[1]=r=>e(o).categoryIds=r),menu:s,options:e(k)},null,8,["modelValue","menu","options"])]),option:n(({value:s,label:r})=>[a(P,{values:e(o).categoryIds,value:s,label:r},null,8,["values","value","label"])]),_:1},8,["value","options"])]),_:1},8,["valueed"])]),_:1}),a(c,{span:24},{default:n(()=>[a(f,{label:"訊息名稱",valueed:e(o).name},{default:n(()=>[a(T,{value:e(o).name,"onUpdate:value":t[3]||(t[3]=s=>e(o).name=s)},null,8,["value"])]),_:1},8,["valueed"])]),_:1}),a(c,{span:24},{default:n(()=>[a(f,{label:"訊息內容",valueed:e(o).content},{default:n(()=>[a(T,{value:e(o).content,"onUpdate:value":t[4]||(t[4]=s=>e(o).content=s)},null,8,["value"])]),_:1},8,["valueed"])]),_:1}),a(c,{span:24},{default:n(()=>[a(f,{label:"建立時間",valueed:e(o).createTime},{default:n(()=>[a(h,{value:e(o).createTime,"onUpdate:value":t[5]||(t[5]=s=>e(o).createTime=s),class:"w-full",placement:"topLeft",format:"YYYY-MM-DD","value-format":"YYYY/MM/DD"},null,8,["value"])]),_:1},8,["valueed"])]),_:1}),a(c,{span:24},{default:n(()=>[a(f,{label:"修改時間",valueed:e(o).updateTime},{default:n(()=>[a(h,{value:e(o).updateTime,"onUpdate:value":t[6]||(t[6]=s=>e(o).updateTime=s),class:"w-full",placement:"topLeft",format:"YYYY-MM-DD","value-format":"YYYY/MM/DD"},null,8,["value"])]),_:1},8,["valueed"])]),_:1}),a(c,{span:24,class:"text-center"},{default:n(()=>[a(_,{status:"small2",class:"me-5",onClick:t[7]||(t[7]=s=>{var r;return(r=e(y))==null?void 0:r.hide()})},{default:n(()=>[v(" 取消 ")]),_:1}),a(_,{status:"small1",onClick:j},{default:n(()=>[v(" 確定 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),a(A,{"data-source":e(C),columns:F,"show-sorter-tooltip":!1,"row-selection":{selectedRowKeys:e(u).selectedRowKeys,onChange:N},pagination:{...e(i)},onChange:$,onChangePagination:B},{bodyCell:n(({column:s,text:r})=>[s.dataIndex==="content"?(w(),Y("div",Ye,ye(r),1)):K("",!0)]),_:1},8,["data-source","row-selection","pagination"]),a(J,{open:e(p),"onUpdate:open":t[10]||(t[10]=s=>we(p)?p.value=s:null),title:"是否刪除選取的自訂訊息？",centered:"","cancel-text":"取消","ok-text":"確定",width:"440px",onOk:E},{default:n(()=>[Ke]),_:1},8,["open"])],64)}}});export{ze as _};
