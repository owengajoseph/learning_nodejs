//every file in node is a module
//node uses common js under the hood
const names = require('./4_name');// we require the files,exports have alread been done .

const sayHi = require('./5_utils');

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);