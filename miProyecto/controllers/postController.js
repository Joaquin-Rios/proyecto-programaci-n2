const posts = require("../data/posts");
const comments = require("../data/comments");


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
    
    


}

module.exports = postsController;