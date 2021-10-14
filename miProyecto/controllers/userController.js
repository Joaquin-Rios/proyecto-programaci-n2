let users = require ('../data/users')
let posts = require ('../data/posts')

const db = require('../database/models');

let userController = {
    detalleUsuario : function(req, res) {
        db.User.findByPk(req.params.username)
         .then((user) => {
            db.Post.findAll()
            .then( (posts) => { 
           //userId = usuarios.findUsername(req.params.id)
           res.render('detalleUsuario', { user: users.list[req.params.username]});
           });

         })
    },    
    miPerfil : function(req, res) {
        res.render('miPerfil', { user: users.list[5] });
        },
    editarPerfil : function(req, res) {
        res.render('editarPerfil');
        },
   
    

}

module.exports = userController;