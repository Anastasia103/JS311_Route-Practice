let productData = require("../data/products");

let getProducts = function(request, response){
    console.log("GET /products")
    response.json(productData)
}

let getProductsById = function (request, response){
    console.log("GET /comments/:id")
    let myID = request.params.id
    let result= productData.find(function(item, index){
        return item._id == myID
    })
    response.json(result)
}

let postProducts = function(request, response){
    console.log("POST /products")
    let id = productData.length + 1
    let name = request.body.name
    let description = request.body.description
    let rating = request.body.rating
    let imgUrl = "exampleProduct.jpg"
    let price = request.body.price
    let category = request.body.category
    let reviews = []

    let newProduct = {}
    newProduct._id = id
    newProduct.name = name
    newProduct.description = description
    newProduct.rating = rating
    newProduct.imgUrl = imgUrl
    newProduct.price = price
    newProduct.category = category
    newProduct.reviews = reviews
    
    commentData.push(newProduct)
    response.json(newProduct)
}

module.exports = {getProducts, getProductsById, postProducts}