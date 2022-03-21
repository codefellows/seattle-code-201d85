// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

'use strict';

// create a kitten factory
function Kitten (name, interests, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats) {
  // this is a capital K kitten because it's a constructor function
  this.name = name;
  this.age = this.assignAge();
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithOtherCats = isGoodWithOtherCats;
}

// add a method to JavaScript's existing Number class to calcualte "cat years" in relation to human years
Number.prototype.calculateAgeInHumanYears = function() {
  // the first year of a cat's life is equal to approximately 15 human years
  return Math.floor(this/12 * 15);
}

//add a method to JavaScript's existing String object to capatalize first letter of string
String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
}

// add assignAge method - here we define the function inline
Kitten.prototype.assignAge = function() {
  // the random months number must be persisted so we can use more than once
  let months = randomInRange(3, 12)
  this.age = months + ' months';
  this.ageInCatYears = months.calculateAgeInHumanYears();
};

Kitten.prototype.meow = function () {
  console.log(this.name + ' says meow!');
};

function randomInRange (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// add render method
Kitten.prototype.render = function() {

  const parentElement = document.getElementById('kittenProfiles');

  const article = document.createElement('article');
  parentElement.appendChild(article);

  const h2 = document.createElement('h2');
  h2.textContent = this.name.capitalize();
  article.appendChild(h2);

  const p = document.createElement('p');
  // human to cat year comparison added
  p.textContent = this.name.capitalize() + ' is adorable, and is ' + this.age + ' old. That\'s like a ' + this.ageInCatYears + ' year old human!';
  article.appendChild(p);

  const ul = document.createElement('ul');
  article.appendChild(ul);

  for (let i = 0; i < this.interests.length; i++) {
    const li = document.createElement('li');
    li.textContent = this.interests[i];
    ul.appendChild(li);
  }

  const table = document.createElement('table');

  const row1 = document.createElement('tr');
  const row2 = document.createElement('tr');

  const th1 = document.createElement('th');
  th1.textContent = 'Good With Kids';
  const th2 = document.createElement('th');
  th2.textContent = 'Good With Dogs';
  const th3 = document.createElement('th');
  th3.textContent = 'Good With Other Cats';

  const td1 = document.createElement('td');
  td1.textContent = this.isGoodWithKids;
  const td2 = document.createElement('td');
  td2.textContent = this.isGoodWithDogs;
  const td3 = document.createElement('td');
  td3.textContent = this.isGoodWithOtherCats;

  row1.appendChild(th1);
  row1.appendChild(th2);
  row1.appendChild(th3);

  row2.appendChild(td1);
  row2.appendChild(td2);
  row2.appendChild(td3);

  table.appendChild(row1);
  table.appendChild(row2);
  article.appendChild(table);

  const img = document.createElement('img');
  img.setAttribute('src', 'images/' + this.name + '.jpeg');
  img.setAttribute('alt', 'cute picture of ' + this.name + ', who is an orange and white cat. You should really adopt him.');
  article.appendChild(img);
}

const kittenForm = document.getElementById('addKittenForm');

// event listeners need to know: what event do they care about, and what do they want to do when it happens.
kittenForm.addEventListener('submit',
  function (event) {
    event.preventDefault();
    const name = event.target.name.value;
    let interests = event.target.interests.value;
    interests = interests.split(',');
    const isGoodWithKids = event.target.isGoodWithKids.checked;
    const isGoodWithDogs = event.target.isGoodWithDogs.checked;
    const isGoodWithOtherCats = event.target.isGoodWithOtherCats.checked;

    const newKitten = new Kitten(name, interests, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats);
    newKitten.assignAge();
    newKitten.render();
    kittenForm.reset();
  }
);
