import"./common-C1dSpQUQ.js";const e=JSON.parse(localStorage.getItem("data"));console.log(e);t(".detail-Page").innerHTML=`
   <img src="${e.img}" alt="">
    <h3>${e.title}</h3>
`;function t(o){return document.querySelector(o)}console.log("详情");
