import{d as j,al as le,am as Ce,o as be,j as we,r as N,f as C,w as se,y as ie,an as ke,W as T,X as P,_ as W,ab as S,u as e,a8 as Oe,Q as re,a4 as de,Y as _,F as Q,$ as o,k as t,G as I,H as A,a3 as G,m as H,A as V,a9 as $e,a5 as Re}from"./vue-BTNAaAVH.js";import{_ as ee}from"./index.vuevuetypescriptsetuptruelang-CL8f4-88.js";import{p as X,G as ce,n as J,J as pe,I as me,o as fe,y as _e,E as ve,F as ge,Q as Se,x as Ie,u as Te,v as Le}from"./antd-DnZDPeHZ.js";import{_ as Ue}from"./index-C6U9VfRL.js";import{c as Z,a as Ee,b as ue}from"./index.esm-BLrWqtwX.js";import{_ as Me}from"./index.vuevuetypestyleindex0lang-BO6dExgl.js";import{F as Fe}from"./index-CeCoPzSI.js";import{u as Ae}from"./custom-message-DufQE50l.js";const Be={key:0,class:"form-textarea-multimedia"},De={class:"form-textarea-tools py-2"},Ne="div",pt=j({name:"TagTextarea",__name:"index",props:le({contenteditable:{type:[Boolean,String],default:!0},noHtml:{type:Boolean,default:!1},noNl:{type:Boolean,default:!1},maxLen:{type:Number},contentLen:{type:Number},placeholder:String},{modelValue:{required:!0},modelModifiers:{}}),emits:le({returned:String},["update:modelValue"]),setup(k,{expose:L,emit:U}){const f=k,x=U;function i(a,s,r){return a.split(s).join(r)}const c=Ce(k,"modelValue");be(()=>{document.addEventListener("selectionchange",y)}),we(()=>{document.removeEventListener("selectionchange",y)});function E(){return`r${new Date().getTime()}d${Math.ceil(Math.random()*1e3)}`}const g=N({contentId:`content${E()}`,isLocked:!1,currentTagId:null,savedRange:{}});function y(){var s;const a=window.getSelection();if(a){const r=a.rangeCount>0?a.getRangeAt(0):null;r&&((s=r.commonAncestorContainer.ownerDocument)!=null&&s.activeElement)&&r.commonAncestorContainer.ownerDocument.activeElement.id===g.contentId&&(g.savedRange=r)}}const d=C();function n(){return f.noHtml?d.value.textContent:d.value.innerHTML}function O(a){f.noHtml?d.value.textContent=e(a):d.value.innerHTML=e(a)}function p(){c.value=n()}function $(a){a.preventDefault();let s=(a.originalEvent||a).clipboardData.getData("text/plain");if(f.noNl&&(s=i(s,`\r
`," "),s=i(s,`
`," "),s=i(s,"\r"," ")),f.contentLen&&f.maxLen&&f.contentLen+s.length>=f.maxLen)return a.keyCode===8,void 0;console.log("paste"),window.document.execCommand("insertText",!1,s)}function m(a){a.key==="Enter"&&f.noNl&&(a.preventDefault(),x("returned",n()))}se(c,async a=>{await ie(),a!==n()&&O(a??"")}),se(()=>f.noHtml,()=>{O(c.value??"")});function h(a){if(f.contentLen&&f.maxLen&&f.contentLen>=f.maxLen){if(a.keyCode===8)return;a.preventDefault()}}const v=ke();function D(a){const s=document.createElement("div");return s.innerHTML=a.trim(),s.firstChild}async function M(a){const s=document.getElementById(g.contentId);if(s){s.focus();const r=getSelection();g.savedRange&&(r==null||r.removeAllRanges(),r==null||r.addRange(g.savedRange));const w=r==null?void 0:r.getRangeAt(0),B=D(a);B&&(await ie(),w==null||w.insertNode(B))}}return L({insertFun:M}),(a,s)=>(T(),P(Q,null,[(T(),W(Oe(Ne),S({id:e(g).contentId,ref_key:"element",ref:d,class:"tag-textarea"},a.$attrs,{contenteditable:k.contenteditable,"data-placeholder":k.placeholder,style:{scrollPaddingBottom:`${e(v).multimediaBlock?148:50}px`,paddingBottom:`${e(v).multimediaBlock?148:50}px`},onInput:p,onBlur:p,onPaste:$,onKeypress:m,onKeydown:h}),null,16,["id","contenteditable","data-placeholder","style"])),e(v).multimediaBlock?(T(),P("div",Be,[re(a.$slots,"multimediaBlock")])):de("",!0),_("div",De,[re(a.$slots,"default")])],64))}}),Pe={class:"px-24px"},He=_("p",{class:"text-center"}," 選擇想加入的參數後，再點擊確定即可。 ",-1),Ve={class:"flex justify-between gap-x-2"},je=_("p",{class:"text-sms-grayscale-60 text-sm mt-10"},[I(" 加入參數功能說明："),_("br"),I(" 此為自訂訊息的插入參數功能，參數訊息發送功能位置為【訊息行銷活動】的【參數訊息】。訊息內容可自由插入參數，至多使用 5 個參數，依照上傳參數檔案而組成訊息內容。 ")],-1),mt=j({__name:"add-field",emits:["addFieldToContent"],setup(k,{expose:L,emit:U}){const f=U,x=C(!1),i=C([]);function c(y){i.value.includes(y)?i.value=i.value.filter(d=>d!==y):i.value.push(y),i.value=i.value.sort().reverse()}async function E(){i.value=[],x.value=!0}function g(){x.value=!1,f("addFieldToContent",i.value)}return L({show:E}),(y,d)=>{const n=ee,O=X;return T(),W(O,{open:e(x),"onUpdate:open":d[5]||(d[5]=p=>A(x)?x.value=p:null),title:"加入參數",centered:"","cancel-text":"取消","ok-text":"確定",width:"600px",onOk:g},{default:o(()=>[_("div",Pe,[He,_("div",Ve,[t(n,{status:e(i).includes("%field1%")?"small1":"small2",onClick:d[0]||(d[0]=p=>c("%field1%"))},{default:o(()=>[I(" %field1% ")]),_:1},8,["status"]),t(n,{status:e(i).includes("%field2%")?"small1":"small2",onClick:d[1]||(d[1]=p=>c("%field2%"))},{default:o(()=>[I(" %field2% ")]),_:1},8,["status"]),t(n,{status:e(i).includes("%field3%")?"small1":"small2",onClick:d[2]||(d[2]=p=>c("%field3%"))},{default:o(()=>[I(" %field3% ")]),_:1},8,["status"]),t(n,{status:e(i).includes("%field4%")?"small1":"small2",onClick:d[3]||(d[3]=p=>c("%field4%"))},{default:o(()=>[I(" %field4% ")]),_:1},8,["status"]),t(n,{status:e(i).includes("%field5%")?"small1":"small2",onClick:d[4]||(d[4]=p=>c("%field5%"))},{default:o(()=>[I(" %field5% ")]),_:1},8,["status"])]),je])]),_:1},8,["open"])}}}),ft=j({__name:"add-link",emits:["addLinkToContent"],setup(k,{expose:L,emit:U}){const f=U,x={link:""};function i($){const m="^(?:http|https|ftp)://(?:\\S+@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}\\.(?:\\d\\d?|1\\d\\d|2[0-4]\\d|25[0-4])|(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9](?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9])*\\.[a-z\\u00a1-\\uffff]{2,}|localhost)(?::\\d{2,5})?(?:[/?#]\\S*)?$",h=new RegExp(m,"i");return $.length<2083&&h.test($)}const c=N(ce(x)),E=N({link:[{async validator($,m){return J(m)?Promise.reject("請輸入縮網址"):i(m)?Promise.resolve():Promise.reject("請輸入有效網址")},trigger:"blur"}]}),{validateInfos:g,resetFields:y,validate:d}=pe(c,E),n=C(!1);async function O(){y(x),n.value=!0}function p(){d().then(async()=>{f("addLinkToContent",c.link),n.value=!1})}return L({show:O}),($,m)=>{const h=me,v=fe,D=_e,M=ee,a=ve,s=ge,r=X;return T(),W(r,{open:e(n),"onUpdate:open":m[1]||(m[1]=w=>A(n)?n.value=w:null),title:"加入縮網址",centered:"",width:"600px","cancel-text":"取消","ok-text":"確定",onOk:p},{default:o(()=>[t(s,{class:"px-24px",layout:"vertical",autocomplete:"off",onSubmit:p},{default:o(()=>[t(a,{gutter:[16,0]},{default:o(()=>[t(D,{span:24},{default:o(()=>[t(v,S({label:""},e(g).link),{default:o(()=>[t(h,{value:e(c).link,"onUpdate:value":m[0]||(m[0]=w=>e(c).link=w),valueModifiers:{trim:!0},placeholder:"請輸入原始長網址，範例: https://www.taiwanmobile.com/"},null,8,["value"])]),_:1},16)]),_:1}),t(M,{class:"hidden","html-type":"submit"})]),_:1})]),_:1})]),_:1},8,["open"])}}}),Ge={class:"flex items-center justify-center"},Ke=_("span",{"w.5":"","h-18px":""},G(""),-1),qe=_("span",{"w.5":"","h-18px":""},G(""),-1),ze=_("span",{"w.5":"","h-18px":""},G(""),-1),Qe={class:"px-24px"},Je={class:"flex justify-between items-center mb-4"},We=_("span",{class:"text-base text-sms-grayscale-80"},"選擇下列任一訊息，點擊「確定」。",-1),Xe=_("div",{class:"text-center px-30px py-20px text-base text-sms-grayscale-80 mx-auto"}," ※ 每次生成 3 則訊息，共收費新台幣 5 元 ",-1),Ye=_("div",{class:"text-center px-30px py-20px text-base text-sms-grayscale-80 mx-auto"}," 已生成的訊息將直接刪除 ",-1),Ze=_("div",{class:"px-24px text-center"}," 您重新選擇的自訂訊息內容，將會把現在的訊息完全覆蓋。 ",-1),_t=j({__name:"ai-text-generation",props:{content:{type:String,required:!0}},emits:["updateContent"],setup(k,{expose:L,emit:U}){const f=k,x=U,i=C(""),c=C([]),E=[{value:"singRule",label:"單則訊息 (70 字)"},{value:"longRule",label:"長訊息 (335 字)"},{value:"other",label:"其他"}],g=[{value:"notSpecify",label:"不指定"},{value:"promotions",label:"促銷活動"},{value:"promotions",label:"會員專屬"},{value:"newProductRecommendation",label:"新產品推薦"},{value:"eventInvitation",label:"活動邀請"},{value:"customerNotice",label:"客戶通知"},{value:"other",label:"其他"}],y=[{value:"notSpecify",label:"不指定"},{value:"friendly",label:"親切幽默"},{value:"professional",label:"專業正式"},{value:"warm",label:"溫暖感人"},{value:"other",label:"其他"}],n=N(ce({name:"",messageElement:"",count:void 0,countOtherConfig:"",type:"notSpecify",typeOtherConfig:"",tone:"notSpecify",toneOtherConfig:""})),O=N({messageElement:[{async validator(b,l){return J(l)?Promise.reject("請輸入訊息元素"):Promise.resolve()},trigger:"blur"}],count:[{required:!0,message:"請選擇訊息字數",trigger:"blur"}],countOtherConfig:[{async validator(b,l){return n.count!=="other"?Promise.resolve():await Z().shape({countOtherConfig:Ee().typeError("請輸入訊息字數").min(1,"請輸入 1~335 之間任一數字").max(335,"請輸入 1~335 之間任一數字")}).validate({countOtherConfig:l})},trigger:"blur"}],typeOtherConfig:[{async validator(b,l){return n.type!=="other"?Promise.resolve():await Z().shape({typeOtherConfig:ue().required("請輸入訊息種類")}).validate({typeOtherConfig:l})},trigger:"blur"}],toneOtherConfig:[{async validator(b,l){return n.tone!=="other"?Promise.resolve():await Z().shape({toneOtherConfig:ue().required("請輸入訊息語氣")}).validate({toneOtherConfig:l})},trigger:"blur"}]}),{validateInfos:p,validate:$}=pe(n,O),m=C(!1),h=C(!1),v=C(!1);async function D(){m.value=!0}function M(){c.value.length===0?$().then(async()=>{h.value=!0}):w()}function a(){h.value=!1,c.value=[`Hello！親愛的 TAMedia Cafe 會員您好！促銷來囉！
買一送一伯爵鮮奶茶大放送！
只要透過訊息兌換序號，就能立即享受這份優惠！
別忘了帶上您的好友一同來品嚐，嚐一口就愛上的美味鮮奶茶！`,`Hello！親愛的TAMedia Cafe顧客您好！
想和您分享好消息，現在限時促銷！買一送一伯爵鮮奶茶，只需透過訊息兌換序號即可輕鬆獲得！
別忘了告訴您的朋友們，讓大家一同享受這份美味和歡笑！`,`哈囉！TAMedia Cafe 歡迎您！現在限時促銷！
買一送一伯爵鮮奶茶就在這裡！只要您透過訊息兌換序號，即可立即享受這份優惠！
快約上好友，一同來 TAMedia Cafe 享受美味，嘗一口就愛上的鮮奶茶吧！`]}function s(){c.value=[],i.value="",v.value=!1}const r=C(!1);function w(){J(f.content)?B():r.value=!0}function B(){m.value=!1,r.value=!1,x("updateContent",i.value)}return L({show:D}),(b,l)=>{const K=Ue,q=me,F=fe,R=_e,te=Se,Y=Ie,ne=ee,oe=ve,ae=ge,xe=Te,ye=Le,z=X;return T(),P(Q,null,[t(z,{open:e(m),"onUpdate:open":l[13]||(l[13]=u=>A(m)?m.value=u:null),centered:"",width:"600px","cancel-text":e(c).length===0?"取消":"關閉","ok-text":"確定",onOk:M},{title:o(()=>[_("div",Ge,[t(K,{name:"AI2",width:"32px",class:"me-2"}),I(" "+G(e(c).length===0?"使用 AI 生成訊息內容":"AI 生成訊息結果"),1)])]),default:o(()=>[H(t(ae,{class:"px-24px",layout:"vertical",autocomplete:"off",onSubmit:M},{default:o(()=>[t(oe,{gutter:[16,16]},{default:o(()=>[t(R,{span:24},{default:o(()=>[t(F,S({label:"公司或產品名稱"},e(p).name,{extra:"30 字以內"}),{default:o(()=>[t(q,{value:e(n).name,"onUpdate:value":l[0]||(l[0]=u=>e(n).name=u),placeholder:"請輸入文字",maxlength:30},null,8,["value"])]),_:1},16)]),_:1}),t(R,{span:24},{default:o(()=>[t(F,S({label:"訊息元素"},e(p).messageElement,{extra:"給予 AI 生成文案的文字素材，150 字以內",required:""}),{default:o(()=>[t(te,{value:e(n).messageElement,"onUpdate:value":l[1]||(l[1]=u=>e(n).messageElement=u),rows:4,placeholder:`請輸入必要訊息元素，
必要訊息元素為您希望在訊息內容中一定要出現的資訊，
例如：顧客來店消費即可享有見面禮、提供消費者 DM 資訊`,"max-length":150},null,8,["value"])]),_:1},16)]),_:1}),t(R,{span:e(n).count!=="other"?24:12},{default:o(()=>[t(F,S({label:"訊息字數"},e(p).count,{required:""}),{default:o(()=>[t(Y,{value:e(n).count,"onUpdate:value":l[2]||(l[2]=u=>e(n).count=u),options:E,placeholder:"請選擇訊息字數",onChange:l[3]||(l[3]=()=>{e(n).count==="other"&&(e(n).countOtherConfig="")})},null,8,["value"])]),_:1},16)]),_:1},8,["span"]),H(t(R,{span:12},{default:o(()=>[t(F,S(e(p).countOtherConfig,{extra:"可輸入 1~335 之間任一數字"}),{label:o(()=>[Ke]),default:o(()=>[t(q,{value:e(n).countOtherConfig,"onUpdate:value":l[4]||(l[4]=u=>e(n).countOtherConfig=u),type:"number",placeholder:"請輸入訊息字數",controls:!1},null,8,["value"])]),_:1},16)]),_:1},512),[[V,e(n).count==="other"]]),t(R,{span:e(n).type!=="other"?24:12},{default:o(()=>[t(F,S({label:"訊息種類"},e(p).type),{default:o(()=>[t(Y,{value:e(n).type,"onUpdate:value":l[5]||(l[5]=u=>e(n).type=u),options:g,placeholder:"請選擇訊息種類",onChange:l[6]||(l[6]=()=>{e(n).type==="other"&&(e(n).typeOtherConfig="")})},null,8,["value"])]),_:1},16)]),_:1},8,["span"]),H(t(R,{span:12},{default:o(()=>[t(F,S(e(p).typeOtherConfig,{extra:"15 字以內"}),{label:o(()=>[qe]),default:o(()=>[t(q,{value:e(n).typeOtherConfig,"onUpdate:value":l[7]||(l[7]=u=>e(n).typeOtherConfig=u),"max-length":15,placeholder:"請輸入訊息種類"},null,8,["value"])]),_:1},16)]),_:1},512),[[V,e(n).type==="other"]]),t(R,{span:e(n).tone!=="other"?24:12},{default:o(()=>[t(F,S({label:"訊息語氣"},e(p).tone),{default:o(()=>[t(Y,{value:e(n).tone,"onUpdate:value":l[8]||(l[8]=u=>e(n).tone=u),options:y,placeholder:"請選擇訊息語氣",onChange:l[9]||(l[9]=()=>{e(n).tone==="other"&&(e(n).toneOtherConfig="")})},null,8,["value"])]),_:1},16)]),_:1},8,["span"]),H(t(R,{span:12},{default:o(()=>[t(F,S(e(p).toneOtherConfig,{extra:"15 字以內"}),{label:o(()=>[ze]),default:o(()=>[t(q,{value:e(n).toneOtherConfig,"onUpdate:value":l[10]||(l[10]=u=>e(n).toneOtherConfig=u),maxlength:15,placeholder:"請輸入訊息語氣"},null,8,["value"])]),_:1},16)]),_:1},512),[[V,e(n).tone==="other"]]),t(R,{span:24,class:"text-center text-sm text-sms-grayscale-60"},{default:o(()=>[I(" ※ 每次生成 3 則訊息，共收費新台幣 5 元 ")]),_:1}),t(ne,{class:"hidden","html-type":"submit"})]),_:1})]),_:1},512),[[V,e(c).length===0]]),H(_("div",Qe,[_("div",Je,[We,t(ne,{status:"small2",onClick:l[11]||(l[11]=u=>v.value=!0)},{default:o(()=>[I(" 重新生成 ")]),_:1})]),t(ae,{layout:"vertical",autocomplete:"off"},{default:o(()=>[t(ye,{value:e(i),"onUpdate:value":l[12]||(l[12]=u=>A(i)?i.value=u:null)},{default:o(()=>[t(oe,{gutter:[16,16]},{default:o(()=>[(T(!0),P(Q,null,$e(e(c),(u,he)=>(T(),W(R,{key:u,span:24,class:"flex"},{default:o(()=>[t(xe,{value:u},null,8,["value"]),t(F,{label:`訊息 Template${he+1}`,class:Re(["flex-1",{selected:e(i)===u}])},{default:o(()=>[t(te,{value:u,"auto-size":!0,readonly:"",onClick:ot=>i.value=u},null,8,["value","onClick"])]),_:2},1032,["label","class"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value"])]),_:1})],512),[[V,e(c).length>0]])]),_:1},8,["open","cancel-text"]),t(z,{open:e(h),"onUpdate:open":l[14]||(l[14]=u=>A(h)?h.value=u:null),title:"是否確定使用 AI 生成訊息？",centered:"",width:"440px","cancel-text":"取消","ok-text":"確定",onOk:a},{default:o(()=>[Xe]),_:1},8,["open"]),t(z,{open:e(v),"onUpdate:open":l[15]||(l[15]=u=>A(v)?v.value=u:null),title:"是否確定重新生成？",centered:"",width:"440px","cancel-text":"取消","ok-text":"確定",onOk:s},{default:o(()=>[Ye]),_:1},8,["open"]),t(z,{open:e(r),"onUpdate:open":l[16]||(l[16]=u=>A(r)?r.value=u:null),title:"是否覆蓋現有的自訂訊息內容？",centered:"","cancel-text":"取消","ok-text":"確定",width:"440px",onOk:B},{default:o(()=>[Ze]),_:1},8,["open"])],64)}}}),et={class:"px-24px"},tt={key:0,class:"line-clamp-2"},nt=_("div",{class:"px-24px text-center"}," 您重新選擇的自訂訊息內容，將會把現在的訊息完全覆蓋。 ",-1),vt=j({__name:"import-custom-message",props:{content:{type:String,required:!0}},emits:["updateContent"],setup(k,{expose:L,emit:U}){const f=k,x=U,i=N({selectedRowKeys:[],selectedRows:[],loading:!1}),{customMessages:c,getCustomMessages:E,pagination:g}=Ae(),y=[{title:"訊息類別",dataIndex:"categoryName",key:"categoryName",sorter:!0,width:"160px"},{title:"訊息名稱",dataIndex:"name",key:"name",sorter:!0,width:"160px"},{title:"訊息內容",dataIndex:"content",key:"content",sorter:!0}],d=C({categoryIds:[],keyword:"",name:"",content:"",sortField:"createTime",sortOrder:"descend"});async function n(a,s,r){console.log("sorter:",r),d.value=Object.assign(d.value,{sortField:r.field,sortOrder:r.order}),await p(g.value.current,g.value.pageSize)}async function O(a,s){await p(a,s)}async function p(a=1,s=10){const r={current:a,pageSize:s,...e(d)};await E(r)}function $(a,s){console.log("selectedRowKeys changed: ",a,s),i.selectedRowKeys=a,i.selectedRows=s}const m=C(!1);async function h(){i.selectedRowKeys=[],i.selectedRows=[],p(),m.value=!0}const v=C(!1);function D(){J(f.content)?M():v.value=!0}function M(){var a;m.value=!1,v.value=!1,x("updateContent",(a=i.selectedRows[0])==null?void 0:a.content)}return L({show:h}),(a,s)=>{const r=Fe,w=Me,B=X;return T(),P(Q,null,[t(B,{open:e(m),"onUpdate:open":s[1]||(s[1]=b=>A(m)?m.value=b:null),title:"選擇欲載入自訂訊息內容",centered:"","cancel-text":"取消","ok-text":"確定",width:"960px","ok-button-props":{disabled:e(i).selectedRowKeys.length===0},onOk:D},{default:o(()=>[_("div",et,[t(r,{modelValue:e(d).keyword,"onUpdate:modelValue":s[0]||(s[0]=b=>e(d).keyword=b),"show-filter-btn":!1,placeholder:"搜尋訊息類別、名稱、內容",class:"mb-2"},null,8,["modelValue"]),t(w,{class:"modal-table","data-source":e(c),columns:y,"show-sorter-tooltip":!1,"row-selection":{selectedRowKeys:e(i).selectedRowKeys,onChange:$,type:"radio"},pagination:{...e(g)},"custom-header-row":()=>({class:"modal-table"}),onChange:n,onChangePagination:O},{bodyCell:o(({column:b,text:l})=>[b.dataIndex==="content"?(T(),P("div",tt,G(l),1)):de("",!0)]),_:1},8,["data-source","row-selection","pagination"])])]),_:1},8,["open","ok-button-props"]),t(B,{open:e(v),"onUpdate:open":s[2]||(s[2]=b=>A(v)?v.value=b:null),title:"是否覆蓋現有的自訂訊息內容？",centered:"","cancel-text":"取消","ok-text":"確定",width:"440px",onOk:M},{default:o(()=>[nt]),_:1},8,["open"])],64)}}});export{vt as _,mt as a,ft as b,_t as c,pt as d};
