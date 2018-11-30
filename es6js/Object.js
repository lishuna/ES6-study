// Object.is
console.log(Object.is('a', 'a'));
console.log(Object.is(+0, -0));
console.log(Object.is(NaN, NaN));
console.log('dirname:  ' + __dirname);

// Object.assign
function Animate() {
  this.a = 1;
  this.d = {
    name: 'd',
    child: {
      name: 'sub child'
    }
  };
}
Animate.prototype = {
  name: '动物',
  age: 0,
  cry: () => {
    console.log('动物哭了!');
  }
}

let animate = new Animate();

let dog = Object.assign({}, animate);
dog.abc = 'abcd';
console.log(dog);
console.log(animate);

// 拷贝继承链
function clone(origin) {
  const props = Object.getPrototypeOf(origin);
  console.log(Object.create(props));
  return Object.assign(Object.create(props), origin);
}
const obj_clone = clone(animate);
obj_clone.d.child = { change: () => { console.log('yes!') } };
for (const key in obj_clone) {
  //   if (obj_clone.hasOwnProperty(key)) {
  console.info(key + '====' + obj_clone[key]);
  //   }
}
console.log(obj_clone.getOwnPropertys());