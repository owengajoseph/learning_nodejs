const path = require('path');
console.log(path.sep);

let filepath = path.join('/user', '/user426','/programing','node_tutorial');
console.log(filepath);


const absolute = path.resolve(__dirname);

console.log(absolute);