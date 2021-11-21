const db = require('../database/models');
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');


const validateUser = function (req) {
  const errors = [];
  if (!req.body.email) {
    errors.push('EL EMAIL ES REQUERIDO');
  }
  if (req.body.email == req.params.email) {
    errors.push('EL EMAIL YA EXISTE');
  }
  if (req.body.contrasenia.length < 5) {
    errors.push('LA CONSTRASEÑA ES INSEGURA');
  }
  if (!req.body.username) {
    errors.push('EL USERNAME ES REQUERIDO');
  }
  return errors;
}

let indexController = {
    index: function (req, res) {
        db.Posteos.findAll({
          include: [
            {association: 'creador'},
            {association: 'comments', include: [{association: 'creador'}] }

          ]
        })
        
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
      const errors = validateUser(req);
      if (errors.length > 0) {
        return res.render('register', { errors });
      }
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
                req.session.user = user;
                res.cookie('user', user, { maxAge: 1000 * 60 * 60 * 24 * 30 })
                res.redirect('/');                
              } else {
                res.send('LA CONSTRASEÑA ES INCORRECTA')
              }
            } else {
              res.render('login');
            }            
    },
    logout: function(req, res, next) {
      res.clearCookie('user');
      req.session.user = null;
      res.redirect('/');
    },
    fotoPerfil : function(req, res) {
                res.render('index', {posts: posts.lista });
            },
    buscador: async function(req, res, next){
          const posts = await db.Posteos.findAll({ 
            where : { 
            [op.or] : [
              {descripcion : {[op.like]: "%"+req.query.criteria+"%"} },
              {imagen : {[op.like]: "%"+req.query.criteria+"%"} },
            ]},
            include: [{association: 'creador'}],
            order:[['imagen','desc']]
          })
           
          res.render('buscador', { posts, criteria: req.query.criteria });
    },
}


module.exports = indexController;