
const { readFile } = require('fs');

const getText = (path) => {
    //here is to check if the file exists.
    //but if the file exist we can do readfile and write file directly.

    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

/* readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) {
        return;
    }
    else {
        console.log(data);
    }
}) */

/* getText('./content/first.txt')
    .then((result) => { console.log(result); })
    .catch((err) => { console.log(err); })
 */

const start = async () => {
    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        console.log(first, second);
    } catch (err) {
        console.log(err);
    }
}
start();