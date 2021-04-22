import { Model } from 'sequelize';


class Profile extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                first_name: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                last_name: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                user_name: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                address: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                city: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                zipcode: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                is_warned: DataTypes.BOOLEAN

            },

            {
                sequelize, modelName: 'Profile',
                freezeTableName: true,
                timestamps: false
            }

        );
    }
    static associate(models) {
        this.belongsTo(models.Account, { foreignKey: 'id_account', as: 'Account' });
        this.hasMany(models.Borrow, { foreignKey: 'id_account', as: 'Borrow' });
    };
};

export default Profile;