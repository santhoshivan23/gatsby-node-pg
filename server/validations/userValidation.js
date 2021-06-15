const Joi  = require('joi');

const userSchema = Joi.object(
    {
        email: Joi.string().email().required(),
        name: Joi.string().required(),
        mobile: Joi.string(),
    }
);

module.exports = userSchema;