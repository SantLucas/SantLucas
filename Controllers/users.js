const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');


module.exports.registrar = (req, res) => {
       try {
            
            User.findOne({ email: req.body.email })
                .then(usuario => {
                    if(usuario){
                        return res.status(400).json('Ja existe este email no banco de dados');
                    }else{
                        const newUser = new User({
                            nome: req.body.nome,
                            email: req.body.email,
                            senha: req.body.senha,
                            isAdmin: req.body.isAdmin
                        });

                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(newUser.senha, salt, (err, hash) => {
                                if(err){
                                    throw err;
                                }
                                
                                newUser.senha = hash;
                                newUser.save()
                                    .then(user => res.json(user))
                                    .catch(err => console.log(err))

                            })

                        })    
                    }
            })
       } catch (error) {
           throw error
       }
}

module.exports.login = (req, res) => {
    try {
        const email = req.body.email;
        const senha = req.body.senha;

        User.findOne({ email })
            .then(user => {
                if(!user){
                    errors.email = `Usuario nao encontrado`
                    return res.status(404).json(errors);
                }

                bcrypt.compare(senha, user.senha)
                    .then(isMatch => {
                        if(!isMatch){
                            errors.senha = 'Senha Incorreta';
                            return res.status(400).json(errors)
                        } else{
                            const payload = { id: user.id, name: user.name}

                            jwt.sign(
                                payload,
                                keys.secretOrKey,
                                { expiresIn: 36000},
                                (err, token) => {
                                    res.json({
                                        success: true,
                                        token: `Bearer ${token}`
                                    })
                                }
                            )
                        }
                    })
            })
        
    } catch (error) {
        throw error;     
    }

    
}

module.exports.helloWorld = (req, res) => res.json({msg:'hello world'})