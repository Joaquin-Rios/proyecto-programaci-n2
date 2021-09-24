let comments = require('./comments');
let users = require ('./users');

let posts = {
    lista: [
        {
            id: 1,
            contenido: 'Ford Falcon, una nave, con caño de escape nuevo',
            imagen: '/images/fordFalcon.jpg',
            date: '18 de octubre',
            user_id: 1,
            user: {id: 1, username:'Francisco', firstName: 'Rodriguez'},
            likes: 18, 
            fotoPerfil: '/images/usuario1.jpg',
            comentarios: comments.findByPost(1),
            infoUsers: users.findByUser(1),
        },
        {
            id: 2,
            contenido: 'Peugeot 208 nuevo recien salido del taller',
            imagen: '/images/Peugeot208.jpg',
            date: '19 de octubre',
            user_id: 2,
            user: {id: 2, username:'Pablo', firstName: 'Gonzales'},
            likes: 120,
            fotoPerfil:'/images/usuario2.jpg',
            comentarios: comments.findByPost(2),
            infoUsers: users.findByUser(2),
        },
        {
            id: 3,
            contenido: 'Disfrutando un dia de carrera con amigos',
            imagen: '/images/DiaDeCarrera.jpg',
            date: '21 de octubre',
            user_id: 3,
            user: {id: 3, username:'Cristian', firstName: 'Fabianni'},
            likes: 180,
            fotoPerfil:'/images/usuario3.jpg',
            comentarios: comments.findByPost(3),
            infoUsers: users.findByUser(3),
        },
        {
            id: 4,
            contenido: 'Ferrari en Libertador, Pepino',
            imagen: '/images/ferrari.jpg',
            date: '25 de octubre',
            user_id: 4,
            user: {id: 4, username:'Carla', firstName: 'Dominguez'},
            likes: 43,
            fotoPerfil:'/images/usuario4.jpg',
            comentarios: comments.findByPost(4),
            infoUsers: users.findByUser(4),
        },
        {
            id: 5,
            contenido: 'Nueva camioneta Toyota Hilux 2021',
            imagen: '/images/toyotaHilux.jpg',
            date: '26 de octubre',
            user_id: 5,
            user: {id: 5, username:'Fernando', firstName: 'Menendez'},
            likes: 55,
            fotoPerfil:'/images/usuario5.jpg',
            comentarios: comments.findByPost(5),
            infoUsers: users.findByUser(5),
        }
    ],
    find : function (id) {
        for (let index = 0; index < posts.lista.length; index++) {
            if (posts.lista[index].id == id) {
                return posts.lista[index]
                
            }
        }
    },
    findById : function (id) {
        for (let i = 0; i < posts.lista.length; i++) {
            let elem = posts.lista[i];
            if (elem.id == id) {
                return elem;
            }
        }
            
    },
    
}
module.exports = posts;