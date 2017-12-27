var Joi = require('joi');

module.exports = {
  options: { allowUnknownBody: false },
  body:
  {
     author:Joi.string().required(),
     text: Joi.string().required()
  }

};
