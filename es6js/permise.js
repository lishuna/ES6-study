function xiaoyu(randomNum, who) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.random() * randomNum;
            if (number < who) {
                console.log(`获取小于${who}数字成功！：${number}`);
                resolve(number);
            } else {
                console.log(`获取小于${who}数字失败：${number}`);
                reject(number);
            }
            console.log('11111111111111');
        }, 1000);
    });
};

function dayu(randomNum, who) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.random() * randomNum;
            if (number > who) {
                console.log(`获取大于${who}数字成功！：${number}`);
                resolve(number);
            } else {
                console.log(`获取大于${who}数字失败：${who}`);
                reject(number);
            }
            console.log('222222222')
        }, 2000);
    });
}
const result1 = xiaoyu(2, 1)
    // .then(number => console.log('success:' + number))
    .catch(number => console.log('fail: ' + number));

const result2 = dayu(2, 1)
    // .then(number => console.log('success:' + number))
    .catch(number => console.log('fail: ' + number));

Promise.all([
    result1, result2
]).then(res => console.log('last: ' + res));

Promise.reject('123').then().then(null,err=>{
    console.log(err)
});
var p1 = new Promise(function (resolve,reject) {
  resolve('success!');
});
p1.then(res=>{
    console.log(res);
},err => {
    console.log(err);
}).then(res=>{
  console.log(res);
},err => {
  console.log(err);
});
setTimeout(()=>{
// console.log(p1==p2);
},100);

