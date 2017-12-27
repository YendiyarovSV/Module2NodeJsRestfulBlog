var express = require('express');
var router = express.Router();
var validate = require('express-validation');
var validation = require('../validation');

var posts = require('./post.js');
var comments = require('./comments.js');

//comments routes
router.get('/posts/:postId/comments',
  validate(validation.postIdValidation),
  validation.checkExistance.checkIfPostExists,
  comments.getComments)

router.post('/posts/:postId/comments',
  validate(validation.postIdValidation),
  validate(validation.commentValidation),
  validation.checkExistance.checkIfPostExists,
  comments.addComment)

router.put('/posts/:postId/comments/:commentId',
  validate(validation.postIdValidation),
  validate(validation.commentIdValidation),
  validate(validation.commentValidation),
  validation.checkExistance.checkIfPostExists,
  validation.checkExistance.checkIfCommentExists,
  comments.updateComment)

router.delete('/posts/:postId/comments/:commentId',
  validate(validation.postIdValidation),
  validate(validation.commentIdValidation),
  validation.checkExistance.checkIfPostExists,
  validation.checkExistance.checkIfCommentExists,
  comments.removeComment)

//posts routes
router.get('/posts',
  posts.getPosts)

router.post('/posts',
  validate(validation.postValidation),
  posts.addPost)

router.put('/posts/:postId',
  validate(validation.postIdValidation),
  validate(validation.postValidation),
  validation.checkExistance.checkIfPostExists,
  posts.updatePost)

router.delete('/posts/:postId',
  validate(validation.postIdValidation),
  validation.checkExistance.checkIfPostExists,
  posts.removePost)


module.exports = router;
