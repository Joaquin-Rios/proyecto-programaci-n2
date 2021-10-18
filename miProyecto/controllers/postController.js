//const posts = require("../data/posts");
//const comments = require("../data/comments");

const db = require('../database/models');

let postsController = {
    agregarPost : function(req, res) {
        res.render('agregarPost');
    },
    detallePost : function(req, res) {
        const post = posts.find(req.params.id);
        if (!post) {
            return res.render('error')
            
        }
        res.render('detallePost', {post});
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