const express = require('express')
const route = express.Router()
const control = require('../control/login.js')
route.post('/',control.postControl)
module.exports = route