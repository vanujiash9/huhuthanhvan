//String exercise
// check if a string contains an email address with `@gmai.com` or not.
//indexof
//lastIndexOf
//include
function hasEmail(str) {
  return str.includes(`@gmail.com`);
}
console.log(hasEmail(`adf fds@gmail.com def`));

function hasEmail(str) {
  return str.indexOf(`@gmail.com`) >= 0;
}
console.log(hasEmail(`adf fds@gmail.com def`));
