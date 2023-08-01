//Write a function to check if a number a possitive even number

//flag
function isPositiveEvenNumber(n) {
  let isValid; // underfined
  //checking....
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = False;
  }
  return isValid;
}
console.log(isPositiveEvenNumber(5));
function isPositiveEvenNumber(n) {
  // let isValid=false;
  //checking....
  if (n > 0 && n % 2 === 0) {
    // isValid=true;
    return true;
  }
  return false;
}
//v4
function isPositiveEvenNumber(n) {
  return n > 0 && n % 2 === 0;
}
