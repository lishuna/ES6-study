
var o = Object.create({ x: 1, y: 2 });
o.z = 3;

// let arr = [1,2,3,4];
/*let arr= [1,2,3,4];
let brr = [6,7, ...arr]
console.log(brr);*/
// let { x, ...{ y, z } } = o;
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x) // 1
console.log(y) // undefined
console.log(z) // 3