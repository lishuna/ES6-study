"use strict";

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var o = Object.create({ x: 1, y: 2 });
o.z = 3;

// let arr = [1,2,3,4];
/*let arr= [1,2,3,4];
let brr = [6,7, ...arr]
console.log(brr);*/
// let { x, ...{ y, z } } = o;
var _x$y$a$b = { x: 1, y: 2, a: 3, b: 4 };
var x = _x$y$a$b.x;
var y = _x$y$a$b.y;

var z = _objectWithoutProperties(_x$y$a$b, ["x", "y"]);

console.log(x); // 1
console.log(y); // undefined
console.log(z); // 3