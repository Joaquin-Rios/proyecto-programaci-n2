let users = require ('../data/users')
let posts = require ('../data/posts')

const db = require('../database/models');
const op = db.Sequelize.Op;


let userController = {
    detalleUsuario : async function(req, res) {
        
        const user = await db.Usuarios.findByPk(req.params.id, {
            include: [{association: 'posteos'}]
        });
        res.render('detalleUsuario', { user });
         
    },    
    miPerfil : function(req, res) {
        res.render('miPerfil', { user: users.list[5] });
        },
    editarPerfil : function(req, res) {
        res.render('editarPerfil');
        },
   
    

}

module.exports = userController;