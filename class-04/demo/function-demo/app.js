console.log('boooooyaaa!');

// what is a function?
// function declaration
function sayHello(){
  console.log('hello world');
}

// invoke or call a function
sayHello();

// when you declare a function you have pramaters that give names to the functions inputs
function sayGoodBye(name){
  console.log('good bye ' + name);
}

// the data we pass into a function is called an argument
sayGoodBye('neo');

// if we want to pass information back to the program we can use a return statment

function getFullName(firstName, secondName){
  return firstName + ' ' + secondName;
}

let ada = getFullName('ada', 'lovelace');
console.log('ada: ' + ada);

function yesOrNoPrompt(promptInfo){
  let userInput = prompt(promptInfo);
  if (userInput === 'yess'){
    console.log('hurray');
  } else if ( userInput === 'no'){
    console.log('nope');
  } else if (userInput === 'mabe'){
    console.log('make up your mind');
  } else {
    console.log('ERROR: incorrect useage');
  }
}

yesOrNoPrompt('whell yess or no');
yesOrNoPrompt('how bout yess or no');
