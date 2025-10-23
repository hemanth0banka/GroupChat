const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const path = require('path')
const sequelize = require('./util/db.js')
const cors = require('cors')
const login = require('./route/login.js')
const signup = require('./route/signup.js')
const port = process.env.PORT
console.log('server is running...')
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'pages', 'login.html'))
})
app.use('/login',login)
app.use('/signup',signup)
app.use((req,res)=>{
    res.status(404).send('Page Not Found ...')
})
sequelize.sync({alter : true}).then(()=>{
    app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})}).catch(e=>console.log(e))
