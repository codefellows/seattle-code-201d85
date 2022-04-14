'use strict';


/* TODO
Create/Add a table
Create/Add a header row to table
Create/Add a footer row to table
Create/Add a regular row to table for each shop
Need a CookieStand constructor function + methods
*/

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
  '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let tableElem = null;

function CookieStand(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookieSales = [];
  this.generateCookieSales();
}

CookieStand.prototype.generateCookieSales = function () {
  for (let i = 0; i < hours.length; i++) {
    const simulatedCustomersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
    const simulatedSales = Math.ceil(simulatedCustomersPerHour * this.avgCookiesPerCustomer);
    this.cookieSales.push(simulatedSales);
  }
}

CookieStand.prototype.render = function () {
  const rowElem = document.createElement('tr');
  tableElem.appendChild(rowElem);

  const locationElem = document.createElement('td');
  rowElem.appendChild(locationElem);
  locationElem.textContent = this.location;

  for (let i = 0; i < this.cookieSales.length; i++) {
    const salesElem = document.createElement('td');
    rowElem.appendChild(salesElem);
    salesElem.textContent = this.cookieSales[i];
  }

  const totalElem = document.createElement('td');
  rowElem.appendChild(totalElem);
  totalElem.textContent = '???'
}

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createTable() {
  const containerElem = document.getElementById('sales-data');
  tableElem = document.createElement('table');
  containerElem.appendChild(tableElem);
}

function createHeaderRow() {
  const headerRowElem = document.createElement('tr');
  tableElem.appendChild(headerRowElem);
  for (let i = 0; i < hours.length; i++) {
    const headerCellElem = document.createElement('th');
    headerRowElem.appendChild(headerCellElem);
    headerCellElem.textContent = hours[i];
  }

}

function createFooterRow() {

  const footerRowElem = document.createElement('tr');
  tableElem.appendChild(footerRowElem);
  for (let i = 0; i < hours.length; i++) {
    const footerCellElem = document.createElement('th');
    footerRowElem.appendChild(footerCellElem);
    footerCellElem.textContent = getHourlyTotalsAcrossShops();
  }

}

function getHourlyTotalsAcrossShops() {
  return 123; // TODO: need real values
}


// start
createTable();
createHeaderRow();
createFooterRow();


const cookieStands = [
  new CookieStand('Seattle', 23, 65, 6.3),
  new CookieStand('Tokyo', 3, 24, 1.2),
  new CookieStand('Dubai', 11, 38, 3.7),
  new CookieStand('Paris', 20, 38, 2.3),
  new CookieStand('Lima', 2, 16, 4.6)
];

for (let i = 0; i < cookieStands.length; i++) {
  cookieStands[i].render();
}
