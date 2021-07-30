
////////////////////////
// setting
///////////////////////

//module
const express=require('express');
const app=express();


//routing
const home=require("./routes/home");


// view setting
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile); // .html 파일을 ejs 로 해석

app.use("/",home);
//app.use(express.static(__dirname+'/public'));




const { PRIORITY_LOW } = require('constants');
const path=require('path');


module.exports=app;

