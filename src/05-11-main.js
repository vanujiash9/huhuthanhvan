function getErrorMessage(errorCode) {
  let message = "";

  switch (errorCode) {
    case "E01": {
      message = "Invalid usename or password";
      break;
    }
    case "E02": {
      message = "Too many attempts";
      break;
    }
    case "E03": {
      message = "Missing data";
      break;
    }
    default:
      message = "Something went wrong";
  }
  return message;
}
console.log(getErrorMessage("E01"));

//
function getErrorMessage(errorCode){
const errorMap={
    E01: "Invalid username or password"
    E02: "Too many attempts"
    E03:"Missing data"
  }
 const message = errorMap["errorCode"] ||"Something went wrong"
 return message
}
