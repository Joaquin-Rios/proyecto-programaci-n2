//let comentarios = require('../modules/comments');
//let posts = require('../modules/posts');

let indexController = {
    index: function (req, res) {
                res.render('index', { title: 'Express' });
            },
    login: function (req, res) {
                res.render('login');            
            },
    register: function (req, res) {
                res.render('register');            
            },
}




module.exports = indexController;