const { Model, DataTypes } = require ('sequelize');
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection');


class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type:  DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true, 
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        email: {
            type: DataTypes.STRING, 
            allowNull: false, 
            unique: true, 
            validate: {
                isEmail: true, 
            },
        },
        password: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [10],
            },
        },
    
    },
    {
        // hooks are to be done before the information is updated prior to being saved to the db 
        hooks: {
            // beforeCreate is specific to sequelize newUserData is a variable defined within the arrow function 
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData; 
            },
        },
        sequelize, 
        freezeTableName: true, 
        modelName: 'user',
    }
);

module.exports = User; 
