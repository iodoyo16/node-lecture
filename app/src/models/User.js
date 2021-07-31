"use strict";

const app = require("../../app");
const UserStorage=require("./UserStorage");

class User{
    constructor(body){
        this.body=body;
    }
    login(){
        const body=this.body;
        const{ id,password } = UserStorage.getUserInfo(body.id);
        if(id){
            if(password===body.password){
                return {success:true};
            }
            return {success: false, msg:"잘못된 비밀번호입니다."};
        }
        return {success: false, msg: "존재하지 않는 아이디 입니다."};
    }
}

module.exports=User;