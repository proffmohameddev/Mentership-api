const posts = require("../routes/posts");

exports.getPosts = (req, res) => {
  res.json(posts);
};

exports.getPostinfo = (req, res) => {
  const post = posts.find((u) => u.id == req.params.id);
  if (!post) return res.status(404).send("Post not found");
  res.json(post);
};
