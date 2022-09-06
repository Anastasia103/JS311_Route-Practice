let vehicleData = require("../data/vehicles")

let getVehicles = function (request, response){
    console.log("GET /vehicles")
    response.json(vehicleData)
}

let getVehiclesById = function (request, response){
    console.log("GET /vehicles/:id")
    let myID = request.params.id
    let result= vehicleData.find(function(item, index){
        return item._id == myID
    })
    response.json(result)
}

let postVehicles = function(request, response){
    console.log("POST /vehicles")
    let id = contactData.length + 1
    let imgUrl = "examplecar.jpg"
    let year = request.body.year
    let make = requst.body.make
    let model = request.body.model
    let price = request.body.pric
    let km = request.body.km
    let miles = request.body.miles
    let fuel = request.body.fuel
    let city = request.body.city
    let isNew = false

    let newVehicle = {}
    newVehicle._id = id
    newVehicle.imgUrl = imgUrl
    newVehicle.year = year
    newVehicle.make = make
    newVehicle.model = model
    newVehicle.price = price
    newVehicle.km = km
    newVehicle.miles = miles
    newVehicle.fuel = fuel
    newVehicle.city = city
    newVehicle.isNew = isNew
    
    vehicleData.push(newVehicle)
    response.json(newVehicle)
}

module.exports = {getVehicles, getVehiclesById, postVehicles}