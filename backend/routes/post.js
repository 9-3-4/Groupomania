const express = require("express");
const router = express.Router();

//associer les fonctions au differentes routes
const postsCtrl = require("../controllers/post");

//autoriser récupération des donnees
//const multer = require("../middleware/multer-config");

//route POST pour créer un post
router.post("/create", postsCtrl.createPost);

//route GET pour récupérer tout les posts
router.get("/getall", postsCtrl.getallPosts);

module.exports = router;
