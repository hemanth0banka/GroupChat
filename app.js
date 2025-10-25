const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const dotenv = require('dotenv').config()
const path = require('path')
const sequelize = require('./util/db.js')
const cors = require('cors')
const login = require('./route/login.js')
const signup = require('./route/signup.js')
const send = require('./route/send.js')
const data = require('./route/data.js')
const IO = require('./socket/index.js')

const port = process.env.PORT
require('./model/model.js')
console.log('server is running...')
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'pages', 'login.html'))
})
app.get('/home',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'public','pages','home.html'))
})
app.use('/login',login)
app.use('/signup',signup)
app.use('/send',send)
app.use('/data',data)
app.use((req,res)=>{
    res.status(404).send('Page Not Found ...')
})
IO(server)

sequelize.sync({alter : true}).then(()=>{
    server.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})}).catch(e=>console.log(e))
