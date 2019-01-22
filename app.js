// const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in one middleware');
      //if we are not using next() then it will not execute 2nd middleware
    next();
})

app.use((req, res, next) => {
    console.log('in 2nd middleware');
    res.send('<html>ewewew</html>'); //by default express add conteext-type: texrt/html
    // res.send('<html>ewewew</html>')  //still page not loaded as we have not returned any response
})

// const server = http.createServer(app);

app.listen(3000);  //by using expressjs, we can listen without using http

// server.listen(3000);