'use strict';

// the core focus of today is on working with arrays and how loops will help achieve many common goals when working with them
// follow along with the code below to present the basics of how we can iterate (loop) through a list of numbers
// focus on the array index as being the current iteration index - for example, on our first iteration, arr[i] means array at index -
// "i" just represents the first iteration, which has a 0 index - hence the arr[0] syntax

let numbers = [2, 4, 6, 8];

for (let i = 0; i < numbers.length; i++) {
  console.log('iteration:', i);
  console.log('number at iteration, doubled:', numbers[i] + numbers[i]);
}

// try another one with strings!

let people = ['sally', 'sam', 'susan'];

for (let i = 0; i < people.length; i++) {
  if (people[i] === 'sam') {
    console.log('we found:', people[i]);
    console.log('current iteration/idx', i);
  }
}