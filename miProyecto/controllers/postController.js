//const posts = require('../modules/posts');

const posts = require("../data/posts");

let postsController = {
    agregarPost : function(req, res) {
        res.render('agregarPost');
    },
    detallePost : function(req, res) {
                res.render('detallePost',);
            },


}

module.exports = postsController;