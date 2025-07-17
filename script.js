// console.log("Hello World!")
// let a=5;
// a=7;//cannot redeclare ,can be updated
// console.log(a);

// var b=5;
// var be=7;//can be redeclared
// console.log(b);

// let age=32;
// if(age>=18){
//     console.log("Adult");
// }
// else{
//     console.log("Child");
// }

// for(var i=0;i<=5;i++){
//     console.log(i);
// }
// var i=0;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let sub=document.getElementById("b");
// sub.addEventListener("click",function(e){
//     e.preventDefault();
//     sub.textContent="You have already clicked";
// });
//  let animal=['dog','cat','monkey']
//  console.log(animal);
//  animal.push("rat");
//  console.log(animal);
// lastAnimal= animal.pop();
// console.log(lastAnimal);
// console.log(animal);

// let number=[1,2,3,4];
// console.log(number);
// sqarr=number.map(function(num){
//     return num*num;
// });
// console.log(sqarr);
// age=[12,42,30,77,24]
// even=number.filter(function(ages){
//     return ages>=18;
// });

// function fetchdata(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve ("data fetch");
//         },2000);
//     });
// }

function Storage(theme,language){
    const userPrefer={
        theme:theme,
        language:language,
    }
    localStorage.setItem("userPrefer",JSON.stringify(userPrefer));s
}

Storage('dark','en');
const data = localStorage.getItem("userPrefer")
console.log(data);

function forRemove(){
    localStorage.removeItem('userPrefer')
}