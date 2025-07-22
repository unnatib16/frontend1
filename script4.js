const addTask = document.getElementById("btn");
const input =document.getElementById("inp");
const taskList=document.getElementById("tasklist");

addTask.addEventListener("click",function(){
    const check=input.value.trim();
    if(check === ""){
        return;
    }

    const li=document.createElement("li");

    const span = document.createElement("span");
    span.textContent = check;

    const deleteBtn= document.createElement("button");
    deleteBtn.textContent="cross";

    span.addEventListener("click" ,function(){
        span.classList.toggle("complete");
    })

    deleteBtn.addEventListener("click",function(){
        taskList.removeChild(li);
    })

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value="";
})