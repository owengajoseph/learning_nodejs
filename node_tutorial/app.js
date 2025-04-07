import { readFile } from 'node:fs';

 let  read = await  readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);

})
{

}
console.log(read);
/* const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./content/first.txt', 'utf8');
console.log(first); */