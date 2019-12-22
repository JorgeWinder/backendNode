const express = require('express')
const message = require('../components/message/network')

const routers = function(server){
    // Cada vez que nuestro server(APP) llame a '/message' llamará a nuestro componente de message
    server.use('/message', message)
}

module.exports = routers
