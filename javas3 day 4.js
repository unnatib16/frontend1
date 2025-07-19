const celTemp = [10,20,30,-5,0,15];
const fahrTemp = celTemp.map(c =>c*9/5+32);
const sum = fahrTemp.reduce((acc, val) => acc + val, 0);
const avg = sum/fahrTemp.length;
console.log(avg);
