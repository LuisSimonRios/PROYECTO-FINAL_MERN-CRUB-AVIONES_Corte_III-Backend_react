const bcrypt = require("bcrypt-nodejs")
const Service = require('../services/user.service')
const user_model = require('../models/user.model')
const user_service = new Service()

exports.createUser = (req,res, next) =>{
  new_user = user_model(req.body)
  user_service.createUser(new_user).then((data)=>{
    res.status(201).json(data)
  }).catch((err)=>{
    next(err)
  })
}

exports.signUp = (req, res) => {
  const user = new user_model();
  const { email, password, repeatedPassword } = req.body
  user.email = email
  user.role = 'admin'
  user.active = true
  if (!password || !repeatedPassword){
    res.status(404).send({ message: 'Las contraseñas son obligatorias' })
  } else {
    if (password !== repeatedPassword){
      res.status(404).send({ message: 'Las contraseñas no coinciden' })
    } else {
      bcrypt.hash(password, null, null, (err, hash) => {
        if (err) {
          res.status(500).send({ message: "Error al encriptar la contraseña" })
        } else {
          user.password = hash
          user.save((err, userStored) => {
            if (err) {
              res.status(500).send({ message: 'El usuario ya existe' })
            } else {
              if (!userStored) {
                res.status(404).send({ message: 'Error al crear el usuario'})
              } else {
                res.status(200).send({ user: userStored })
              }
            }
          })
        }
      })
    }
  }
}

exports.login = (req, res, next) => {
  const { email, password } = req.body
   user_model.findOne({email: email}).then((data) => {
    if (data) {
      bcrypt.compare(password, data.password, (err, isMatch) => {
        if (isMatch){ res.status(200).json({message: "Success", data: data})  }
        else { res.status(400).json({message: "Error: Contraseña incorrecta", data: err}) }
      })
    } else {
      res.status(404).json({message: "Error: El correo no existe", data: data})
    }
  }).catch((err)=> { next(err) })
}