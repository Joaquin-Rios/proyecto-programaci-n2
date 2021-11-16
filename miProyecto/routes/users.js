var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images/'});

var usersController = require('../controllers/userController');
/* GET users listing. */
router.get('/detalleUsuario/:id', usersController.detalleUsuario);


router.get('/miPerfil/:username', usersController.miPerfil);

router.get('/editarPerfil/', usersController.editarPerfil);
router.post('/editarPerfil/', upload.single('imagen'), usersController.guardarPerfil);

module.exports = router;
