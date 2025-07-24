function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * (n - 1);
  }
}

console.log(factorial(5));//Expected: 120 Output: 20

//Corrected code
function fac(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fac(n - 1);
  }
}

console.log(fac(5));//Output :120