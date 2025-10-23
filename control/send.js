const service = require('../service/send.js')
const postControl = async (req,res)=>{
    try
    {
        let token = req.headers.authorization?.split(' ')[1]
        let {message} = req.body
        const r = await service.postService(token,message)
        res.status(200).send(r)
    }
    catch(e)
    {
        res.status(500).send(e)
    }
}
module.exports = {postControl}