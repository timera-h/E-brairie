import {Model} from 'sequelize';

class Ressource extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                title: DataTypes.STRING,
                quantity: DataTypes.INTEGER,
                row: {
                    type: DataTypes.INTEGER,
                    allowNull : true
                } ,
                column: {
                    type: DataTypes.INTEGER,
                    allowNull : true
                } ,
                category: DataTypes.STRING,
                is_borrowed: DataTypes.BOOLEAN,
                serie:{
                    type: DataTypes.STRING,
                    allowNull : true
                } ,
                tome_number: {
                    type: DataTypes.INTEGER,
                    allowNull : true
                } ,
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