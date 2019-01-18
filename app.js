const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)  // / GET {...}
    if (req.url === '/') { //first time control will come here as /
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');   //here /message will append in localhost:8080/
        res.write('<form action="/message" method="post"><input type="text" name="name"><button type="submit">Submit</button></form>');
        res.write('</html>');
        return res.end();
    } 
    //since after submitting form, url change to hhtp://localhost:8080/message/ control will come here
    res.setHeader('Content-type', 'text/html');
        res.write('<html>anitfdfsd');   //here /message will append in localhost:8080/
        res.write('</html>');
    res.end();   //ending the request
    // process.exist() //exist the server
})

server.listen(3000)