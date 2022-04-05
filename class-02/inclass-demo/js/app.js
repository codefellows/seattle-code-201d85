'use strict';

let siteVisitor = prompt('Hey! What is your name?');

alert(`Welcome ${siteVisitor}, let's play a guessing game. Please answer Yes or No.`);


let questionOne = prompt('Do I have a daughter?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y'){
  alert('You are correct!');
} else if(questionOne === 'no' || questionOne === 'n'){
  alert('Sorry, that was a wrong guess');
} else {
  alert('Please answer with a valid response!');
}
