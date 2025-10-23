const serice = require('../service/login.js')
const postControl = async (req,res)=>{
    try
    {
        const {username,password} = req.body
        let r = await serice.postService(username,password)
        res.status(200).send(r)
    }
    catch(e)
    {
        res.status(500).send(e)
    }
}
module.exports = {postControl}