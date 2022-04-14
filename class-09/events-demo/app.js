// some things happe
console.log('I happened when page loaded');

// wire up event listeners
const buttonElem1 = document.getElementById('btn-1');
const buttonElem2 = document.getElementById('btn-2');

function clickHandler() {
  alert("I was clicked and am in named function");
}

buttonElem1.addEventListener('click', clickHandler);

buttonElem2.addEventListener('click', function () {
  alert("I was clicked and am in anonymous function");
});


// form event handling
function handleSubmit(event) {
  event.preventDefault();
  const userNameInputElem = event.target.userName;
  const userAgeInputElem = event.target.age;
  const userAgeValueAsInt = parseInt(userAgeInputElem.value);
}

const formElem = document.getElementById('my-form');
formElem.addEventListener('submit', handleSubmit);


const cookieFormElem = document.getElementById('cookie-stand-form');
cookieFormElem.addEventListener('submit', function (event) {
  event.preventDefault();
  const location = event.target.location.value;
  const minCustomers = parseInt(event.target.minCustomers.value);
  const maxCustomers = parseInt(event.target.maxCustomers.value);
  const avgCookiesPerCustomer = parseFloat(event.target.avgCookies.value);
  console.log(location, minCustomers, maxCustomers, avgCookiesPerCustomer)
});

console.log('I also happened when page loaded');
