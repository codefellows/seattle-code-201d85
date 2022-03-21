'use strict';
let userPoints = 0;

console.log('hello world!');

alert('Welcome to my guessing game!');

let user = prompt('What is your name?');

//user could be:
// - string
// - empty string ''
// - null

// if user is empty string or null, keep asking them for their name
// while (user === '' || user === null) {
// this is the shorter version of the above expression. it uses type coercion to our advantage
while (!user) {
  user = prompt('What is your name? Really, we need it.');
}

// this is the not-equals comparison operator
if (user !== 'stephanie') {
  alert('too bad you\'re not a stephanie');
}

alert('Hi ' + user + '! I am so glad you decided to come to my site.');

let answer = prompt('Is Stephanie\'s favorite food popcorn.', 'type yes or no').toLowerCase();
console.log(answer);

let foodsILike = ['tatertots', 'juanitas tortilla chips', 'popcorn', 'kale'];

for (let i = 0; i < foodsILike.length; i++) {
  console.log(foodsILike[i]);
}

// Lots of different array methods:

// push adds an element to the end of the array
foodsILike.push('swiss chard');

console.log(foodsILike);

// pop removes an element from the end of the array
let veggie = foodsILike.pop();
console.log(foodsILike);

// unshift adds elements to the front of the array
foodsILike.unshift('spinach');
console.log(foodsILike);

// shift removes elements from the front of the array
foodsILike.shift();
console.log(foodsILike);

// indexOf tells you the index of an element in the array; returns -1 if not found
let index = foodsILike.indexOf('popcorn');
console.log(index);

// on your own: check out splice

// yes, js lets you do this (having an array of different data types). don't do it.
let mixedUpArray = ['yeehaw', 42, true, ['yo'], {}];

//check if the user's answer is correct
// list our cases!
// yes or y
// no or n  OR some other answer besides yes or no
if (answer === 'yes' || answer === 'y') {
  // if it's correct, give them a point
  userPoints++;
} else {
  // if it's not correct, tell them to try again
  alert('Wrong! try again');
}

alert('you have ' + userPoints + ' points.');
