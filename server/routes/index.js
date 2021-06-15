const usersController = require('../controllers').users;

module.exports = configureExpress;

function configureExpress(app) {
     app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Users API!',
      }));    
     app.post('/api/users', usersController.create);
}
