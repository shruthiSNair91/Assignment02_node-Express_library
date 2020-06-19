const express = require('express');

var uname= document.getElementById("username");
var pwd=document.getElementById("password");
var errorUnames= document.getElementById("errorUname");
var errorPwd=document.getElementById("errorPswd");

document.getElementById("login").addEventListener(onclick,validate);

function validate()
{
    let regExp=/^([A-Za-z0-9\ _.-]+)@([A-za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    
    if(uname.value.match(regExp))
    { 
                if(pwd.value.trim()!="")
                {
                    console.log(pwd.value);
                    return true;
                }
                else
                {
                    console.log(pwd.value);
                    errorPwd.innerHTML="✖ Invalid Password";
                    errorPwd.style.color="red";
                    errorPwd.style.fontWeight="bolder";
                    return false;
                }
    }
    else
    {
        console.log(uname.value);
         errorUname.innerHTML="✖ Invalid Username";
         errorUname.style.color="red";
         errorUname.style.fontWeight="bolder";
         return false;
    }
    return false;
}
//  