'use strict';
console.log('this directory contains syntax errors');
//global Variables
CookieStand.all = [];
CookieStand.totalHourArray = [];
CookieStand.storeForm = document.getElementById('storeForm');
CookieStand.standsTable = document.getElementById('standsTable');
CookieStand.allLocationsRef = [];
//all are props of CoookieS
//TODO add no maximum lower than minimum if(min > max) {return alert('min must be less than max')}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function CookieStand(name, minCustomers, maxCustomers, aveCookies){
  this.name = name;
  CookieStand.allLocationsRef.push(this.name);
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.aveCookies = aveCookies;
  this.openTime = 6;
  this.closeTime = 21;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  this.cookieSoldArray = [];
  this.cookieSoldTable = [];
  this.sumCookieSold = 0;
  CookieStand.all.push(this);
  this.randRate();
  this.createHourlyRateTable();
}


CookieStand.prototype.randRate = function(){
  for(let i = 0; i < (this.closeTime - this.openTime); i++){
    this.cookieSoldArray.push(Math.floor(this.aveCookies * (Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)));
  };
  this.cookieSoldTotal = 0;
  for(i in this.cookieSoldArray){
    this.cookieSoldTotal += this.cookieSoldArray[i];
  }
  this.cookieSoldArray.push(this.cookieSoldTotal);
};

CookieStand.prototype.createHourlyRateTable = function(){
  this.trEl = document.createElement('tr');
  CookieStand.standsTable.appendChild(this.trEl);
  let locCSArray = this.cookieSoldArray.slice(0);
  // this.cookieSoldArray.unshift(this.name);
  locCSArray.unshift(this.name);

  for(let i = 0; i < locCSArray.length; i++){
    this.tdEl = document.createElement('td');

    this.tdEl.textContent = locCSArray[i];
    this.trEl.appendChild(this.tdEl);
  
};

let makeHeaderRow = function(){
  let hoursLocal = ['Store', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
  let trEl = document.createElement('tr');
  for(let i = 0; i < hoursLocal.length; i++){
    let thEl = document.createElement('th');
    thEl.textContent = hoursLocal[i];
    trEl.appendChild(thEl);
  };
  CookieStand.standsTable.appendChild(trEl);
};

makeHeaderRow();

new CookieStand('Pike', 23, 65, 6.3);
new CookieStand('SeaTac', 3, 24, 1.2);
new CookieStand('Seattle Center', 11, 38, 3.7 );
new CookieStand('Capitol Hill', 20, 38, 2.3);
new CookieStand('Alki', 2, 16, 4.6);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//new Location function
//function to re-render table
function renderTable(){
  CookieStand.standsTable.innerHTML = null;
  makeHeaderRow();
  for(let i in CookieStand.all){
    CookieStand.all.i.createH0ourlyRateTable();
  }
  sumColumns();
}

// // helper functions
// CookieStand.newElement = function(type, content, parent){
//   let newEl = document.createElement(type);
// };

function handleLocationSubmit(event) {
  event.preventDefault();
  // form validation
  let name = event.target.name.value;
  let minCustomers = parseInt(event.target.minCustomers.value);
  let maxCustomers = parseInt(event.target.maxCustomers.value);
  let aveCookies = parseInt(event.target.aveCookies.value);

  if(CookieStand.allLocationsRef.indexOf(name) > -1){
    CookieStand.all[CookieStand.allLocationsRef.indexOf(name)].minCustomers = minCustomers;
    CookieStand.all[CookieStand.allLocationsRef.indexOf(name)].maxCustomers = maxCustomers;
    CookieStand.all[CookieStand.allLocationsRef.indexOf(name)].aveCookies = aveCookies;
    CookieStand.all[CookieStand.allLocationsRef.indexOf(name)].cookieSoldArray = [];
    CookieStand.all[CookieStand.allLocationsRef.indexOf(name)].randRate();
    renderTable();
    return;
  }

  let newCookieStand = new CookieStand(name,minCustomers,maxCustomers, aveCookies);

  event.target.name.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.aveCookies.value = null;
  renderTable();
};

CookieStand.storeForm.addEventListener('submit', handleLocationSubmit);


//end table construction adds
let sumColumns = function(){
  CookieStand.totalHourArray = [];
  for(let j = -1; j < CookieStand.all[0].cookieSoldArray.length ; j++){
    let hourTotal = 0;
    for(let k in CookieStand.all){
      hourTotal = hourTotal + CookieStand.all[k].cookieSoldArray[j];
    };
    CookieStand.totalHourArray.push(hourTotal);
  };
  let trEl = document.createElement('tr');
  CookieStand.standsTable.appendChild(trEl);
  for (let i in CookieStand.totalHourArray){
    let tdEl = document.createElement('td');
    if(i == 0){
      tdEl.textContent = 'Total';
    }else{
      tdEl.textContent = CookieStand.totalHourArray[i];
    };
    trEl.appendChild(tdEl);
  };
};
sumColumns();

//img carousel
