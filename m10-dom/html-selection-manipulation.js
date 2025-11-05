// dom-selection.js
console.log("DOM selection demo started");

// const title = document.getElementById("title");
// const input = document.getElementById("nameInput");
// const greetBtn = document.getElementById("greetBtn");
// const list = document.getElementById("list");

// console.log("Title text:", title.innerText);

const myheading = document.querySelector("#title")
console.log("this is my heading:" , myheading.textContent);

const para = document.getElementsByClassName("desc");
console.log("this is my paragraph:" , para);

myheading.style.color = "green";






