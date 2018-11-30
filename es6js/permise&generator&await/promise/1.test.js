Promise = require('./1.newPromise');
console.log('111');
let promise = new Promise((resolve,reject)=>{
  console.log('22');
  // resolve('ok');
  // reject('failed');
  // setTimeout(()=>{
  //   resolve('ok');
  // },1000);
  throw Error('异常');
});
promise.then((data)=>{
  console.log(data);
},(err)=>{
  console.log(err);
});