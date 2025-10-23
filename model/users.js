const {DataTypes} = require('sequelize')
const sequelize = require('../util/db.js')
const users = sequelize.define('users',{
    userId : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    username :{
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    phoneno : {
        type : DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }
})
module.exports = users