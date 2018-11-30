/**
 * generator 生成器 & iterator 迭代器
 *  生成器的执行结果是迭代器使用（使用示例redux-saga)
 * 生成器函数可以暂停 默认的函数会一路走到底
 * 遇到yield 会实现暂停；
 */
function * say(){
  yield 1
  yield 2
  yield 3
}
let it = say();  // 生成器执行结果就是迭代器

let obj1 = it.next();
console.log(obj1);
let obj2 = it.next();
console.log(obj2);
let obj3 = it.next();
console.log(obj3);
let obj4 = it.next(); // 迭代器遇到return就返回，方法中没有指明return语句时，默认为undefined
console.log(obj4);

// next();
// function next(){
//   let {value,done} = it.next();
//   console.log(value);
//   if(!done){
//     next();
//   }
// }

function *say(){

  let a = yield '去小卖部'
  console.log('a:'+ a);
  let b = yield '去商场'
  console.log('b:'+ b);
}
let it=say();
console.log(it.next());
console.log(it.next('a'));
// console.log(it.next('b'));

// 可以配合promise来使用
let bluebird = require('bluebird');
let fs = require('fs');
let read = bluebird.promisify(fs.readFile);
// generator + co
// 回调 支持return 而且像同步
function* r() {
  let r1 = yield read('1.txt', 'utf8');
  let r2 = yield read(r1, 'utf8');
  let r3 = yield read(r2, 'utf8');
  return r3;
}
function co(it) {
  return new Promise((resolve, reject) => {
      function next(data){
          let { value, done } = it.next(data);
          if(!done){
              value.then(data=>{
                  next(data);
              },reject);
          }else{
              resolve(value);
          }
      }
      next();
  })
}
co(r()).then(data => {
  console.log('xxx',data);
});




async function f() {
  await Promise.reject('出错了');
  await Promise.resolve('hello world'); // 不会执行
}
f()
.then(v => console.log(v))
.catch(e => console.log(e))


let bluebird = require('bluebird');
let fs = require('fs');
// async+await 解决了异步的问题
//  1.可以让代码像同步 
//  2.可以try + catch
//  3.可以使用promise的形式
let read = bluebird.promisify(fs.readFile);
async function r() {
    try{
        let r1 = await read('1.txt', 'utf8');
        console.log('r1');
        let r2 = await read('2222.txt', 'utf8');
        console.log('r2');
        let r3 = await read(r2, 'utf8');
        return r3;
    }catch(e){
        console.log(e)
    }
    return '122';
}
r().then(data=>{
    console.log(data);
},(er)=>{
  console.log('err');
    console.log(er)
});