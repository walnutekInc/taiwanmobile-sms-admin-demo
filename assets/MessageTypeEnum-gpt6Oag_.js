import{d as O,f as N,W as l,X as g,F as S,Y as a,a5 as j,u as e,a3 as z,a4 as h,m as R,A as U,k as m,_ as M,a9 as Y,K as ce,c as q,a7 as J,$ as v,Q as re,ah as pe,ai as ue,ab as de,G as $,r as V,H as W}from"./vue-Cot4Dobd.js";import{_ as E}from"./index-C1AvcV_o.js";import{$ as X,Q as me,a0 as fe,y as ge,T as xe,z as _e}from"./antd-C_UvAipJ.js";import{_ as Z}from"./index.vuevuetypescriptsetuptruelang-DtpB6Cde.js";const ye={class:"relative w-full h-full"},ve=["controls","src"],he={key:0,class:"text-sms-grayscale-60 font-500 text-base text-center pt-2"},be={key:0,class:"text-sms-grayscale-60 font-500 text-base text-center pb-2"},ke=["src"],ee=O({name:"MultimediaPreview",__name:"index",props:{source:{},showDelBtn:{type:Boolean,default:!0},showFileName:{type:Boolean,default:!0},canPlay:{type:Boolean,default:!0},imageClass:{default:"w-full"},size:{default:"large"}},emits:["deleteVideo"],setup(o,{expose:x,emit:f}){const r=o,_=f,s=N(!1),i=N();function C(n){s.value=!n.target.paused}function p(){var n;r.canPlay&&r.source.type==="video"&&((n=i.value)==null||n.play())}function u(){var n;r.canPlay&&s.value&&r.source.type==="video"&&((n=i.value)==null||n.pause())}function F(){_("deleteVideo")}return x({playVideo:p,pauseVideo:u}),(n,b)=>{const k=E;return l(),g("div",ye,[n.source.type==="video"?(l(),g(S,{key:0},[a("video",{id:"video",ref_key:"videoRef",ref:i,class:j(["h-full w-full bg-sms-grayscale-100",{"max-h-356px":n.size==="large"}]),controls:e(s),src:n.source.url,onPlaying:C,onPause:C},null,42,ve),n.showFileName?(l(),g("div",he,z(n.source.fileName)+" ("+z(n.source.fileSize)+") ",1)):h("",!0),R(m(k,{name:"play-circle",width:n.size==="large"?"80px":"35px",class:"absolute top-50% left-50% translate-x-[-50%] translate-y-[-50%] cursor-pointer",onClick:p},null,8,["width"]),[[U,!e(s)]])],64)):n.source.url?(l(),g(S,{key:1},[n.showFileName?(l(),g("div",be,z(n.source.fileName)+" ("+z(n.source.fileSize)+") ",1)):h("",!0),a("img",{src:n.source.url,class:j(n.imageClass)},null,10,ke)],64)):h("",!0),n.showDelBtn?(l(),M(k,{key:2,name:"close-circle",width:n.size==="large"?"32px":"16px",status:"small3",class:"absolute top-1 right-1 text-sms-grayscale-60 cursor-pointer",onClick:F},null,8,["width"])):h("",!0)])}}}),we="/taiwanmobile-sms-admin-demo/assets/full-phone-rT6RnVLp.png",$e=["src"],Ce={class:"max-h-706px overflow-auto absolute top-[150px] left-[30px] w-[calc(100%-50px)]"},Te={class:"text-sms-grayscale-60 text-sm font-400 font-inter text-sm text-right"},ze=["innerHTML"],Ze=O({name:"FullPhonePreview",__name:"index",props:{message:{type:Array,default:()=>[]}},setup(o){function x(f="",r){return r?`<div class="font-700 text-17px font-sans">${r}</div>${f}`:f}return(f,r)=>{const _=ee;return l(),g(S,null,[a("img",{src:e(we),class:"w-428px"},null,8,$e),a("div",Ce,[(l(!0),g(S,null,Y(o.message,s=>(l(),g("div",{key:s.key,class:j(["flex flex-col mb-4",{"me-48px ms-5px":s.messageType==="GET","ms-48px me-20px":s.messageType==="SENT"}])},[a("div",Te,z(s.phone),1),a("div",{class:j(["flex w-full items-end justify-end gap-4",{"flex-row-reverse ":s.messageType==="GET"}])},[s.contentType==="text"?(l(),g("div",{key:0,class:j(["bg-sms-grayscale-20 w-214px py-3 px-3 rounded-2 text-17px break-words",{"bg-sms-primary-blue-20":s.messageType==="SENT"}]),innerHTML:x(s.content,s.subject)},null,10,ze)):s.content?(l(),g("div",{key:1,class:j({"h-130px w-196px":s.contentType==="video"})},[m(_,{source:{url:s.content,type:s.contentType},"show-file-name":!1,"show-del-btn":!1,"can-play":!1,"image-class":"w-50% block ms-auto"},null,8,["source"])],2)):h("",!0)],2)],2))),128))])],64)}}}),Fe=O({name:"TLiteTable",extends:X,inheritAttrs:!1,__name:"index",setup(o){const x=ce(),f=q(()=>({...e(x)}));return(r,_)=>(l(),M(e(X),de({class:"t-lite-table"},{...r.$props,...e(f),pagination:!1}),J({_:2},[Y(Object.keys(r.$slots),s=>({name:s,fn:v(i=>[re(r.$slots,s,pe(ue(i||{})))])}))]),1040))}}),Ie=a("span",{class:"text-red-500"},"*",-1),Ne=["accept"],Se={for:"fileInput",class:"flex flex-col items-center justify-center h-full text-sms-grayscale-80 text-sm"},Be=a("p",{class:""}," 拖曳圖片至此 ",-1),De=a("p",{class:""}," 拖曳影音至此 ",-1),Me=O({name:"DropFile",__name:"index",props:{uploadType:{type:String,default:"image"}},emits:["changeFile"],setup(o,{emit:x}){const f=o,r=x,_=[".jpg",".jpeg",".png",".gif"],s=[".mp4",".mp3"],i=N(),C=N(!1);function p(b){const T=b.target.files;T&&T.length>0&&i.value&&(r("changeFile",T),i.value.value="")}function u(b){b.preventDefault(),C.value=!0}function F(){C.value=!1}function n(b){var k,T;if(b.preventDefault(),i.value&&((k=b==null?void 0:b.dataTransfer)!=null&&k.files)){const I=[];for(const B of b.dataTransfer.files){const d=(T=B.name)==null?void 0:T.split(".").pop();f.uploadType==="image"?_.includes(`.${d}`)&&I.push(B):s.includes(`.${d}`)&&I.push(B)}I.length>0&&r("changeFile",I)}C.value=!1}return(b,k)=>{const T=E,I=Z;return l(),g(S,null,[a("label",null,[$(z(o.uploadType==="image"?"上傳檔案":"上傳影音")+" ",1),Ie]),a("div",{class:"dropzone-container",onDragover:u,onDragleave:F,onDrop:n},[a("input",{id:"fileInput",ref_key:"file",ref:i,type:"file",name:"file",class:"hidden",accept:o.uploadType==="image"?_.join(","):s.join(","),onChange:p},null,40,Ne),a("div",Se,[m(T,{name:"upload-circle",width:"40px",class:"block mb-4",color:"var(--grayscale-40)"}),o.uploadType==="image"?(l(),g(S,{key:0},[Be,a("p",null,[$(" 或點擊"),m(I,{class:"mx-2",onClick:k[0]||(k[0]=B=>{var d;return(d=e(i))==null?void 0:d.click()})},{default:v(()=>[$(" 開啟資料夾 ")]),_:1}),$("選擇圖片 ")])],64)):h("",!0),o.uploadType==="video"?(l(),g(S,{key:1},[De,a("p",null,[$(" 或點擊"),m(I,{class:"mx-2",onClick:k[1]||(k[1]=B=>{var d;return(d=e(i))==null?void 0:d.click()})},{default:v(()=>[$(" 開啟資料夾 ")]),_:1}),$("選擇影音 ")])],64)):h("",!0)])],32)],64)}}});function Pe(o){let x,f;return _=>({draggable:!0,ondrag(){x=_},ondrop(){f=_},ondragend(){if(x&&f&&x!==f){const s=o.indexOf(x),i=o.indexOf(f);[o[s],o[i]]=[o[i],o[s]],x=void 0,f=void 0}},ondragover(){return!1}})}const je={class:"px-20px pb-24px"},Oe={class:"text-sms-grayscale-80 font-400 text-base text-center"},Ve=a("br",null,null,-1),Ae={class:"text-sms-primary-blue-80 font-700"},Ke={class:"text-sms-primary-blue-80 font-700"},Le={class:"text-sms-primary-blue-80 font-700"},Re={class:"text-sms-status-alert-red text-sm font-400 text-center mt-4"},Ue=a("p",{class:"text-sms-grayscale-80 font-400 text-base"}," 可上傳 2 張圖片，格式為 jpg、png、gif ",-1),Ee=a("p",{class:"text-sms-grayscale-80 font-400 text-base"}," 可上傳 1 個影音，格式為 mp4、mp3 ",-1),Ge={key:1,class:"h-auto"},He=a("div",{class:"text-center px-30px py-20px w-328px text-base mx-auto"}," 刪除的檔案將無法復原 ",-1),Qe={key:0,class:"text-center py-40px w-523px h-auto text-base mx-auto"},et=O({__name:"multimedia-upload-modal",emits:["updateMultimediaFile"],setup(o,{expose:x,emit:f}){const r=f;function _(c){return c===0?"0KB":`${Number.parseFloat((c/1024**1).toFixed(0))}KB`}const s=N("image"),i=N(!1),C=N([]),p=V([]),u=V([]),F=N(!1),n=q(()=>{let c=u.reduce((t,y)=>t+(y==null?void 0:y.size),0);return c=p.reduce((t,y)=>t+(y==null?void 0:y.size),c),c});function b(c){for(const t of c)u.push({key:u.length+1,fileName:t.name,size:t.size,fileSize:_(t.size),file:t,type:"image",url:URL.createObjectURL(t)})}function k(c){if(c.length>0){const t=c[0];p.push({key:p.length+1,fileName:t.name,size:t.size,fileSize:_(t.size),file:t,type:"video",url:URL.createObjectURL(t)})}}function T(c){C.value=c,u.length=0;const t=Object.assign([],c.filter(D=>D.type==="image"));u.push(...t),p.length=0;const y=Object.assign([],c.filter(D=>D.type==="video"));p.push(...y),i.value=!0}const B=[{title:"拖曳順序",dataIndex:"drop",key:"drop",width:"80px",customCell:Pe(u)},{title:"檔案名稱",dataIndex:"fileName",key:"fileName",width:"200px",ellipsis:!0},{title:"檔案大小",dataIndex:"fileSize",key:"fileSize",width:"80px"},{title:"預覽",dataIndex:"preview",key:"preview",width:"60px"},{title:"刪除",dataIndex:"del",key:"del",width:"60px"}],d=V({open:!1,type:"image",index:0,delAll:!1});function A(c,t,y){Object.assign(d,{open:!0,type:t,delAll:c,index:y})}function te(){d.delAll?(u.length=0,p.length=0,G()):d.type==="image"?u.splice(d.index,1):p.splice(d.index,1),d.open=!1}function se(c){c.stopImmediatePropagation(),u.length>0||p.length>0?A(!0):i.value=!1}function G(){if(F.value=!1,Number.parseInt(_(n.value).replace("KB",""))>300){F.value=!0;return}r("updateMultimediaFile",e(u).concat(e(p))),i.value=!1}const P=V({open:!1,file:void 0});return x({show:T}),(c,t)=>{const y=Me,D=E,K=Z,ne=Fe,H=ge,Q=ee,ae=xe,L=_e;return l(),g(S,null,[m(L,{open:e(i),"onUpdate:open":t[2]||(t[2]=w=>W(i)?i.value=w:null),title:"多媒體附件上傳",centered:"",width:"600px","cancel-text":"取消","ok-text":"確定",onOk:G,onCancel:t[3]||(t[3]=w=>{F.value=!1,C.value=[]})},J({default:v(()=>[a("div",je,[a("div",Oe,[$(" 請注意，MMS 多媒體附件 (圖片檔/影音檔)，總大小不可超過 300KB "),Ve,$(" 目前已上傳 "),a("span",Ae,z(e(u).length),1),$(" 個圖片檔、"),a("span",Ke,z(e(p).length),1),$(" 個影音檔，共 "),a("span",Le,z(_(e(n))),1)]),R(a("div",Re," 超過 300KB 上限，請修正 ",512),[[U,e(F)]])]),m(ae,{activeKey:e(s),"onUpdate:activeKey":t[1]||(t[1]=w=>W(s)?s.value=w:null),type:"card","destroy-inactive-tab-pane":!0,class:"full-border-tab last-child-rounded"},{default:v(()=>[m(H,{key:"image",tab:"圖片"},{default:v(()=>[Ue,e(u).length<2?(l(),M(y,{key:0,"upload-type":"image",onChangeFile:b})):h("",!0),R(m(ne,{columns:B,"data-source":e(u)},{bodyCell:v(({column:w,index:le,record:oe})=>[w.dataIndex==="drop"?(l(),M(K,{key:0,status:"small3"},{icon:v(()=>[m(D,{name:"menu",class:"text-sms-grayscale-100",width:"16px"})]),_:1})):h("",!0),w.dataIndex==="preview"?(l(),M(K,{key:1,status:"small3",onClick:ie=>{e(P).file=oe,e(P).open=!0}},{icon:v(()=>[m(D,{name:"preview-blue",class:"text-sms-primary-blue-80"})]),_:2},1032,["onClick"])):h("",!0),w.dataIndex==="del"?(l(),M(K,{key:2,status:"small3",onClick:ie=>A(!1,"image",le)},{icon:v(()=>[m(D,{name:"del-blue",class:"text-sms-primary-blue-80"})]),_:2},1032,["onClick"])):h("",!0)]),_:1},8,["data-source"]),[[U,e(u).length>0]])]),_:1},8,["tab"]),m(H,{key:"video",tab:"影音"},{default:v(()=>[Ee,e(p).length<1?(l(),M(y,{key:0,"upload-type":"video",onChangeFile:k})):h("",!0),e(p).length>0?(l(),g("div",Ge,[m(Q,{source:e(p)[0],onDeleteVideo:t[0]||(t[0]=w=>A(!1,"video",0))},null,8,["source"])])):h("",!0)]),_:1},8,["tab"])]),_:1},8,["activeKey"])]),_:2},[e(me)(e(C))?{name:"closeIcon",fn:v(()=>[m(e(fe),{class:"ant-modal-close-icon text-black",onClick:se})]),key:"0"}:void 0]),1032,["open"]),m(L,{open:e(d).open,"onUpdate:open":t[4]||(t[4]=w=>e(d).open=w),title:e(d).delAll?"是否刪除所有已上傳的檔案？":"是否刪除已上傳的檔案？",centered:"","cancel-text":"取消","ok-text":"確定",width:"400px",onOk:te},{default:v(()=>[He]),_:1},8,["open","title"]),m(L,{open:e(P).open,"onUpdate:open":t[5]||(t[5]=w=>e(P).open=w),title:" ",centered:"",footer:null,width:"960px"},{default:v(()=>[e(P).file?(l(),g("div",Qe,[m(Q,{source:e(P).file,"show-del-btn":!1,"image-class":"h-auto w-auto max-w-full"},null,8,["source"])])):h("",!0)]),_:1},8,["open"])],64)}}});var We=(o=>(o.SMS="SMS",o.MMS="MMS",o))(We||{});export{We as M,ee as _,Fe as a,et as b,Ze as c};
