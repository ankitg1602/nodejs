const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)  // / GET {...}
    // process.exist() //exist the server
})

server.listen(3000)