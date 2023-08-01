function convertHourToSenconds(hours) {
  if (hours < 0) return -1;
  const SECONDS_PER_HOUR = 3600;
  return hours * 3600; //hardcode
}
console.log(convertHourToSenconds(42));

//

function findMax(a, b, c) {
  if ((a === b) === c) return -1;
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}
console.log(findMax(4, 2, 6));

//

function findMax(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;
  if (a % 2 === 0 && a >= max) max = a;
  if (b % 2 === 0 && b >= max) max = b;
  if (c % 2 === 0 && c >= max) max = c;
  return max;
}
console.log(findMax(4, 5, 9));
