"user strict";
const User=require("../../models/User");

const process={
    //login process
    login: (req,res)=>{
        const user=new User(req.body);
        const response=user.login();
        return res.json(response);
    },
}

const view={
    welcome : (req,res)=>{
        res.render("home/index.html");
    },
    login : (req,res)=>{
        res.render("home/login.html");
    },
}
module.exports={        ///*{
    view,               //    view: view,
    process,            //    process : process
}                       //}*/



