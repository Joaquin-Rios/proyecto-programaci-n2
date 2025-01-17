//const posts = require("../data/posts");
//const comments = require("../data/comments");

const db = require('../database/models');

let postsController = {
    
    detallePost : async function(req, res) {
        const post = await db.Posteos.findByPk(req.params.id, {
            include: [
                {association: 'creador'},
                {association: 'likes'},
                {association: 'comments', include: [{association: 'creador'}],
            }], order: [["comments", "id", "desc"]]
        });
        if (!post) {
            return res.render('error')
        }
        res.render('detallePost', {post});
        
    },
    comentario: function(req, res) {
        if (!req.session.user) {
            res.redirect('/posts/'+req.params.id);
          }
        db.Comentarios.create({
            ...req.body,
            posteo_id: req.params.id,
            usuario_id : req.session.user.id
        }) .then( post => {
            res.redirect('/posts/'+req.params.id)
        }) .catch( error => {
            return res.send(error)
        })
    },
    agregarPost : function(req, res) {
        res.render('agregarPost');
    },
    guardado : function(req, res) {
        if (req.file) req.body.imagen = (req.file.destination + req.file.filename).replace('public', '');
        db.Posteos.create({
            ...req.body,
            descripcion : req.body.descripcion,  
            usuario_id : req.session.user.id   
        }) .then( post => {
            res.redirect('/')
        }) .catch( error => {
            return res.send(error)
        })
    },
    editarPost : async function(req, res) {
        const post = await db.Posteos.findByPk(req.params.id);
        if (!post) {
            return res.render('error')
        }
        res.render('editarPost', {post});
    },
    actualizarPost : function(req, res) {
        db.Posteos.update({
            descripcion : req.body.descripcion      
        }, 
        { where: { id: req.params.id}}
        ) .then( post => {
            res.redirect('/')
        }) .catch( error => {
            return res.send(error)
        })
    },
    eliminarPost :  function(req, res) {
        //Chequear que quien borra el post es el dueño
        db.Posteos.destroy({ where: { id: req.params.id}})
        .then(() => {
            res.redirect('/')
        }) .catch( error => {
            return res.send(error);
        })
    },
    
}

module.exports = postsController;