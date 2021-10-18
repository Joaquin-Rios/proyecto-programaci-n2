module.exports = (sequelize, dataTypes) => { 
    const alias = 'Users';

    const cols = {
        id: { 
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        }
        
    }

    const config = {
        tableName: 'users',
        timeStamps: false,
        underscored: true,
    }

    const Users = sequelize.define(alias, cols, config)

    return Users;
}