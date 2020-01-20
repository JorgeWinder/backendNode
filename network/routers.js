const express = require('express')
const message = require('../components/message/network')
const user = require('../components/user/network')
const auth = require('../components/auth/network')

const routers = function(server){
    // Cada vez que nuestro server(APP) llame a '/message' llamará a nuestro componente de message
    server.use('/message', message)
    server.use('/user', user)
    server.use('/auth/token', auth)
}

module.exports = routers
