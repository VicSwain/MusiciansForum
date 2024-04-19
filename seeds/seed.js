const sequelize = require('../config/connection');
const { User, Venue, Performer, Comment } = require('../models');

const userData = require('./userData.json');
const venueData = require('./venueData.json');
const performerData = require('./performerData.json');
const commentData = require('./commentData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true, 
        returning: true, 
    }); 

    const venues = await Venue.bulkCreate(venueData, {
        individualHooks: true,
        returning: true,
    });

    const performers = await Performer.bulkCreate(performerData, {
        individualHooks: true, 
        returning: true, 
    });

    const comments = await Comment.bulkCreate(commentData, {
        individualHooks: true, 
        returning: true, 
    });

    process.exit(0);
};


seedDatabase();