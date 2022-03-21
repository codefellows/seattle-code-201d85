'use strict';

// the core focus of today is on the basics of arrays - focused mainly on finding an item via it's index
// start the conversation with a reminder that JS is 0 based indexed - it counts up from 0, not 1

// create the following array and work with a few basic methods (below) to get students into the mindset of how an array can collect data
// lets also show them how we can work with that data given a great set of array tools - keep this simple:
// getting the length of the array, removing the last item, and adding to a new array are a good starting point

let items = ['pencil', 'hat', 'book'];
let nums = [2, 3, 4, 5];

console.log('writing utensil:', items[0]);
console.log('reading utensil:', items[2]);

// extend on the math operations as you deem fit - main goal is to be able to find an item in an array
console.log('math is fun:', nums[0] * nums[1]);

// simple methods
items.length; // returns the length of the array
items.pop(); // returns the last item

// empty array, add something to it
let data = [];

data.push('some cool words');

console.log('our array has stuff!', data);