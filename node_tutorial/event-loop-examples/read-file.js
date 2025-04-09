const { readFile } = require('fs')
// import{readFile} from 'node:fs'


console.log("started first task");
//read file is ofloaded to the  Event Loop
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log("completed the first task");

})

console.log("start the next task");