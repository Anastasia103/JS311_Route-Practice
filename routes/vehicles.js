const express = require('express')
const router = express.Router()

let vehicleControllers = require("../controllers/vehicles")

router.get("/vehicles", vehicleControllers.getVehicles)

router.get("/vehicles/:id", vehicleControllers.getVehiclesById)

router.post("/vehicles", vehicleControllers.postVehicles)

module.exports = router