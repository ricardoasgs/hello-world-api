var helloWorld = require('../models/helloWorld');

exports.save = function (linguagem, descricao, callback) {
    var novoHelloWorld = new helloWorld();
    novoHelloWorld.linguagem = linguagem;
    novoHelloWorld.descricao = descricao;
    console.log(novoHelloWorld);
    novoHelloWorld.save(function (err, hello) {
        if (err) {
            callback({ 'erro': err });
        } else {
            callback( hello);
        }
    });
}

exports.getHello = function (callback) {
    helloWorld.find({}, function (err, hello) {
        if (err) {
            callback({ 'erro': err });
        } else if (hello) {
            callback(hello);
            res.sendStatus(200);
        } else {
            callback({'erro': 'Nenhum hello encontrado' });
        }
    });
}

exports.getHelloById = function (id, callback) {
    helloWorld.findById(id, function (err, hello) {
        if (err) {
            callback({ 'erro': err });
        } else if (hello) {
            callback(hello);
            res.sendStatus(200);
        } else {
            callback({ 'erro': 'Nenhum hello encontrado' });
        }
    });
}

exports.getHelloByLinguagem = function (linguagem, callback) {
    helloWorld.find({linguagem: linguagem}, function (err, hello) {
        if (err) {
            callback({ 'erro': err });
        } else if (hello) {
            callback(hello..descricao);
        } else {
            callback({ 'erro': 'Nenhum hello encontrado' });
        }
    });
}

exports.delete = function (id, callback) {
    helloWorld.findById(id, function (err, hello) {
        if (err) {
            callback({'erro' : err});
        } else if (hello) {
            hello.remove(function (err) {
                if (!err) {
                    callback({ 'hello excluido': hello });
                    res.sendStatus(200);
                } else {
                    callback({ erro: 'Não foi possivel excluir' });
                }
            });
        } else {
            callback({ 'erro': 'Nenhum hello encontrado' });
        }
    });
}

exports.put = function (id, linguagem, descricao, callback) {
    helloWorld.findOneAndUpdate({ '_id': id, },
        {
            $set: {
                linguagem: linguagem,
                descricao: descricao,
            }
        },
        function (err, hello) {
            if (err) {
                callback({ 'erro': err });
            } else if (hello) {
                callback('hello Alterado');
                // res.sendStatus(200);
            } else {
                callback('hello Não encontrado');
            }
        });
}
