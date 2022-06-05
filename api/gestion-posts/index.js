const express = require("express");
const app = express();


app.get('/', (req, res)=>{
    res.send("<h1>For posts microservice soon!!!!!</h1>");
});
app.listen(5000, ()=>{
    console.log(`Serveur demarre : http://127.0.0.1:5000`);
});