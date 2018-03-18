var express = require('express');
var router = express.Router();
var helloController = require('../controllers/helloWorldController');


router.post('/cadastrar', function (req, res) {

    try {
        var linguagem = req.body.linguagem;
        var descricao = req.body.descricao;
        helloController.save(linguagem, descricao, function (resp) {
            res.json(resp);
        });
    } catch (error) {
        console.log('Não foi possivel acessar o Hello.');
    }

});


router.get('/consultar', function (req, res) {

    try {
        helloController.getHello(function (resp) {
            res.json(resp);
        });
    } catch (error) {
        console.log('Não foi possivel acessar o Hello.');
    }

});

router.get('/consultarById/:id', function (req, res) {

    try {
        var id = req.params.id;
        helloController.getHelloById(id, function (resp) {
            res.json(resp);
        });
    } catch (error) {
        console.log('Não foi possivel acessar o Hello.');
    }

});

router.get('/consultarByLinguagem/:linguagem', function (req, res) {
    
        try {
            var linguagem = req.params.linguagem;
            helloController.getHelloById(linguagem, function (resp) {
                res.json(resp);
            });
        } catch (error) {
            console.log('Não foi possivel acessar o Hello.');
        }
    
    });

router.delete('/deletar/:id', function (req, res) {

    try {
        var id = req.params.id;
        helloController.delete(id, function (resp) {
            res.json(resp);
        });
    } catch (error) {
        console.log('Não foi possivel acessar o Hello.');
    }

});

router.put('/alterar', function (req, res) {

    try {
        var linguagem = req.body.linguagem;
        var descricao = req.body.descricao;
        helloController.put(linguagem, descricao, function (resp) {
            res.json(resp);
        });
    } catch (error) {
        console.log('Não foi possivel acessar o Hello.');
    }

});



module.exports = router;