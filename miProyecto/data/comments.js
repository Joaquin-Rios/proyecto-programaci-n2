let users = require('./users');

let comments = {
    lista:[
        {post_id: 1, user: 'PabloGonzales', contenido: 'Uff que lindo fierro', fecha: '18 de octubre',likes: 1},
        {post_id: 1, user: users.findByUsername('Fernando'), contenido: 'Que lindo color, esta divino', fecha: '19 de octubre',likes: 1},
        {post_id: 1, user: users.findByUsername('Cristian'), contenido: 'Mi viejo tenia uno igual!', fecha: '20 de octubre',likes: 1},
        {post_id: 1, user: users.findByUsername('Jorge'), contenido: 'Impecable!!', fecha: '20 de octubre',likes: 1},
        {post_id: 2, user: users.findByUsername('Cecilia'), contenido: 'Que lindo auto!', fecha: '21 de octubre',likes: 1},
        {post_id: 2, user: users.findByUsername('Carla'), contenido: 'Que bien estas...', fecha: '22 de octubre',likes: 1},
        {post_id: 2, user: users.findByUsername('Joaquin'), contenido: 'Nuevito nuevito lo tenes', fecha: '23 de octubre',likes: 1},
        {post_id: 2, user: users.findByUsername('Esteban'), contenido: 'Tremendo, felicitaciones!', fecha: '23 de octubre',likes: 1},
        {post_id: 3, user: users.findByUsername('Mariana'), contenido: 'Me alegro, disfruta mucho', fecha: '21 de octubre',likes: 1},
        {post_id: 3, user: 'PabloGonzales', contenido: 'Que buena experiencia', fecha: '21 de octubre',likes: 1},
        {post_id: 3, user: users.findByUsername('Felipe'), contenido: 'TREMENDOO!', fecha: '22 de octubre',likes: 1},
        {post_id: 3, user: users.findByUsername('Tomas'), contenido: 'Que bien se te ve, abrazo!', fecha: '22 de octubre',likes: 1},
        {post_id: 4, user: users.findByUsername('Martin'), contenido: 'Esta increible!!', fecha: '25 de octubre',likes: 1},
        {post_id: 4, user: users.findByUsername('Mateo'), contenido: 'La vi el otro dia, un caño', fecha: '26 de octubre',likes: 1},
        {post_id: 4, user: users.findByUsername('Justo'), contenido: 'Que buena foto!', fecha: '26 de octubre',likes: 1},
        {post_id: 4, user: users.findByUsername('Ciro'), contenido: 'Epicaa', fecha: '27 de octubre',likes: 1},
        {post_id: 5, user: users.findByUsername('Antonela'), contenido: 'Parece un motorhome jajaja!', fecha: '27 de octubre',likes: 1},
        {post_id: 5, user: users.findByUsername('Leonel'), contenido: 'Increible felicitaciones!', fecha: '27 de octubre',likes: 1},
        {post_id: 5, user: users.findByUsername('Martin'), contenido: 'Te lo mereces, abrazo', fecha: '28 de octubre',likes: 1},
        {post_id: 5, user: users.findByUsername('Nicolas'), contenido: 'Buenisimaa!', fecha: '29 de octubre',likes: 1},
    ],
    findByPost: function (postId) {
        let results = [];
        for (let i = 0; i < comments.lista.length; i++){
            if(comments.lista[i].post_id === postId){
                results.push(comments.lista[i]);
            }
        }
        return results;
    },
}
module.exports = comments;