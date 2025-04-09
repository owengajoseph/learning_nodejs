const http = require("http");

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end("hello world");
})


//this runs asynchronously by calling http.createServer()
//this say keep on listening to the port continuosly
server.listen(5000, () => {
    console.log("server listening on port :5000.......");
})