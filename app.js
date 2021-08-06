const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());


require('./server/routes')(app);
app.use(express.static(path.join('../gatsby-business-starter/public')));




app.get('*', (req,res) =>{
  res.sendFile(path.resolve('../gatsby-business-starter/public/index.html'));
});

module.exports = app;

