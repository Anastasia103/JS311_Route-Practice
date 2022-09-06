const express = require('express')
const router = express.Router()

let productControllers = require("../controllers/products");

router.get("/products", productControllers.getProducts)

router.get("/products/:id", productControllers.getProductsById)

router.post("/products", productControllers.postProducts)

module.exports = router