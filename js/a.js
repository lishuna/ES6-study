'use strict';

var _b = require('./b');

console.log(_b.firstName + ' ' + _b.lastName + ' ' + _b.year);

function setName(element) {
    element.textContent = _b.firstName + ' ' + _b.lastName;
}

sum(funa, funb) {
    Promise.all(funa, funb).then(function(val1, val2) {
        console.log(val1 + val2);
    });
};

funx() {
    const p = new Promise(function(resolve, reject) {
        resolve('ok');
        throw new Error('test');
    });
    return p.then();
}