const User = require('../models').User;
const UserSchema = require('../validations').userSchema;

module.exports = {
  async create(req, res) {
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
      console.log(err);
      res.status(400).send(err.details);
    }
  },
};