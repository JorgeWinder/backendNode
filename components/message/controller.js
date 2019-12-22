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

  function getMessage(){
      return new Promise((resolver, rechazar)=>{
          resolver(store.List())
      })
  }

  module.exports = {
    addMessage,
    getMessage,
  }