"use strict";

const app = require("../../app");
const UserStorage=require("./UserStorage");

class User{
    constructor(body){
        this.body=body;
    }
    async login(){              // aync 함수 안에서 await 사용가능
        const client=this.body;
        const{ id,password } = await UserStorage.getUserInfo(client.id); // promise 반환까지 기다림
        if(id){
            if(id===client.id&&password===client.password){
                return {success:true};
            }
            return {success: false, msg:"잘못된 비밀번호입니다."};
        }
        return {success: false, msg: "존재하지 않는 아이디 입니다."};
    }
    async register(){
        const client=this.body;
        try{
            const response=await UserStorage.save(client);
            return response;
        }catch(err){
            console.error(err);
        }
    }
}

module.exports=User;