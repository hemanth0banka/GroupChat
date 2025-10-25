const  users  = require('../model/users.js')
const messages = require('../model/messages.js')
const jwt = require('jsonwebtoken')

const auth = async (socket,next)=>{
    try {
    const token = socket.handshake.auth.token
    if (!token) return next(new Error('Authorization token is missing'))

    const decoded = jwt.verify(token, process.env.secretkey)
    if (!decoded) return next(new Error('Invalid or expired token'))

    const user = await users.findByPk(decoded.userId)
    if (!user) return next(new Error('User not found'))

    socket.user = user
    next()
  } catch (e) { 
    console.error('Socket auth error:', e)
    next(new Error('Authentication error'))
  }
}

const add = async (m,id)=>{
    try
    {
        await messages.create({
            message : m,
            userUserId : id
        })
    }
    catch(e)
    {
        console.log(e)
        throw e
    }
}

module.exports = {auth,add}