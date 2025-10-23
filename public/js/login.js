document.querySelector('form').addEventListener('submit',async (event)=>{
    event.preventDefault()
    try
    {
        let r = await axios.post('/login',{
            username : event.target.username.value,
            password : event.target.password.value
        })
        localStorage.setItem('token',r.data)
        console.log(r.data)
    }
    catch(e)
    {
        if(e.response.data == 404)
        {
            alert('no user found with the username')
        }
        console.log(e)
    }
})