module.exports = (function() {
  return {
    checkIfPostExists: function(req, res, next) {
      if (req.params.postId >= req.blogData.length) {
        return res.status(404).send("Post not found!")
      }
      next()
    },
    checkIfCommentExists: function(req, res, next) {
      if (req.params.commentId >= req.blogData[req.params.postId].comments.length) {
        return res.status(404).send("Comment not found!")
      }
      next()
    }
  }
})();
