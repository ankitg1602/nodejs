const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)  // / GET {...}
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('ankit');
    res.write('</html>');
    // process.exist() //exist the server
})

server.listen(3000)