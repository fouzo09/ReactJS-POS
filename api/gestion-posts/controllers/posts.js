const Post = require("../models/Post.js");


const getPosts = (req, res)=>{
    Post.find({})
        .then((result)=>res.status(200).json(result))
        .catch((error)=>res.status(500).json(result));
}

const createPost = (req, res)=>{
    Post.create(req.body)
        .then((result)=> res.status(200).json(result))
        .catch((error)=>res.status(500).json(error));
}


const getPost = (req, res)=>{

}

const updatePost = (req, res)=>{

}

const deletePost = (req, res)=>{

}

module.exports = {
    getPosts,
    createPost,
    getPost,
    updatePost,
    deletePost
}