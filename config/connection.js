const Sequelize  = require('sequelize');
require('dotenv').config();

const sequelize = process.env.DB_HOST
? new Sequelize(process.env.DB_HOST)
: new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        // sequelize options
        host: 'localhost',
        dialect: 'postgres',  
    }
    
);
// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

module.exports = sequelize; 