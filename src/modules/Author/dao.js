import {Model} from 'sequelize';

class Author extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                first_name: DataTypes.STRING,                
                last_name: DataTypes.STRING,
                description: DataTypes.STRING,                
            },
            
             {sequelize, modelName: 'Author',
             //to avoid the rename of the table by the orm that uses plural eg 'author' would swap to 'authors'
             freezeTableName: true, 
             //to disable 'updated' and 'created' timestamp fields generation
             timestamps: false}
                      
        );
    }
    static associate(models) {
        console.log(this, models);
        this.hasMany(models.ressourceDao, { foreignKey: 'id_author', as: 'Ressource' });
        return this;
    }
    
};

export default Author;