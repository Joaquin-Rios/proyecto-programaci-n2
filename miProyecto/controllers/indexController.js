const posts = require("../data/posts");
//let users = require ('../data/users')


let indexController = {
    index: function (req, res) {
                res.render('index', {posts: posts.lista});
            },
    login: function (req, res) {
                res.render('login');            
            },
    register: function (req, res) {
                res.render('register');            
            },
    fotoPerfil : function(req, res) {
                res.render('index', {posts: posts.lista });
            },
}




module.exports = indexController;