const sequelize = require('../config/connection');
const { User, Venue, Performer, Comment } = require('../models');

const userData = require('./userData.json');
const venueData = require('./venueData.json');
const performerData = require('./performerData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true, 
        returning: true, 
    }); 

    process.exit(0);
};


seedDatabase();