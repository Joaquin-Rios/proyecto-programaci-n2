var express = require('express');
var router = express.Router();

var usersController = require('../controllers/userController');
/* GET users listing. */
router.get('/detalleUsuario/:username?', usersController.detalleUsuario);
router.get('/miPerfil', usersController.miPerfil);
router.get('/editarPerfil', usersController.editarPerfil);

module.exports = router;
