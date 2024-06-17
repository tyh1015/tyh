import"./common-C1dSpQUQ.js";console.log("首页");let a=[];n();document.addEventListener("click",e=>{let s=e.target;s.classList.contains("zh")&&(t(".active").classList.remove("active"),s.classList.add("active"),n()),s.classList.contains("xl")&&(t(".active").classList.remove("active"),s.classList.add("active"),d()),s.classList.contains("sx")&&(t(".active").classList.remove("active"),s.classList.add("active"),p()),s.classList.contains("arrangement")&&(t(".arrangement").classList.toggle("icon-qiehuanliebiao1"),t(".arrangement").classList.toggle("icon-qiehuanliebiao")),s.classList.contains("jg")&&n(),s.classList.contains("up")&&(t(".active").classList.remove("active"),s.classList.add("active")),s.classList.contains("down")&&(t(".active").classList.remove("active"),s.classList.add("active")),s.classList.contains("search")&&(location.href="./search.html")});g(".goods-Gird li").forEach((e,s)=>{e.addEventListener("click",i=>{let c=i.target;if(c.nodeName==="LI"){let l=c.getAttribute("data-zh");console.log(l);let o=a[l];const r=[...new Set(o)];localStorage.setItem("milk",JSON.stringify(r)),console.log(o)}})});function n(){const e=new XMLHttpRequest;e.open("GET","https://zyxcl.xyz/exam_api/zh",!1),e.onreadystatechange=()=>{e.readyState===4&&e.status===200&&(a=JSON.parse(e.responseText).items,t(".goods-Gird").innerHTML=a.map((s,i)=>`
        <li data-zh="${s.item_id}">
          <img src="${s.img}" alt="">
          <p class="des">${s.title}</p>
          <p class="price">
            <b>￥${s.price}</b>
            <span>月销${s.sold}笔</span>
          </p>
      </li>
        `).join(""))},e.send(),console.log(a)}function d(){const e=new XMLHttpRequest;e.open("GET","https://zyxcl.xyz/exam_api/xl",!1),e.onreadystatechange=()=>{e.readyState===4&&e.status===200&&(a=JSON.parse(e.responseText).items,t(".goods-Gird").innerHTML=a.map((s,i)=>`
        <li data-xl="${s.item_id}">
          <img src="${s.img}" alt="">
          <p class="des">${s.title}</p>
          <p class="price">
            <b>￥${s.price}</b>
            <span>月销${s.sold}笔</span>
          </p>
      </li>
        `).join(""))},e.send(),console.log(a)}function p(){const e=new XMLHttpRequest;e.open("GET","https://zyxcl.xyz/exam_api/sx",!1),e.onreadystatechange=()=>{e.readyState===4&&e.status===200&&(a=JSON.parse(e.responseText).items,t(".goods-Gird").innerHTML=a.map((s,i)=>`
        <li data-sx="${s.item_id}">
          <img src="${s.img}" alt="">
          <p class="des">${s.title}</p>
          <p class="price">
            <b>￥${s.price}</b>
            <span>月销${s.sold}笔</span>
          </p>
      </li>
        `).join(""))},e.send(),console.log(a)}function t(e){return document.querySelector(e)}function g(e){return[...document.querySelectorAll(e)]}
