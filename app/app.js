
////////////////////////
// setting
///////////////////////

//module
const express=require('express');
const app=express();
const dotenv=require("dotenv");//환경변수를 등록하는 방법이 os 마다 다 다른데 dotenv를 이용하면 통일할 수 있다.
dotenv.config();// config method 가 .env의 환경변수를 nodejs에서 접근할수 있게
//process.env에 등록

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