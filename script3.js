function highlightElement(){
    const selector = document.querySelector("#css").value.trim();
    document.querySelectorAll(".highlight").forEach(el=>{
        el.classList.remove("highlight")
    });
    try{
        const elements=document.querySelectorAll(selector);
        if(elements.length==0){
            alert("No element matched");
        }
        else{
            elements.forEach(el=>el.classList.add("highlight"))
        }
    }
catch(e){
    console.log(e);
}
} 