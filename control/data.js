const service = require('../service/data.js')
const getControl = async (req,res)=>{
    try
    {
        const token = req.headers.authorization?.split(' ')[1]
        const r = await service.getService(token)
        res.status(200).send(r)
    }
    catch(e)
    {
        res.status(500).send(e)
    }
}
module.exports = {getControl}