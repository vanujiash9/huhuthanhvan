function randomNumber(a, b) {
  if (b <= a) return -1;
  const random = Math.random() * (b - a);
  const result = Math.round(random) + a;
  return result;
}
console.log(randomNumber(5, 9));
console.log(randomNumber(5, 9));
console.log(randomNumber(5, 9));
console.log(randomNumber(5, 9));
