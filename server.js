
const express = require('express')
const bodyParser = require('body-parser')

//const router = require('./components/message/network')
const router = require('./network/routers')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
//app.use(router)
router(app)

app.use('/app', express.static('public'))

app.listen(3000)
console.log('Servidor NodeJS en escucha en http://localhost:3000')