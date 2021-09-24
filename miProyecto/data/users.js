let users ={
    list:[
        {
            id: 1,
            username: 'FranciscoRodriguez',
            seguidores:300, 
            publicaciones:1,
            seguidos:100,
            fotoPerfil: '/images/usuario1.jpg'
        },
        {
            id: 2,
            username: 'PabloGonzales',
            seguidores:200, 
            publicaciones:1,
            seguidos:300,
            fotoPerfil:'/images/usuario2.jpg'
        },
        {
            id: 3,
            username: 'CristianFabianni',
            seguidores:100, 
            publicaciones:1,
            seguidos:100,
            fotoPerfil:'/images/usuario3.jpg'
        },
        {
            id: 4,
            username: 'CarlaDominguez',
            seguidores:400, 
            publicaciones:1,
            seguidos:500,
            fotoPerfil:'/images/usuario4.jpg'
        },
        {
            id: 5,
            username: 'FernandoMenendez',
            seguidores:800, 
            publicaciones:1,
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
    },
    findByUser: function (Id) {
        let results = [];
        for (let i = 0; i < users.list.length; i++){
            if(users.list[i].id === Id){
                results.push(users.list[i]);
            }
        }
        return results;
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


