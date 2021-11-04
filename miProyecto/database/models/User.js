module.exports = (sequelize, dataTypes) => { 
    const alias = 'Usuarios';

    const cols = {
        id: { 
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        username: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        contraseña: {
            type: dataTypes.STRING
        },
        fotoPerfil:{
            type: dataTypes.STRING
        },
        cantPublicaciones:{
            type: dataTypes.INTEGER
        },
        seguidores:{
            type: dataTypes.INTEGER
        },
        seguidos:{
            type: dataTypes.INTEGER
        }
    
    }

    const config = {
        tableName: 'users',
        timeStamps: false,
        underscored: true,
    }

    const Users = sequelize.define(alias, cols, config)

    Users.associate = function(models){
        Users.hasMany(models.Posteos, {
            as: 'posteos',
            foreignKey: 'usuario_id'
        });
    };

    return Users;
}