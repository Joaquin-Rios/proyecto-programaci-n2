let users = require ('../data/users')

let userController = {
    detalleUsuario : function(req, res) {
                res.render('detalleUsuario', { user: users.findByUsername(req.params.username)});
            },
    miPerfil : function(req, res) {
            res.render('miPerfil');
            },
    editarPerfil : function(req, res) {
            res.render('editarPerfil');
            },
    

        


}

module.exports = userController;