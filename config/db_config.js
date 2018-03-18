const mongoose = require('mongoose');

const urlString = 'mongodb://admin:admin@ds012678.mlab.com:12678/helloworld';

mongoose.connection.openUri(urlString, (err, res) => {
    if (err) {
        console.log('Não foi possivel conectar com o Banco: ');
        console.log(err);
    } else {
        //console.log(res);
        console.log('Conectado com o Banco');
    }
});
