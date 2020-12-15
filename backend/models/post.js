const con = require("./../config/db.js");

//construction du model
const Post = function (post) {
  this.t_user_id = post.userId;
  this.titre = post.postTitle;
  this.contenu = post.content;
  //this.image = post.image;
};

//création d'un post
Post.create = (newPost, result) => {
  con.query("INSERT INTO t_post SET ?", newPost, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("published post !");
    result(null, { id: res.insertId, ...newPost });
  });
};

//récupération de tous les posts
Post.getAll = (result) => {
  con.query("SELECT * FROM t_post", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("posts: ", res);
    result(null, res);
  });
};

module.exports = Post;
