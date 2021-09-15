//let usuarios = require()

let indexController = {
    index: function (req, res) {
                res.render('index', { title: 'Express' });
            },
    login: function (req, res) {
                res.render('index', { title: 'Express' });            
            },
    register: function (req, res) {
                res.render('index', { title: 'Express' });            
            },
}




module.exports = indexController;