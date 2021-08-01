"use strict";

//DOM -> Document Object Model 일종의 인터페이스.
const registerForm=document.querySelector(".register-form");
const id = registerForm.querySelector("#id");
const password=registerForm.querySelector("#password");
const confirmPassword=registerForm.querySelector("#confirm-password");
const name=registerForm.querySelector("#name");
const email=registerForm.querySelector("#email");
const registerBtn=registerForm.querySelector("button");

registerBtn.addEventListener("click",handleRegBtnClick);

function handleRegBtnClick(event){
    event.preventDefault();
    if(password.value!=confirmPassword.value){
        return alert("비밀번호가 일치하지 않습니다");
    }
    const req={
        id: id.value,
        password:password.value,
        name:name.value,
        email:email.value,
    };
    fetch("/register",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req),
    }).then((res)=>res.json())
    .then((res)=>{
        if(res.success===true){
            location.href="/login";
        }else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error(new Error("회원가입 중 에러 발생"));
    });
}