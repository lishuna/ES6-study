/* 
    最笨兼容性最好的方法
*/
var array = [1, 1, 4, 2, 5, '1', 5, '1'];
var res = [];
for (var i = 0; i < array.length; i++) {
  var item = array[i];
  for (var j = i + 1; j < array.length; j++) {
    if (item === array[j]) {
      break;
    }
  }
  if (j === array.length) {
    res.push(item);
  }
}
console.log(res);

/* 
    利用indexOf和for循环
*/
var array = [1, 1, 4, 2, 5, '1', 5, '1'];
var res = [];
for (var i = 0; i < array.length; i++) {
  var item = array[i];
  if (res.indexOf(item) === -1) {
    res.push(item);
  }
}
console.log(res);

/* 
    ES5的filter方法
*/
// 排序
var array = [1, 1, 4, 2, 5, '1', 5, '1'];
var res = array.concat().sort();
res = res.filter((item, index) => {
  return item !== res[index + 1];
});
console.log(res);

// 非排序
var array = [1, 1, 4, 2, 5, '1', 5, '1'];
res = array.filter((item, index) => {
  return array.indexOf(item) === index;
});
console.log(res);

/* 
    object键值对
*/
// 不区分类型去重
var array = [1, 1, 4, 2, 5, '1', 5, '1'];
var obj = {}
res = array.filter((item, index) => {
  return obj.hasOwnProperty(item) ? false : (obj[item] = true);
});
console.log(res);

// 区分类型去重
var array = [1, 1, 4, 2, 5, '1', 5, '1'];
var obj = {}
res = array.filter((item, index) => {
  return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true);
});
console.log(res);

// 对象类型去重
var array = [{ value: 1 }, { value: 1 }, { value: 2 }];
var obj = {}
res = array.filter((item, index) => {
  return obj.hasOwnProperty(JSON.stringify(item)) ? false : (obj[JSON.stringify(item)] = true);
});
console.log(res);

/* 
    ES6的Set去重
*/
var array = [1, 1, 4, 2, 5, '1', 5, '1'];
console.log([...new Set(array)]);