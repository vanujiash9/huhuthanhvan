function isEven(n) {
  return n % 2 === 0;
}
function isOdd(n) {
  return n % 2 === 1;
}
function isDivisibleBy5(n) {
  return n % 5 === 0;
}
function isPerfect(n) {
  if (n <= 0) return false;
  const sqrtN = Math.sqrt(n);
  const sqrtNInt = Math.trunc(sqrtN);
  return sqrtNInt * sqrtNInt === n;
}
console.log(isPerfect(8));
