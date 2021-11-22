module.exports = (sequelize, dataTypes) => { 
    const alias = 'Comentarios';

    const cols = {
        id: { 
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario_id: { 
            type: dataTypes.INTEGER,
        },
        comentario: { 
            type: dataTypes.STRING,
        },
        fecha_de_creacion: { 
            type: dataTypes.DATE,
            
        },
        posteo_id: {
            type: dataTypes.INTEGER
        }
    }

    const config = {
        table_name: 'comentarios',
        timestamps: true,
        underscored: false,
    }

    const Comentarios = sequelize.define(alias, cols, config)

    Comentarios.associate = function(models){
        Comentarios.belongsTo(models.Posteos, {
            as: 'posteo',
            foreignKey: 'posteo_id'
        });
        Comentarios.belongsTo(models.Usuarios, {
            as: 'creador',
            foreignKey: 'usuario_id'
        });
        
    }
    return Comentarios;
}
