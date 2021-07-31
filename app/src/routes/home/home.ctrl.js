"user strict";

const welcome=(req,res)=>{
    res.render("home/index.html");
};
const login=(req,res)=>{
    res.render("home/login.html");
};

module.exports={
    welcome,
    login,
};

/*{
    welcom: welcome,
    login: login,
}*/