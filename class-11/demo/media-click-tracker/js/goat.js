'use strict';

// global varriables

let goatContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

let clicks = 0;
let maxClicksAllowed = 9;

// functional logic

function Goat(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
  Goat.allGoatsArray.push(this);
}

Goat.allGoatsArray = [];

function getRandomNumber() {
  return Math.floor(Math.random() * Goat.allGoatsArray.length);
}

function renderGoats() {
  // call the getRandomNumber
  let goat1 = getRandomNumber();
  let goat2 = getRandomNumber();

  while (goat1 === goat2) {
    goat2 = getRandomNumber();
  }
  image1.src = Goat.allGoatsArray[goat1].src;
  image2.src = Goat.allGoatsArray[goat2].src;
  image1.alt = Goat.allGoatsArray[goat1].name;
  image2.alt = Goat.allGoatsArray[goat2].name;
  Goat.allGoatsArray[goat1].views++;
  Goat.allGoatsArray[goat2].views++;
}

function handleGoatClick(event) {
  if (event.target === goatContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickGoat = event.target.alt;
  for (let i = 0; i < Goat.allGoatsArray.length; i++) {
    if (clickGoat === Goat.allGoatsArray[i].name) {
      Goat.allGoatsArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    goatContainer.removeEventListener('click', handleGoatClick);
    // give the button an event lister and styles so the user
    // knows its an active button:
    resultButton.addEventListener('click', renderResults);
    resultButton.className = 'clicks-allowed';
    goatContainer.className = 'no-voting';
  } else {
    renderGoats();
  }
}

function renderResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < Goat.allGoatsArray.length; i++) {
    let li = document.createElement('li')
    li.textContent = `${Goat.allGoatsArray[i].name} had ${Goat.allGoatsArray[i].views} view and was clicked ${Goat.allGoatsArray[i].clicks} times.`;
    ul.appendChild(li);
  }
}

// executable code

new Goat('Cruising Goat', './images/cruisin-goat.jpg');
new Goat('Float Your Goat', './images/float-your-goat.jpg');
new Goat('Goat Out of Hand', './images/goat-out-of-hand.jpg');
new Goat('Kissing Goat', './images/kissing-goat.jpg');
new Goat('Sassy Goat', './images/sassy-goat.jpg');
new Goat('Smiling Goat', './images/smiling-goat.jpg');
new Goat('Sweater Goat', './images/sweater-goat.jpg');

renderGoats();

goatContainer.addEventListener('click', handleGoatClick);
