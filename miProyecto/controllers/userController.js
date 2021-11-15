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
    miPerfil : async function(req, res) {
        if (req.session.user) {
            let user = await db.Usuarios.findOne({
                where: {username: req.params.username}
            })
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
            usuario_id : req.session.user.id   
        }) .then( post => {
            res.redirect('/users/miPerfil/'+req.params.id);
        }) .catch( error => {
            return res.send(error)
        })
    }
    

}

module.exports = userController;