/**
 * promise 特性
 * 1、 executor 默认new的时候自动执行
 * 2. 每个promise实例都有then方法
 * 3. then方法里由两个回调，分别是成功回调和失败回调
 * 4. then方法是异步执行的
 * 5. 每个promise的实例可以有多个then方法，成功时调用成功方法，失败时调用失败方法
 * 6. new Promise中可以支持异步行为
 * 7. 如果发现错误就会走入失败状态
 */
// let Promise = require('./1.newPromise');
let promise = new Promise(function(resolve,reject){
  console.log(1);
  resolve(Math.random());
  // reject();
  //
  // resolve();
  setTimeout(function(){

    console.log(3);
  },1000);
});

promise.then(function(success){
  console.log(success);
  // return new Promise(function (resolve,reject) {
  //   resolve('haha');
  // });
},function(error){
  console.log('error')
}).then(function(success){
  console.log('我是第二个');
  console.log(success);
},function(error){
  console.log('error')
});
promise.then(function(success){
  console.log(success);
},function(error){
  console.log('error2')
});
// console.log(2);


let fs = require('fs');
function read(filePath,encoding){
  return new Promise((resolve,reject)=>{
      fs.readFile(filePath,encoding,(err,data)=>{
          if(err) reject(err);
          resolve(data);
      });
  })
}
// promise.all  执行后返回一个新的promise， 所有执行成功后才算成功，一个失败就都失败
// Promise.all([read('2.txt','utf8'),read('3.txt','utf8')]).then(data=>{
//   console.log(data);
// });
// promise.race 谁快用谁的结果 一个成功就成功 一个失败就失败了
Promise.race([read('1.txt','utf8'),read('2.txt','utf8')]).then(data=>{
  console.log(data);
}, err=>{
  console.log('err' + err);
});
