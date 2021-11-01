let users = require ('../data/users')
let posts = require ('../data/posts')

const db = require('../database/models');


let userController = {
    detalleUsuario : async function(req, res) {
        
        const user = await db.User.findByPk(req.params.id, {
            include: [{association: 'posteos'}]
        });
        //const posts = await db.Post.findAll({where: {user_id: req.params.username}});
      
        //userId = usuarios.findUsername(req.params.id)
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