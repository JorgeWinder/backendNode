  const store = require('./store')
  const socket = require('../../socket').socket
  
  function addMessage(user, message, file){

    return new Promise( function(resolver, rechazar){

        if(user==''){
            console.error('No existe usurio')
            rechazar()
            return false
        }

        let fileUrl = ''

        if(file){
          fileUrl = 'http://localhost:3000/app/files/' + file.filename
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl
        }
    
        store.add(fullMessage)
        socket.io.emit('message', fullMessage) 
        resolver(fullMessage)

    } )
    
    
  }

  function getMessage(filter){
      return new Promise((resolver, rechazar)=>{
          resolver(store.List(filter))
      })
  }

  function updateMensaje(id, mensaje){

    return new Promise((resolver, rechazar)=>{

      if(!id || !mensaje){
        rechazar('Datos invalidos')
        return false
      }

      return resolver(store.update(id, mensaje))

    })

  }

  module.exports = {
    addMessage,
    getMessage,
    updateMensaje
  }