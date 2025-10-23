const jwt = require('jsonwebtoken')
const messages = require('../model/messages.js')
const users = require('../model/users.js')
const getService = async (t) => {
    try {
        const token = jwt.verify(t, process.env.secretkey)
        const r = await messages.findAll({
            include: {
                model: users,
                attributes: ['username']
            }
        })
        return [r, token.userId]
    }
    catch (e) {
        throw e
    }
}
module.exports = { getService }