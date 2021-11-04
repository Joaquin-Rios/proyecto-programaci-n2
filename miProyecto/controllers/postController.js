//const posts = require("../data/posts");
//const comments = require("../data/comments");

const db = require('../database/models');

let postsController = {
    agregarPost : function(req, res) {
        res.render('agregarPost');
    },
    detallePost : async function(req, res) {
        const post = await db.Posteos.findByPk(req.params.id);
        if (!post) {
            return res.render('error')
        }
       const comments = await db.Comentarios.findAll({where: {posteo_id:req.params.id} });
        res.render('detallePost', {post, comments});
    },
    guardado : function(req, res) {
        db.Posteos.create({
            descripcion : req.body.descripcion      
        }) .then( post => {
            res.redirect('/')
        }) .catch( error => {
            return res.render(error)
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
            return res.render(error)
        })
    },
    eliminarPost :  function(req, res) {
        //Chequear que quien borra el post es el dueño
        db.Posteos.destroy({ where: { id: req.params.id}})
        .then(() => {
            res.redirect('/')
        }) .catch( error => {
            return res.render(error);
        })
    },
    
}

module.exports = postsController;