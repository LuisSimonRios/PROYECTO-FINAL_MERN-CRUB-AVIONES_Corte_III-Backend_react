const express = require('express')
const AvionController = require('../controllers/avion.controller')
const avion_router = express.Router()

/*http://localhost:3977/api/v1/aviones/avion */
avion_router.post('/avion', AvionController.createAvion)

/*http://localhost:3977/api/v1/aviones/avion */
avion_router.get('/avion', AvionController.listAvion)

/*http://localhost:3977/api/v1/aviones/avion */
avion_router.get('/avion/:id', AvionController.showAvion)

/*http://localhost:3977/api/v1/aviones/avion */
avion_router.put('/avion/:id', AvionController.updateAvion)

/*http://localhost:3977/api/v1/aviones/avion */
avion_router.delete('/avion/:id', AvionController.deleteAvion)

module.exports = avion_router