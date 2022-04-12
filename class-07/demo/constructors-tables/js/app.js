function Kitten(name, interests, goodWithDogs, goodWithKids, goodWithCats, imageFilename) {
  this.name = name;
  this.interests = interests;
  this.isGoodWithDogs = goodWithDogs;
  this.isGoodWithKids = goodWithKids;
  this.isGoodWithCats = goodWithCats;
  this.imageUrl = 'images/' + imageFilename;
  this.age = this.generateAge();
}

Kitten.prototype.generateAge = function () {
  return randomInRange(3, 12) + ' months';
}

Kitten.prototype.meow = function () {
  console.log('Meow from ' + this.name);
}

Kitten.prototype.render = function () {
  const containerElem = document.getElementById('kittenProfiles');

  const articleElem = document.createElement('article');
  containerElem.appendChild(articleElem);

  const headingElem = document.createElement('h2');
  articleElem.appendChild(headingElem);
  headingElem.textContent = this.name;

  // age/bio
  const paraElem = document.createElement('p');
  articleElem.appendChild(paraElem);
  paraElem.textContent = `${this.name} is adorable and is ${this.age} old.`;

  // interests
  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  for (let i = 0; i < this.interests.length; i++) {
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = this.interests[i];
  }

  // table of good withs
  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  // header row
  const headerRow = document.createElement('tr');
  tableElem.appendChild(headerRow);

  // add header cells
  const kidsHeaderCell = document.createElement('th');
  headerRow.appendChild(kidsHeaderCell);
  kidsHeaderCell.textContent = "Kids";

  const dogsHeaderCell = document.createElement('th');
  headerRow.appendChild(dogsHeaderCell);
  dogsHeaderCell.textContent = "Dogs";

  const catsHeaderCell = document.createElement('th');
  headerRow.appendChild(catsHeaderCell);
  catsHeaderCell.textContent = "Other Cats";

  // add data row
  const dataRow = document.createElement('tr');
  tableElem.appendChild(dataRow);

  // add data cells
  const kidsDataCell = document.createElement('td');
  dataRow.appendChild(kidsDataCell);
  kidsDataCell.textContent = this.isGoodWithKids;

  const dogsDataCell = document.createElement('td');
  dataRow.appendChild(dogsDataCell);
  dogsDataCell.textContent = this.isGoodWithDogs;


  const catsDataCell = document.createElement('td');
  dataRow.appendChild(catsDataCell);
  catsDataCell.textContent = this.isGoodWithCats;

  // Image
  const imgElem = document.createElement('img');
  articleElem.appendChild(imgElem);
  imgElem.setAttribute('src', this.imageUrl);
  imgElem.setAttribute('alt', 'picture of ' + this.name);
}

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const frankie = new Kitten('Frankie', ['catnip', 'snoozing', 'string'], true, true, true, 'frankie.jpeg');
const serena = new Kitten('Serena', ['sitting in laps', 'climbing curtains', 'eating treats'], false, true, false, 'serena.jpeg');
const jumper = new Kitten('Jumper', ['sunbeams', 'yarn', 'milk', 'paper bags'], false, true, true, 'jumper.jpeg');

frankie.meow();
serena.meow();
jumper.meow();

frankie.render();
serena.render();
jumper.render();
