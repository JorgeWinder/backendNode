  const store = require('./store')
  
  function addMessage(user, message){

    return new Promise( function(resolver, rechazar){

        if(user==''){
            console.error('No existe usurio')
            rechazar()
            return false
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }
    
        store.add(fullMessage)
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