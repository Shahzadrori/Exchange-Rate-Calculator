const currencyEl_one = document.getElementById("currency_one");
const amountEl_one = document.getElementById("amount_one");
const currencyEl_two = document.getElementById("currency_two");
const amountEl_two = document.getElementById("amount_two");
const swapEl = document.getElementById("swap");
const rateEl = document.getElementById("rate");

//fetch and update DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
}
//add event listner
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

calculate();
