const mongoose = require('mongoose')

const AvionSchema = mongoose.Schema({
  modelo: { type: String, require: true, min: 3 },
  matricula: { type: String, require: true, min: 3},
  pais: { type: String },
  num_asientos: { type: Number, require: true },
  año: { type: Number, require: true },
})

module.exports = mongoose.model('aviones', AvionSchema)