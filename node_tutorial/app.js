const http = require('http');

/* const server = http.createServer((req, res) => {
console.log(res.end('welcome'))})
 */

//using event emitteer api
const server = http.createServer()
//emit request event
//subcribe to it/ listen for it /responn to it
server.on('request', (req, res) => {
    res.end('welcome')
})
