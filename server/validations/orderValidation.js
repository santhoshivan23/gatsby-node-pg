const Joi = require('joi');

const orderSchema = Joi.object(
    {
        productId: Joi.string().required(),
        uid: Joi.string().required(),
    }
);

module.exports = orderSchema;