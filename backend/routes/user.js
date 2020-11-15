const express = require('express');
const router = express.Router();

//associer les fonctions au differentes routes
const userCtrl = require('../controllers/user');

//autoriser récupération des donnees
const auth = require('../middleware/auth');

//POST
router.post('/signup', userCtrl.signup);                                                    //création nouvel utilisateur
router.post('/login', userCtrl.login);                                                      //authentification utilisateur existant

//GET
router.get('/',auth, userCtrl.findAll);                                                     //récupération liste de tout les utilisateurs

module.exports = router;