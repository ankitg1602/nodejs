const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

const app = express();



app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<p>Page not found</p>');   //here default route is / and use method will compare starting from /
})

app.listen(3000);