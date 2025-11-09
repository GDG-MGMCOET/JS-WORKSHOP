let addBtn = document.querySelector("#plus");
let subBtn = document.querySelector("#subs");
const amountDisplay = document.querySelector(".amount");

let amount = 0;

addBtn.addEventListener("click", () => {
  amount++;
  amountDisplay.textContent = `Total amount = ${amount}`;
});

subBtn.addEventListener("click", () => {
  if( amount){
      amount--;
  }
  amountDisplay.textContent = `Total amount = ${amount}`;
});