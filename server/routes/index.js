const usersController = require('../controllers').users;
const ordersController = require('../controllers').orders;

module.exports = configureExpress;

function configureExpress(app) {
     app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Gatsby API!',
      }));    
     app.post('/api/users', usersController.create);
     app.post('/api/orders', ordersController.create);
     app.patch('/api/orders/:id', ordersController.complete);
}
