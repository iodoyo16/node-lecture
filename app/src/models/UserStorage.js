"use strict";

class UserStorage{
    static #users={
        id: ["rkfkaap", "iodoyo", "durfbgksmsskfro"],
        password:["xhxkdl11!","xhxkdl12!","xhxkdl13!"],
        name:["문상영","toms","IU"],
    }
    static getUsers(...fields){// field 명으로 전체 유저의 field 배열을 가져옴
        const users=this.#users;
        const askedFileds=fields.reduce((askedFileds,field)=>{
            if(users.hasOwnProperty(field)){// 해당 키값이 있는지
                askedFileds[field]=users[field];
            }
            return askedFileds;
        },{});
        
        return askedFileds;
    }
    static getUserInfo(id){//id로 해당 유저의 정보를 가져옴
        const users=this.#users;
        const idx=users.id.indexOf(id);
        const userKeys=Object.keys(users);//users의 key값(field)만 가져와서 배열로 구성
        const askedUserInfo=userKeys.reduce((askedUserInfo,field)=>{
            askedUserInfo[field]=users[field][idx];
            return askedUserInfo;
        },{});
        return askedUserInfo;
    }
}

module.exports=UserStorage;