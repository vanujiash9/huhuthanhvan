function calcAreaRecta(a, b) {
  if (a <= 0 || b <= 0) return -1;
  const result = a * b;
  return result;
}
console.log(calcAreaRecta(4, 3));

function calcAreaRecta(a) {
  if (a <= 0) return -1;
  const result = a * a;
  return result;
}
console.log(calcAreaRecta(4));

function calcAreaRecta(r) {
  if (r <= 0) return -1;
  const result = r * r * 3.14;
  return result;
}
console.log(calcAreaRecta(9));
