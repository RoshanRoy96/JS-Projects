//Switch
//Executes a block of code based on the value of expressions.

let dayNumber = 5;
switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Entry");
}

let testScore = 75;
let grade;
switch (true) {
  case testScore >= 90:
    grade = "A";
    break;
  case testScore >= 80:
    grade = "B";
    break;
  case testScore >= 70:
    grade = "C";
    break;
  case testScore >= 60:
    grade = "D";
    break;
  case testScore >= 50:
    grade = "E";
    break;
  default:
    grade = "F";
}
console.log(grade);
