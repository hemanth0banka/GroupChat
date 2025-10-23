const bcrypt = require('bcrypt')
const users = require('../model/users.js')
const postService = async (username,email,phoneno,pass)=>{
    try
    {
        const password = await bcrypt.hash(pass,10)
        let user = await users.create({
            username,email,phoneno,password
        })
        return 'user Created'
    }
    catch(e)
    {
        throw e
    }
}
module.exports = {postService}