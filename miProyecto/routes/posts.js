var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images/'});

var postsController = require('../controllers/postController');
/* GET home page. */
router.get('/agregarPost', postsController.agregarPost);
router.post('/agregarPost', upload.single('imagen'), postsController.guardado);

router.get('/:id', postsController.detallePost);
router.post('/:id', postsController.comentario);


router.get('/:id/editar', postsController.editarPost);
router.post('/:id/editar', postsController.actualizarPost);

router.post('/:id/eliminar', postsController.eliminarPost);


//router.get('/comentariosPost/:user', postsController.comentariosPost);
//router.get('/login', indexController.login);
//router.get('/register', indexController.register);

module.exports = router;