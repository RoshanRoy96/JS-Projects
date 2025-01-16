let submitBtn = document.getElementById("mySubmit");
let subBtn = document.getElementById("mySubscription");
let visaBtn = document.getElementById("myVisa");
let masterCardBtn = document.getElementById("myMasterCard");
let payPalBtn = document.getElementById("myPayPal");
let subResult = document.getElementById("subResult");
let paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function () {
  if (subBtn.checked) {
    subResult.textContent = "You are subscribed";
  } else {
    subResult.textContent = "You are not subscribed";
  }
  if (visaBtn.checked) {
    paymentResult.textContent = "You are paying with visa card";
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = "You are paying with mastercard";
  } else if (payPalBtn.checked) {
    paymentResult.textContent = "You are paying with pay pal";
  }
};
