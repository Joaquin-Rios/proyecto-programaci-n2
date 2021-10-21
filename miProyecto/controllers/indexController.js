

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
    login: async function (req, res) {
            if (req.method == 'POST') {
              const user = await db.Usuarios.findOne({ where: {username: req.body.username}});
              if (!user) {
                res.send('NO EXISTE EL USUARIO')
              }
              if (bcrypt.compareSync(req.body.password, user.contraseña)) {
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
}




module.exports = indexController;