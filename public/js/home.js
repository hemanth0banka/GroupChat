let userId ;

function ele(x)
{
    const p = document.createElement('p')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    p2.innerHTML = x.message
    p.appendChild(p1)
    p.appendChild(p2)
    if(x.userUserId == userId)
    { 
        p.id = 'my'
    }
    else
    {
        p.id = 'group'
        p1.innerHTML = x.user.username
    }
    document.querySelector('#data').appendChild(p)
    const container = document.querySelector('#data');
    container.scrollTop = container.scrollHeight;
}

function add(a)
{
    for(let x of a)
    {
        ele(x)
    }
}

window.addEventListener('load',async (event)=>{
    try
    {
        let r = await axios.get('/data',{
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        userId = r.data[1]
        add(r.data[0])
    }
    catch(e)
    {
        console.log(e)
    }
})

document.querySelector('form').addEventListener('submit',async (event)=>{
    event.preventDefault()
    try
    {
        send(event.target.message.value)
        event.target.reset()
    }
    catch(e)
    {
        console.log(e)
    }
})

const socket = io('http://localhost:1000',{
    auth : {
        token : localStorage.getItem('token')
    }
})

const send = (msg)=>{
    socket.emit('chat-messages',msg)
}

socket.on('chat-messages',(msg)=>{
    console.log(msg)
    ele(msg)
})