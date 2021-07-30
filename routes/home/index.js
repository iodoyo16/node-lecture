"user strict"

const express = require("express");
const router=express.Router();

const ctrl=require("./home.ctrl");

router.get('/',ctrl.welcome);
router.get('/login',ctrl.login);

module.exports=router;