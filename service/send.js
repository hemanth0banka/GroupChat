const jwt = require('jsonwebtoken')
const messages = require('../model/messages.js')
const postService = async (t,m)=>{
    try
    {
        const token = jwt.verify(t,process.env.secretkey)
        const r = await messages.create({
            message : m,
            userUserId : token.userId 
        })
        return r
    }
    catch(e)
    {
        throw e
    }
}
module.exports = {postService}