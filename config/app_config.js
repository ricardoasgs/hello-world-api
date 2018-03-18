const express = require('express');
const bodyParser = require('body-parser');
const port = '3000';
const port2 = '80';

var app = module.exports = express();

try {
    app.listen(port);
    console.log("conectado na porta 3000");
} catch (error) {
    console.log("erro:", error);
    // app.listen(port2);
    // console.log("conectado na porta 80");
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});