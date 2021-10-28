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
    }
    
}

module.exports = postsController;