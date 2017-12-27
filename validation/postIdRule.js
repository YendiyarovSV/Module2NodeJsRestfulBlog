var Joi = require('joi');

module.exports = {
  params: {
    postId: Joi.number().integer().min(0)
  }
};
