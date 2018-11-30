
 /**
  * 1.executor 默认执行
  * 2.promise 的状态默认pending， 只能转换一次，不能由resolve 和reject 相互转换
  * 3.每个promise实例都有then方法
  * 4.then方法里由两个回调，分别是成功回调和失败回调，可以对应resolve和reject状态
  * 5.当executor 函数内为异步的情况，会执行到then 的时候仍然是pending状态
  */

 function Promise (executor){
  let self = this;
  self.status = 'pending';
  self.successValue = null;
  self.errorData = null;
  self.onResolveCallback = [];
  self.onRejectCallback = [];

  function resolve( value ){
    console.log('code resolve is run!');
    if(self.status === 'pending'){
      self.successValue = value;
      self.status = 'resolve';
      self.onResolveCallback.forEach(fn => fn());
    }

  }
  function reject( error) {
    if(self.status === 'pending'){
      self.errorData = error;
      self.status = 'reject';
      self.onRejectCallback.forEach(fn => fn());
    }

  }
  try{
    executor(resolve,reject);
  }catch (error){
    reject(error);
  }

};
Promise.prototype.then = function (onFulfilled, onRejected){
  console.log('code then is run!');
  if(this.status === 'resolve'){
    onFulfilled(this.successValue);
  }
  if(this.status === 'reject'){
    onRejected(this.errorData);
  }
  if(this.status === 'pending'){
    this.onResolveCallback.push(()=>onFulfilled(this.successValue));
    this.onRejectCallback.push(()=>onRejected(this.errorData));
  }
}
module.exports = Promise;
