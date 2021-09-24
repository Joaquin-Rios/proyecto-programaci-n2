let users = require ('../data/users')
let posts = require ('../data/posts')

let userController = {
    detalleUsuario : function(req, res) {
        //userId = usuarios.findUsername(req.params.id)
        res.render('detalleUsuario', { user: users.findByUsername(req.params.username), post: posts.lista});
        },
    miPerfil : function(req, res) {
        res.render('miPerfil');
        },
    editarPerfil : function(req, res) {
        res.render('editarPerfil');
        },
   
    

        


}

module.exports = userController;