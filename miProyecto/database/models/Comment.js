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
        timestamps: false,
        underscored: true,
    }

    const Comentarios = sequelize.define(alias, cols, config)

    return Comentarios;
}
