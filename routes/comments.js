var express = require('express');
var router = express.Router();


module.exports = (function() {
  return {
    getComments(req, res)  {
      res.status(200).send(req.blogData[req.params.postId].comments)
    },
    addComment(req, res)  {
      let newComment = req.body      
      let postId = req.params.postId;
      let id = req.blogData[postId].comments.length-1
      req.blogData[postId].comments.push(newComment)
      res.status(201).send({
        commentId: id
      })
    },
    updateComment(req, res)  {
      let newComment = req.body
      let commentId = req.params.commentId;
      let postId = req.params.postId;
      req.blogData[postId].comments[commentId] = newComment;
      res.status(200).send(req.blogData[postId].comments[commentId])
    },
    removeComment(req, res) {
      let commentId = req.params.commentId;
      let postId = req.params.postId;
      req.blogData[postId].comments.splice(commentId, 1)
      res.status(204).send()
    }
  }
})();
