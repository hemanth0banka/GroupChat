const users = require('./users.js')
const messages = require('./messages.js')

users.hasMany(messages)
messages.belongsTo(users)

module.exports = {users,messages}