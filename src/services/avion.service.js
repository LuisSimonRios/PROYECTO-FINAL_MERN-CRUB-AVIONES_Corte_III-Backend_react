const avion_model = require('../models/avion.model')

class AvionService {

  createAvion(new_avion){
    return new_avion.save()
  }

  updateAvion(avion_id, new_avion){
    return avion_model.findByIdAndUpdate(avion_id, new_avion, {new: true})
  }

  listAvions(){
    return avion_model.find()
  }

  showAvion(avion_id){
    return avion_model.findById(avion_id)
  }

  deleteAvion(avion_id){
    return avion_model.findByIdAndDelete(avion_id)
  }
}

module.exports = AvionService
