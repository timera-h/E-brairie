import { Model } from 'sequelize';

class Account extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                email: DataTypes.STRING,
                password: DataTypes.STRING,
                is_admin: DataTypes.BOOLEAN
                
            },
            {
                sequelize,
                modelName: 'Account',
                timestamps: false,
                freezeTableName: true
            }
        );
    }
    static associate(models) {
        // define association here

        return this;
    }
};

export default Account;