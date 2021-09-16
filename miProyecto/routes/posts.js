var express = require('express');
var router = express.Router();

var postsController = require('../controllers/postController');
/* GET home page. */
router.get('/', postsController.index);
//router.get('/login', indexController.login);
//router.get('/register', indexController.register);

module.exports = router;