let users ={
    list:[
        {
            id: 0,
            username: 'FranciscoRodriguez',
            seguidores:300, 
            publicaciones:1,
            seguidos:100,
            publicacion: '/images/fordFalcon.jpg',
            fotoPerfil: '/images/usuario1.jpg',
            post_id: 0,
        },
        {
            id: 1,
            username: 'PabloGonzales',
            seguidores:200, 
            publicaciones:1,
            seguidos:300,
            publicacion : '/images/Peugeot208.jpg',
            fotoPerfil:'/images/usuario2.jpg',
            post_id: 1,
        },
        {
            id: 2,
            username: 'CristianFabianni',
            seguidores:100, 
            publicaciones:1,
            seguidos:100,
            publicacion: '/images/DiaDeCarrera.jpg',
            fotoPerfil:'/images/usuario3.jpg',
            post_id: 2,
        },
        {
            id: 3,
            username: 'CarlaDominguez',
            seguidores:400, 
            publicaciones:1,
            seguidos:500,
            publicacion: '/images/ferrari.jpg',
            fotoPerfil:'/images/usuario4.jpg',
            post_id: 3,
        },
        {
            id: 4,
            username: 'FernandoMenendez',
            seguidores:800, 
            publicaciones:1,
            seguidos:100,
            publicacion: '/images/toyotaHilux.jpg',
            fotoPerfil:'/images/usuario5.jpg',
            post_id: 4,
        },
        {
            id: 5,
            username: 'FranciscoRodriguez',
            seguidores:300, 
            publicaciones:1,
            seguidos:100,
            publicacion: '/images/fordFalcon.jpg',
            fotoPerfil: '/images/usuario1.jpg',
            post_id: 0,
        }
    ],

    findByUsername: function (username) {
        for (let index = 0; index < users.list.length; index++) {
            if (users.list[index].username == username) {
                return users.list[index];
            }
        }
    },
    findByUser: function (Id) {
        //let results = [];
        for (let i = 0; i < users.list.length; i++){
            if(users.list[i].id == Id){
                return users.list[i];
            }
        }
        //return results;
    },
    
    //findUsername: function (id) {
        //for(let i = 0; i < users.list.length; i++){
            //if(users.list[i].id == id){
                //return users.list[i]
            //}
       //}
    //}
}

module.exports = users;


