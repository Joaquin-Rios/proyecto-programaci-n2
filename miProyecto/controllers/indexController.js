

const db = require('../database/models');

let indexController = {
    index: function (req, res) {
        db.Posteos.findAll()
        
        .then((posts) => [
            res.render('index', {posts})
        ])
        .catch((error) => {
            res.send(error)
        })  
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