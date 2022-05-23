const Service = require('../services/avion.service')
const avion_model = require('../models/avion.model')
const avion_service = new Service()

exports.createAvion = (req, res, next) => {
    new_avion = avion_model(req.body)
    avion_service.createAvion(new_avion).then((data)=>{
        res.status(201).json({message: "Success", data: data})
    }).catch((err)=>{
        next(err)
    })  
}

exports.listAvion = (req, res, next) => {
  avion_service.listAvions().then((data)=>{
    res.status(201).json({message: "Success", data: data})
  }).catch((err)=>{
    next(err)
  })
}
exports.showAvion = (req, res, next) => {
  avion_service.showAvion(req.params.id).then((data)=>{
    res.status(201).json({message: "Success", data: data})
  }).catch((err)=>{
    next(err)
  })
}
exports.updateAvion = (req, res, next) => {
  avion_service.updateAvion(req.params.id, req.body).then((data)=>{
    res.status(201).json({message: "Success", data: data})
  }).catch((err)=>{
    next(err)
  })
}
exports.deleteAvion = (req, res, next) => {
  avion_service.deleteAvion(req.params.id).then((data)=>{
    res.status(201).json({message: "Success", data: data})
  }).catch((err)=>{
    next(err)
  })
}