let Promise1 = require('./3.promise');
let fs = require('fs');
function read(filePath,encoding){
  return new Promise((resolve,reject)=>{
      fs.readFile(filePath,encoding,(err,data)=>{
          if(err) reject(err);
          resolve(data);
      });
  })
}
// all执行后会返回一个新的promise  所以promise执行成功后才算成功，返回值是数组类型，有一个失败 就失败了
// Promise.all = function(promises){
//     return new Promise((resolve,reject)=>{
//         let arr = [];
//         let i = 0;
//         function processData(index,data){
//             arr[index] = data;
//             if(++i == promises.length){
//                 resolve(arr);
//             }
//         }
//         for(let i = 0;i<promises.length;i++){
//             promises[i].then(data=>{ // data是成功的结果
//                 processData(i,data);
//             },reject);
//         }
//     })
// }
Promise.race = function(promises){
    return new Promise((resolve,reject)=>{
        for(let i = 0;i<promises.length;i++){
            promises[i].then(resolve,reject);
        }
    })
}
// 
// Promise.all([read('2.txt','utf8'),read('3.txt','utf8')]).then(data=>{
//   console.log(data);
// });
// 谁快用谁的结果 一个成功就成功 一个失败就失败了
Promise.race([read('31000.txt','utf8'),read('1.txt','utf8')]).then(data=>{
     console.log(data);
},err=>{
  console.log(err);
});



// catch的实现就是基于then的 可以不传成功
Promise.reject(123).then().catch(e=>{
    console.log(e);
  // throw new Error();
  return Promise.resolve('1222');
}).then(
  data=>{
    console.log(data);
},err=>{
    console.log(err)});

// Promise.reject(123).then().then(null,e=>{
//     console.log(e);
// })