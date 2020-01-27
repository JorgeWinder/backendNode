const store = require('./store')

function getChats(){
    return new Promise( function(resolver, rechazar){
        resolver(store.list())
    })
}


function addChat(users){
    return new Promise(function(resolver, rechazar){
        if(!users){
            rechazar('Dato invalido')
            return false
        }

        const newChat = {
            users: users 
        }
        store.add(newChat)
        resolver(newChat)
    })
}


module.exports = {
    getChats,
    addChat
}

