const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const passport = require('passport')

// Basic strategy
require('../../utils/auth/strategies/jwt')

const router = express.Router()


router.get('/', function(req, res){
    controller.getChats()
    .then((data)=>{
        response.success(req, res, data, 200)
    })
    .catch((e)=>{
        response.error(req, res, 'Error interno', 500, e)
    })
})

router.post('/', function(req, res){
    
    // console.log(req.body.users)

    controller.addChat(req.body.users)
    .then((data)=>{
        console.log(data)
        response.success(req, res, data, 200)
    })
    .catch((e)=>{
        response.error(req, res, 'Error interno', 500, e)
    })
})

module.exports = router
