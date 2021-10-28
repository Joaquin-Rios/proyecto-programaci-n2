const db = require('../database/models');
const op = db.Sequelize.Op;

let indexController = {
    index: function (req, res) {
        db.Posteos.findAll({limit: 6})
        
        .then((posts) => [
            res.render('index', {posts})
        ])
        .catch((error) => {
            res.send(error)
        })  
    },
    login: async function (req, res) {
            if (req.method == 'POST') {
              const user = await db.Usuarios.findOne({ where: {nombre: req.body.email}});
              if (!user) {
                res.send('NO EXISTE EL USUARIO')
              }
              if (bcrypt.compareSync(req.body.contraseña, user.contraseña)) {
                // Add user to session
                res.redirect('/');
              } else {
                res.send('LA CONSTRASEÑA ES INCORRECTA')
              }
            } else {
              res.render('login');
            }
             
        // res.render('login');            
            },
    register: function (req, res) {
                res.render('register');            
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