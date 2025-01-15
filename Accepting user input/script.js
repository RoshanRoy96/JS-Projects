let submitBtn = document.getElementById("mySubmit");
let userName;
submitBtn.onclick = function () {
  userName = document.getElementById("username").value;
  document.getElementById("myH1").textContent = `Hello ${userName}`;
};
