const con = require("./../config/db.js");

//construction du model
const Post = function (post) {
  (this.userId = post.userId),
    (this.postTitle = post.postTitle),
    (this.content = post.content),
    (this.image = post.image);
};

Post.create = (newPost, result) => {
  con.query("INSERT INTO posts SET ?", newPost, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("published post !");
    result(null, { id: res.insertId, ...newPost });
  });
};
