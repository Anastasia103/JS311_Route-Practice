let contactData = require("../data/contacts")

let getContacts = function (request, response){
    console.log("GET /contacts")
    response.json(contactData)
}
let getContactsById = function (request, response){
    console.log("GET /contact/:id")
    let myID = request.params.id
    let result= contactData.find(function(item, index){
        return item._id == myID
    })
    response.json(result)
}

let postContacts = function(request, response){
    console.log("POST /contacts")
    let id = contactData.length + 1
    let name = request.body.name
    let occupation = request.body.occupation
    let avatar = "examples.jpg"

    let newContact = {}
    newContact._id = id
    newContact.name = name
    newContact.occupation = occupation
    newContact.avatar = avatar
    
    contactData.push(newContact)
    response.json(newContact)
}

module.exports = {getContacts, getContactsById, postContacts}