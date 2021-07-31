
////////////////////////
// setting
///////////////////////

//module
const express=require('express');
const app=express();

//routing
const home=require("./src/routes/home");


// view setting
app.set('views',__dirname+'/src/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile); // .html 파일을 ejs 로 해석


app.use(express.static(`${__dirname}/src/public`)); // __dirname : 현재 파일 위치 반환
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등의 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended: true}));
app.use("/",home);
// 미들웨어는 순서가 중요



const { PRIORITY_LOW } = require('constants');
const path=require('path');


module.exports=app;