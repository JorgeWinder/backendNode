const express = require('express')
const message = require('../components/message/network')
const user = require('../components/user/network')

const routers = function(server){
    // Cada vez que nuestro server(APP) llame a '/message' llamará a nuestro componente de message
    server.use('/message', message)
    server.use('/user', user)
}

module.exports = routers
