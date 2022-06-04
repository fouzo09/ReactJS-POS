const bodyParser = require('body-parser')
const express = require("express");
const mongoose = require("mongoose");
const categorieRouter = require('./routes');

require('dotenv').config();

const app = express();
const PORT = 5000;

mongoose.connect(process.env.MONGO_URI)
        .then((result)=> app.listen(PORT))
        .catch((error)=> console.log(error));
app.use(bodyParser.json());
app.use("/api/categorie", categorieRouter);


