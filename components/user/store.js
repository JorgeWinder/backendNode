const list = []

const db = require('mongoose')
const model = require('./model')

// mongodb+srv://user-mbd:<password>@cluster0-qmwio.gcp.mongodb.net/test

db.Promise = global.Promise
db.connect('mongodb+srv://user-mbd:92kTFt6OQqlKe1Gu@cluster0-qmwio.gcp.mongodb.net/telegrom', {
    useNewUrlParser: true, useUnifiedTopology: true
})
console.log('[DB] Conectada con éxito')

// Agregar datos //
function addUser(user){
    const objUser = new model(user)
    objUser.save()     
}

// Listar datos //
async function getUser(filteruser){

    return new Promise( async(resolver, rechazar)=>{
        //return list
            let filter = {}
            console.log(filteruser)

            if(filteruser !== null){
                // filter = {message: 'mensaje para ref user v2'}
                filter = { user: filteruser}
            }

            resolver(model.find())

    })
    
}


async function updateUser(id, name){
    const find_user = await model.findOne({_id: id})
    find_user.name = name
    return find_user.save()
}

async function deleteUser(id){
    return await model.deleteOne({_id: id})
}

module.exports = {
    add: addUser,
    List: getUser,
    update: updateUser,
    delete: deleteUser
}
