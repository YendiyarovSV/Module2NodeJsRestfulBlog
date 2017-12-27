var Joi = require('joi');

module.exports = {
  params: {
    commentId: Joi.number().integer().min(0)
  }
};
