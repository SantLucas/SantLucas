const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../Models/User');
const keys = require('../config/keys');

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

//PODE SER INJECAO DE INDEPENDECIA
opts.secretOrKey = keys.secretOrKey

module.exports = passport => {
 
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload)
            .then(usuario =>{
                if(usuario){
                    return done(null, usuario);
                }

                return done(null, false);
            })
            .catch(err => {
                throw err;
            })
    }))    

}