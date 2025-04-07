//this works asychoronious
/* import { readFile } from 'node:fs';

  readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);

})
{

}
console.log(read); */

//returns the stream
const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first);
writeFileSync('./content/result_sync.txt', 'hello there new file');