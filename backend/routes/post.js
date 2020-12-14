const express = require("express");
const router = express.Router();

//associer les fonctions au differentes routes
const postsCtrl = require("../controllers/post");

//autoriser récupération des donnees
//const multer = require("../middleware/multer-config");

router.post("/auth", postsCtrl.createPost);

module.exports = router;
