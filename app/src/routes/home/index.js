"user strict"

const express = require("express");
const router=express.Router();

const ctrl=require("./home.ctrl");

router.get('/',ctrl.view.welcome);
router.get('/login',ctrl.view.login);
router.post('/login',ctrl.process.login);

module.exports=router;