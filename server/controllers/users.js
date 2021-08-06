const User = require('../models').User;
const UserSchema = require('../validations').userSchema;

module.exports = {
  async create(req, res) {
    console.log(req.body);
    try {
      await UserSchema.validateAsync(req.body);
      const user = await User
        .create({
          name: req.body.name,
          email: req.body.email,
          mobile: req.body.mobile,
        });
      res.status(201).send(user);
    }
    catch(err) {
      res.status(400).send(err);
    }
  },
};