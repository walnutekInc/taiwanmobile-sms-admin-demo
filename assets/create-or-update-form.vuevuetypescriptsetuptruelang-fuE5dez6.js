import{M as Mt,b as Tt,_ as kt,c as wt}from"./MessageTypeEnum-B04ZZMWP.js";import{u as Ct,_ as Rt,a as Pt,b as It,c as Ot,d as At}from"./route-leave-Bb-nHdSV.js";import{_ as Gt}from"./index.vuevuetypescriptsetuptruelang-JVP7TRv3.js";import{j as jt,k as Ft,_ as Et}from"./index-B91yGZGf.js";import{d as Oe,r as ge,f as y,W as S,_ as ee,$ as n,Y as o,k as t,u as e,ah as Ke,X as N,F as J,G as r,a3 as b,a4 as me,H as _e,ac as Lt,ad as Nt,z as Ue,c as qe,o as Bt,w as Ht,m as ue,ab as D,B as Wt,a9 as Re,A as pe,a7 as Ut,a5 as de,y as Ye,ag as ze,l as qt}from"./vue-BvWPEeCa.js";import{z as Ae,E as X,K as Ze,N as Qe,O as Yt,P as C,Q as zt,U as Ve,V as De,H as Vt,I as Dt,o as Kt,p as Zt,q as Qt,y as $t,W as Jt,T as Xt,x as es,J as ts,r as ss,s as as,F as ns}from"./antd-BeRLmHJE.js";import{i as os}from"./isToday-7FapjAh8.js";import{_ as $e}from"./index.vuevuetypestyleindex0lang-BCYAkO7y.js";import{_ as Je,u as is}from"./request-DiW5oqXf.js";import{u as ls}from"./contact-person-D-LdpWvX.js";import{u as Xe}from"./group-label-CiTs5TRS.js";import{u as rs,r as Pe}from"./custom-message-COy3nOHb.js";import{b as U}from"./tools-DuR4KSGu.js";const cs={class:"px-24px"},us=Oe({__name:"select-contact",props:{formState:{}},emits:["updateFormState"],setup(M,{expose:G,emit:q}){const K=M,H=q,v=ge({selectedRowKeys:[],selectedRows:[],loading:!1}),{contactPerson:Y,getAllContactPerson:w,pagination:g}=ls(),Z=[{title:"手機門號",dataIndex:"phone",key:"phone",width:"110px"},{title:"姓名",dataIndex:"name",key:"name",width:"110px"},{title:"黑名單",dataIndex:"isBlackList",key:"isBlackList",width:"110px"},{title:"備註",dataIndex:"note",key:"note",width:"110px"}],d=y({keyword:"",sortField:"createTime",sortOrder:"descend"});async function te(f,u,T){console.log("sorter:",T),d.value=Object.assign(d.value,{sortField:T.field,sortOrder:T.order}),await j(g.value.current,g.value.pageSize)}async function se(f,u){await j(f,u)}async function j(f=1,u=10){const T={current:f,pageSize:u,...e(d)};await w(T,v.selectedRowKeys)}function x(f){console.log("selectedRowKeys changed: ",f),v.selectedRowKeys=f}const _=y(!1);async function F(f){v.selectedRowKeys=f,j(),_.value=!0}function ne(){_.value=!1,H("updateFormState",{recipients:{...K.formState.recipients,contactPerson:v.selectedRowKeys}})}return G({show:F}),(f,u)=>{const T=Je,L=$e,A=Ae;return S(),ee(A,{open:e(_),"onUpdate:open":u[2]||(u[2]=R=>_e(_)?_.value=R:null),title:"選擇聯絡人",centered:"","cancel-text":"取消","ok-text":"確定",width:"600px",onOk:ne},{default:n(()=>[o("div",cs,[t(T,{modelValue:e(d).keyword,"onUpdate:modelValue":u[0]||(u[0]=R=>e(d).keyword=R),"show-filter-btn":!1,placeholder:"搜尋聯絡人",class:"mb-2",onKeydown:u[1]||(u[1]=Ke(R=>j(1,e(g).pageSize),["enter"]))},null,8,["modelValue"]),t(L,{class:"modal-table","data-source":e(Y),columns:Z,"show-sorter-tooltip":!1,"row-selection":{selectedRowKeys:e(v).selectedRowKeys,onChange:x,preserveSelectedRowKeys:!0},pagination:{...e(g)},onChange:te,onChangePagination:se},{bodyCell:n(({column:R,text:Q})=>[R.dataIndex==="isBlackList"?(S(),N(J,{key:0},[r(b(Q?"黑名單":""),1)],64)):me("",!0)]),_:1},8,["data-source","row-selection","pagination"])])]),_:1},8,["open"])}}}),ps={class:"px-24px"},ds=Oe({__name:"select-group",props:{formState:{}},emits:["updateFormState"],setup(M,{expose:G,emit:q}){const K=M,H=q,v=ge({selectedRowKeys:[],selectedRows:[],loading:!1}),{groupLabels:Y,getAllGroupLabel:w,pagination:g}=Xe(),Z=[{title:"群組標籤名稱",dataIndex:"name",key:"name",width:"145px"},{title:"門號數量",dataIndex:"phoneCount",key:"phoneCount",width:"145px"},{title:"黑名單數量",dataIndex:"blackListCount",key:"blackListCount",width:"145px"}],d=y({keyword:"",sortField:"createTime",sortOrder:"descend"});async function te(f,u,T){console.log("sorter:",T),d.value=Object.assign(d.value,{sortField:T.field,sortOrder:T.order}),await j(g.value.current,g.value.pageSize)}async function se(f,u){await j(f,u)}async function j(f=1,u=10){const T={current:f,pageSize:u,...e(d)};await w(T,v.selectedRowKeys)}function x(f,u){console.log("selectedRowKeys changed: ",f),v.selectedRowKeys=f,v.selectedRows=u}const _=y(!1);async function F(f){v.selectedRowKeys=f.map(u=>u.id),j(),_.value=!0}function ne(){_.value=!1,H("updateFormState",{recipients:{...K.formState.recipients,group:v.selectedRows.map(f=>({id:f.key,label:f.name}))}})}return G({show:F}),(f,u)=>{const T=Je,L=$e,A=Ae;return S(),ee(A,{open:e(_),"onUpdate:open":u[2]||(u[2]=R=>_e(_)?_.value=R:null),title:"選擇群組標籤",centered:"","cancel-text":"取消","ok-text":"確定",width:"600px",onOk:ne},{default:n(()=>[o("div",ps,[t(T,{modelValue:e(d).keyword,"onUpdate:modelValue":u[0]||(u[0]=R=>e(d).keyword=R),"show-filter-btn":!1,placeholder:"搜尋群組標籤",class:"mb-2",onKeydown:u[1]||(u[1]=Ke(R=>j(1,e(g).pageSize),["enter"]))},null,8,["modelValue"]),t(L,{class:"modal-table","data-source":e(Y),columns:Z,"show-sorter-tooltip":!1,"row-selection":{selectedRowKeys:e(v).selectedRowKeys,onChange:x,preserveSelectedRowKeys:!0},pagination:{...e(g)},onChange:te,onChangePagination:se},null,8,["data-source","row-selection","pagination"])])]),_:1},8,["open"])}}});var fe=(M=>(M.SMS_General="SMS 一般訊息",M.MMS_General="MMS 一般訊息",M.SMS_Parameter="SMS 參數訊息",M.MMS_Parameter="MMS 參數訊息",M))(fe||{});const ms=[{key:"1",name:"季末大促銷",messageType:"MMS",subject:"主旨",phone:"0961-238-888",content:"愛戀情人節，獨家驚喜等您發現！ 情人節將至，愛戀之情將再次升華！我們特別為您準備了一場浪漫的情人節限定活動，帶來一系列獨家驚喜等您發現。無論您是想要為您的另一半挑選一份特別的禮物，還是希望一起度過浪漫的夜晚，我們都有豐富的選擇和活動等待著您。讓我們一同創造美好的回憶，共度這個充滿愛意的情人節！",multimediaFile:[{url:"https://s3-alpha-sig.figma.com/img/58f4/3909/125235a1ee58204239489f870005010a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gOnAZsvJJ3b-I8sDdPUZz2M03-LWdip1MAOY8cgGFjWBZhYz1zxMj6qSYX7RM707p1mclCcqgDWufaoNo1qGRjYa19cFiea54hrW0HPeyvEdeBK2rGlqx0niWpRt~IIv6GhZRnIzlORt~SwYevBIgIpvAiWfygrf0oQBycyaB5e8bkhVUmcDqICGOI1OEhGso2Uqo6jRjMHZ0eJtPVljHG9cS3-L1CZb0ixM3n-XA~fPeoMHDiC~MWU8jLLfT6QkT3vIxuInHO-FHYdeO7eO3n1WnJ5-vTchGX--lfMfQE-mm~0bt3Qs2vnogGAE2rcutsZ7h55efUgRpqkCGvX3fg__",fileName:"rose_celebrate.png",size:86400,key:"1",fileSize:"",file:void 0,type:"image"},{url:"https://s3-alpha-sig.figma.com/img/9d0c/f052/d64cc2f579c81a1b00818f7276fc7b70?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dv2V0i8lTHSCdlvQogFN9PU-AbUW2c9iSbPYw1cVYT9u1nKovLLuvSGVoTPBF7KzhiKP5LCO1Jf1d5NyXEVIVdlAfHaSVJnUAJg4I2NFiXBh1u4VqPr2T~BCpNoBIGzjrpSXfPQAPqxAxQgcakZwTfU6zTMYuSNDuxCGXkHr-MLsXzYWU6xO2H-Mxb2KL-w1pjkAdFoH4ZAiYMbYbf4tsV85LAQJ3Wi-0mI8LtW25KZDRH~HuLjCPs6uEzQ87aKP7BD3tvCCL0CMp-qtXqNYwSlKawA~JANedV3H93kfppw3ov5NOjU8gaQRLQuCamZqB3cK-zbNTaQckxLqE0KA~g__",fileName:"invitation_username.jpg",size:86400,key:"2",fileSize:"",file:void 0,type:"image"},{url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",fileName:"BigBuckBunny.mp4",size:86400,key:"2",fileSize:"",file:void 0,type:"video"}],recipients:{contactPerson:["1","2"],group:[{id:"1",label:"群組A"}],manual:"0912345678,0912345678",file:void 0},sendTimeType:"RESERVATION",reservationTime:"2024/02/14 17:30",effectiveTime:""},{key:"2",name:"9月壽星活動",messageType:"SMS",phone:"0961-238-888",content:"慶祝9月壽星 %field1%，特別優惠等你來享！ 九月生日的朋友們，這個月是您獨特的時刻！為了慶祝您的生日，我們特別準備了一系列令人驚喜的優惠和禮物。無論您是想要一項特別的折扣、額外的積分還是免費的驚喜禮物，我們都會在您的生日月份為您提供。請加入我們，一起慶祝這個特別的時刻，讓我們為您的生日帶來更多的歡樂和驚喜！",multimediaFile:[{url:"https://s3-alpha-sig.figma.com/img/58f4/3909/125235a1ee58204239489f870005010a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gOnAZsvJJ3b-I8sDdPUZz2M03-LWdip1MAOY8cgGFjWBZhYz1zxMj6qSYX7RM707p1mclCcqgDWufaoNo1qGRjYa19cFiea54hrW0HPeyvEdeBK2rGlqx0niWpRt~IIv6GhZRnIzlORt~SwYevBIgIpvAiWfygrf0oQBycyaB5e8bkhVUmcDqICGOI1OEhGso2Uqo6jRjMHZ0eJtPVljHG9cS3-L1CZb0ixM3n-XA~fPeoMHDiC~MWU8jLLfT6QkT3vIxuInHO-FHYdeO7eO3n1WnJ5-vTchGX--lfMfQE-mm~0bt3Qs2vnogGAE2rcutsZ7h55efUgRpqkCGvX3fg__",fileName:"rose_celebrate.png",size:86400,key:"1",fileSize:"",file:void 0,type:"image"}],recipients:{contactPerson:["1","2"],group:[{id:"1",label:"群組A"}],manual:"0912345678,0912345678",file:void 0},subject:"",sendTimeType:"RESERVATION",reservationTime:"2024/02/14 17:30",effectiveTime:""}],Ie=[{key:"1",name:"季末大促銷",account:"taiwan_media_00",sendNumber:"AJ593749G2",sendStatus:"RESERVATION",messageType:"MMS",phone:"0961-238-888",content:"愛戀情人節，獨家驚喜等您發現！ 情人節將至，愛戀之情將再次升華！我們特別為您準備了一場浪漫的情人節限定活動，帶來一系列獨家驚喜等您發現。無論您是想要為您的另一半挑選一份特別的禮物，還是希望一起度過浪漫的夜晚，我們都有豐富的選擇和活動等待著您。讓我們一同創造美好的回憶，共度這個充滿愛意的情人節！",multimediaFile:[{url:"https://s3-alpha-sig.figma.com/img/58f4/3909/125235a1ee58204239489f870005010a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gOnAZsvJJ3b-I8sDdPUZz2M03-LWdip1MAOY8cgGFjWBZhYz1zxMj6qSYX7RM707p1mclCcqgDWufaoNo1qGRjYa19cFiea54hrW0HPeyvEdeBK2rGlqx0niWpRt~IIv6GhZRnIzlORt~SwYevBIgIpvAiWfygrf0oQBycyaB5e8bkhVUmcDqICGOI1OEhGso2Uqo6jRjMHZ0eJtPVljHG9cS3-L1CZb0ixM3n-XA~fPeoMHDiC~MWU8jLLfT6QkT3vIxuInHO-FHYdeO7eO3n1WnJ5-vTchGX--lfMfQE-mm~0bt3Qs2vnogGAE2rcutsZ7h55efUgRpqkCGvX3fg__",fileName:"rose_celebrate.png",size:86400,key:"1",fileSize:"",file:void 0,type:"image"},{url:"https://s3-alpha-sig.figma.com/img/9d0c/f052/d64cc2f579c81a1b00818f7276fc7b70?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dv2V0i8lTHSCdlvQogFN9PU-AbUW2c9iSbPYw1cVYT9u1nKovLLuvSGVoTPBF7KzhiKP5LCO1Jf1d5NyXEVIVdlAfHaSVJnUAJg4I2NFiXBh1u4VqPr2T~BCpNoBIGzjrpSXfPQAPqxAxQgcakZwTfU6zTMYuSNDuxCGXkHr-MLsXzYWU6xO2H-Mxb2KL-w1pjkAdFoH4ZAiYMbYbf4tsV85LAQJ3Wi-0mI8LtW25KZDRH~HuLjCPs6uEzQ87aKP7BD3tvCCL0CMp-qtXqNYwSlKawA~JANedV3H93kfppw3ov5NOjU8gaQRLQuCamZqB3cK-zbNTaQckxLqE0KA~g__",fileName:"invitation_username.jpg",size:86400,key:"2",fileSize:"",file:void 0,type:"image"},{url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",fileName:"BigBuckBunny.mp4",size:86400,key:"2",fileSize:"",file:void 0,type:"video"}],isParameter:!1,statistics:{total:0,sending:0,success:0,fail:0,successRate:0},sendTime:"2024/10/28 17:30",createTime:"2024/10/28 17:30",updateTime:"2024/10/28 17:30"},{key:"2",name:"9月壽星活動",account:"taiwan_media_00",sendNumber:"AJ593749G2",sendStatus:"EXECUTING",messageType:"SMS",phone:"0961-238-888",content:"慶祝9月壽星 %field1%，特別優惠等你來享！ 九月生日的朋友們，這個月是您獨特的時刻！為了慶祝您的生日，我們特別準備了一系列令人驚喜的優惠和禮物。無論您是想要一項特別的折扣、額外的積分還是免費的驚喜禮物，我們都會在您的生日月份為您提供。請加入我們，一起慶祝這個特別的時刻，讓我們為您的生日帶來更多的歡樂和驚喜！",multimediaFile:[{url:"https://s3-alpha-sig.figma.com/img/58f4/3909/125235a1ee58204239489f870005010a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gOnAZsvJJ3b-I8sDdPUZz2M03-LWdip1MAOY8cgGFjWBZhYz1zxMj6qSYX7RM707p1mclCcqgDWufaoNo1qGRjYa19cFiea54hrW0HPeyvEdeBK2rGlqx0niWpRt~IIv6GhZRnIzlORt~SwYevBIgIpvAiWfygrf0oQBycyaB5e8bkhVUmcDqICGOI1OEhGso2Uqo6jRjMHZ0eJtPVljHG9cS3-L1CZb0ixM3n-XA~fPeoMHDiC~MWU8jLLfT6QkT3vIxuInHO-FHYdeO7eO3n1WnJ5-vTchGX--lfMfQE-mm~0bt3Qs2vnogGAE2rcutsZ7h55efUgRpqkCGvX3fg__",fileName:"rose_celebrate.png",size:86400,key:"1",fileSize:"",file:void 0,type:"image"}],isParameter:!1,statistics:{total:0,sending:0,success:0,fail:0,successRate:0},sendTime:X().format("YYYY/MM/DD HH:mm"),createTime:"2024/10/28 17:30",updateTime:"2024/10/28 17:30"},{key:"3",name:"季末大促銷季末大促銷季末大促銷季末大促銷季末大促銷季末大促銷",account:"taiwan_media_00",sendNumber:"AJ593749G2",sendStatus:"EXECUTING",messageType:"MMS",phone:"0961-238-888",content:"愛戀情人節，獨家驚喜等您發現！ 情人節將至，愛戀之情將再次升華！我們特別為您準備了一場浪漫的情人節限定活動，帶來一系列獨家驚喜等您發現。無論您是想要為您的另一半挑選一份特別的禮物，還是希望一起度過浪漫的夜晚，我們都有豐富的選擇和活動等待著您。讓我們一同創造美好的回憶，共度這個充滿愛意的情人節！",multimediaFile:[{url:"https://s3-alpha-sig.figma.com/img/58f4/3909/125235a1ee58204239489f870005010a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gOnAZsvJJ3b-I8sDdPUZz2M03-LWdip1MAOY8cgGFjWBZhYz1zxMj6qSYX7RM707p1mclCcqgDWufaoNo1qGRjYa19cFiea54hrW0HPeyvEdeBK2rGlqx0niWpRt~IIv6GhZRnIzlORt~SwYevBIgIpvAiWfygrf0oQBycyaB5e8bkhVUmcDqICGOI1OEhGso2Uqo6jRjMHZ0eJtPVljHG9cS3-L1CZb0ixM3n-XA~fPeoMHDiC~MWU8jLLfT6QkT3vIxuInHO-FHYdeO7eO3n1WnJ5-vTchGX--lfMfQE-mm~0bt3Qs2vnogGAE2rcutsZ7h55efUgRpqkCGvX3fg__",fileName:"rose_celebrate.png",size:86400,key:"1",fileSize:"",file:void 0,type:"image"}],isParameter:!0,statistics:{total:0,sending:0,success:0,fail:0,successRate:0},sendTime:"2024/02/14 17:30",createTime:"2024/10/28 17:30",updateTime:"2024/10/28 17:30"},{key:"4",name:"週年慶",account:"taiwan_media_00",sendNumber:"AJ593749G2",sendStatus:"IS_SENT",messageType:"MMS",phone:"0961-238-888",content:`準備好享受驚人的優惠和特別禮遇，因為我們正在慶祝週年紀念！ 不要錯過這場盛會 - 來店內或線上參加，盡情享受您最喜愛的產品的驚人折扣！這些週年慶特惠不會持續太久！立即購物，讓這個慶典變得難忘！
提供您專屬折扣碼：%field1%
有限期限至：%field2%`,multimediaFile:[{url:"https://s3-alpha-sig.figma.com/img/58f4/3909/125235a1ee58204239489f870005010a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gOnAZsvJJ3b-I8sDdPUZz2M03-LWdip1MAOY8cgGFjWBZhYz1zxMj6qSYX7RM707p1mclCcqgDWufaoNo1qGRjYa19cFiea54hrW0HPeyvEdeBK2rGlqx0niWpRt~IIv6GhZRnIzlORt~SwYevBIgIpvAiWfygrf0oQBycyaB5e8bkhVUmcDqICGOI1OEhGso2Uqo6jRjMHZ0eJtPVljHG9cS3-L1CZb0ixM3n-XA~fPeoMHDiC~MWU8jLLfT6QkT3vIxuInHO-FHYdeO7eO3n1WnJ5-vTchGX--lfMfQE-mm~0bt3Qs2vnogGAE2rcutsZ7h55efUgRpqkCGvX3fg__",fileName:"rose_celebrate.png",size:86400,key:"1",fileSize:"",file:void 0,type:"image"}],isParameter:!0,statistics:{total:0,sending:0,success:0,fail:0,successRate:0},sendTime:"2024/02/01 17:30",createTime:"2024/10/28 17:30",updateTime:"2024/10/28 17:30"},{key:"5",name:"聖誕佳節",account:"taiwan_media_00",sendNumber:"AJ593749G2",sendStatus:"RESERVATION_FAILED",messageType:"SMS",phone:"0961-238-888",content:"聖誕節大促銷來啦！快來店裡或線上參加我們的節慶活動，享受驚喜禮遇！找尋最適合送給親朋好友的禮物，一起度過溫馨愉快的節日時光！敬請期待我們的特別優惠，讓您的聖誕更加美好！",multimediaFile:[{url:"https://s3-alpha-sig.figma.com/img/58f4/3909/125235a1ee58204239489f870005010a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gOnAZsvJJ3b-I8sDdPUZz2M03-LWdip1MAOY8cgGFjWBZhYz1zxMj6qSYX7RM707p1mclCcqgDWufaoNo1qGRjYa19cFiea54hrW0HPeyvEdeBK2rGlqx0niWpRt~IIv6GhZRnIzlORt~SwYevBIgIpvAiWfygrf0oQBycyaB5e8bkhVUmcDqICGOI1OEhGso2Uqo6jRjMHZ0eJtPVljHG9cS3-L1CZb0ixM3n-XA~fPeoMHDiC~MWU8jLLfT6QkT3vIxuInHO-FHYdeO7eO3n1WnJ5-vTchGX--lfMfQE-mm~0bt3Qs2vnogGAE2rcutsZ7h55efUgRpqkCGvX3fg__",fileName:"rose_celebrate.png",size:86400,key:"1",fileSize:"",file:void 0,type:"image"}],isParameter:!0,statistics:{total:0,sending:0,success:0,fail:0,successRate:0},sendTime:"2023/12/20 17:30",createTime:"2024/10/28 17:30",updateTime:"2024/10/28 17:30"}];function fs(){const{list:M,pagination:G,setResponseList:q}=is(),K=async x=>{q({total:11,pages:1,current:1,pageSize:10,records:Ie})},H=y(),v=async x=>{const _=Ie.find(F=>F.key===x);return H.value=_,{data:{..._}}},Y=async x=>({data:{status:"success",id:"1"}}),w=async(x,_)=>({data:{status:"success",id:"1"}}),g=async x=>({data:{...ms.find(F=>F.key===x)}}),Z=x=>({data:{fileName:x.name,url:window.URL.createObjectURL(x)}}),d=y([{label:"不設定(預設)",value:""},{label:"1 小時",value:"1 小時"},{label:"2 小時",value:"2 小時"},{label:"3 小時",value:"3 小時"},{label:"4 小時",value:"4 小時"},{label:"5 小時",value:"5 小時"},{label:"6 小時",value:"6 小時"},{label:"7 小時",value:"7 小時"},{label:"8 小時",value:"8 小時"}]);return{getMessageSendings:K,messageSendings:M,pagination:G,createGeneralMessageSending:Y,updateGeneralMessageSending:w,messageSending:H,getMessageSending:v,getGeneralMessageSendingById:g,uploadBatchRecipientsExcel:Z,effectiveTimeOption:d,getActiveStatusLabel:(x,_)=>x==="MMS"?_?fe.MMS_Parameter:fe.MMS_General:_?fe.SMS_Parameter:fe.SMS_General,checkMessageSendingDetail:async x=>({data:{...x,isParameter:!1,price:5,recipientsCount:6208,isBlackListCount:12,estimatedTotalAmount:31400,estimatedRemainingAmount:-3580,totalLongMessages:3}}),checkMessageSendingNameExist:async(x,_)=>{const F=Ze(Ie,{name:x});return F?!(!Qe(_)&&F.key===_):!1}}}var et=(M=>(M.NOW="現在",M.RESERVATION="預約",M))(et||{});const gs=o("span",{class:"pe-.5"},"活動名稱",-1),_s=o("span",{class:"text-red-500 pe-2"},"*",-1),vs={href:"javascript:;"},ys=o("span",{class:"pe-.5"},"接收門號",-1),xs=o("span",{class:"text-red-500 pe-2"},"*",-1),hs={href:"javascript:;"},bs=o("br",null,null,-1),Ss=o("br",null,null,-1),Ms=o("br",null,null,-1),Ts=o("br",null,null,-1),ks=o("br",null,null,-1),ws={class:"text-sm text-sms-secondary-dark-blue-100 font-400"},Cs=o("div",{class:"ant-form-item-extra"}," 若有多筆門號，使用 “ , ” 隔開，例如：0911111222,0922123456,0933987654 ",-1),Rs={href:"javascript:;",class:"underline underline-offset-2 text-sms-primary-blue-80 text-sm line-height-14px py-1"},Ps={href:"javascript:;",class:"underline underline-offset-2 text-sms-primary-blue-80 text-sm line-height-14px py-1"},Is=o("span",{class:"pe-.5"},"訊息類型",-1),Os=o("span",{class:"text-red-500 pe-2"},"*",-1),As={href:"javascript:;"},Gs=o("br",null,null,-1),js={class:"flex gap-2 overflow-y-auto h-95px"},Fs={class:"text-sms-grayscale-60 text-xs font-500 font-sans text-center break-words"},Es=o("span",{class:"pe-.5"},"發送時間",-1),Ls=o("span",{class:"text-red-500 pe-2"},"*",-1),Ns={href:"javascript:;"},Bs=o("span",{class:"pe-.5"},"有效時間",-1),Hs=o("span",{class:"text-red-500 pe-2"},"*",-1),Ws={href:"javascript:;"},Us={key:0,id:"confirmDetail",class:"px-32px"},qs=o("div",{class:"mb-4"},[o("h2",{class:"font-500 text-22px text-sms-secondary-dark-blue-100"}," 內容確認 "),o("p",{class:"text-sm text-sms-grayscale-80"}," 若有使用縮網址功能，請在發送訊息前再次確認短網址有效性，平台不會檢驗短網址有效性 ")],-1),Ys={class:"border border-solid border-sms-light-gray-60 p-16px pb-24px rounded-12px mb-2"},zs=o("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 活動名稱 ",-1),Vs={class:"text-base font-400 text-sms-grayscale-100"},Ds=o("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 發送時間 ",-1),Ks={key:0,class:"text-base font-400 text-sms-grayscale-100"},Zs=o("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 訊息類型 ",-1),Qs={class:"text-base font-400 text-sms-grayscale-100"},$s=o("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 發送門號 ",-1),Js={class:"text-base font-400 text-sms-grayscale-100"},Xs=o("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 訊息總數 (長訊息) ",-1),ea={class:"text-base font-400 text-sms-grayscale-100"},ta=o("div",{class:"text-sm font-400 text-sms-grayscale-80 mb-1"}," 單價 ",-1),sa={class:"text-base font-400 text-sms-grayscale-100"},aa={class:"text-sm font-400 text-sms-grayscale-80 mb-1"},na={href:"javascript:;"},oa={class:"text-base font-400 text-sms-grayscale-100"},ia=o("span",{class:"text-sms-grayscale-60 text-sm"}," (非最終數量)",-1),la={class:"text-sm font-400 text-sms-grayscale-80 mb-1"},ra={href:"javascript:;"},ca={class:"text-base font-400 text-sms-grayscale-100"},ua=o("span",{class:"text-sms-grayscale-60 text-sm"}," (非最終數量)",-1),pa={class:"text-sm font-400 text-sms-grayscale-80 mb-1"},da={href:"javascript:;"},ma=o("br",null,null,-1),fa={class:"text-base font-400 text-sms-grayscale-100"},ga={class:"text-sm font-400 text-sms-grayscale-80 mb-1"},_a={href:"javascript:;"},va=o("div",{class:"text-center px-30px py-20px w-328px text-base mx-auto"}," 刪除的檔案將無法復原 ",-1),ya=o("div",{class:"text-center px-30px py-20px w-328px text-base mx-auto"},[r(" 您編輯過的內容將全部清空 "),o("br"),o("p",null,[r(" 提醒您，SMS支援的字數較MMS少，"),o("br"),r(" 且不能上傳多媒體附件 ")])],-1),xa=o("div",{class:"text-center px-30px py-20px w-328px text-base mx-auto"},[o("p",{class:"text-base text-center text-sms-gary-80"},[r(" 正確的格式範例 "),o("a",{class:"text-sms-primary-blue-80 ms-1 underline underline-offset-2",href:"",download:""},"點擊此處下載")])],-1),Ga=Oe({__name:"create-or-update-form",props:{isCreate:{type:Boolean,default:!1},id:{},editCallback:{},showPreview:{type:Boolean,default:!0}},setup(M){const G=M;X.extend(os);const{setHideAlert:q,setShowAlert:K}=Ct(),H=jt(),v=Lt(),Y=Nt(),w=Ue(G,"isCreate"),g=Ue(G,"id"),{replaceFieldToHtml:Z}=rs(),d=y(),{updateGeneralMessageSending:te,getGeneralMessageSendingById:se,createGeneralMessageSending:j,uploadBatchRecipientsExcel:x,effectiveTimeOption:_,getActiveStatusLabel:F,checkMessageSendingDetail:ne,checkMessageSendingNameExist:f}=fs(),{getGroupLabelOption:u,groupOptions:T}=Xe(),L=y("");let A={name:"",phone:void 0,recipients:{contactPerson:[],group:[],manual:"",file:void 0},messageType:"SMS",subject:"",multimediaFile:[],sendTimeType:"NOW",content:"",effectiveTime:"",reservationTime:""};const R=[{label:"0935-111-111",value:"0935-111-111"},{label:"0947-127-998",value:"0947-127-998"},{label:"0958-892-006",value:"0958-892-006"}],Q=y("ContactPerson"),ve=y(!1),a=ge(Yt(A)),ye=qe(()=>a.messageType==="SMS"?335:1e3),tt=ge({name:[{async validator(i,s){return C(s)?Promise.reject("請輸入活動名稱"):await f(s,g.value)?Promise.reject("此活動名稱已存在，請重新命名 "):Promise.resolve()},trigger:"blur"}],phone:[{required:!0,message:"請選擇發送門號",trigger:"blur"}],subject:[{async validator(i,s){return a.messageType==="MMS"&&C(s)?Promise.reject("請輸入訊息主旨"):Promise.resolve()},trigger:"blur"}],recipients:[{async validator(i){if(C(a.recipients.contactPerson)&&C(a.recipients.group)&&C(a.recipients.manual)&&Qe(a.recipients.file))return Promise.reject("至少 1 個接收門號");if(C(a.recipients.manual)){const s=a.recipients.manual.split(",").length,c=a.recipients.contactPerson.length,p=a.recipients.group.length;if(s+c+p>5e4)return Promise.reject("總接收門號數不可超過 5萬筆")}else if(!/^09[0-9]{8}(,09[0-9]{8})*$/.test(a.recipients.manual))return Q.value="ManualInput",Promise.reject("格式錯誤");return Promise.resolve()},trigger:"blur"}],content:[{async validator(i,s){var c;return C(s)?Promise.reject("請輸入訊息內容"):!C(s)&&((c=a.content)==null?void 0:c.replace(Pe,"").length)>ye.value?Promise.reject(`限制輸入 ${ye.value} 字以內`):Promise.resolve()},trigger:"blur"}],reservationTime:[{async validator(i,s){if(a.sendTimeType==="RESERVATION"){if(C(s))return Promise.reject("請選擇預約日期或現在發送");if(X().diff(X(s),"minute")>0)return Promise.reject("閒置過久，請重新選擇預約時間")}return Promise.resolve()},trigger:"blur"}]}),{validateInfos:z,validate:st,resetFields:at}=zt(a,tt);Bt(async()=>{var i,s,c,p,V,P,m,B,I,$,he,be,re,ce,Se,Me,Te,ae,ke,we;if(await u(),L.value=X().format("YYYY/MM/DD_HH:mm"),!w.value&&g.value){const W=await se(g.value);W.data&&(d.value=W.data,A={name:((i=d.value)==null?void 0:i.name)??e(L),phone:((s=d.value)==null?void 0:s.phone)??void 0,recipients:{contactPerson:((p=(c=d.value)==null?void 0:c.recipients)==null?void 0:p.contactPerson)??[],group:((P=(V=d.value)==null?void 0:V.recipients)==null?void 0:P.group)??[],manual:((B=(m=d.value)==null?void 0:m.recipients)==null?void 0:B.manual)??"",file:(($=(I=d.value)==null?void 0:I.recipients)==null?void 0:$.file)??void 0},messageType:((he=d.value)==null?void 0:he.messageType)??"SMS",subject:((be=d.value)==null?void 0:be.subject)??"",multimediaFile:((re=d.value)==null?void 0:re.multimediaFile)??[],sendTimeType:((ce=d.value)==null?void 0:ce.sendTimeType)??"NOW",content:((Se=d.value)==null?void 0:Se.content)??"",effectiveTime:((Me=d.value)==null?void 0:Me.effectiveTime)??"",reservationTime:((Te=d.value)==null?void 0:Te.reservationTime)??""})}else{if((ae=v.query)!=null&&ae.isRe){L.value=`RE_${L.value}`;const W=(ke=v.query)!=null&&ke.rePhone?v.query.rePhone:void 0,l=(we=v.query)!=null&&we.recipientsPhone?v.query.recipientsPhone:void 0;W&&(A.phone=W),l&&(Ze(R,{value:l})?A.recipients.contactPerson=[l]:(Q.value="ManualInput",A.recipients.manual=l))}A.name=e(L)}at(A)}),Ht(()=>a,i=>{const s=Ve(i,A);w.value&&!g.value&&(s?q():K())},{deep:!0});const h=y(null);function nt(){st().then(async()=>{const i=await ne(a);if(i.data){h.value=i.data,ve.value=!0,await Ye();const s=document.getElementById("app");s&&(s.scrollTop=0)}}).catch(i=>{console.log(i)})}async function ot(){var c,p,V,P;const s=await(e(w)?j:te)(a,g.value);if(((c=s.data)==null?void 0:c.status)==="success")if(w.value&&!g.value)if(q(),(p=v.query)!=null&&p.isRe&&((V=v.query)!=null&&V.rePhone)&&((P=v.query)!=null&&P.recipientsPhone)){const{post:m,close:B}=ze({name:"in-chat-message-page"});m(s.data.id),B(),window.close()}else H.success({message:"訊息新增成功",placement:"top"}),Y.push("/sms-marketing/message-sending").then(()=>{setTimeout(()=>{var I;const{post:m,close:B}=ze({name:"in-message-sending-page"});m((I=s.data)==null?void 0:I.id),B()},800)});else G.editCallback&&G.editCallback(!0,g.value),H.success({message:"訊息編輯成功",placement:"top"})}const Ge=y(null);function je(i){a.content=Z(i)}const it=y(null);function lt(i){for(const s of i)a.content=`${a.content}<span>${s}</span>`}const Fe=y(null);function rt(i){a.content=`${a.content}<a href="${i}">${i}</a>`}const Ee=y(null),ct=qe(()=>{const i=[];if((!C(a.content)||!C(a.subject))&&i.push({phone:a.phone,content:a.content,...a.messageType==="MMS"&&{subject:a.subject},messageType:"SENT",contentType:"text"}),!C(a.multimediaFile))for(const s of a.multimediaFile)i.push({phone:a.phone,content:s.url,messageType:"SENT",contentType:s.type});return i.map((s,c)=>({...s,key:c}))}),Le=y(null);function ut(i){a.multimediaFile=i}const oe=ge({open:!1});function pt(i){Object.assign(oe,{open:!0,delFile:i})}function dt(){a.multimediaFile=a.multimediaFile.filter(i=>{var s;return i.url!==((s=oe.delFile)==null?void 0:s.url)}),Object.assign(oe,{open:!1,delFile:void 0})}const ie=y(!1);function mt(){a.messageType==="SMS"?!C(a.content)||!C(a.multimediaFile)?ie.value=!0:a.messageType="SMS":a.messageType="MMS"}const Ne=y(null),Be=y(null);function He(i){Object.assign(a,i)}const le=y(!1),xe=y();async function ft(i){const c=i.target.files;try{if(c.length>0){const p=await x(c[0]);a.recipients.file=p.data,le.value=!0}}catch(p){console.log(p)}finally{xe.value&&(xe.value.value="")}}const gt=Ft();function _t(){gt.confirm({title:"是否取消上傳檔案？",icon:t("span"),content:qt("div",{innerHTML:"該檔案將取消上傳",class:"text-center px-30px py-20px w-328px text-base mx-auto"}),width:"400px",centered:!0,closable:!0,async onOk(){a.recipients.file=void 0}})}const We=X();function vt(i){const s=We.add(1,"year");return i&&(i<We||i>=s)}function yt(i){if(i&&i.isToday()){const s=X().add(5,"minute"),c=s.hour(),p=s.minute();return{disabledHours:()=>De(0,24).slice(0,c),disabledMinutes:()=>De(0,60).slice(0,p)}}return{}}function xt(){const i=Ve(a,A);G.editCallback&&G.editCallback(i)}function ht(){w.value&&!g.value?Y.push("/sms-marketing/message-sending"):xt()}const Ce=y("responsive");function bt(i){a.recipients.group=a.recipients.group.filter(s=>s.id!==i)}async function St(i){const p=i.target.value.replace(/[^\d|,]/g,"");await Ye(),a.recipients.manual=p}return(i,s)=>{const c=Et,p=Vt,V=Dt,P=Kt,m=Zt,B=Qt,I=Gt,$=$t,he=Jt,be=Xt,re=es,ce=ts,Se=kt,Me=At,Te=ss,ae=as,ke=ns,we=wt,W=Ae;return S(),N(J,null,[t(ae,{class:de(["bg-sms-grayscale-0 rounded-4",{"p-10 pl-1":e(w)&&!e(g)}]),wrap:!1},{default:n(()=>[t(m,{flex:"auto"},{default:n(()=>[ue(t(ke,{class:"px-32px",layout:"vertical",autocomplete:"off",onSubmit:nt},{default:n(()=>[t(ae,{gutter:[16,14]},{default:n(()=>[t(m,{span:24},{default:n(()=>[t(P,D(e(z).name,{"html-for":""}),{label:n(()=>[gs,_s,t(p,{placement:"top","get-popup-container":e(U)},{title:n(()=>[r(" 活動名稱可使用系統預設或自行輸入，但不可重複 ")]),default:n(()=>[o("a",vs,[t(c,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),default:n(()=>[t(V,{value:e(a).name,"onUpdate:value":s[0]||(s[0]=l=>e(a).name=l),placeholder:"請輸入文字",maxlength:30,onFocus:s[1]||(s[1]=()=>{e(a).name===e(L)&&(e(a).name="")}),onBlur:s[2]||(s[2]=()=>{e(a).name===""&&(e(a).name=e(L))})},null,8,["value"])]),_:1},16)]),_:1}),t(m,{span:24},{default:n(()=>[t(P,D(e(z).phone,{label:"發送門號",required:""}),{default:n(()=>[t(B,{value:e(a).phone,"onUpdate:value":s[3]||(s[3]=l=>e(a).phone=l),options:R,"allow-clear":"",placeholder:"請選擇發送門號"},null,8,["value"])]),_:1},16)]),_:1}),t(m,{span:24},{default:n(()=>[t(P,D({"html-for":""},e(z).recipients),{label:n(()=>[ys,xs,t(p,{"overlay-inner-style":{width:"315px"},placement:"top","get-popup-container":e(U)},{title:n(()=>[r(" 4 種方式增加接收門號 ，且可混合使用(總上限5萬筆)："),bs,r(" 1. 從名單管理匯入聯絡人"),Ss,r(" 2. 從名單管理匯入群組標籤"),Ms,r(" 3. 直接輸入接收門號"),Ts,r(" 4. Excel 快速上傳門號"),ks]),default:n(()=>[o("a",hs,[t(c,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),default:n(()=>[t(be,{activeKey:e(Q),"onUpdate:activeKey":s[10]||(s[10]=l=>_e(Q)?Q.value=l:null),size:"small",class:"full-border-tab",type:"card","destroy-inactive-tab-pane":!0},{default:n(()=>[t($,{key:"ContactPerson",tab:"聯絡人"},{default:n(()=>[t(I,{status:"small2",class:"me-2",onClick:s[4]||(s[4]=l=>{var k,O;return(O=e(Ne))==null?void 0:O.show(((k=e(a).recipients)==null?void 0:k.contactPerson)??[])})},{icon:n(()=>[t(c,{name:"plus",width:"16px"})]),default:n(()=>[r(" 選擇聯絡人 ")]),_:1}),o("span",ws,"已選擇 "+b(e(a).recipients.contactPerson.length.toLocaleString())+" 筆",1)]),_:1},8,["tab"]),t($,{key:"GroupLabel",tab:"群組標籤"},{default:n(()=>[e(a).recipients.group.length>0?(S(),ee(B,{key:0,class:"mb-2",open:!1,options:e(T),value:e(a).recipients.group.map(l=>l.id),mode:"tags","max-tag-count":e(Ce),onDeselect:bt,onBlur:s[6]||(s[6]=l=>Ce.value="responsive")},{maxTagPlaceholder:n(l=>[o("span",{href:"javascript:;",onClick:s[5]||(s[5]=Wt(k=>Ce.value=void 0,["prevent"]))},[t(c,{name:"plus",width:"12px"}),r(b(l.length)+"...",1)])]),_:1},8,["options","value","max-tag-count"])):me("",!0),t(I,{status:"small2",class:"me-2",onClick:s[7]||(s[7]=l=>{var k;return(k=e(Be))==null?void 0:k.show(e(a).recipients.group??[])})},{icon:n(()=>[t(c,{name:"plus",width:"16px"})]),default:n(()=>[r(" 選擇群組標籤 ")]),_:1})]),_:1},8,["tab"]),t($,{key:"ManualInput",tab:"手動輸入"},{default:n(()=>[t(he,{value:e(a).recipients.manual,"onUpdate:value":s[8]||(s[8]=l=>e(a).recipients.manual=l),placeholder:"請輸入接收門號",rows:6,onInput:St},null,8,["value"]),Cs]),_:1},8,["tab"]),t($,{key:"FileUpload",tab:"上傳檔案"},{default:n(()=>[e(a).recipients.file?(S(),N(J,{key:1},[o("a",Ps,b(e(a).recipients.file.fileName),1),t(c,{name:"download-circle",width:"16px",class:"mx-2 cursor-pointer"}),t(c,{name:"delete-circle",width:"16px",class:"cursor-pointer",onClick:_t})],64)):(S(),N(J,{key:0},[o("input",{ref_key:"uploadBatchRecipientsFile",ref:xe,type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",class:"!hidden",onChange:ft},null,544),t(I,{status:"small2",class:"me-2",onClick:s[9]||(s[9]=l=>{var k;return(k=e(xe))==null?void 0:k.click()})},{icon:n(()=>[t(c,{name:"plus",width:"16px"})]),default:n(()=>[r(" 上傳EXCEL ")]),_:1}),o("a",Rs,[t(c,{name:"download",width:"16px"}),r(" 匯出範例 ")])],64))]),_:1},8,["tab"])]),_:1},8,["activeKey"])]),_:1},16)]),_:1}),t(m,{span:24},{default:n(()=>[t(P,D({"html-for":""},e(z).messageType),{label:n(()=>[Is,Os,t(p,{placement:"top","get-popup-container":e(U)},{title:n(()=>[r(" SMS：上限 335 字"),Gs,r(" MMS：上限 1,000 字，可上傳多媒體 ")]),default:n(()=>[o("a",As,[t(c,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),default:n(()=>[t(ce,{value:e(a).messageType,"onUpdate:value":s[11]||(s[11]=l=>e(a).messageType=l),onChange:mt},{default:n(()=>[(S(!0),N(J,null,Re(Object.entries(e(Mt)),([l,k])=>(S(),ee(re,{key:l,value:l},{default:n(()=>[r(b(k),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1},16)]),_:1}),ue(t(m,{span:24},{default:n(()=>[t(P,D({label:"訊息主旨"},e(z).subject,{required:"",extra:"15 字以內"}),{default:n(()=>[t(V,{value:e(a).subject,"onUpdate:value":s[12]||(s[12]=l=>e(a).subject=l),placeholder:"請輸入訊息主旨",maxlength:15},null,8,["value"])]),_:1},16)]),_:1},512),[[pe,e(a).messageType==="MMS"]]),t(m,{span:24},{default:n(()=>{var l;return[t(P,D({"html-for":"",label:"訊息內容"},e(z).content,{class:"relative",extra:`${e(a).messageType} 上限 ${e(ye).toLocaleString()} 字，目前 ${e(C)(e(a).content)?"--":(l=e(a).content)==null?void 0:l.replace(e(Pe),"").length} 字`}),{default:n(()=>{var k;return[t(Me,{modelValue:e(a).content,"onUpdate:modelValue":s[17]||(s[17]=O=>e(a).content=O),contenteditable:"true",style:{height:"292px"},"content-len":(k=e(a).content)==null?void 0:k.replace(e(Pe),"").length,"max-len":e(ye),placeholder:"請輸入文字"},Ut({default:n(()=>[t(p,null,{title:n(()=>[r(" 載入現有的自訂訊息 ")]),default:n(()=>[t(c,{name:"import",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:s[13]||(s[13]=O=>{var E;return(E=e(Ge))==null?void 0:E.show()})})]),_:1}),t(p,null,{title:n(()=>[r(" 增加縮網址 ")]),default:n(()=>[t(c,{name:"link",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:s[14]||(s[14]=O=>{var E;return(E=e(Fe))==null?void 0:E.show()})})]),_:1}),t(p,null,{title:n(()=>[r(" 多媒體附件上傳 ")]),default:n(()=>[ue(t(c,{name:"cloud-upload",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:s[15]||(s[15]=O=>{var E;return(E=e(Le))==null?void 0:E.show(e(a).multimediaFile)})},null,512),[[pe,e(a).messageType==="MMS"]])]),_:1}),t(p,null,{title:n(()=>[r(" AI 文字生成訊息 ")]),default:n(()=>[t(c,{name:"AI",class:"text-sms-bg-dark-mode cursor-pointer me-4",width:"24px",onClick:s[16]||(s[16]=O=>{var E;return(E=e(Ee))==null?void 0:E.show()})})]),_:1})]),_:2},[e(a).multimediaFile.length>0?{name:"multimediaBlock",fn:n(()=>[o("div",js,[(S(!0),N(J,null,Re(e(a).multimediaFile,O=>(S(),N("div",{key:O.url,class:"w-90px max-h-60px"},[t(Se,{source:{url:O.url,type:O.type},"show-file-name":!1,"can-play":!1,size:"small","image-class":"object-cover w-full h-full",onDeleteVideo:E=>pt(O)},null,8,["source","onDeleteVideo"]),o("div",Fs,b(O.fileName),1)]))),128))])]),key:"0"}:void 0]),1032,["modelValue","content-len","max-len"])]}),_:1},16,["extra"])]}),_:1}),t(m,{span:24,class:"bg-sms-bg-light-mode-gray rounded-md !p-20px"},{default:n(()=>[t(P,D(e(z).reservationTime,{"html-for":"",class:"mb-4"}),{label:n(()=>[Es,Ls,t(p,{placement:"top","get-popup-container":e(U)},{title:n(()=>[r(" 最快可預約5分鐘之後以及系統當下 1 年內時間，惟實際發送時間以系統排程為主 ")]),default:n(()=>[o("a",Ns,[t(c,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),default:n(()=>[t(ce,{value:e(a).sendTimeType,"onUpdate:value":s[18]||(s[18]=l=>e(a).sendTimeType=l)},{default:n(()=>[(S(!0),N(J,null,Re(Object.entries(e(et)),([l,k])=>(S(),ee(re,{key:l,value:l},{default:n(()=>[r(b(k),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"]),ue(t(Te,{value:e(a).reservationTime,"onUpdate:value":s[19]||(s[19]=l=>e(a).reservationTime=l),format:"YYYY/MM/DD HH:mm","value-format":"YYYY/MM/DD HH:mm","disabled-date":vt,"disabled-time":yt,"show-time":!0,"show-now":!1},null,8,["value"]),[[pe,e(a).sendTimeType==="RESERVATION"]])]),_:1},16),t(P,D(e(z).sendTimeType,{"html-for":""}),{label:n(()=>[Bs,Hs,t(p,{placement:"top","get-popup-container":e(U)},{title:n(()=>[r(" 因接收門號而無法成功送達訊息，會在此設定有效時間內重複嘗試發送 ")]),default:n(()=>[o("a",Ws,[t(c,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),default:n(()=>[t(B,{value:e(a).effectiveTime,"onUpdate:value":s[20]||(s[20]=l=>e(a).effectiveTime=l),options:e(_),"list-height":300,placeholder:"請選擇有效時間"},null,8,["value","options"])]),_:1},16)]),_:1}),t(m,{span:24,class:de({"text-end":e(w)&&!e(g),"text-center py-6 ":!e(w)&&e(g)})},{default:n(()=>[t(I,{status:"small2",class:"me-2",onClick:ht},{default:n(()=>[r(" 取消 ")]),_:1}),t(I,{status:"small1","html-type":"submit"},{default:n(()=>[r(" 確定 ")]),_:1})]),_:1},8,["class"])]),_:1})]),_:1},512),[[pe,!e(ve)]]),e(ve)&&e(h)?(S(),N("div",Us,[qs,o("div",Ys,[t(ae,{gutter:[16,16]},{default:n(()=>[t(m,{span:24,class:"mb-"},{default:n(()=>[zs,o("div",Vs,b(e(h).name),1)]),_:1}),t(m,{span:8},{default:n(()=>[Ds,e(h).sendTimeType==="RESERVATION"?(S(),N("div",Ks,b(e(h).reservationTime),1)):(S(),N("div",{key:1,class:de(["text-base font-400 text-sms-grayscale-100",{"text-sms-status-alert-red":Math.sign(e(h).estimatedRemainingAmount)===-1}])}," 現在 ",2))]),_:1}),t(m,{span:8},{default:n(()=>[Zs,o("div",Qs,b(e(F)(e(h).messageType,e(h).isParameter)),1)]),_:1}),t(m,{span:8},{default:n(()=>[$s,o("div",Js,b(e(h).phone),1)]),_:1}),e(h).messageType==="SMS"?(S(),ee(m,{key:0,span:8},{default:n(()=>[Xs,o("div",ea,b(e(h).totalLongMessages),1)]),_:1})):me("",!0),t(m,{span:8},{default:n(()=>[ta,o("div",sa," NT$ "+b(e(h).price),1)]),_:1}),t(m,{span:8},{default:n(()=>[o("div",aa,[r(" 接收門號總數 "),t(p,{placement:"top","get-popup-container":e(U)},{title:n(()=>[r(" 未過濾所有黑名單，發送時會再檢核，最終接收門號數量可能變動 ")]),default:n(()=>[o("a",na,[t(c,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),o("div",oa,[r(b(e(h).recipientsCount.toLocaleString())+" ",1),ia])]),_:1}),t(m,{span:8},{default:n(()=>[o("div",la,[r(" 黑名單門號總數 "),t(p,{placement:"top","get-popup-container":e(U)},{title:n(()=>[r(" 目前已篩選掉該黑名單數量，發送時會再檢核最新黑名單，最終黑名單門號總數可能變動 ")]),default:n(()=>[o("a",ra,[t(c,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),o("div",ca,[r(b(e(h).isBlackListCount.toLocaleString())+" ",1),ua])]),_:1}),t(m,{span:8},{default:n(()=>[o("div",pa,[r(" 預估發送總金額 "),t(p,{placement:"top","get-popup-container":e(U),"overlay-inner-style":{width:"397px"}},{title:n(()=>[r(" 發送總金額 = 訊息總數 x ( 接收門號總數 - 黑名單門號總數 ) x 單價"),ma,r(" 參數訊息之訊息總數以一則計算，實際計價以發送字數等於幾則來計價 ")]),default:n(()=>[o("a",da,[t(c,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),o("div",fa," NT$ "+b(e(h).estimatedTotalAmount.toLocaleString()),1)]),_:1}),t(m,{span:8},{default:n(()=>[o("div",ga,[r(" 預估剩餘金額 "),t(p,{placement:"top","get-popup-container":e(U)},{title:n(()=>[r(" 餘額不足仍可預約，請注意於預約時間前進行儲值才可成功發送訊息 ")]),default:n(()=>[o("a",_a,[t(c,{name:"union",width:"16px",class:"text-sms-grayscale-60"})])]),_:1},8,["get-popup-container"])]),o("div",{class:de(["text-base font-400 text-sms-grayscale-100",{"text-sms-status-alert-red":Math.sign(e(h).estimatedRemainingAmount)===-1}])}," NT$ "+b(e(h).estimatedRemainingAmount.toLocaleString()),3)]),_:1})]),_:1})]),o("div",{class:de(["flex items-center justify-end",{"py-4":!e(w)&&e(g)}])},[ue(o("div",{class:"text-sms-status-alert-red text-base me-4"},b(e(h).sendTimeType==="RESERVATION"?"可預約，請於發送時間之前儲值完畢，以免發送失敗":"剩餘金額不足，建議回上一步改成預約發送後再盡快儲值"),513),[[pe,Math.sign(e(h).estimatedRemainingAmount)===-1]]),t(I,{status:"small2",class:"me-2",onClick:s[21]||(s[21]=()=>{ve.value=!1,h.value=null})},{default:n(()=>[r(" 上一步 ")]),_:1}),t(I,{onClick:ot},{default:n(()=>[r(" 確定 ")]),_:1})],2)])):me("",!0)]),_:1}),i.showPreview?(S(),ee(m,{key:0,flex:"428px",class:"relative"},{default:n(()=>[t(we,{message:e(ct)},null,8,["message"])]),_:1})):me("",!0)]),_:1},8,["class"]),t(Rt,{ref_key:"importCustomMessageRef",ref:Ge,content:e(a).content,onUpdateContent:je},null,8,["content"]),t(Pt,{ref_key:"addFieldRef",ref:it,onAddFieldToContent:lt},null,512),t(It,{ref_key:"addLinkRef",ref:Fe,onAddLinkToContent:rt},null,512),t(Ot,{ref_key:"aiTextGenerationRef",ref:Ee,content:e(a).content,onUpdateContent:je},null,8,["content"]),t(Tt,{ref_key:"multimediaUploadRef",ref:Le,onUpdateMultimediaFile:ut},null,512),t(W,{open:e(oe).open,"onUpdate:open":s[22]||(s[22]=l=>e(oe).open=l),title:"是否刪除已上傳的檔案？",centered:"","cancel-text":"取消","ok-text":"確定",width:"400px",onOk:dt},{default:n(()=>[va]),_:1},8,["open"]),t(W,{open:e(ie),"onUpdate:open":s[23]||(s[23]=l=>_e(ie)?ie.value=l:null),title:"是否放棄目前編輯的內容？",centered:"","cancel-text":"取消","ok-text":"確定",width:"400px",onCancel:s[24]||(s[24]=l=>e(a).messageType="MMS"),onOk:s[25]||(s[25]=()=>{e(a).content="",e(a).multimediaFile=[],e(a).subject="",ie.value=!1})},{default:n(()=>[ya]),_:1},8,["open"]),t(us,{ref_key:"selectContactRef",ref:Ne,"form-state":e(a),onUpdateFormState:He},null,8,["form-state"]),t(ds,{ref_key:"selectGroupRef",ref:Be,"form-state":e(a),onUpdateFormState:He},null,8,["form-state"]),t(W,{open:e(le),"onUpdate:open":s[27]||(s[27]=l=>_e(le)?le.value=l:null),title:"資料格式有誤，請重新確認上傳",width:"400px",centered:""},{footer:n(()=>[t(I,{onClick:s[26]||(s[26]=l=>le.value=!1)},{default:n(()=>[r(" 確定 ")]),_:1})]),default:n(()=>[xa]),_:1},8,["open"])],64)}}});export{fe as M,Ga as _,fs as u};
