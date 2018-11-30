// 顶部引入babel-core/register，下面引入的所有模块都自动通过babel编译，但当前文件不会编译
require('babel-core/register');
// require("babel-core").transform("code");
// require('./es6js/await');
console.log(__dirname);
require('./es6js/Object');