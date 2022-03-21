'use strict';

// core focus:  adding arrays and sub objects to objects
// use the following object to help demonstrate the newly addeded layers

let courses = {
  starter: [
    { title: 101 },
    { title: 102 }
  ],
  beginner: { title: 201 },
  intermediate: { title: 301 },
  advanced: [
    { title: 401 },
    { length: '6 months' }
  ]
}

// show students how to "drill" into an object, using dot notation
// focus on both object and array syntax to find items

console.log('101 starter course', courses.starter[0]);

console.log('length of 401', courses.advanced.length);




