"use strict";

const db=require("../config/db");
class UserStorage{
    static getUsers(isAll, ...fields){// field 명으로 전체 유저의 field 배열을 가져옴
    };
    
    static getUserInfo(id){
        return new Promise((resolve,reject)=>{// Promise(콜백) 콜백함수가 성공하면 resolve, 실패시 reject 실행
            const query="SELECT * FROM users WHERE id = ?";
            db.query(query,[id],(err, data)=>{       
                if(err) reject(err);
                resolve(data[0]);
            });
        });
    }
    static save(userInfo){
        return new Promise((resolve,reject)=>{// Promise(콜백) 콜백함수가 성공하면 resolve, 실패시 reject 실행
            const query="INSERT INTO users(id,name,password) VALUES(?,?,?);";
            db.query(query,[userInfo.id,userInfo.name,userInfo.password],(err)=>{       
                if(err) reject(`${err}`);//err 는 object 
                resolve({success: true});
            });
        });
    }
}

module.exports=UserStorage;

// static getUserInfo(id){//id로 해당 유저의 정보를 가져옴
//     return fs
//     .readFile("./src/databases/users.json") // promise를 반환한다. -> promise반환하면 .then method, catch가능
//        .then((data)=>{
//            return this.#getUserInfo(data,id);
//         })// .then()은 promise가 성공적으로 반환됐을때, catch는 아닐때
//        .catch(console.error);           // ((err)=>console.error(err)) 과 같은 표현
// };
// static #getUserInfo(data,id){
//     const users=JSON.parse(data);
//     const idx=users.id.indexOf(id);
//     const userKeys=Object.keys(users);//users의 key값(field)만 가져와서 배열로 구성
//     const askedUserInfo=userKeys.reduce((askedUserInfo,field)=>{
//         askedUserInfo[field]=users[field][idx];
//         return askedUserInfo;
//     },{});
//     return askedUserInfo;
// }
// static async save(userInfo){
//     // 데이터 가져오기
//     const users=await this.getUsers(true);
//     if(users.id.includes(userInfo.id)){
//         console.log("1111");
//         return {success:false, msg:"이미 존재하는 아이디 입니다."};
//     }
//     // 데이터 추가
//     users.id.push(userInfo.id);
//     users.password.push(userInfo.password);
//     users.name.push(userInfo.name);
//     fs.writeFile("./src/databases/users.json",JSON.stringify(users));
//     console.log("2222");
//     return {success:true};
// };