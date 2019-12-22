
const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')
const router = express.Router()

var app = express()

// app.use('/', function(req, res){
//     res.send('Hola mundo')
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

router.get('/mensaje', function(req, res){
    console.log(req.headers)
    res.header({
        "custom-header": "Nuestro valor predeterminado"
    })
    //res.send('Llamado a get')
    response.success(req, res)

})

router.post('/mensaje', function(req, res){
    console.log(req.query)
    console.log(req.body)
    //res.send('LLamado post ' + req.body.Nombre + ' con DNI: ' + req.query.dni)
    //res.status(201).send({error: "", body: "Creado correctamente"})   

    if(req.query.error == 'ok'){
        response.error(req, res, 'Error simulado', 500 ,'Error interno del servidor')
    }else{
        response.success(req, res, 'Creado correctamente', 201)
    }
    
})

app.use('/app',express.static('public'))

app.listen(3000)
console.log('Servidor NodeJS en escucha en http://localhost:3000')