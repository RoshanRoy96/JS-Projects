let submitBtn = document.getElementById("mySubmit");
let myText = document.getElementById("myText");
let result = document.getElementById("resultElement");
let age;

submitBtn.onclick = function () {
  age = Number(myText.value);
  if (age >= 100) {
    result.textContent = `You are too old to enter this site`;
  } else if (age == 0) {
    result.textContent = `You are just born....you can't enter this site`;
  } else if (age >= 18) {
    result.textContent = `You are old enough to enter this site`;
  } else if (age < 0) {
    result.textContent = `Your age can't be below zero`;
  } else {
    result.textContent = "You must be 18+ to enter this site";
  }
};
