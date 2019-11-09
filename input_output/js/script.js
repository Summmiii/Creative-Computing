// console.log('--js loaded--');

const userInput = window.prompt('What is your name?');
const userOutputEl = document.getElementById('output');

console.log(userInput);
console.log(userOutputEl);

//THESE TWO LINES DO THE SAME THIN
//userOutputEl.innerText = "Hello. " + userInput+ "!";
userOutputEl.innerText = `Hello, ${userInput}!`;