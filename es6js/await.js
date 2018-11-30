import fs from 'fs';
import path from "path";

const readFile = function(fileName) {
    return new Promise((resole, rejects) => {
        fs.readFile(fileName, {
            encoding: 'utf-8'
        }, (error, data) => {
            if (error) return reject(error);
            resole(data);
        })
    });
};
const gen = async function() {
    const f1 = await readFile(path.join(__dirname, '../readme.txt'));
    console.log("readme: " + f1);
    const f2 = await readFile(path.join(__dirname, '../log.txt'));
    console.log('log: ' + f2);
}
gen();