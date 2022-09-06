const express = require('express')
const router = express.Router()

let contactController = require("../controllers/contacts")

router.get("/contacts", contactController.getContacts)

router.get("/contacts/:id", contactController.getContactsById)

router.post("/contacts", contactController.postContacts)

module.exports = router