//1. Get the ones of a number having 3 digits
function extractTheOnes(n) {
  if (n.toString().length === !3) return -1;
  return n % 10;
}
console.log(extractTheOnes(738));

//2. Get the tens of a number having 3 digits
function extractTheOnes(n) {
  if (n.toString().length === !3) return -1;
  return Math.trunc((n % 100) / 10);
}
console.log(extractTheOnes(738));

//3. Get the hundreds of a number having 3 digits

function extractTheOnes(n) {
  if (n.toString().length === !3) return -1;
  return Math.trunc(n / 100);
}
console.log(extractTheOnes(738));
//4. Sum all digits of a number having 3 digits
function sumAllDigits(n) {
  if (n.toString().length === !3) return -1;
  const ones = n % 10;
  const hundreds = Math.trunc(n / 100);
  const tens = Math.trunc((n % 100) / 10);
  return (result = ones + hundreds + tens);
}
console.log(sumAllDigits(823));
