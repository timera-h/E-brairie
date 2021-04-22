import { Model } from 'sequelize';

class Account extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                email: {
                    type: DataTypes.STRING,
                    // checks for email format (foo@foo.com)
                    validate: {
                        isEmail: true,
                    }
                },
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
        this.hasOne(models.Profile, { foreignKey: "id_profile" });
        // return this;
    };
};

export default Account;