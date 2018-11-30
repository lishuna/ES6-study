// for (let i = 0; i < 3; i++) {
//     console.log('i:', i);
// }

// function f() { console.log('I am outside!'); }
// (function () {
//   if (true) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//     f();
//   }
//   f();
// }());

// for (let codePoint of 'foo') {
//   console.log(codePoint)
// }
// let [foo, [[bar], baz]] = [1, [[2], 3]];

let a = [1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
});
console.log(a);

for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}

let foo = 'outer';

function bar(func = x => foo) {
  let foo = 'inner';
  console.log(func()); // outer
}

bar();

function *fibonacci(){
    let [ current, next ] = [ 0, 1 ];
    for(;;){//无限循环
        [ current, next ]= [ next, current + next ];
        yield current;   
    }
}
var fib = fibonacci();

console.log(fib.next()); //1
console.log(fib.next()); //2

for (var v of lib){
    if(v > 100) break;
    console.log(v); //3,5,8...
}
