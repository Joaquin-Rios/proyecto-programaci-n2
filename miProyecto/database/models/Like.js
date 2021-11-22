module.exports= (sequelize,dataTypes)=>{

    const alias = 'Like';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }
    }

    const config = {
        tableName:'likes',
        timestamps: false,
        underscored: true,
    }

    const Like = sequelize.define(alias,cols,config)
    
    
    Like.associate = function(models) {
        Like.belongsTo(models.Usuarios, {
            as: 'user',
            foreignKey: 'usuario_id'
        });
        Like.belongsTo(models.Posteos, {
            as: 'post',
            foreignKey: 'posteo_id'
        });
    };

    return Like
}