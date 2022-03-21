function hardcoded() {
  // always returns 2;
  return 1 + 1;
}

// function invocation - aka calling a function
hardcoded();

// dynamically accepts data, making "add" work for different numbers
function add(a, b) {
  return a + b;
}

add(10, 5);

// this is a function as an expression - just think of this as another pattern for function creation
let addAnotherWay = function(a, b) {
  return a + b;
}

addAnotherWay(5, 5);