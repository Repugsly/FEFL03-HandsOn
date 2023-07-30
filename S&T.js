let highSchoolGrade = 12;
let yourGrade;

switch(highSchoolGrade){
  case 9:
    yourGrade = "Freshman";
    break;
  case 10:
    yourGrade = "Sophmore";
    break;
  case 11:
    yourGrade = "Junior";
    break;
  case 12:
    yourGrade = "Senior";
    break;
  default:
    yourGrade = "Invalid Entry";
}

function updateGrade(){


}

console.log(yourGrade);

function name(){
  let firstName;
  if (firstName === "John") {
    document.getElementById("demo").innerHTML = "Hello John!";
  }
  else {
    document.getElementById("demo").innerHTML = "Hello Human!";
  } 
}

const firstName = "John";

document.getElementById("demo").innerHTML = firstName === "John" ? "Hello John!" : "Hello Human!";

console.log(firstName);