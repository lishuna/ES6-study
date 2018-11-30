// callback

// function after(times, callback) {
//   return function () {
//     times--;
//     if (times == 0) {
//       callback();
//     }
//   }
// }
// let fn = after(3, function () {
//   console.log('调用了三次执行的方法');
// });
// fn();
// fn();
// fn();

/**
 * 1.回调地狱
 */

let fs = require('fs');
fs.readFile('1.txt', 'utf8',function(err,data){
  console.log(data);
  fs.readFile(data, 'utf8',function(err,data){
    fs.readFile(data, 'utf8',function(err,data){
      console.log(data);
    })
  })
})

/**
 * 2多个回调同步的结果
 */

// let fs = require('fs');
// let arr = [];
// fs.readFile('1.txt','utf8',function(err,data){
//   arr.push(data);
//   fs.readFile('2.txt','utf8',function(err,data){
//       arr.push(data);
//       console.log(arr);
//   });
// });



// let fs = require('fs');
// function after(times, callback){
//   let arr = [];
//   return function(data){
//     arr.push(data);
//     if(--times === 0){
//       callback(arr);
//     }
//   }
// }
// let fn = after(2,function(arr){
//   console.log(arr);
// });
// fs.readFile('1.txt', 'utf8',function(err,data){
//   fn(data);
// })
// fs.readFile('2.txt', 'utf8',function(err,data){
//   fn(data);
// });


// 发布订阅者模式

// let fs = require('fs');
// let event = {
//   arr:[],
//   result:[],
//   on(callback){
//     console.log(2222);
//     this.arr.push(callback);
//   },
//   emit(data){
//     console.log('arr:'+ this.arr);
//     this.result.push(data);
//     this.arr.forEach(fn=>fn(this.result));
//   }
// }
// event.on(function(data){
//   console.log(11111);
//   if(data.length === 2){
//     console.log(data);
//   }
// });
// fs.readFile('1.txt','utf8',function(err,data){
//   event.emit(data);
// });
// fs.readFile('2.txt','utf8',function(err,data){
//   event.emit(data);
// });

