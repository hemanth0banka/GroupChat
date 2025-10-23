const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const users = require('../model/users.js')
const postService = async (username,password)=>{
    try
    {
        let user = await users.findOne({
            where : {
                email : username
            }
        })
        if(!user)
        {
            user = await users.findOne({
                where : {
                    phoneno : Number(username)
                }
            })
        }
        if(!user)
        {
            throw 404
        }
        const r = await bcrypt.compare(password,user.password)
        const token = jwt.sign({userId : user.userId,username : user.username},process.env.secretkey)
        return token
    }
    catch(e)
    {
        throw e
    }
}
module.exports = {postService}