function checkNumber(n) {
  if (n > 0) {
  }
}
function checkNumber2(n) {
  if (n > 0 && n % 2 === 0) {
  }
}
function checkNumber3(n) {
  if (n > 0 && n % 2 && n > 10) {
  }
}
function checkNumber4(n) {
  if (n > 0 && n % 2 && n > 10 && n % 5 === 0) {
  }
}
function checkNumber(n) {
  const isEvenPositive = n > 0 && n % 2 === 0;
  const isOddNegative = n < 0 && n % 2 !== 0;
  if (isEvenPositive || isOddNegative) {
  }
  if ((n > 0 && n % 2 === 0) || (n < 0 && n % 2 !== 0)) {
  }
}
