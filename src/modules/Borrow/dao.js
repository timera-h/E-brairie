import {Model} from 'sequelize';

class Borrow extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                rent_date: DataTypes.DATE,
                due_date: DataTypes.DATE,
                is_back_to_library: DataTypes.BOOLEAN,
                is_damaged: DataTypes.BOOLEAN,
                is_past_due: DataTypes.BOOLEAN            
            },
            
             {sequelize, modelName: 'Borrow',              
             freezeTableName: true,              
             timestamps: false}
                      
        );
    }
    static associate(models) {
        this.belongsTo(models.profileDao, {foreignKey: 'id_profile', as: 'Profile'});
        this.belongsTo(models.ressourceDao, {foreignKey: 'id_ressource', as: 'Ressource'});
        return this;
    }
    
};

export default Borrow;