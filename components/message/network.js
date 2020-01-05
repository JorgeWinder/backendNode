const express = require('express')
const multer =  require('multer')
const path = require('path')

const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

// Ruta donde se guardan los archivos con su extens //

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/files/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })

const upload = multer({
    storage: storage
});

// const upload = multer({
//     dest: 'public/files/'
// })




router.get('/', function(req, res){

    const filterUser = req.query.user || null
    
    controller.getMessage(filterUser)
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

router.post('/', upload.single('file'), function(req, res){

    console.log(req.file)

    controller.addMessage(req.body.user, req.body.message, req.file)
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

router.patch('/:id', function(req, res){

    controller.updateMensaje(req.params.id, req.body.texto)
    .then((data)=>{
        response.success(req, res, data, 200)
    })
    .catch((data)=>{
        response.error(req, res, data, 500)
    })

})

module.exports = router