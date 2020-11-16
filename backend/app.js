//Import packages
const express = require('express');
const bodyParser = require('body-parser');

//application Express
const app = express();

const userRoutes = require('./routes/user');

//Gestion erreur du CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //tout le monde a le droit d acces a notre API
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  ); // autorisation d utiliser certaines entete
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); //et sur certaines methodes
  next();
});

//Parser les corps des requêtes
app.use(bodyParser.json());

//Middlewares
app.use('/api/auth', userRoutes);

module.exports = app;
