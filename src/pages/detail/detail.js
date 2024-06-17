import '../../common/common.scss';
import './detail.scss';

// 1 获取元素(本地存储)
const goodsData = JSON.parse(localStorage.getItem('data'));
console.log(goodsData);

// 初始化渲染函数
$('.detail-Page').innerHTML = `
   <img src="${goodsData.img}" alt="">
    <h3>${goodsData.title}</h3>
`
// 获取元素
function $(el) {
  return document.querySelector(el);
}
// 获取全部元素
function gets(el) {
  return [...document.querySelectorAll(el)];
}
console.log('详情');