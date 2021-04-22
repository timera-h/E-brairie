import {Model} from 'sequelize';

class Ressource extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                title: DataTypes.STRING,
                quantiy: DataTypes.INTEGER,
                row: DataTypes.INTEGER,
                column: DataTypes.INTEGER,
                category: DataTypes.STRING,
                is_borrowed: DataTypes.BOOLEAN,
                serie: DataTypes.STRING,
                tome_number: DataTypes.INTEGER,
                genre: DataTypes.STRING                            
            },
            
             {sequelize, modelName: 'Ressource',             
             freezeTableName: true,              
             timestamps: false}
                      
        );
    }
    static associate(models) {
        this.belongsTo(models.authorDao, { foreignKey: 'id_author', as: 'Author'});
        this.hasMany(models.borrowDao, { foreignKey: 'id_ressource', as: 'Borrow'});
        return this;
    }
    
};

export default Ressource;