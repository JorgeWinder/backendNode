const express = require('express')
const response = require('../../network/response')
const router = express.Router()

router.get('/', function(req, res){
    console.log(req.headers)
    res.header({
        "custom-header": "Nuestro valor predeterminado"
    })

    response.success(req, res, 'Lista de mensajes')

})

router.post('/', function(req, res){
    console.log(req.query)
    console.log(req.body)

    if(req.query.error == 'ok'){
        response.error(req, res, 'Error simulado', 500 ,'Error interno del servidor')
    }else{
        response.success(req, res, 'Creado correctamente', 201)
    }
    
})

module.exports = router