'use strict';

console.log('hey there hey!');

// ************ GLOBAL VARIABLES ************
let votingRounds = 15;
let goatArray = [];

// ********* DOM REFERENCES **************

let imgContainer = document.getElementById('container');
let imgOne = document.getElementById('image-one');
let imgTwo = document.getElementById('image-two');


// ********* CANVAS REFERENCE **************

let ctx = document.getElementById('myChart');


// ******** LOCAL STORAGE PART 2 **************

// STEP 3: GET DATA OUT OF LOCAL STORAGE

let retreivedGoats = localStorage.getItem('goats');

console.log('Retreived Goats >>>>>', retreivedGoats);

// STEP 4: PARSE DATA FOR OUR CODE TO USE

let parsedGoats = JSON.parse(retreivedGoats);

console.log('Parsed Goats >>>>>>', parsedGoats);


// ************ CONSTRUCTOR *******************

function Goat(name, fileExtension = 'jpg') {
  this.goatName = name;
  this.img = `img/${name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;

  goatArray.push(this);
}

Goat.prototype.demoPrototype = function () {
  console.log('I am here just for the demo');
};

// instaniating new Goats

if(retreivedGoats){
  // goatArray = parsedGoats;  //<<< This is simple way to use parsed code with no prototypes

  // ***** RUNNING OUR PARSED DATA BACK THROUGH THE CONSTRUCTOR *******
  for(let i = 0; i < parsedGoats.length; i++){
    if(parsedGoats[i].goatName === 'bunny-goat'){
      let reconstructedBunnyGoat = new Goat(parsedGoats[i].goatName, 'png');
      reconstructedBunnyGoat.views = parsedGoats[i].views;
      reconstructedBunnyGoat.clicks = parsedGoats[i].clicks;
    } else {
      let reconstructedGoat = new Goat(parsedGoats[i].goatName);
      reconstructedGoat.views = parsedGoats[i].views;
      reconstructedGoat.clicks = parsedGoats[i].clicks;
    }
  }

} else {
  new Goat('bunny-goat', 'png');
  new Goat('cool-goat');
  new Goat('cruisin-goat');
  new Goat('float-your-goat');
  new Goat('goat-out-of-hand');
  new Goat('kissing-goat');
  new Goat('sassy-goat');
  new Goat('smiling-goat');
  new Goat('sweater-goat');
}

console.log(goatArray);

// *********** EXECUTABLE CODE - HELPER FUNCTIONS **********
function getRandomIndex() {
  // sourced from w3schools
  return Math.floor(Math.random() * goatArray.length);
}

function renderImg() {

  // for your lab, you will have 3 images

  let goatOneIndex = getRandomIndex();
  let goatTwoIndex = getRandomIndex();

  // validation for unique images - consider using "container" to store indexes and validate there...
  while (goatOneIndex === goatTwoIndex) {
    goatTwoIndex = getRandomIndex();
  }

  imgOne.src = goatArray[goatOneIndex].img;
  imgOne.alt = goatArray[goatOneIndex].goatName;
  goatArray[goatOneIndex].views++;

  imgTwo.src = goatArray[goatTwoIndex].img;
  imgTwo.alt = goatArray[goatTwoIndex].goatName;
  goatArray[goatTwoIndex].views++;
}

renderImg();

//  ******** EVENT HANDLERS *************

function handleClick(event) {
  let imgClicked = event.target.alt;

  for (let i = 0; i < goatArray.length; i++) {
    if (imgClicked === goatArray[i].goatName) {
      goatArray[i].clicks++;
    }
  }

  votingRounds--;

  if (votingRounds === 0) {
    imgContainer.removeEventListener('click', handleClick);

    // RENDER THE GOAT CHART
    renderGoatChart();

    // ******* LOCAL STORAGE BEGINS *************

    // STEP 1: STRINGIFY OUR GOAT DATA
    let stringifiedGoats = JSON.stringify(goatArray);

    console.log('Stringified Goats >>>>', stringifiedGoats);

    // STEP 2: SET IT INTO LOCAL STORAGE

    localStorage.setItem('goats', stringifiedGoats);
  }

  // rerender 2 new goats
  renderImg();

}

// ************ FUNCTION TO CREATE THE CHART **************

function renderGoatChart() {

  // Creating arrays to help with labels and dataset
  let goatNames = [];
  let goatVotes = [];
  let goatViews = [];

  for(let i = 0; i < goatArray.length; i++){
    goatNames.push(goatArray[i].goatName);
    goatVotes.push(goatArray[i].clicks);
    goatViews.push(goatArray[i].views);
  }

  let myChartObj = {
    type: 'bar',
    data: {
      labels: goatNames, // goat names
      datasets: [{
        label: '# of Votes', // # votes and # views
        data: goatVotes,
        backgroundColor: [
          'blue'
        ],
        borderColor: [
          'blue'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views', // # votes and # views
        data: goatViews, // the actual view or votes
        backgroundColor: [
          'black'
        ],
        borderColor: [
          'black'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };


  new Chart(ctx, myChartObj);
}


// function handleShowResults(){
//   if(votingRounds === 0){
//     for(let i = 0; i < goatArray.length; i++){
//       let li = document.createElement('li');
//       li.textContent = `${goatArray[i].goatName} was shown ${goatArray[i].views} times and clicked ${goatArray[i].clicks} times`;
//       resultsList.appendChild(li);
//     }

//   }
// }

//  ******** EVENT LISTENERS ************

imgContainer.addEventListener('click', handleClick);
// resultsBtn.addEventListener('click', handleShowResults);
