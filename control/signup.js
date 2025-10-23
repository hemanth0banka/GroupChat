const service = require('../service/signup')
const postControl = async (req,res)=>{
    try
    {
        const {username,email,password,phoneno} = req.body
        const r = await service.postService(username,email,phoneno,password)
        res.status(200).send(r)
    }
    catch(e)
    {
        res.status(500).send(e)
    }
}
module.exports = {postControl}