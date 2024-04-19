const User = require('./User');
const Comment = require('./Comment');
const Performer = require('./Performer');
const Venue = require('./Venue'); 


User.hasMany(Performer, {
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
});

User.hasMany(Venue, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Performer.hasMany(Comment, {
    foreignKey: 'performer_id',
    onDelete: 'CASCADE'
});

Venue.hasMany(Comment, {
    foreignKey: 'venue_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Performer, {
    foreignKey: 'performer_id'
});

Comment.belongsTo(Venue, {
    foreignKey: 'venue_id'
});

Performer.belongsTo(User, {
    foreignKey: 'user_id'
});

Venue.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Comment, Performer, Venue };