const list = document.querySelector("#fruits");
let update = document.querySelector(".status")
list.addEventListener("click",function(e){
    if(e.target.tagName === "li"){
        update.textContent = "you have added" + e.target.textContent + " in your cart";
    }
})