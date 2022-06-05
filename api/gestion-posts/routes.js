const express = require("express");
const {
        createPost,
        getPosts
    } = require("./controllers/posts.js");

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.post("/", createPost);

module.exports = postRouter;