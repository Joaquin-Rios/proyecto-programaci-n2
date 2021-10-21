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
    
    }

    const config = {
        tableName: 'users',
        timeStamps: false,
        underscored: true,
    }

    const Users = sequelize.define(alias, cols, config)

    return Users;
}