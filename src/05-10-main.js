function oddPeople(old) {
  if (old < 0) return "";
  if (old >= 60) return "olders";
  if (old >= 30) return "adults";
  if (old >= 18) return "youth";
  return "children";
  return result;
}
console.log(oddPeople(17));

//
let num = 8;
let isPrime = true;

if (num < 2) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log(" isPrime");
} else {
  console.log("not isPrime");
}
/// switch case 1

function classifyStudent(mark) {
  let result;
  switch (mark) {
    case 1:
    case 2:
    case 3: {
      result = "Bad";
      break;
    }

    case 4:
    case 5:
    case 6: {
      result = "Not good";
      break;
    }
    case 7:
    case 8: {
      result = "Good";
      break;
    }
    case 9:
    case 10: {
      result = "Excellence";
      break;
    }
    default: {
      result = "Invalid mark";
    }
  }
  return result;
}
console.log(classifyStudent(8));
