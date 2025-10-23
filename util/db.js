const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('chat', 'root', '1234', {
    host: '127.0.0.1',
    dialect: 'mysql'
});
(async () => {
    try {
        sequelize.authenticate()
        console.log('DataBase Connected...')
    }
    catch (e) {
        console.log(e)
    }
})()
module.exports = sequelize