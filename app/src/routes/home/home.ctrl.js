"user strict";

//fake DB
const users={
    id: ["rkfkaap", "iodoyo", "durfbgksmsskfro"],
    password:["xhxkdl11!","xhxkdl11!","xhxkdl11!"],
}
const process={
    login: (req,res)=>{
        const id=req.body.id,
            password=req.body.id;
        if(users.id.includes(id)){
            const idx=users.id.indexOf(id);
            if(users.password[idx]===password)
                return res.json({
                    success:true,
                });
        }
        return res.json({
            success:false,
            msg:"로그인에 실패하셨습니다.",
        });
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
module.exports={
    view,
    process,
}



/*{
    welcom: welcome,
    login: login,
}*/