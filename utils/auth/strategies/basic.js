const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const bcrypt = require('bcryptjs')

passport.use(
    new BasicStrategy( function(username, password, done){
        if(username!= 'admin' && password!='1234'){
            done('{error: "Datos invalidos"}', false)
        }

        return done(null, 'Usuario con acceso')
    })
)