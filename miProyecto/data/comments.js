let users = require('./users');

let comments = {
    lista:[
        {post_id: 1, user: 'PabloGonzales', contenido: 'Uff que lindo fierro', fecha: '18 de octubre',likes: 1},
        {post_id: 1, user: 'CristianFabianni', contenido: 'Que lindo color, esta divino', fecha: '19 de octubre',likes: 1},
        {post_id: 1, user: 'CarlaDominguez', contenido: 'Mi viejo tenia uno igual!', fecha: '20 de octubre',likes: 1},
        {post_id: 1, user: 'FernandoMenendez', contenido: 'Impecable!!', fecha: '20 de octubre',likes: 1},
        {post_id: 2, user: 'FranciscoRodriguez', contenido: 'Que lindo auto!', fecha: '21 de octubre',likes: 1},
        {post_id: 2, user: 'CarlaDominguez', contenido: 'Que bien estas...', fecha: '22 de octubre',likes: 1},
        {post_id: 2, user: 'FernandoMenendez', contenido: 'Nuevito nuevito lo tenes', fecha: '23 de octubre',likes: 1},
        {post_id: 2, user: 'CristianFabianni', contenido: 'Tremendo, felicitaciones!', fecha: '23 de octubre',likes: 1},
        {post_id: 3, user: 'FranciscoRodriguez', contenido: 'Me alegro, disfruta mucho', fecha: '21 de octubre',likes: 1},
        {post_id: 3, user: 'PabloGonzales', contenido: 'Que buena experiencia', fecha: '21 de octubre',likes: 1},
        {post_id: 3, user: 'CarlaDominguez', contenido: 'TREMENDOO!', fecha: '22 de octubre',likes: 1},
        {post_id: 3, user: 'FernandoMenendez', contenido: 'Que bien se te ve, abrazo!', fecha: '22 de octubre',likes: 1},
        {post_id: 4, user: 'PabloGonzales', contenido: 'Esta increible!!', fecha: '25 de octubre',likes: 1},
        {post_id: 4, user: 'FernandoMenendez', contenido: 'La vi el otro dia, un caño', fecha: '26 de octubre',likes: 1},
        {post_id: 4, user: 'CristianFabianni', contenido: 'Que buena foto!', fecha: '26 de octubre',likes: 1},
        {post_id: 4, user: 'FranciscoRodriguez', contenido: 'Epicaa', fecha: '27 de octubre',likes: 1},
        {post_id: 5, user: 'CristianFabianni', contenido: 'Parece un motorhome jajaja!', fecha: '27 de octubre',likes: 1},
        {post_id: 5, user: 'FranciscoRodriguez', contenido: 'Increible felicitaciones!', fecha: '27 de octubre',likes: 1},
        {post_id: 5, user: 'PabloGonzales', contenido: 'Te lo mereces, abrazo', fecha: '28 de octubre',likes: 1},
        {post_id: 5, user: 'CarlaDominguez', contenido: 'Buenisimaa!', fecha: '29 de octubre',likes: 1},
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