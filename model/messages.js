const {DataTypes} = require('sequelize')
const sequelize = require('../util/db.js')
const messages = sequelize.define('messages',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    message : {
        type : DataTypes.STRING,
        allowNull : false
    }
})
module.exports = messages