let fs = require('fs');

let bluebird = require('bluebird');

let read = bluebird.promisify(fs.readFile);

read('1.txt','utf8').then(data=>{
  console.log(data);
});
// 为fs的所有方法加async方法
// bluebird.promisifyAll(fs);
/**
 * 
 * promisify 的实现    
 */
function promisify(fn){
  return function(...args){
    return new Promise((resolve,reject)=>{
      fn(...args,(err,data)=>{
        if(err) reject(err);
        resolve(data);
      })
    });

  }
}
// let read = promisify(fs.readFile);
// read('./callback/1.txt','utf8').then(data=>{
//   console.log(data);
// });
function promisifyAll(obj){
  Object.keys(obj).forEach(key=>{
    if(typeof obj[key] === 'function'){
      obj[key + 'Async'] = promisify(obj[key]);
    }
  });
}
promisifyAll(fs);
fs.readFileAsync('./callback/1.txt','utf8').then((data)=>{
  console.log(data);
},err=>{
  console.log(err)
})

