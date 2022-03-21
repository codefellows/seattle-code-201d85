'use strict';

// today is all about understanding the core syntax and usage of a JS object
// create the following, and detail each piece

let weather = {
  temp: 60,
  city: 'Seattle',
  rain: true,
  sun: false
}

// log each piece of the object, discussing how to drill into this single level object - multiple tier objects will come tomorrow

console.log('temp', weather.temp);
console.log('city', weather.city);
console.log('rain', weather.rain);
console.log('sun', weather.sun);

console.log('the city of', weather.city, 'will be', weather.temp, 'degrees tomorrow!');
