const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req)
    process.exist() //exist the server
})

server.listen(3000)