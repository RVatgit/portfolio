const express = require('express');
const path =require('path');
const app=express();
app.use(express.static(path.join(__dirname,'public')));
app.listen('8080');
app.get('/',(req,res)=>{
    res.render("index.html");
});