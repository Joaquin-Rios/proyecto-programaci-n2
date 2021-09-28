let users = require ('../data/users')
let posts = require ('../data/posts')

let userController = {
    detalleUsuario : function(req, res) {
        //userId = usuarios.findUsername(req.params.id)
        res.render('detalleUsuario', { user: users.list[req.params.username]});
        },
    miPerfil : function(req, res) {
        res.render('miPerfil', { user: users.list[5] });
        },
    editarPerfil : function(req, res) {
        res.render('editarPerfil');
        },
   
    

}

module.exports = userController;