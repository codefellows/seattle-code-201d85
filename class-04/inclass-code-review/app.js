'use strict';

console.log('hey world hey!');

// Add a 6th question to the guessing game that takes in a numeric input by

let myNumber = 30;
// prompting the user to guess a number.

for(let i = 0; i < 4; i++){
  let userGuess = parseInt(prompt('Guess a number I am thinking of'));
  if(userGuess === myNumber){
    alert('You are correct!');
    i = 4;
    // break;
  } else if(userGuess > myNumber){
    // Indicates through an alert if the guess is “too high
    alert('Too high');
  } else if(userGuess < myNumber){
    // alert if “too low”.
    alert('Too low');
  }
  if(i === 3 && userGuess !== myNumber){
    alert('The correct answer is 30');
  }
}

// alert if correct
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer.


// Add a 7th question that has multiple possible correct answers that are stored in an array.

function q7(){
  let favBoyBands = ['backstreet boys', 'bts', 'one direction', 'take that']
  // Give the user 6 attempts to guess the correct answer.

  for (let i = 0; i < 6; i++) {  // slow loop
    let questionSeven = prompt('Guess one of my fav boybands');
    // questionSeven = nsync

    for (let j = 0; j < favBoyBands.length; j++) {  // fast loop
      if (questionSeven === favBoyBands[j]) {
        alert('OMG I LOVEEE them!');
        i = 6;
        break;
      }
    }
  }

  alert(`Here are all my fav boybands: ${favBoyBands}`);

}

q7();

// The guesses will end once the user guesses a correct answer
//or they run out of attempts.

// Display all the possible correct answers to the user.
