
const express = require('express')
const app = express()
const server = require('http').Server(app)

const bodyParser = require('body-parser')
const socket = require('./socket')
const cors = require('cors')
const db = require('./db')

// Para el uso de variables de entorno en el proyecto
require('dotenv').config()

//const router = require('./components/message/network')
const router = require('./network/routers')

db.connect(process.env.DB_URI)

app.use(cors({
    origin: 'http://localhost:3000',
    //optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
//app.use(router)

socket.connect(server)
router(app)

app.use('/app', express.static('public'))

server.listen(3000, function(){
    console.log('Servidor NodeJS en escucha en http://localhost:3000')
})
