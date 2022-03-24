const User = require('./User');
const Post = require('./Post');

// create associations, single can make many diff posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Post};
