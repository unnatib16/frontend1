let pass= document.querySelector("#pass");
let confPass = document.querySelector("#confPass");
let sub = document.querySelector(".form");
let status = document.querySelector(".status");


sub.addEventListener("submit",function(e){
    e.preventDefault();
    if(pass.value ===confPass.value){
        status.innerText="Submitted"
    }
    else{
        status.innerText="Password Mismatched"
    }
});


