import { DATEONLY, Model } from 'sequelize';


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
        this.belongsTo(models.accountDao, { foreignKey: 'id_account', as: 'Account' });
        this.hasMany(models.borrowDao, { foreignKey: 'id_profile', as: 'Borrow' });
        return this;
    };
};

export default Profile;


