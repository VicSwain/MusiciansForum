const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../config/connection');


class Comment extends Model {};

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        performer_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'performer',
                key: 'id'
            }
        },
        venue_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'venue',
                key: 'id'
            }
        },
        created_on: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        timestamps: false,
        sequelize: sequelize,
        freezeTableName: true,
        modelName: 'comment',
        tableName: 'comment'
    }
);



    module.exports = Comment;