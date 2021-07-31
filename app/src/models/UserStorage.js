"use strict";

class UserStorage{
    static #users={
        id: ["rkfkaap", "iodoyo", "durfbgksmsskfro"],
        password:["xhxkdl11!","xhxkdl11!","xhxkdl11!"],
        name:["문상영","toms","IU"],
    }
    static getUsers(...fields){
        const users=this.#users;
        const askedFileds=fields.reduce((askedFileds,field)=>{
            if(users.hasOwnProperty(field)){// 해당 키값이 있는지
                askedFileds[field]=users[field];
            }
            return askedFileds;
        },{});
        
        return askedFileds;
    }
}

module.exports=UserStorage;