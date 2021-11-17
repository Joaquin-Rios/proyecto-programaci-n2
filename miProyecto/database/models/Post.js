module.exports = (sequelize, dataTypes) => { 
    const alias = 'Posteos';

    const cols = {
        id: { 
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario_id: { 
            type: dataTypes.INTEGER,
        },
        descripcion: { 
            type: dataTypes.STRING,
        },
        imagen: { 
            type: dataTypes.STRING,
            
        },
    }

    const config = {
        table_name: 'posteos',
        timestamps: false,
        underscored: true,
    }

    const Posteos = sequelize.define(alias, cols, config)

    Posteos.associate = function(models){
        Posteos.hasMany(models.Comentarios, {
            as: 'comments',
            foreignKey: 'posteo_id'
        });
        Posteos.belongsTo(models.Usuarios, {
            as: 'creador',
            foreignKey: 'usuario_id'
        });
    };

    return Posteos;
}



