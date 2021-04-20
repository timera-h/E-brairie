import {Model} from 'sequelize';


class Author extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                firstName: DataTypes.STRING, 
                lastName: DataTypes.STRING,
                description: DataTypes.STRING
            },
             {sequelize, modelName: 'Author'}
        );
    }
    // static associate(models) {
    //     return this;
    // }
    
};



export default Author;