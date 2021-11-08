const db = require('../database/models');
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

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
    registro: function (req,res) {
      res.render('register');
    },
    guardadoRegistro: function(req, res) {
       db.Usuarios.create({
         username: req.body.username,
         nombre: req.body.nombre,
         apellido: req.body.apellido,
         email: req.body.email,
         contrasenia: bcrypt.hashSync(req.body.contrasenia, 10)
       }) 
       .then( function() {
          return res.redirect('/login')
       }) .catch( error => {
          return res.send(error)
       })
    },
    login: async function (req, res, next) {
            if (req.method == 'POST') {
              const user = await db.Usuarios.findOne({ where: {username: req.body.username}});
              if (!user) {
                res.send('NO EXISTE EL USUARIO')
              }
              if (bcrypt.compareSync(req.body.contrasenia,user.contrasenia)){
                res.redirect('/');                
              } else {
                res.send('LA CONSTRASEÑA ES INCORRECTA')
              }
            } else {
              res.render('login');
            }            
    },
    fotoPerfil : function(req, res) {
                res.render('index', {posts: posts.lista });
            },
    buscador: async function(req, res, next){
          const posts = await db.Posteos.findAll({ where : { 
            [op.or] : [
              {descripcion : {[op.like]: "%"+req.query.criteria+"%"} },
              {imagen : {[op.like]: "%"+req.query.criteria+"%"} },
            ]
            }})
          res.render('buscador', { posts, criteria: req.query.criteria });
    },
}


module.exports = indexController;