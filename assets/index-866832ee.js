import{i as ne,a as G,_ as se,b as ae,s as W,n as D,c as P,d as K,e as B,f as le,u as ie,g as re,h as de,R as Q,p as ce}from"./index-3d3117e7.js";import{u as I,a as ue}from"./context-a7fa72d2.js";import{d as b,c as $,V as n,W as m,X as v,u as e,a2 as C,a3 as f,a4 as L,s as N,k as c,l as pe,F as w,Z as h,a5 as x,_ as a,a6 as R,a7 as A,a8 as Y,$ as z,G as H,a9 as Z,B as _e,H as me,aa as he,ab as ye,r as fe,ac as ve,Y as X,w as ge,ad as ke}from"./vue-343cbd91.js";import{M as $e,B as xe,b as be,L as Ce,i as we,d as j,e as Se,f as E,g as Me,h as Ke,j as Le,k as Ie,l as Ue,A as We,D as He,m as Ae}from"./antd-414c101d.js";const Re="/taiwanmobile-sms-admin-demo/assets/avatar-9edfbea5.svg",Be="/taiwanmobile-sms-admin-demo/assets/Logo-black-007ffece.png",Fe=["src"],Te={key:0},De=b({__name:"global-header-logo",setup(u){const{title:t,layout:o,isMobile:s}=I(),d=$(()=>({"ant-pro-global-header-logo":o.value==="mix"||s.value,"ant-pro-top-nav-header-logo":o.value==="top"&&!s.value}));return(p,_)=>(n(),m("div",{class:L(e(d))},[v("a",null,[v("img",{src:e(Be),height:"60"},null,8,Fe),e(s)?f("",!0):(n(),m("h1",Te,C(e(t)),1))])],2))}}),Pe={class:"flex-1"},Ve=b({__name:"index",setup(u){const{layout:t,isMobile:o,handleCollapsed:s,handleMobileCollapsed:d,collapsed:p,theme:_,menuHeader:i}=I(),l=N("ant-pro-global-header"),g=$(()=>({[l.value]:!0,[`${l.value}-layout-${t.value}`]:!!t.value,[`${l.value}-inverted`]:_.value==="inverted"&&t.value==="top"}));return(y,r)=>{const k=xe,S=be;return n(),m("div",{class:L(e(g))},[c(k,{icon:pe(e($e)),type:"text",class:L({"bg-sms-grayscale-20":!e(p)}),onClick:r[0]||(r[0]=U=>{var M;return e(o)?e(d)():(M=e(s))==null?void 0:M(!e(p))})},null,8,["icon","class"]),e(i)?(n(),m(w,{key:0},[e(t)!=="side"||e(o)?(n(),h(De,{key:0})):f("",!0)],64)):f("",!0),v("div",Pe,[x(y.$slots,"headerContent")]),c(S,{align:"center","flex-shrink-0":""},{default:a(()=>[x(y.$slots,"headerActions")]),_:3})],2)}}});const ze=b({__name:"index",setup(u){const{headerHeight:t,fixedHeader:o,layout:s,isMobile:d,collapsed:p,collapsedWidth:_,siderWidth:i}=I(),l=$(()=>{const r={height:`${t.value}px`,lineHeight:`${t.value}px`,paddingInline:0};if((o.value||s.value==="mix")&&(r.zIndex=100,r.width="100%",r.right=0),s.value==="side"){if(!d.value&&o.value){const k=p.value?_.value:i.value;r.width=`calc(100% - ${k}px)`}r.zIndex=19}return r}),g=$(()=>{const r=[];return(o.value||s.value==="mix")&&r.push("ant-pro-fixed-header"),s.value&&r.push("ant-pro-fixed-header-action"),s.value==="mix"&&r.push("ant-pro-fixed-header-inverted"),r}),y=$(()=>o.value||s.value==="mix");return(r,k)=>{const S=Ce;return n(),m(w,null,[e(y)?(n(),h(S,{key:0,style:R({height:`${e(t)}px`,lineHeight:`${e(t)}px`,background:"transparent"})},null,8,["style"])):f("",!0),c(S,{style:R(e(l)),class:L(e(g))},{default:a(()=>[c(Ve,null,A({_:2},[r.$slots.headerActions?{name:"headerActions",fn:a(()=>[x(r.$slots,"headerActions")]),key:"0"}:void 0,r.$slots.headerContent?{name:"headerContent",fn:a(()=>[x(r.$slots,"headerContent")]),key:"1"}:void 0]),1024)]),_:3},8,["style","class"])],64)}}});const V=b({__name:"async-icon",props:{icon:{type:[String,Function]}},setup(u){const t=u,o=$(()=>{if(ne(t.icon)){const s=t.icon();if(s)return s}else return we[t.icon]});return(s,d)=>s.icon?(n(),h(Y(e(o)),{key:0})):f("",!0)}}),Ne=["href","target"],je=["href","target"],Ee=b({__name:"sub-menu",props:{item:{}},setup(u){return(t,o)=>{const s=z("sub-menu",!0),d=z("RouterLink"),p=j,_=Se;return t.item.children&&!t.item.hideChildrenInMenu?(n(),h(_,{key:t.item.path},A({title:a(()=>[H(C(t.item.title),1)]),default:a(()=>[(n(!0),m(w,null,Z(t.item.children,i=>(n(),m(w,null,[i.hideInMenu?f("",!0):(n(),m(w,{key:0},[i.children?(n(),h(s,{key:i.path,item:i},null,8,["item"])):(n(),h(p,{key:i.path},A({default:a(()=>[e(G)(i.path)?(n(),m("a",{key:1,href:i.path,target:i.target??"_blank"},C(i.title),9,Ne)):(n(),h(d,{key:0,to:i.path},{default:a(()=>[H(C(i.title),1)]),_:2},1032,["to"]))]),_:2},[i.icon?{name:"icon",fn:a(()=>[c(V,{icon:i.icon},null,8,["icon"])]),key:"0"}:void 0]),1024))],64))],64))),256))]),_:2},[t.item.icon?{name:"icon",fn:a(()=>[c(V,{icon:t.item.icon},null,8,["icon"])]),key:"0"}:void 0]),1024)):(n(),h(p,{key:t.item.path},A({default:a(()=>[e(G)(t.item.path)?(n(),m("a",{key:1,href:t.item.path,target:t.item.target??"_blank"},C(t.item.title),9,je)):(n(),h(d,{key:0,to:t.item.path},{default:a(()=>[H(C(t.item.title),1)]),_:1},8,["to"]))]),_:2},[t.item.icon?{name:"icon",fn:a(()=>[c(V,{icon:t.item.icon},null,8,["icon"])]),key:"0"}:void 0]),1024))}}}),q=b({__name:"index",setup(u){const{theme:t,collapsed:o,layout:s,isMobile:d,menuData:p,selectedKeys:_,openKeys:i,handleOpenKeys:l,handleSelectedKeys:g,handleMenuSelect:y}=I(),r=$(()=>t.value==="inverted"?"dark":t.value);return(k,S)=>{const U=E;return n(),h(U,{"selected-keys":e(_),"open-keys":e(i),mode:e(s)==="top"&&!e(d)?"horizontal":"inline",theme:e(r),collapsed:e(o),class:"ant-pro-sider-menu","onUpdate:openKeys":e(l),"onUpdate:selectedKeys":e(g),onSelect:e(y)},{default:a(()=>[(n(!0),m(w,null,Z(e(p),M=>(n(),m(w,{key:M.path},[M.hideInMenu?f("",!0):(n(),h(Ee,{key:0,item:M},null,8,["item"]))],64))),128))]),_:1},8,["selected-keys","open-keys","mode","theme","collapsed","onUpdate:openKeys","onUpdate:selectedKeys","onSelect"])}}}),Oe=["src"],Ge={key:0},Qe={class:"flex-1 of-x-hidden of-y-auto"},J=b({__name:"index",setup(u){const{collapsed:t,layout:o,logo:s,theme:d,title:p,collapsedWidth:_,siderWidth:i,headerHeight:l,fixedSider:g,isMobile:y}=I(),r=N("ant-pro-sider"),k=$(()=>({paddingTop:`${o.value!=="side"&&!y.value?l.value:0}px`,transition:"background-color 0.3s ease 0s, min-width 0.3s ease 0s, max-width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",overflow:"hidden"})),S=$(()=>({[r.value]:!0,[`${r.value}-fixed`]:g.value,[`${r.value}-layout-${o.value}`]:!!o.value,"!bg-sms-bg-dark-mode":!0,"sms-menu":!0})),U=$(()=>(o.value==="side"||y.value)&&o.value!=="mix");return(M,O)=>{const F=se,T=j,te=E,oe=Me;return n(),m(w,null,[e(g)?(n(),m("div",{key:0,style:R({width:e(t)?`${e(_)}px`:`${e(i)}px`,maxWidth:e(t)?`${e(_)}px`:`${e(i)}px`,minWidth:e(t)?`${e(_)}px`:`${e(i)}px`,...e(k)})},null,4)):f("",!0),c(oe,{collapsed:e(t)&&!e(y),theme:e(d)==="inverted"?"dark":"light",trigger:null,"collapsed-width":e(_),width:e(i),collapsible:"",class:L(e(S)),style:R(e(k))},{default:a(()=>[e(U)?(n(),m("div",{key:0,class:L(["ant-pro-sider-logo",e(t)&&!e(y)?"ant-pro-sider-collapsed":""])},[v("a",null,[v("img",{src:e(s)},null,8,Oe),!e(t)||e(y)?(n(),m("h1",Ge,C(e(p)),1)):f("",!0)])],2)):f("",!0),v("div",Qe,[c(q)]),e(y)?f("",!0):(n(),m("div",{key:1,class:L(["w-100% flex-shrink-0 ant-pro-sider-collapsed-button",e(d)==="inverted"?"ant-pro-sider-collapsed-button-inverted":""])},[c(te,{class:"ant-pro-sider-menu",mode:"inline",selectable:!1},{default:a(()=>[c(T,{onClick:_e(()=>{},["prevent"])},{icon:a(()=>[c(F,{name:"logout",width:"16px"})]),default:a(()=>[H(" 登出 ")]),_:1})]),_:1})],2))]),_:1},8,["collapsed","theme","collapsed-width","width","class","style"])],64)}}});const Xe=b({__name:"index",setup(u){const{mobileCollapsed:t,siderWidth:o}=I();return(s,d)=>{const p=Ke;return n(),h(p,{open:e(t),"onUpdate:open":d[0]||(d[0]=_=>me(t)?t.value=_:null),closable:!1,placement:"left",width:e(o)},{default:a(()=>[c(J)]),_:1},8,["open","width"])}}}),ee=u=>(he("data-v-1e491300"),u=u(),ye(),u),Ye={class:"footer-tool-bar__left"},Ze={class:"footer-tool-bar__center"},qe={class:"footer-tool-bar__right"},Je=ee(()=>v("div",{class:"px-5"},[v("a",{href:"javascript:;",class:"me-2 text-sms-grayscale-100 font-600"},"聯絡我們"),v("a",{href:"javascript:;",class:"text-sms-grayscale-100 font-600"},"操作說明")],-1)),et=ee(()=>v("div",{class:"h-56px"},null,-1)),tt=b({__name:"index",setup(u){const t=N("ant-pro-footer-toolbar"),{siderWidth:o,collapsed:s,collapsedWidth:d,isMobile:p,layout:_}=I(),i=$(()=>{if(!(p.value||_.value==="top"))return`calc(100% - ${s.value?d.value:o.value}px)`});return(l,g)=>(n(),m(w,null,[v("div",{class:L(e(t)),style:R({width:e(i),transition:"0.3s all"})},[v("div",Ye,[x(l.$slots,"left",{},void 0,!0)]),v("div",Ze,[x(l.$slots,"default",{},void 0,!0)]),v("div",qe,[x(l.$slots,"right",{},()=>[Je],!0)])],6),et],64))}});const ot=ae(tt,[["__scopeId","data-v-1e491300"]]),nt={"onUpdate:openKeys":B(),"onUpdate:selectedKeys":B(),onMenuSelect:B()},st={layout:W("mix"),logo:W(),title:W(),collapsedWidth:D(48),siderWidth:D(234),headerHeight:D(le.headerHeight),menuData:P(),fixedHeader:K(!1),fixedSider:K(!0),splitMenus:K(),collapsed:K(!1),theme:W("light"),onCollapsed:B(),isMobile:K(),contentWidth:W(),header:K(!0),footer:K(!0),menu:K(!0),menuHeader:K(!0),openKeys:P(),selectedKeys:P(),copyright:W(),...nt},at=["data-theme"],lt=b({__name:"index",props:st,emits:["update:collapsed"],setup(u,{emit:t}){const o=u,s=t;function d(l){var g;s("update:collapsed",l),(g=o==null?void 0:o.onCollapsed)==null||g.call(o,l)}const{layout:p,contentWidth:_}=ue(o,{handleCollapsed:d}),i=$(()=>_.value==="Fixed"?"ant-pro-basicLayout-content-fixed":"");return(l,g)=>{const y=Ie,r=Ue,k=Le;return n(),m("div",{class:"ant-pro-basicLayout","data-theme":l.theme},[c(k,null,{default:a(()=>[l.menu?(n(),m(w,{key:0},[e(p)!=="top"&&!l.isMobile?(n(),h(J,{key:0})):f("",!0)],64)):f("",!0),c(k,null,{default:a(()=>[l.header?(n(),h(ze,{key:0},A({_:2},[l.$slots.headerActions?{name:"headerActions",fn:a(()=>[x(l.$slots,"headerActions")]),key:"0"}:void 0,l.$slots.headerContent||e(p)==="top"?{name:"headerContent",fn:a(()=>[x(l.$slots,"headerContent",{},()=>[l.isMobile?f("",!0):(n(),h(q,{key:0}))])]),key:"1"}:void 0]),1024)):f("",!0),x(l.$slots,"contentPrefix"),c(y,{class:"ant-pro-basicLayout-content",flex:"","flex-col":""},{default:a(()=>[v("div",{"h-full":"",flex:"","flex-col":"","flex-1":"",class:L(e(i))},[x(l.$slots,"default")],2)]),_:3}),l.footer?(n(),h(r,{key:1,style:{background:"transparent",height:"48px"}},{default:a(()=>[x(l.$slots,"footerRender",{},()=>[c(ot)])]),_:3})):f("",!0)]),_:3})]),_:3}),l.menu?(n(),h(Xe,{key:0})):f("",!0)],8,at)}}});const it={xl:1600,lg:1199,md:991,sm:767,xs:575};function rt(){const u=fe(ve(it)),t=u.smaller("sm"),o=u.between("sm","md"),s=u.greater("md");return{breakpoints:u,isMobile:t,isPad:o,isDesktop:s}}const dt={flex:"","items-center":"","h-48px":"","px-12px":"","cursor-pointer":"",class:"transition-all-300"},ct={class:"anticon"},ht=b({__name:"index",setup(u){const t=ie(),{layoutSetting:o}=X(t),s=re(),d=de(),{selectedKeys:p,openKeys:_}=X(d),{isMobile:i,isPad:l}=rt();ge(l,y=>{y?t.toggleCollapsed(!0):t.toggleCollapsed(!1)});const g=$(()=>ce(t.layoutSetting,["fixedHeader","fixedSider","splitMenus","menuHeader","header","menu","layout","footer","contentWidth"]));return(y,r)=>{const k=We,S=j,U=E,M=He,O=z("RouterView"),F=Ae;return n(),h(lt,ke({collapsed:e(o).collapsed,theme:e(o).theme,"menu-data":e(s).menuData},e(g),{"selected-keys":e(p),"open-keys":e(o).layout==="top"?[]:e(_),copyright:e(o).copyright,"is-mobile":e(i),logo:e(o).logo,title:e(o).title,"onUpdate:openKeys":e(d).handleOpenKeys,"onUpdate:selectedKeys":e(d).handleSelectedKeys,"onUpdate:collapsed":e(t).toggleCollapsed}),{headerContent:a(()=>[H(C(""))]),headerActions:a(()=>[c(M,null,{overlay:a(()=>[c(U,null,{default:a(()=>[c(S,{key:"0",onClick:r[0]||(r[0]=()=>{e(s).userInfo.role===e(Q).MAIN?e(s).setSubUserInfo():e(s).setMainUserInfo()})},{default:a(()=>[H(C(e(s).userInfo.role===e(Q).MAIN?"切換子帳號":"切換成主帳號"),1)]),_:1})]),_:1})]),default:a(()=>[v("span",dt,[c(k,{"mr-8px":"",src:e(Re)},null,8,["src"]),v("span",ct,C(e(s).userInfo.username),1)])]),_:1})]),contentPrefix:a(()=>[]),renderFooterLinks:a(()=>[]),default:a(()=>[c(F,{"h-full":"",flex:"","flex-col":"","flex-1":"",content:""},{default:a(()=>[c(O,null,{default:a(({Component:T})=>[(n(),h(Y(T)))]),_:1})]),_:1})]),_:1},16,["collapsed","theme","menu-data","selected-keys","open-keys","copyright","is-mobile","logo","title","onUpdate:openKeys","onUpdate:selectedKeys","onUpdate:collapsed"])}}});export{ht as default};
