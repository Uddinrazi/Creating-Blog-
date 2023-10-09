const Sequelize = require('sequelize');
const sequelize = require('../util/database')

const Blogs = sequelize.define('blogs', {
    blog_title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    blog_author: {
        type: Sequelize.STRING,
        allowNull: false
},
    blog_content: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Comments = sequelize.define('comments', {
    comments: {
        type:Sequelize.STRING,
        allowNull: false
    }
})

module.exports = {Blogs, Comments}