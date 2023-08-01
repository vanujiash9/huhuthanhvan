//write a functioin to classtify student
//receive mark as a number, output as below:
//mark > 8--->"Excellence"
//7<= mark<=8 ---?"good"
//4M=mark <=6 ---? "not good"
//mark <4 --->"bad"

function classifyStudent(mark) {
  //validate argument
  //mark should be in range of[0,10]
  if (mark < 0 || mark > 10) return "";

  //checking...
  if (mark > 8) return "Excellence";
  if (7 <= mark) return "Good";
  if (4 <= mark) return "not good";
  return "bad";

  return result;
}
console.log(classifyStudent(3));
