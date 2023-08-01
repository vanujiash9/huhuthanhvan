//Object exercisé
//1. Creat an object student with name is Easy Fronted and age is 18
const student = {};
student.name = "Easy Fronted";
student.age = 18;
console.log(student);
//
const student = {
  name: "Easy Fronted",
  age: 18,
};
console.log(student);

//2.Check if an object is empty(means have no keys)
//{} no keys-> length of key list is 0
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ id: 1 }));
//let data = null
//data={id:1}
//data?.id

//3. Get average mark of an object
//calcAvgMark({math: 10, english:8})->9
function calcAvgMark(mark) {
  //avg =sum/length
  const length = Object.keys(mark).length;
  let sum = 0;
  for (const key in mark) {
    const value = mark[key];

    sum += value;
  }
  return (sum / length).toFixed(1);
}
console.log(calcAvgMark({ math: 10, english: 8 }));
