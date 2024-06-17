import '../../common/common.scss';
import '../../font/iconfont.css';
import './home.scss';
import axios from 'axios';

console.log('首页');
// 1 初始化渲染
let data = [];
getData();

// 2 事件委托
document.addEventListener('click', e => {
  let target = e.target;
  // 点击综合
  if (target.classList.contains('zh')) {
    // 高亮
    $('.active').classList.remove('active');
    target.classList.add('active');
    // 渲染综合
    getData();
  }
  // 点击销量
  if (target.classList.contains('xl')) {
    // 高亮
    $('.active').classList.remove('active');
    target.classList.add('active');
    // 渲染销量
    getSold();
  }
  // 点击上新
  if (target.classList.contains('sx')) {
    // 高亮
    $('.active').classList.remove('active');
    target.classList.add('active');
    // 渲染上新
    getNew();
  }
  // 点击列表排列方式
  if (target.classList.contains('arrangement')) {
    // 切换图标
    $('.arrangement').classList.toggle('icon-qiehuanliebiao1');
    $('.arrangement').classList.toggle('icon-qiehuanliebiao');
  }
  // 点击价格
  if (target.classList.contains('jg')) {
    // 渲染数据
    getData();
  }
  // 点击价格 上
  if (target.classList.contains('up')) {
    // 高亮
    $('.active').classList.remove('active');
    target.classList.add('active');
    // 渲染数据

  }
  // 点击价格 下
  if (target.classList.contains('down')) {
    // 高亮
    $('.active').classList.remove('active');
    target.classList.add('active');
    // 渲染数据
  }
  // 点击搜索
  if (target.classList.contains('search')) {
    location.href = './search.html';
  }
})

// 3 点击商品进入详情
$('.goods-Gird').addEventListener('click', async e => {
  let target = e.target;

    location.href = './detail.html';
    // 获取li元素的自定义属性值
    let id1 = target.getAttribute('data-id1');
    let id2 = target.getAttribute('data-id2');
    let id3 = target.getAttribute('data-id3');
    // console.log(id);
    const res1 = await axios.get('https://zyxcl.xyz/exam_api/zh');
    const res2 = await axios.get('https://zyxcl.xyz/exam_api/xl');
    const res3 = await axios.get('https://zyxcl.xyz/exam_api/sx');
    // con
    // console.log(res);
    res1.data.items.forEach(obj => {
      if (id1 == obj.item_id) {
        localStorage.setItem('data', JSON.stringify(obj));
      }
    });
    res2.data.items.forEach(obj => {
      if (id2 == obj.item_id) {
        localStorage.setItem('data', JSON.stringify(obj));
      }
    });
    res3.data.items.forEach(obj => {
      if (id3 == obj.item_id) {
        localStorage.setItem('data', JSON.stringify(obj));
      }
    });
    // let detailArr = data[id];
    // const singleArr = [...new Set(detailArr)];

    // console.log(detailArr);
});

// 0 封装函数
// 获取数据 -> 继而初始化 综合 渲染
function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://zyxcl.xyz/exam_api/zh', false);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      data = JSON.parse(xhr.responseText).items;
      // 渲染 ol
      $('.goods-Gird').innerHTML = data.map((item, index) => {
        return `
        <li data-id1="${item.item_id}">
          <img src="${item.img}" alt="">
          <p class="des">${item.title}</p>
          <p class="price">
            <b>￥${item.price}</b>
            <span>月销${item.sold}笔</span>
          </p>
      </li>
        `
      }).join('')
    }
  }
  xhr.send();
  // console.log(data);
}
// 获取数据 -> 继而初始化 销量 渲染
function getSold() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://zyxcl.xyz/exam_api/xl', false);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      data = JSON.parse(xhr.responseText).items;
      // 渲染 ol
      $('.goods-Gird').innerHTML = data.map((item, index) => {
        return `
        <li data-id2="${item.item_id}">
          <img src="${item.img}" alt="">
          <p class="des">${item.title}</p>
          <p class="price">
            <b>￥${item.price}</b>
            <span>月销${item.sold}笔</span>
          </p>
      </li>
        `
      }).join('')
    }
  }
  xhr.send();
  console.log(data);
}
// 获取数据 -> 继而初始化 上新 渲染
function getNew() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://zyxcl.xyz/exam_api/sx', false);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      data = JSON.parse(xhr.responseText).items;
      // 渲染 ol
      $('.goods-Gird').innerHTML = data.map((item, index) => {
        return `
        <li data-id3="${item.item_id}">
          <img src="${item.img}" alt="">
          <p class="des">${item.title}</p>
          <p class="price">
            <b>￥${item.price}</b>
            <span>月销${item.sold}笔</span>
          </p>
      </li>
        `
      }).join('')
    }
  }
  xhr.send();
  console.log(data);
}

// 渲染函数
render();
function render() { }

// 获取元素
function $(el) {
  return document.querySelector(el);
}
// 获取全部元素
function gets(el) {
  return [...document.querySelectorAll(el)];
}