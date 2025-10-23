document.querySelector('form').addEventListener('submit',async (event)=>{
    event.preventDefault()
    try
    {
        if(event.target.password.value != event.target.confirmpassword.value)
        {
            alert('passwords Mistach , please make sure both passwords same')
            return 0
        }
        let r = await axios.post('/signup',{
            username : event.target.username.value,
            email : event.target.email.value,
            phoneno : event.target.mobile.value,
            password : event.target.password.value
        })
        alert('User Created')
        window.location.href = `http://localhost:1000/`
    }
    catch(e)
    {
        console.log(e)
    }
})