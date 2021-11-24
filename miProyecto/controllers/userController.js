let users = require ('../data/users')
let posts = require ('../data/posts')

const db = require('../database/models');
const op = db.Sequelize.Op;


let userController = {
    detalleUsuario : async function(req, res) {
        
        const user = await db.Usuarios.findByPk(req.params.id, {
          include: [{association: 'posteos'}, {association: 'followers'},{association: 'following'} ]
            
        });
        res.render('detalleUsuario', { user });
         
    }, 
    miPerfil : async function(req, res) {
        if (req.session.user) {
            let user = await db.Usuarios.findOne({
                where: {username: req.params.username},
                include: [{association: 'posteos'}, {association: 'followers'}, {association: 'following'}]  
            });
            res.render('miPerfil', {user});
        }else{
            res.redirect('/')
        }
        
        },
    editarPerfil : function(req, res) {
        res.render('editarPerfil');
        },
    guardarPerfil : function (req, res){
        if (req.file) req.body.imagen = (req.file.destination + req.file.filename).replace('public', '');
        db.Usuarios.create({
            ...req.body,
            usuario_id : req.session.user.id,
        }) .then( user => {
            res.redirect('/users/miPerfil/'+req.session.user.username); 
        }) .catch( error => {
            return res.send(error)
        })
    },
    
    follow: function(req, res) {
        if (!req.session.user) {
          res.redirect('/users/detalleUsuario/'+req.params.id);
        }
        db.Follow.create({
          follower_id: req.session.user.id,
          following_id: req.params.id 
        }).then(follow => {
          res.redirect('/users/detalleUsuario/'+req.params.id);
        }).catch(error => {
          return res.send(error);
        })
      },
      unfollow: function(req, res) {
        if (!req.session.user) {
          res.redirect('/users/detalleUsuario/'+req.params.id);
        }
        db.Follow.destroy(
          { where: { follower_id: req.session.user.id, following_id: req.params.id }
        })
        .then(() => {
          res.redirect('/users/detalleUsuario/'+req.params.id);
        }).catch(error => {
          return res.send(error);
        })
      },


}

module.exports = userController;