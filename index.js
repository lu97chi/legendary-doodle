const EXPRESS = require('express');
const APP = EXPRESS();
const ROUTER = EXPRESS.Router();
const bodyParser = require('body-parser'); 
const MONGOOSE = require('mongoose');
const API = require('./routes/api')(ROUTER);
MONGOOSE.connect('mongodb://lu97is:eagle1997@ds117148.mlab.com:17148/nodetest1997', (err) => {
    if (err) {
        console.log('error')
    } else {
        console.log('conectado')
    }
})
APP.use(bodyParser.urlencoded({extended:false}))
APP.use(bodyParser.json());
APP.get('/', (req, res) => {
    res.send('hola mundo');
});

APP.listen(8080, () => {
    console.log('servidor en puerto 8081')
})
