// Animal Constructor
function Animal (name) {
  this.name = name;
};

// Animal's walk prototype method
Animal.prototype.walk = function() {
  console.log('Walking ...');
};

// Dog Constructor
function Dog(name) {
  // "extending" or copying details of the Animal constructor to here
  // this is considered inheritance
  Animal.call(this, name);
};

// Instantiate an Animal
// We are both a Dog and an Animal (dogs are copies of animals, with their own overrides)
Dog.prototype = Object.create(Animal.prototype);

// Dog specific prototype methods
Dog.prototype.speak = function() {
  console.log('WOOF!');
};