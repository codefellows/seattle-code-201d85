// Constructor functions always start with a capital letter
// they are meant to "construct an object" -> hence the name

function Person(name, age) {
  this.name = name; // dynamic name for each person we instantiate later
  this.age = age; // dynamic age for each person we instantiate later
  this.alive = true; // hardcoded, will always be true upon instantiation
  this.getAge = function() {
    return this.age;
  }
}

// object instantiation
// here, we are able to create new objects, with a similar type -> "person"
let bob = new Person('bob', 45);
let sally = new Person('sally', 30);
let tim = new Person('tim', 21);

// "methods" are just functions that are properties on an objects
tim.getAge(); // returns 21 -> "tim" is the object, name/age/alive/getAge are his properties