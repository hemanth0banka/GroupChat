document.querySelector('form').addEventListener('submit',async (event)=>{
    event.preventDefault()
    try
    {
        const r = await axios.post('/send',{
            message : event.target.message.value
        },{
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(r)
    }
    catch(e)
    {
        console.log(e)
    }
})