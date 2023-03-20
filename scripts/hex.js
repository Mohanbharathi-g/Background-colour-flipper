'use strict';

// creating selecting elements
const btnEl = document.getElementById('btn');

const color = document.querySelector('.colors');

// global varibales
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// functions
// random number function
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
// add eventlistener

btnEl.addEventListener('click', function () {
  console.log('hii');
  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
