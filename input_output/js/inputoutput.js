// console.log('--js loaded--');


const userInput = window.prompt('What is your favorite color?');
const userOutputEl = document.getElementById('output');

console.log(userInput);
console.log(userOutputEl);

//THESE TWO LINES DO THE SAME THIN
//userOutputEl.innerText = "Hello. " + userInput+ "!";
userOutputEl.innerText = `YAY! ${userInput} is a nice taste!`;



document.body.onmousemove = function(){document.body.innerHTML += `<h1 class=mouse style="color:rgb(${Math.random()*175},${Math.random()*175},${Math.random()*175})">Your Mouse Just Moved</h1>`}