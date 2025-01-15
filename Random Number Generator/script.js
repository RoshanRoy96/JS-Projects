let rollBtn = document.getElementById("rollBtn");
let label1 = document.getElementById("myLabel1");
let label2 = document.getElementById("myLabel2");
let label3 = document.getElementById("myLabel3");
let max = 6;
let min = 1;
let randomNumber1;
let randomNumber2;
let randomNumber3;

rollBtn.onclick = function () {
  randomNumber1 = Math.floor(Math.random() * max) + min;
  randomNumber2 = Math.floor(Math.random() * max) + min;
  randomNumber3 = Math.floor(Math.random() * max) + min;
  label1.textContent = randomNumber1;
  label2.textContent = randomNumber2;
  label3.textContent = randomNumber3;
};
