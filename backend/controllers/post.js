//création d'un post
exports.createPost = (req, res, next) => {
  con.query(
    `INSERT INTO t_post VALUES ( '${req.body.userId}', '${req.body.title}', NOW(), '${req.body.content}')`,
    (error, result, field) => {
      if (error) {
        return res.status(400).json({
          error,
        });
      }
      return res.status(201).json({
        message: "published post!",
      });
    }
  );
};
