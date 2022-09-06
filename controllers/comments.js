let commentData = require("../data/comments")

getComments = function(request, response){
    console.log("GET /comments")
    response.json(commentData)
}

getCommentsByID = function (request, response){
    console.log("GET /comments/:id")
    let myID = request.params.id
    let result= commentData.find(function(item, index){
        return item._id == myID
    })
    response.json(result)
}

postComments = function(request, response){
    console.log("POST /comments")
    let id = commentData.length + 1
    let body = request.body.body
    let postID = "1"

    let newComment = {}
    newComment._id = id
    newComment.body = body
    newComment.postID= postID
    
    commentData.push(newComment)
    response.json(newComment)
}

module.exports = {getComments, getCommentsByID, postComments}