const hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
const shops = [];
let tbl;

function CookieShop(name, minCustomer, maxCustomer, avgCustomer) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCustomer = avgCustomer;
  this.id = name.replace(' ', '').toLowerCase();
  this.hourlyCookies = [];
  this.dailyCookies = 0;
  shops.push(this);

  this.generateHourly();
}

CookieShop.prototype.generateRandom = function (min, max) {
  return Math.random() * (max - min) + min;
};

CookieShop.prototype.generateHourly = function () {
  for (let i = 0; i < hours.length; i++) {
    const cookie = Math.floor(this.avgCustomer * this.generateRandom(this.minCustomer, this.maxCustomer));
    this.hourlyCookies.push(cookie);
    this.dailyCookies += cookie;
  }
};

function renderTable() {
  tbl = document.createElement('table');
  tbl.id = 'table';

  const tHead = document.createElement('thead');
  const tBody = document.createElement('tbody');
  tBody.id = 't-body';
  const tFoot = document.createElement('tfoot');
  tFoot.id = 't-foot';

  const trEl_one = document.createElement('tr');
  const thEl_one = document.createElement('th');
  thEl_one.textContent = '';
  trEl_one.appendChild(thEl_one);

  for (let i = 0; i < hours.length; i++) {
    const thEl_two = document.createElement('th');
    thEl_two.textContent = hours[i];
    trEl_one.appendChild(thEl_two);
  }

  const thEl_three = document.createElement('th');
  thEl_three.textContent = 'Totals';
  trEl_one.appendChild(thEl_three);

  tHead.appendChild(trEl_one);

  tbl.appendChild(tHead);
  tbl.appendChild(tBody);
  tbl.appendChild(tFoot);

  document.getElementById('store_data').appendChild(tbl);
}

function renderStore(store) {
  const tableBody = document.getElementById('t-body');
  const trEl_two = document.createElement('tr');
  const thEl_four = document.createElement('th');
  thEl_four.textContent = store.name;
  trEl_two.id = store.id;
  trEl_two.appendChild(thEl_four);

  for (let j = 0; j < hours.length; j++) {
    const tdEl_one = document.createElement('td');
    tdEl_one.textContent = store.hourlyCookies[j];
    trEl_two.appendChild(tdEl_one);
  }

  const tdEl_two = document.createElement('td');
  tdEl_two.textContent = store.dailyCookies;
  trEl_two.appendChild(tdEl_two);

  tableBody.appendChild(trEl_two);
}

function renderAllStores() {
  const tBody = document.getElementById('t-body');
  tBody.innerHTML = '';

  for (let i = 0; i < shops.length; i++) {
    renderStore(shops[i]);
  }

  renderTotals();
}

function renderNew(name, minimum, maximum, average) {
  new CookieShop(name, minimum, maximum, average);
  renderAllStores();
}

function renderUpdate(shop, min, max, avg) {
  const trEl = document.getElementById(shop.name.replace(' ', '').toLowerCase());

  shop.minCustomer = min;
  shop.maxCustomer = max;
  shop.avgCustomer = avg;
  shop.hourlyCookies = [];
  shop.dailyCookies = 0;
  shop.generateHourly();

  for (let i = 0; i < shop.hourlyCookies.length; i++) {
    trEl.childNodes[i + 1].textContent = shop.hourlyCookies[i];
  }
  trEl.childNodes[trEl.childNodes.length - 1].textContent = shop.dailyCookies;
}

function renderTotals() {

  const tFoot = document.getElementById('t-foot');
  tFoot.innerHTML = '';

  const trEl = document.createElement('tr');
  let thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);

  let total = 0;

  for (let hourIndex = 0; hourIndex < hours.length; hourIndex++) {
    let hourlyTotal = 0;
    for (let shopIndex = 0; shopIndex < shops.length; shopIndex++) {
      hourlyTotal += shops[shopIndex].hourlyCookies[hourIndex];
    }
    thEl = document.createElement('th');
    thEl.textContent = hourlyTotal;
    trEl.appendChild(thEl);

    total += hourlyTotal;
  }

  thEl = document.createElement('th');
  thEl.textContent = total;
  trEl.appendChild(thEl);

  tFoot.appendChild(trEl);
}

document.getElementById('new-store').addEventListener('submit', function (event) {
  event.preventDefault();
  let exists = false;
  const store = event.target.location.value;
  const min = parseInt(event.target.min.value);
  const max = parseInt(event.target.max.value);
  const avg = parseInt(event.target.avg.value);

  let i = 0;
  for (i; i < shops.length; i++) {
    if (shops[i].id === store.replace(' ', '').toLowerCase()) {
      exists = true;
      break;
    }
  }

  if (exists === true) {
    renderUpdate(shops[i], min, max, avg);
  } else {
    renderNew(store, min, max, avg);
  }

  event.target.store.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
});

function setup() {
  renderTable();
  new CookieShop('Seattle', 23, 65, 6.3, 'seattle');
  new CookieShop('Tokyo', 3, 24, 1.2, 'seatac');
  new CookieShop('Dubai', 11, 38, 3.7, 'dubai');
  new CookieShop('Paris', 20, 38, 2.3, 'paris');
  new CookieShop('Lima', 2, 16, 4.6, 'lima');
  renderAllStores();
}

setup();
