//Import packages
const express = require("express");
const bodyParser = require("body-parser");

//application Express
const app = express();

//user
const userRoutes = require("./routes/user.js");

//post
const postRoutes = require("./routes/post.js");

//Gestion erreur
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//Parser les corps des requêtes
app.use(bodyParser.json());

//Middlewares
app.use("/api/auth", userRoutes);

app.use("/api/post", postRoutes);

module.exports = app;
