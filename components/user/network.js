const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', function(req, res){

    const filterMessage = req.query.user || null
    
    controller.getMessage(filterMessage)
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


module.exports = router