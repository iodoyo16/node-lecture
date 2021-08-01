"user strict";
const User=require("../../models/User");

const process={
    //login process
    login: async (req,res)=>{
         const user=new User(req.body);
         const response=await user.login();
         return res.json(response);
    },
    register: async (req,res)=>{
        const user=new User(req.body);
        const response=await user.register();
        return res.json(response);
    }
}

const view={
    welcome : (req,res)=>{
        res.render("home/index.html");
    },
    login : (req,res)=>{
        res.render("home/login.html");
    },
    register: (req,res)=>{
        res.render("home/register.html");
    },
}
module.exports={        ///*{
    view,               //    view: view,
    process,            //    process : process
}                       //}*/



