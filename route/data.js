const express = require('express')
const route = express.Router()
const control = require('../control/data.js')
route.get('/',control.getControl)
module.exports = route