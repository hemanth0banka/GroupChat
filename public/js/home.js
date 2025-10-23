let userId ;
let arr = [];
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
async function load()
{
    try
    {
        let r = await axios.get('/data',{
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(r.data[0])
        if(arr.length == r.data[0].length)
        {
            return 0
        }
        if(arr.length ++ == r.data[0].length)
        {
            ele(r.data[0][r.data[0].length -1])
            arr.push(r.data[0].length)
        }
        else
        {
            document.querySelector('#data').innerHTML = ''
            arr = r.data[0]
            add(r.data[0])
            return 0
        }
        add(r.data[0])
    }
    catch(e)
    {
        console.log(e)
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
        arr = r.data[0]
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
        const r = await axios.post('/send',{
            message : event.target.message.value
        },{
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        event.target.reset()
        arr.push(r)
        ele(r.data)
    }
    catch(e)
    {
        console.log(e)
    }
})
setInterval(()=>{load()},3000)