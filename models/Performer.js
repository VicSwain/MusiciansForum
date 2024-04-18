const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Performer extends Model {};

Performer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true // Added primaryKey definition
        },
        performer_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        created_on: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        performer_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        sub_genre: {
            type: DataTypes.STRING,
            allowNull: true,
        }
        // Would like to add song/visual artist column here
        // add upcoming events 
    },
    {
        // Options object starts here
        timestamps: false,
        sequelize: sequelize,
        freezeTableName: true,
        modelName: 'performer',
        tableName: 'performer',
    }
);


module.exports = Performer; 