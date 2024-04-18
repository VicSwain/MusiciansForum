const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection'); 

class Venue extends Model {}; 

Venue.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        venue_name: {
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
            defaultValue: DataTypes.NOW,
        },
        venue_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        performance_allowed: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        timestamps: false,
        sequelize: sequelize,
        freezeTableName: true,
        modelName: 'venue',
        tableName: 'venue',
    }
);

module.exports = Venue; 