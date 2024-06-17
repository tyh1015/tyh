import '../../common/common.scss';
import './detail.scss';

// 1 获取元素(本地存储)
const goodsData = JSON.parse(localStorage.getItem('milk'));
console.log(goodsData);

// 初始化渲染函数
renderData();
console.log('详情');