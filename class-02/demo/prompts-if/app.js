'use strict';

// If conditional based confirm command
let answer1 = confirm('Are you ready to rumble?');
if (answer1 === true) {
  console.log('LET\'S GET READY TO RUMBLE!!!');
} else {
  console.log('Oh. Well then.');
}

// logical operator example
let myBool = true;
let anotherBool = false;
let thirdBool = true;

// And = both conditions have to be true
if (myBool && thirdBool) {
  console.log('myBool and thirdBool were both true');
} // only one of these have to be true
else if (myBool || anotherBool) {
  console.log('My bool or anotherBool was true!');
} // only thirdBool can be true
else if (thirdBool) {
  console.log('myBool and anotherBool were false, but thirdBool was true.');
} // none of the above conditions were true
else {
  console.log('Were any of my variables true?');
}

let color = prompt('what is your favorite color');

// convert the variable of color to lower case and evaluate it
switch (color.toLowerCase()) {
case 'red':
  console.log('your favorite color was red!');
  break;
case 'blue':
  console.log('your favorite color was blue!');
  break;
default:
  console.log('i don\'t know what your favorite color was ¯\\_(ツ)_/¯');
}
