const factorial= (num)=>{
    let fac=1;
    for(let i=2;i<=num;i++){
        fac*=i;
    }
    return fac;
}

export default factorial;