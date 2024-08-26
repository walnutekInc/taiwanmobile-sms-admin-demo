import{_ as Me}from"./index.vuevuetypescriptsetuptruelang-CcmgSxL_.js";import{_ as he}from"./index.vuevuetypestyleindex0lang-BO6dExgl.js";import{j as Ne,_ as ue,R as U}from"./index-C6U9VfRL.js";import{_ as $e}from"./index-kFdz3JIc.js";import{_ as Ie,a as Pe}from"./index.vuevuetypescriptsetuptruelang-C-Xp12f7.js";import{_ as xe}from"./index.vuevuetypescriptsetuptruelang-CL8f4-88.js";import{p as re,G as se,n as Z,J as Ce,o as we,y as me,I as be,E as pe,Z as Te,Q as ke,F as de,x as Be,$ as Ee}from"./antd-DnZDPeHZ.js";import{b as L,a as Ue}from"./index.esm-BLrWqtwX.js";import{F as Ve}from"./index-CeCoPzSI.js";import{d as oe,r as ee,f as M,c as ae,W as P,_ as Y,$ as a,Y as v,k as t,u as e,ai as Re,H as _e,o as fe,X,G as H,aj as Oe,ak as Fe,a3 as Q,F as ie,a9 as We,a4 as ne,ab as I}from"./vue-BTNAaAVH.js";import{u as ye}from"./customer-BhwJ96d3.js";import{u as qe}from"./request-BA8BSXXG.js";import{b as te}from"./tools-DInPKiE1.js";import"./context-D9_d1X1o.js";import"./index.vuevuetypestyleindex0lang-Cibwl0fk.js";import"./index.vuevuetypescriptsetuptruelang-Kz8z1UAe.js";const Ke={class:"px-24px"},De=oe({name:"SelectCustomer",__name:"select-customer",emits:["importCustomerData"],setup(K,{expose:F,emit:B}){const D=B,{allCustomerDataList:E,getAllCustomers:_,allCustomerPagination:d}=ye(),A=ee({selectedRowKeys:[],selectedRows:[],loading:!1}),c=[{title:"公司名稱",dataIndex:"companyName",key:"companyName",defaultSortOrder:"descend",sorter:!0,maxWidth:190},{title:"統一編號",dataIndex:"unifiedNumber",key:"unifiedNumber",sorter:!0,width:"120px"},{title:"公司帳號",dataIndex:"companyAccount",key:"companyAccount",sorter:!0,width:"130px"}],o=M({keyword:"",sortField:"companyName",sortOrder:"descend"}),$=ae(()=>{const x=(d.value.current-1)*d.value.pageSize;return E.value.slice(x,d.value.current*d.value.pageSize)});async function g(x,u){d.value={...d.value,current:x,pageSize:u}}async function b(x=1,u=10){const n={current:x,pageSize:u,...e(o)};await _(n)}function J(x,u){console.log("selectedRowKeys changed: ",x),A.selectedRowKeys=x,A.selectedRows=u}const R=M(!1);async function W(x){x&&(A.selectedRowKeys=[x]),b(),R.value=!0}function z(){R.value=!1,D("importCustomerData",A.selectedRows[0])}return F({show:W}),(x,u)=>{const n=Ve,l=he,f=re;return P(),Y(f,{open:e(R),"onUpdate:open":u[2]||(u[2]=h=>_e(R)?R.value=h:null),title:"選擇客戶資料",centered:"","cancel-text":"取消","ok-text":"確定",width:"600px",onOk:z},{default:a(()=>[v("div",Ke,[t(n,{modelValue:e(o).keyword,"onUpdate:modelValue":u[0]||(u[0]=h=>e(o).keyword=h),"show-filter-btn":!1,placeholder:"搜尋公司名稱、公司帳號",class:"mb-2",onKeydown:u[1]||(u[1]=Re(h=>b(1,e(d).pageSize),["enter"]))},null,8,["modelValue"]),t(l,{class:"modal-table","data-source":e($),columns:c,"show-sorter-tooltip":!1,"row-selection":{columnTitle:"單選",columnWidth:"50px",type:"radio",selectedRowKeys:e(A).selectedRowKeys,onChange:J,preserveSelectedRowKeys:!0},pagination:{...e(d)},onChangePagination:g},null,8,["data-source","row-selection","pagination"])])]),_:1},8,["open"])}}}),Je={class:"flex gap-4 mb-4 justify-start"},je={class:"flex flex-col gap-1 min-w-120px"},Le=v("span",null,"公司帳號",-1),ze={class:"flex flex-col gap-1 min-w-120px"},Ge=v("span",null,"公司名稱",-1),He={class:"flex flex-col gap-1 min-w-120px"},Qe=v("span",null,"公司屬性",-1),Xe={key:0,class:"text-sms-status-alert-red ms-2"},Ye=oe({__name:"main-account-create-form",setup(K,{expose:F}){const B=M(null),{getCompanyAttrOption:D,companyAttrOption:E,createMainAccountByCustomerKey:_}=ye();fe(()=>D());const d=M(!1),A=M(),o=ee(se({customerKey:"",mainAccount:[{mainAccount:"",department:"",contactPerson:"",countryCode:"+886",phone:"",email:"",note:""}]})),$=M(!1),g=ee({customerKey:[{message:"請選擇公司/單位",required:!0,trigger:"blur"}],mainAccount:[{validator:async(s,r)=>{$.value=!0;let m=0;for(const y of r){const q=y.countryCode,T=y.phone,S=y.mainAccount,j=y.contactPerson,C=y.email;!Z(T)&&!Z(q)&&!Z(S)&&!Z(j)&&!Z(C)&&m++}return m===0?($.value=!1,Promise.reject("至少需有一位主帳號資訊")):Promise.resolve()},trigger:"blur"}]}),{validateInfos:b,resetFields:J,validate:R}=Ce(o,g);function W(s){return{[`mainAccount.${s}.mainAccount`]:[{validator:async(r,m)=>($.value||await L().required("請輸入主帳號").validate(m),Promise.resolve()),trigger:"blur"}],[`mainAccount.${s}.contactPerson`]:[{validator:async(r,m)=>($.value||await L().required("請輸入聯絡人姓名").validate(m),Promise.resolve()),trigger:"blur"}],[`mainAccount.${s}.phone`]:[{validator:async(r,m)=>($.value||await L().required("請輸入手機號碼").test("checkPhone","格式有誤",async q=>await Ue().isValid(q,{strict:!1})?o.mainAccount[s].countryCode==="+886"?await L().matches(/9\d{8}/).isValid(q,{strict:!1}):!0:!1).validate(m),Promise.resolve()),trigger:"blur"}],[`mainAccount.${s}.email`]:[{validator:async(r,m)=>($.value||await L().required("請輸入Email").email("格式有誤").validate(m),Promise.resolve()),trigger:"blur"}]}}function z(){A.value=void 0,Object.keys(g).forEach(s=>{s.startsWith("mainAccount.")&&delete g[s]}),J(),d.value=!0,o.mainAccount.forEach((s,r)=>{Object.assign(g,W(r))})}const x=Ne();function u(){R().then(async()=>{var s;A.value&&((s=(await _(A.value.key,o.mainAccount)).data)==null?void 0:s.status)==="success"&&(x.success({message:"主帳號新增成功",placement:"top"}),d.value=!1)}).catch(s=>{console.error(s)})}function n(s,r){const y=s.target.value;/09\d{2}/.test(y)&&(o.mainAccount[r].phone=y.replace("0",""))}function l(s){var r;if(s)return((r=E.value.find(m=>m.value===s))==null?void 0:r.label)??""}function f(){const s=se(o.mainAccount);s.push({mainAccount:"",department:"",contactPerson:"",countryCode:"+886",phone:"",email:"",note:""}),o.mainAccount=s,o.mainAccount.forEach((r,m)=>{Object.assign(g,W(m))})}function h(s){Object.keys(g).forEach(r=>{r.startsWith("mainAccount.")&&delete g[r]}),o.mainAccount.splice(s,1),o.mainAccount.forEach((r,m)=>{Object.assign(g,W(m))})}function O(s){o.customerKey=s.key,A.value=s}return F({show:z}),(s,r)=>{const m=xe,y=we,q=ue,T=me,S=be,j=pe,C=Te,i=ke,p=de,le=re;return P(),X(ie,null,[t(le,{open:e(d),"onUpdate:open":r[1]||(r[1]=G=>_e(d)?d.value=G:null),centered:"",width:"600px","ok-text":"確定","cancel-text":"取消",onOk:u},{title:a(()=>[H(" 新增主帳號 ")]),default:a(()=>[t(p,{model:e(o),class:"px-24px py-20px",layout:"vertical",autocomplete:"off"},{default:a(()=>{var G,ve,Ae;return[t(y,Oe(Fe(e(b).customerKey)),{default:a(()=>[t(m,{class:"mb-2",onClick:r[0]||(r[0]=N=>{var k;return(k=e(B))==null?void 0:k.show()})},{default:a(()=>[H(" 選擇公司/單位 ")]),_:1})]),_:1},16),v("div",Je,[v("div",je,[Le,v("span",null,Q(((G=e(A))==null?void 0:G.companyAccount)??"-"),1)]),v("div",ze,[Ge,v("span",null,Q(((ve=e(A))==null?void 0:ve.companyName)??"-"),1)]),v("div",He,[Qe,v("span",null,Q((Ae=e(A))!=null&&Ae.companyAttr?l(e(A).companyAttr):"-"),1)])]),(P(!0),X(ie,null,We(e(o).mainAccount,(N,k)=>(P(),X("div",{key:k,class:"p-4 pb-6 bg-sms-bg-light-mode-gray rounded-3 w-full mb-4"},[t(j,{gutter:16},{default:a(()=>[e(o).mainAccount.length>1?(P(),Y(T,{key:0,span:24,class:"text-end"},{default:a(()=>[t(q,{name:"close",class:"cursor-pointer",onClick:w=>h(k)},null,8,["onClick"])]),_:2},1024)):ne("",!0),t(T,{span:12},{default:a(()=>[t(y,I({label:"主帳號",ref_for:!0},e(b)[`mainAccount.${k}.mainAccount`],{required:""}),{default:a(()=>[t(S,{value:N.mainAccount,"onUpdate:value":w=>N.mainAccount=w,placeholder:"請輸入主帳號"},null,8,["value","onUpdate:value"])]),_:2},1040)]),_:2},1024),t(T,{span:12},{default:a(()=>[t(y,I({label:"單位",ref_for:!0},e(b)[`mainAccount.${k}.department`]),{default:a(()=>[t(S,{value:N.department,"onUpdate:value":w=>N.department=w,placeholder:"請輸入單位"},null,8,["value","onUpdate:value"])]),_:2},1040)]),_:2},1024)]),_:2},1024),t(j,{gutter:16},{default:a(()=>[t(T,{span:12},{default:a(()=>[t(y,I({label:"聯絡人姓名",ref_for:!0},e(b)[`mainAccount.${k}.contactPerson`],{required:""}),{default:a(()=>[t(S,{value:N.contactPerson,"onUpdate:value":w=>N.contactPerson=w,placeholder:"請輸入聯絡人姓名"},null,8,["value","onUpdate:value"])]),_:2},1040)]),_:2},1024),t(T,{span:12},{default:a(()=>[t(y,I({label:"手機門號",ref_for:!0},e(b)[`mainAccount.${k}.phone`],{extra:N.countryCode==="+886"?"請輸入數字，9 碼數字以內":"請輸入數字",required:""}),{default:a(()=>[t(C,{compact:""},{default:a(()=>[t(S,{value:N.countryCode,"onUpdate:value":w=>N.countryCode=w,style:{width:"30%"}},null,8,["value","onUpdate:value"]),t(S,{value:N.phone,"onUpdate:value":w=>N.phone=w,style:{width:"70%"},placeholder:"請輸入手機門號",maxlength:N.countryCode==="+886"?9:void 0,onChange:w=>n(w,k)},null,8,["value","onUpdate:value","maxlength","onChange"])]),_:2},1024)]),_:2},1040,["extra"])]),_:2},1024)]),_:2},1024),t(y,I({label:"Email",ref_for:!0},e(b)[`mainAccount.${k}.email`],{extra:"50 字以內",required:""}),{default:a(()=>[t(S,{value:N.email,"onUpdate:value":w=>N.email=w,maxlength:50,placeholder:"請輸入Email"},null,8,["value","onUpdate:value"])]),_:2},1040),t(y,I({label:"備註",ref_for:!0},e(b)[`mainAccount.${k}.note`],{extra:"150 字以內，文字格式不拘"}),{default:a(()=>[t(i,{value:N.note,"onUpdate:value":w=>N.note=w,rows:4,maxlength:150,placeholder:"請輸入"},null,8,["value","onUpdate:value"])]),_:2},1040)]))),128)),t(T,{span:24,"mt-4":""},{default:a(()=>{var N,k,w,ge;return[t(m,{status:"small2",onClick:f},{default:a(()=>[H(" 增加主帳號 ")]),_:1}),(k=(N=e(b))==null?void 0:N.mainAccount)!=null&&k.help?(P(),X("span",Xe,Q((ge=(w=e(b))==null?void 0:w.mainAccount)==null?void 0:ge.help[0][0]),1)):ne("",!0)]}),_:1})]}),_:1},8,["model"])]),_:1},8,["open"]),t(De,{ref_key:"selectCustomerRef",ref:B,onImportCustomerData:O},null,512)],64)}}});var V=(K=>(K.MAIN="主帳號",K.SUB="子帳號",K))(V||{});const ce=[{key:1,companyAccount:"VCSJ000100",companyName:"台灣大哥大--行動商務處",nmpAccount:"NelsonMa",accountType:U.MAIN,accountTypeName:V.MAIN,contactName:"王小明",balance:"NT$30,000.00",createTime:"2024/09/25",updateTime:"2024/09/30",lastModifiedBy:"Mona",status:"ACTIVE"},{key:2,companyAccount:"VCSJ000100",companyName:"台灣大哥大--行動商務處",nmpAccount:"Ally",accountType:U.SUB,accountTypeName:V.SUB,contactName:"陳想想",balance:null,createTime:"2022/03/12",updateTime:"2023/11/25",lastModifiedBy:"William",status:"UNACTIVE"},{key:3,companyAccount:"VCSJ000200",companyName:"三竹資訊股份有限公司",nmpAccount:"Peter",accountType:U.SUB,accountTypeName:V.SUB,contactName:"潘瑄琪",balance:null,createTime:"2024/09/25",updateTime:"2024/09/30",lastModifiedBy:"Mona",status:"UNACTIVE"},{key:4,companyAccount:"VCSJ000200",companyName:"三竹資訊股份有限公司",nmpAccount:"NaNa",accountType:U.SUB,accountTypeName:V.SUB,contactName:"林正義",balance:null,createTime:"2024/09/25",updateTime:"2024/09/30",lastModifiedBy:"William",status:"UNACTIVE"},{key:5,companyAccount:"VCSJ000200",companyName:"三竹資訊股份有限公司",nmpAccount:"Kathy",accountType:U.MAIN,accountTypeName:V.MAIN,contactName:"鄧軍維",balance:"NT$67,000.00",createTime:"2022/03/12",updateTime:"2023/11/25",lastModifiedBy:"Mona",status:"ACTIVE"},{key:6,companyAccount:"VCSJ000300",companyName:"富邦媒體科技股份有限公司",nmpAccount:"Cindy",accountType:U.MAIN,accountTypeName:V.MAIN,contactName:"曾淑品",balance:"NT$91,000.00",createTime:"2024/09/25",updateTime:"2024/09/30",lastModifiedBy:"Mona",status:"ACTIVE"},{key:7,companyAccount:"VCSJ000300",companyName:"富邦媒體科技股份有限公司",nmpAccount:"Brian",accountType:U.MAIN,accountTypeName:V.MAIN,contactName:"謝星星",balance:"NT$60.00",createTime:"2022/03/12",updateTime:"2023/11/25",lastModifiedBy:"William",status:"UNACTIVE"},{key:8,companyAccount:"VCSJ000300",companyName:"富邦媒體科技股份有限公司",nmpAccount:"Fiona",accountType:U.SUB,accountTypeName:V.SUB,contactName:"黃有金",balance:null,createTime:"2024/09/25",updateTime:"2024/09/30",lastModifiedBy:"William",status:"UNACTIVE"},{key:9,companyAccount:"VCSJ000300",companyName:"富邦媒體科技股份有限公司",nmpAccount:"Allen",accountType:U.SUB,accountTypeName:V.SUB,contactName:"羅彼方",balance:null,createTime:"2024/09/25",updateTime:"2024/09/30",lastModifiedBy:"Mona",status:"UNACTIVE"},{key:10,companyAccount:"VCSJ000400",companyName:"創業家兄弟股份有限公司",nmpAccount:"Mark",accountType:U.SUB,accountTypeName:V.SUB,contactName:"蔡重申",balance:null,createTime:"2022/03/12",updateTime:"2023/11/25",lastModifiedBy:"William",status:"UNACTIVE"},{key:11,companyAccount:"VCSJ000400",companyName:"創業家兄弟股份有限公司",nmpAccount:"Steven",accountType:U.MAIN,accountTypeName:V.MAIN,contactName:"方佳琪",balance:"NT$59,000.00",createTime:"2024/09/25",updateTime:"2024/09/30",lastModifiedBy:"Mona",status:"UNACTIVE"},{key:12,companyAccount:"VCSJ000500",companyName:"三商巧福",nmpAccount:"Rose",accountType:U.MAIN,accountTypeName:V.MAIN,contactName:"藍平庭",balance:"NT$7,000.00",createTime:"2022/03/12",updateTime:"2023/11/25",lastModifiedBy:"William",status:"ACTIVE"},{key:13,companyAccount:"VCSJ000500",companyName:"三商巧福",nmpAccount:"Paul",accountType:U.SUB,accountTypeName:V.SUB,contactName:"許嘉純",balance:null,createTime:"2024/09/25",updateTime:"2024/09/30",lastModifiedBy:"Mona",status:"UNACTIVE"}];function Se(){const{list:K,pagination:F,setResponseList:B}=qe();async function D(_){const d=(_.current-1)*_.pageSize,A=Math.ceil(ce.length/_.pageSize),c=ce.slice(d,_.current*_.pageSize).map(o=>({...o}));B({total:ce.length,pages:A,current:_.current,pageSize:_.pageSize,records:c})}async function E(_,d){return{data:{status:"success",id:"123"}}}return{getAccountList:D,accountList:K,pagination:F,updateMainAccount:E}}const Ze={class:"flex gap-4 mb-4 justify-start"},et={class:"flex flex-col gap-1 min-w-120px"},tt=v("span",null,"公司帳號",-1),at={class:"flex flex-col gap-1 min-w-120px"},nt=v("span",null,"公司名稱",-1),ot={class:"flex flex-col gap-1 min-w-120px"},lt=v("span",null,"公司屬性",-1),ct={class:"p-4 pb-6 bg-sms-bg-light-mode-gray rounded-3 w-full mb-4"},ut=oe({__name:"main-account-edit-form",setup(K,{expose:F}){const{getCompanyAttrOption:B,companyAttrOption:D}=ye(),{updateMainAccount:E}=Se();fe(()=>B());const _=M(!1),d=M(),A=M(),o=ee(se({mainAccount:"",department:"",contactPerson:"",countryCode:"+886",phone:"",email:"",note:""})),$=ee({contactPerson:[{validator:async(n,l)=>(await L().required("請輸入聯絡人姓名").validate(l),Promise.resolve()),trigger:"blur"}],phone:[{validator:async(n,l)=>(await L().required("請輸入手機號碼").test("checkPhone","格式有誤",async h=>await Ue().isValid(h,{strict:!1})?o.countryCode==="+886"?await L().matches(/9\d{8}/).isValid(h,{strict:!1}):!0:!1).validate(l),Promise.resolve()),trigger:"blur"}],email:[{validator:async(n,l)=>(await L().required("請輸入Email").email("格式有誤").validate(l),Promise.resolve()),trigger:"blur"}]}),{validateInfos:g,resetFields:b,validate:J}=Ce(o,$);async function R(n){A.value=n,d.value={companyAccount:n.companyAccount,companyName:n.companyName,companyAttr:"1"},b({mainAccount:"Mei",department:"業務部",contactPerson:"陳小雲",countryCode:"+886",phone:"911248081",email:"clouds@gmail.com",note:""}),_.value=!0}const W=Ne();function z(){J().then(async()=>{var n;A.value&&((n=(await E(o,A.value.key)).data)==null?void 0:n.status)==="success"&&(W.success({message:"主帳號編輯成功",placement:"top"}),_.value=!1)}).catch(n=>{console.error(n)})}function x(n){const f=n.target.value;/09\d{2}/.test(f)&&(o.phone=f.replace("0",""))}function u(n){var l;if(n)return((l=D.value.find(f=>f.value===n))==null?void 0:l.label)??""}return F({show:R}),(n,l)=>{const f=be,h=we,O=me,s=pe,r=Te,m=ke,y=de,q=re;return P(),Y(q,{open:e(_),"onUpdate:open":l[7]||(l[7]=T=>_e(_)?_.value=T:null),centered:"",width:"600px","ok-text":"確定","cancel-text":"取消",onOk:z},{title:a(()=>[H(" 編輯主帳號 ")]),default:a(()=>[t(y,{model:e(o),class:"px-24px py-20px",layout:"vertical",autocomplete:"off"},{default:a(()=>{var T,S,j;return[v("div",Ze,[v("div",et,[tt,v("span",null,Q(((T=e(d))==null?void 0:T.companyAccount)??"-"),1)]),v("div",at,[nt,v("span",null,Q(((S=e(d))==null?void 0:S.companyName)??"-"),1)]),v("div",ot,[lt,v("span",null,Q((j=e(d))!=null&&j.companyAttr?u(e(d).companyAttr):"-"),1)])]),v("div",ct,[t(s,{gutter:16},{default:a(()=>[t(O,{span:12},{default:a(()=>[t(h,I({label:"主帳號"},e(g).mainAccount,{required:""}),{default:a(()=>[t(f,{value:e(o).mainAccount,"onUpdate:value":l[0]||(l[0]=C=>e(o).mainAccount=C),placeholder:"請輸入主帳號",disabled:""},null,8,["value"])]),_:1},16)]),_:1}),t(O,{span:12},{default:a(()=>[t(h,I({label:"單位"},e(g).department),{default:a(()=>[t(f,{value:e(o).department,"onUpdate:value":l[1]||(l[1]=C=>e(o).department=C),placeholder:"請輸入單位"},null,8,["value"])]),_:1},16)]),_:1})]),_:1}),t(s,{gutter:16},{default:a(()=>[t(O,{span:12},{default:a(()=>[t(h,I({label:"聯絡人姓名"},e(g).contactPerson,{required:""}),{default:a(()=>[t(f,{value:e(o).contactPerson,"onUpdate:value":l[2]||(l[2]=C=>e(o).contactPerson=C),placeholder:"請輸入聯絡人姓名"},null,8,["value"])]),_:1},16)]),_:1}),t(O,{span:12},{default:a(()=>[t(h,I({label:"手機門號"},e(g).phone,{extra:e(o).countryCode==="+886"?"請輸入數字，9 碼數字以內":"請輸入數字",required:""}),{default:a(()=>[t(r,{compact:""},{default:a(()=>[t(f,{value:e(o).countryCode,"onUpdate:value":l[3]||(l[3]=C=>e(o).countryCode=C),style:{width:"30%"}},null,8,["value"]),t(f,{value:e(o).phone,"onUpdate:value":l[4]||(l[4]=C=>e(o).phone=C),style:{width:"70%"},placeholder:"請輸入手機門號",maxlength:e(o).countryCode==="+886"?9:void 0,onChange:x},null,8,["value","maxlength"])]),_:1})]),_:1},16,["extra"])]),_:1})]),_:1}),t(h,I({label:"Email"},e(g).email,{extra:"50 字以內",required:""}),{default:a(()=>[t(f,{value:e(o).email,"onUpdate:value":l[5]||(l[5]=C=>e(o).email=C),maxlength:50,placeholder:"請輸入Email"},null,8,["value"])]),_:1},16),t(h,I({label:"備註"},e(g).note,{extra:"150 字以內，文字格式不拘"}),{default:a(()=>[t(m,{value:e(o).note,"onUpdate:value":l[6]||(l[6]=C=>e(o).note=C),rows:4,maxlength:150,placeholder:"請輸入"},null,8,["value"])]),_:1},16)])]}),_:1},8,["model"])]),_:1},8,["open"])}}}),st={class:"flex justify-end px-2 items-center py-4 bg-sms-grayscale-0 rounded-t-12px"},it={key:1},Tt=oe({__name:"index",setup(K){const F=M(null),B=M(null),{getAccountList:D,pagination:E,accountList:_}=Se(),d=[{value:"ACTIVE",label:"開啟"},{value:"UNACTIVE",label:"關閉"}],A=[{title:"公司帳號",dataIndex:"companyAccount",key:"companyAccount",maxWidth:120},{title:"公司名稱",dataIndex:"companyName",key:"companyName",maxWidth:200},{title:"NMP帳號",dataIndex:"nmpAccount",key:"nmpAccount",maxWidth:80},{title:"帳號類別",dataIndex:"accountTypeName",key:"accountTypeName",maxWidth:90},{title:"聯絡人姓名",dataIndex:"contactName",key:"contactName",maxWidth:95},{title:"剩餘金額",dataIndex:"balance",key:"balance",minWidth:107,align:"right",customHeaderCell:()=>({class:"[&>*]:!justify-center"})},{title:"建立時間",dataIndex:"createTime",key:"createTime",maxWidth:100},{title:"修改時間",dataIndex:"updateTime",key:"updateTime",maxWidth:100,defaultSortOrder:"descend"},{title:"最後修改帳號者",dataIndex:"lastModifiedBy",key:"lastModifiedBy",maxWidth:120},{title:"帳號狀態",dataIndex:"status",key:"status",maxWidth:75},{title:"操作",dataIndex:"action",key:"action",width:"50px",fixed:"right"}];fe(()=>{g(1)});const c=M({keyword:"",sortField:"updateTime",sortOrder:"descend",companyAccount:[],companyName:[],status:[],nmpAccount:[]});async function o(u,n,l){console.log("sorter:",l),c.value=Object.assign(c.value,{sortField:l.field,sortOrder:l.order}),await g(E.value.current,E.value.pageSize)}async function $(u,n){await g(u,n)}async function g(u=1,n=10){const l={current:u,pageSize:n,...e(c)};await D(l)}async function b(u){_.value=_.value.map(n=>u.key===n.key?{...u,status:u.status==="UNACTIVE"?"ACTIVE":"UNACTIVE"}:n)}const J=M(null);function R(){var u;g(1),(u=J.value)==null||u.hide()}const W=ae(()=>_.value.map(u=>({label:u.companyAccount,value:u.companyAccount}))),z=ae(()=>_.value.map(u=>({label:u.companyName,value:u.companyName}))),x=ae(()=>_.value.map(u=>({label:u.nmpAccount,value:u.nmpAccount})));return(u,n)=>{const l=ue,f=xe,h=Ie,O=Pe,s=Be,r=$e,m=me,y=pe,q=de,T=Ee,S=ue,j=he,C=Me;return P(),Y(C,{title:"帳號管理"},{extraContent:a(()=>[t(f,{status:"small2",onClick:()=>{}},{icon:a(()=>[t(l,{name:"download",width:"16px"})]),default:a(()=>[H(" 匯出CSV ")]),_:1}),t(f,{class:"ms-2",status:"small1",onClick:n[0]||(n[0]=i=>{var p;return(p=e(F))==null?void 0:p.show()})},{icon:a(()=>[t(l,{name:"plus",width:"16px"})]),default:a(()=>[H(" 新增主帳號 ")]),_:1})]),default:a(()=>[v("div",st,[t(Ve,{ref_key:"filterKeywordInputRef",ref:J,modelValue:e(c).keyword,"onUpdate:modelValue":n[10]||(n[10]=i=>e(c).keyword=i),class:"w-562px h-40px",placeholder:"搜尋公司帳號、公司名稱、NMP帳號、聯絡人姓名、聯絡人Email ",onClearFilter:n[11]||(n[11]=()=>{c.value={...e(c),keyword:"",companyAccount:[],companyName:[],status:[],nmpAccount:[]}})},{filterForm:a(()=>[t(q,{layout:"vertical",model:e(c),autocomplete:"off"},{default:a(()=>[t(y,{gutter:[16,12]},{default:a(()=>[t(m,{span:24},{default:a(()=>[t(r,{label:"公司帳號",valueed:e(te)(e(c).companyAccount)},{default:a(()=>[t(s,{value:e(c).companyAccount,"onUpdate:value":n[2]||(n[2]=i=>e(c).companyAccount=i),options:e(W),"max-tag-count":2,"show-arrow":!0,mode:"multiple",class:"w-full","option-filter-prop":"label","menu-item-selected-icon":" "},{dropdownRender:a(({menuNode:i})=>[t(h,{modelValue:e(c).companyAccount,"onUpdate:modelValue":n[1]||(n[1]=p=>e(c).companyAccount=p),menu:i,options:e(W)},null,8,["modelValue","menu","options"])]),option:a(({value:i,label:p})=>[t(O,{values:e(c).companyAccount,value:i,label:p},null,8,["values","value","label"])]),_:1},8,["value","options"])]),_:1},8,["valueed"])]),_:1}),t(m,{span:24},{default:a(()=>[t(r,{label:"公司姓名",valueed:e(te)(e(c).companyName)},{default:a(()=>[t(s,{value:e(c).companyName,"onUpdate:value":n[4]||(n[4]=i=>e(c).companyName=i),options:e(z),"max-tag-count":2,"show-arrow":!0,mode:"multiple",class:"w-full","option-filter-prop":"label","menu-item-selected-icon":" "},{dropdownRender:a(({menuNode:i})=>[t(h,{modelValue:e(c).companyName,"onUpdate:modelValue":n[3]||(n[3]=p=>e(c).companyName=p),menu:i,options:e(z)},null,8,["modelValue","menu","options"])]),option:a(({value:i,label:p})=>[t(O,{values:e(c).companyName,value:i,label:p},null,8,["values","value","label"])]),_:1},8,["value","options"])]),_:1},8,["valueed"])]),_:1}),t(m,{span:24},{default:a(()=>[t(r,{label:"NMP 帳號",valueed:e(te)(e(c).nmpAccount)},{default:a(()=>[t(s,{value:e(c).nmpAccount,"onUpdate:value":n[6]||(n[6]=i=>e(c).nmpAccount=i),options:e(x),"max-tag-count":2,"show-arrow":!0,mode:"multiple",class:"w-full","option-filter-prop":"label","menu-item-selected-icon":" "},{dropdownRender:a(({menuNode:i})=>[t(h,{modelValue:e(c).nmpAccount,"onUpdate:modelValue":n[5]||(n[5]=p=>e(c).nmpAccount=p),menu:i,options:e(x)},null,8,["modelValue","menu","options"])]),option:a(({value:i,label:p})=>[t(O,{values:e(c).nmpAccount,value:i,label:p},null,8,["values","value","label"])]),_:1},8,["value","options"])]),_:1},8,["valueed"])]),_:1}),t(m,{span:24},{default:a(()=>[t(r,{label:"帳號狀態",valueed:e(te)(e(c).status)},{default:a(()=>[t(s,{value:e(c).status,"onUpdate:value":n[8]||(n[8]=i=>e(c).status=i),options:d,"max-tag-count":2,"show-arrow":!0,mode:"multiple",class:"w-full","option-filter-prop":"label","menu-item-selected-icon":" "},{dropdownRender:a(({menuNode:i})=>[t(h,{modelValue:e(c).status,"onUpdate:modelValue":n[7]||(n[7]=p=>e(c).status=p),menu:i,options:d},null,8,["modelValue","menu"])]),option:a(({value:i,label:p})=>[t(O,{values:e(c).status,value:i,label:p},null,8,["values","value","label"])]),_:1},8,["value"])]),_:1},8,["valueed"])]),_:1}),t(m,{span:24,class:"text-center"},{default:a(()=>[t(f,{status:"small2",class:"me-5",onClick:n[9]||(n[9]=i=>{var p;return(p=e(J))==null?void 0:p.hide()})},{default:a(()=>[H(" 取消 ")]),_:1}),t(f,{status:"small1",onClick:R},{default:a(()=>[H(" 確定 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),t(j,{"data-source":e(_),scroll:{x:"max-content"},columns:A,size:"small","show-sorter-tooltip":!1,pagination:{...e(E)},onChange:o,onChangePagination:$},{bodyCell:a(({column:i,record:p,text:le})=>[i.dataIndex==="status"?(P(),X(ie,{key:0},[p.accountType===e(U).MAIN?(P(),Y(T,{key:0,checked:le==="ACTIVE",onClick:G=>b(p)},null,8,["checked","onClick"])):(P(),X("span",it))],64)):ne("",!0),i.dataIndex==="action"?(P(),Y(f,{key:1,status:"small3",class:"!px-0",onClick:()=>{var G;(G=e(B))==null||G.show(p)}},{default:a(()=>[t(S,{class:"text-sms-primary-blue-80",name:"edit"})]),_:2},1032,["onClick"])):ne("",!0)]),_:1},8,["data-source","pagination"]),t(Ye,{ref_key:"mainAccountCreateFormRef",ref:F},null,512),t(ut,{ref_key:"mainAccountEditFormRef",ref:B},null,512)]),_:1})}}});export{Tt as default};
