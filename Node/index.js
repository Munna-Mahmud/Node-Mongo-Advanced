const http = require('http');
const port = 5000;
const hostname = '127.0.0.1';

const myServer = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type':'text.html'})
        res.write('<h1>Hello Your Home page is Running</h1>')
        res.end();
    }
    else if(req.url == '/contact'){
        res.writeHead(200, {'Content-Type':'text.html'})
        res.write('<h1>Hello Your Contact page is Running</h1>')
        res.end();
    }


})

myServer.listen(port, hostname, ()=>{
    console.log(`Your Server Is Running Successfully at http://${hostname}:${port}`);
});

// const fs = require('fs');
// const ourReadStream = fs.createReadStream(`${__dirname}/, utf8`);
// ourReadStream.on('data', (chunk)=>{
//     console.log(chunk);
// })
