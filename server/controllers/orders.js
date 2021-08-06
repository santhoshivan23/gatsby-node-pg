const Order = require('../models').User;
const OrderSchema = require('../validations').orderSchema;

module.exports = {
  async create(req, res) {
    try {
      await OrderSchema.validateAsync(req.body);
      const order = await Order
        .create({
          productId: req.body.productId,
          uid: req.body.uid,
        });
      res.status(201).send(order);
    }
    catch(err) {
      console.log(err);
      res.status(400).send(err.details);
    }
  },
  async complete(req,res) {
      try{
        await OrderSchema.validateAsync(req.body);
        const { id } = req.params;
        await Order.update(
            {
                status: 'Completed',
                where: id,
            },
        );
      }
      catch(err) {
        res.status(400).send(err.details);
      }
  }
};