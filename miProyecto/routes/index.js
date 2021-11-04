var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController');
/* GET home page. */
router.get('/', indexController.index);


router.get('/registro', indexController.registro);
router.get('/registro', indexController.guardadoRegistro);

router.get('/login', indexController.login);


router.get('/fotoPerfil', indexController.fotoPerfil);
router.get('/buscador', indexController.buscador)

module.exports = router;
