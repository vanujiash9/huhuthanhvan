//Creat afuntion `truncate(text, maxlength)` that checks the length of the text and,
//if it exceeds maxlength ~ replace the en of str with the ellipsis character`""`,
//to make its lenght equal to maxlenght
//Easy -> truncate("Easy Frontend",4)-> \`u2026`|
//If lenght <= maxlenght-> show full
//length>maxlength->truncate
function truncate(text, maxlength) {
  if (text.length <= maxlength) return text;
  const shortStr = text.slice(0, maxlength - 1);
  return `${shortStr}\u2026`;
}
console.log(truncate("huhu", 4));
console.log(truncate("huhu hihi", 4));
