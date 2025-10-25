const auth = require('./middleware.js')
module.exports = (io)=>{
    io.on('connection',(socket)=>{
        console.log(`User connected: ${socket.user.username}`)
        socket.on('chat-messages',async (msg)=>{
            try
            {
                await auth.add(msg,socket.user.userId)
                io.emit('chat-messages', {
                    message : msg,
                    user: socket.user,
                    userUserId : socket.user.userId
                })
            }
            catch(e)
            {
                io.emit(e)
            }
        })
    })
}
