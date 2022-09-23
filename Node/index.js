const http = require('http');
const port = 5000;
const hostname = '127.0.0.1';

const myServer = http.createServer((req, res)=>{
    res.end('<h1>Hello Your Server is Running</h1>');

})

myServer.listen(port, hostname, ()=>{
    console.log(`Your Server Is Running Successfully at http://${hostname}:${port}`);
});
