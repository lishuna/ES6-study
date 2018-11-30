const fs  = require('fs');
const path = require("path");

const readFile = function(fileName) {
    return new Promise((resole, rejects) => {
        fs.readFile(fileName, {
            encoding: 'utf-8'
        }, (error, data) => {
            if (error) return reject(error);
            resole(data);
        })
    });
}

const gen = function*() {
    // console.log(path.join(__dirname, '../readme.txt'));
    console.log('=====================1111');
    const f1 = yield readFile(path.join(__dirname, '../readme.txt'));
    console.log('=====================2222');
    const f2 = yield readFile(path.join(__dirname, '../log.txt'));
    console.log('=====================3333');
    // console.log(f1.toString());
    // console.log(f2.toString());
}
const result = gen();
result.next().value.then(res => console.log(res));
result.next().value.then(res => console.log(res));
console.log(result.next());
