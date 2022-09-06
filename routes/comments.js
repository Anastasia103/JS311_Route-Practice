const express = require('express')
const router = express.Router()

let commentController = require("../controllers/comments")

router.get("/comments", commentController.getComments)

router.get("/comments/:id", commentController.getCommentsByID)

router.post("/comments", commentController.postComments)

module.exports = router