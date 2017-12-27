var Joi = require('joi');

module.exports = {
  options: { allowUnknownBody: false },
  body: {
    name: Joi.string().required(),
    url: Joi.string().required(),
    text: Joi.string().required(),
    comments: Joi.array().items(
      {
        author:Joi.string().required(),
        text:Joi.string().required()
      } )
  }

};
