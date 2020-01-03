const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', function(req, res){
    
    controller.getMessage()
        .then((messageList)=>{
            response.success(req, res, messageList, 200)
        })
        .catch((e)=>{
            response.error(req, res, 'UnExpected error', 500, e)
        })

    /*
    console.log(req.headers)
    res.header({
        "custom-header": "Nuestro valor predeterminado"
    })
    response.success(req, res, 'Lista de mensajes')
    */
})

router.post('/', function(req, res){

    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=>{
        response.success(req, res, fullMessage, 201)
    })
    .catch(()=>{
        response.error(req, res, 'Información invalida', 400 ,'Error En el controlador')
    })

    /*
    Lista los datos de parametro por URL -> console.log(req.query)
    Lista los datos enviados en el Body -> console.log(req.body)
    */

    /*
    if(req.query.error == 'ok'){
        response.error(req, res, 'Error simulado', 500 ,'Error interno del servidor')
    }else{
        response.success(req, res, 'Creado correctamente', 201)
    }
    */
    
})

router.patch('/', function(req, res){

    

})

module.exports = router