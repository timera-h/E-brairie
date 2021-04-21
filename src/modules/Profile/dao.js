import {Model} from 'sequelize';

//have to find a way to separate datatypes init and table config for inheritance of 
//class attributes such as first and last name otherwise the class diagram would be fucking useless
//have to test one to one relation atm
class Profile extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {                                
                first_name: DataTypes.STRING, 
                last_name: DataTypes.STRING,
                user_name: DataTypes.STRING,
                address: DataTypes.STRING,
                city: DataTypes.STRING,
                zipcode: DataTypes.STRING,
                is_warned: DataTypes.BOOLEAN
                             
            },
            
             {sequelize, modelName: 'Profile',
             //to avoid the rename of the table by the orm that uses plural eg 'author' would swap to 'authors'
             freezeTableName: true, 
             //to disable 'updated' and 'created' timestamp fields generation
             timestamps: false}
                      
        );
    }
    // static associate(models) {
    //     return this;
    // }
    
};

export default Author;