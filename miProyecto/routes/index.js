var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController');
/* GET home page. */
router.get('/', indexController.index);


router.get('/registro', indexController.registro);
router.post('/registro', indexController.guardadoRegistro);

router.all('/logout', indexController.logout);
router.all('/login', indexController.login);


router.get('/fotoPerfil', indexController.fotoPerfil);
router.get('/buscador', indexController.buscador)

router.get('/feed/:id/like', indexController.like);
router.get('/feed/:id/dislike', indexController.dislike);

module.exports = router;
