const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./../models/user');

//Création d'un user
exports.signup = (req, res, next) => {
  // Valider la requète
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  bcrypt
    .hash(req.body.password, 10) //hashage du mot de passe
    .then((hash) => {
      const user = new User({
        // Création de l'user
        ...req.body,
        password: hash,
      });
      User.create(user, (err, data) => {
        // Ajout utilisateur dans la database
        if (err)
          res.status(500).send({
            message: err.message || 'Some error occurred while creating the Customer.',
          });
        else res.status(201).send(data);
      });
    });
};

//login d'un utilisateur
exports.login = (req, res) => {
  //recherche de l'user
  User.findByEmail(req.body.email, (err, data) => {
    console.log('data', data);
    user = data[0];
    //Si l'utilisateur n'existe pas
    if (user.length == 0) {
      console.log('user non trouvé');
      res.status(401).json({ error: 'Utilisateur non trouvé' });
    }
    //Si l'utilisateur existe, vérification du mot de passe
    else {
      bcrypt
        .compare(req.body.password, user.motdepasse)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          //Si valide récupération de l'id et création du TOKEN
          res.status(200).json({
            userId: user.id,
            token: jwt.sign({ userId: user.id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    }
  });
};

//Récupération liste des utilisateurs
exports.findAll = (req, res, next) => {
  User.getAll((err, data) => {
    console.log('data', data);
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving customers.',
      });
    else res.send(data);
  });
};

//supression d'un utilisateur
exports.delete = (req, res) => {
  User.remove(req.params.id, (err, data) => {
    console.log('data', data);
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: 'Could not delete Customer with id ' + req.params.id,
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};
