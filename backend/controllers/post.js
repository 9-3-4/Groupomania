const Post = require("./../models/post.js");

//création d'un post
exports.createPost = (req, res, next) => {
  if (!req.body) {
    res.status(400).send({
      message: "non-empty content !",
    });
  }
  //Création du post
  const post = new Post({
    userId: req.body.userId,
    postTitle: req.body.postTitle,
    content: req.body.postContent,
  });
  console.log(post);
  //sauv BDD
  Post.create(post, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "post creation error ",
      });
      return;
    }
    res.send(data);
  });
};

//récupération de tous les post
exports.getallPosts = (req, res, next) => {
  Post.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "error when receiving",
      });
    else res.send(data);
  });
};
