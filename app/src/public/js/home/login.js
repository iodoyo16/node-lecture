"use strict";

//DOM -> Document Object Model 일종의 인터페이스.
const loginform=document.querySelector(".login-form");
const id = loginform.querySelector("#id");
const password=loginform.querySelector("#password");
const loginBtn=loginform.querySelector("button");

loginBtn.addEventListener("click",handleLoginBtnClick);

function handleLoginBtnClick(){
    const req={
        id: id.value,
        password:password.value,
    };
    fetch("/login",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req),
    }).then((res)=>res.json())
    .then((res)=>{
        console.log(res);
        if(res.success===true){
            location.href="/";//루트경로
        }else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error(new Error("로그인 중 에러 발생"));
    });
}