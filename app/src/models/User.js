"use strict";

const app = require("../../app");
const UserStorage=require("./UserStorage");

class User{
    constructor(body){
        this.body=body;
    }
    login(){
        const client=this.body;
        const{ id,password } = UserStorage.getUserInfo(client.id);
        if(id){
            if(id===client.id&&password===client.password){
                return {success:true};
            }
            return {success: false, msg:"잘못된 비밀번호입니다."};
        }
        return {success: false, msg: "존재하지 않는 아이디 입니다."};
    }
    register(){
        const client=this.body;
        UserStorage.save(client);
    }
}

module.exports=User;