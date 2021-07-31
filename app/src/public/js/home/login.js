"use strict";

//DOM -> Document Object Model 일종의 인터페이스.

const id = document.querySelector("#id");
const password=document.querySelector("#password");
const loginBtn=document.querySelector("button");

loginBtn.addEventListener("click",handleLoginBtnClick);

function handleLoginBtnClick(){
    const req={
        id: id.value,
        password:password.value,
    };
    fetch("/login",{
        method: "POST"
        body: JSON.stringify(req)
    })
}