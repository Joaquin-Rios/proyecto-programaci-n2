module.exports = (sequelize, dataTypes) => { 
    const alias = 'User';

    const cols = {
        id: { 
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        user_id: { 
            type: dataTypes.INTEGER,
        },
        contenido: { 
            type: dataTypes.STRING,

        },
        imagen: { 
            type: dataTypes.STRING,
            
        },
    }

    const config = {
        tableName: 'user',
        timeStamps: false,
        underscored: true,
    }

    const User = sequelize.define(alias, cols, config)

    return User;
}