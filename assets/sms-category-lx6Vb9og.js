import{u as g}from"./request-BYOfeCit.js";import{a0 as p}from"./antd-DY4CO-8O.js";import{f as d}from"./vue-B4jB9Tcu.js";const t=[{key:"0",categoryName:"未分類",smsCount:32,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"1",categoryName:"新年優惠",smsCount:32,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"2",categoryName:"情人節優惠",smsCount:34,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"3",categoryName:"聖誕祝福",smsCount:34,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"4",categoryName:"12月壽星",smsCount:6,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"5",categoryName:"11月壽星",smsCount:1,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"6",categoryName:"10月壽星",smsCount:0,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"7",categoryName:"9月壽星",smsCount:41,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"8",categoryName:"8月壽星",smsCount:34,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"9",categoryName:"7月壽星",smsCount:24,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"10",categoryName:"6月壽星",smsCount:53,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"},{key:"11",categoryName:"5月壽星",smsCount:34,createTime:"2012/02/10 09:20",updateTime:"2016/07/26 19:32"}];function f(){const{list:s,pagination:m,setResponseList:r}=g(),o=async e=>{r({total:11,pages:1,current:1,pageSize:10,records:t})},c=async e=>!!p(t,{categoryName:e}),n=async e=>({data:{status:"success",id:"123"}}),u=async(e,y)=>({data:{status:"success"}}),i=async e=>({data:{status:"success"}}),a=d([]);return{getSmsCategory:o,smsCategory:s,pagination:m,checkSmsCategoryExist:c,createSmsCategory:n,updateSmsCategory:u,deleteSmsCategory:i,smsCategoryOption:a,getSmsCategoryOption:async()=>{a.value=t.map(e=>({value:e.key,label:e.categoryName}))}}}export{f as u};
