var express = require('express');
var router = express.Router();

module.exports = (function() {
  return {
    getPosts(req, res) {
      res.status(200).send(req.blogData)
    },
    addPost(req, res) {
      let newPost = req.body
      let id = req.blogData.length-1
      req.blogData.push(newPost)
      res.status(201).send({
        postId: id
      })
    },
    updatePost(req, res) {
      req.blogData[req.params.postId] = req.body
      res.status(200).send(req.blogData[req.params.postId])
    },
    removePost(req, res) {      
      req.blogData.splice(req.params.postId, 1)
      res.status(204).send()
    }
  }
})();
