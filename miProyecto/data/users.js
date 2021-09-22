let users ={
    list:[
        {
            id: 1,
            username: 'FranciscoRodriguez',
            seguidores:300, 
            publicaciones:50,
            seguidos:100,
            fotoPerfil: '/images/usuario1.jpg'
        },
        {
            id: 2,
            username: 'PabloGonzales',
            seguidores:200, 
            publicaciones:70,
            seguidos:300,
            fotoPerfil:'/images/usuario2.jpg'
        },
        {
            id: 3,
            username: 'CristianFabianni',
            seguidores:100, 
            publicaciones:50,
            seguidos:100,
            fotoPerfil:'/images/usuario3.jpg'
        },
        {
            id: 4,
            username: 'Carla Dominguez',
            seguidores:400, 
            publicaciones:20,
            seguidos:500,
            fotoPerfil:'/images/usuario4.jpg'
        },
        {
            id: 5,
            username: 'FernandoMenendez',
            seguidores:800, 
            publicaciones:80,
            seguidos:100,
            fotoPerfil:'/images/usuario5.jpg'
        }
    ],

    findByUsername: function (username) {
        for (let index = 0; index < users.list.length; index++) {
            if (users.list[index].username == username) {
                return users.list[index];
            }
        }
    }    
}

module.exports = users;


