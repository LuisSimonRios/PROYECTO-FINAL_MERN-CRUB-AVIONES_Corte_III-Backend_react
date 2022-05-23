const express = require('express')
const bodyparser = require('body-parser')
const APP = express()
const cors = require('cors')

APP.use(bodyparser.urlencoded({extended: false}))
APP.use(bodyparser.json())
APP.use(cors())

module.exports = APP
