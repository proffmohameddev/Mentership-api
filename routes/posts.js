const express = require("express");

const router = express.Router();

const { createdUser } = require("../controllers/users.js");
const { getPosts, getPostinfo } = require("../controllers/posts");

router.get("/", getPosts);
router.get("/:id", getPostinfo);

module.exports = router;
