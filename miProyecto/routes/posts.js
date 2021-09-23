var express = require('express');
var router = express.Router();

var postsController = require('../controllers/postController');
/* GET home page. */
router.get('/agregarPost', postsController.agregarPost);
router.get('/:id', postsController.detallePost);


//router.get('/comentariosPost/:user', postsController.comentariosPost);
//router.get('/login', indexController.login);
//router.get('/register', indexController.register);

module.exports = router;