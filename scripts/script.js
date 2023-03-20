'use strict';

// creating selecting elements
const btnEl = document.getElementById('btn');

const color = document.querySelector('.colors');

// global varibales
const colors = ['red', 'green', 'rgba(133,122,200)', '#f15025'];
// functions
// random number function
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
// add eventlistener

btnEl.addEventListener('click', function () {
  // creating randomNumber
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];

  color.textContent = colors[randomNumber];
});
