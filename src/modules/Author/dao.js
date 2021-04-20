import {Model} from 'sequelize';


class Author extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                firstName: DataTypes.String, 
                lastName: DataTypes.String,
                description: DataTypes.String
            },
             {sequelize, modelName: 'Author'}
        );
    }
    // static associate(models) {
    //     return this;
    // }
    
};



export default Author;