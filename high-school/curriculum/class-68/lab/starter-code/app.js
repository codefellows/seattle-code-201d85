'use strict';

// TODO: assign `formId` the string value of the form's id
const formId;
const form = document.getElementById(formId);

// TODO: assign `eventType` the string value of the event type for submitting a form
const eventType;
form.addEventListener(eventType, renderDivCallback);

function renderDivCallback(event){

  // TODO: prevent the default form behavior (refreshing the page when the form is submitted)


  // TODO: replace each `NAME_FROM_FORM` property with the name of the correct input from the form
  const chosenColor = event.target.NAME_FROM_FORM.value;
  const chosenDestination = event.target.NAME_FROM_FORM.value;

  // TODO: assign `elementType` the string value that will tell the createElement method to create a div
  const elementType;
  const div = document.createElement(elementType);

  div.style.background = chosenColor;

  if(chosenDestination === 'top-left'){

    const topLeftSection = document.getElementById('top-left');

    // TODO: uncomment the next line and submit the form with `Top Left` selected to console.log `topLeftSection`, 
    // console.log('topLeftSection: ', topLeftSection);
    // TODO: what javascript type is being stored in `topLeftSection` by getElementById 
    // ANSWER HERE:

    topLeftSection.appendChild(div);
  }

  if (chosenDestination === 'top-right') {
    const topRightElements = document.getElementsByClassName('top-right');

    // TODO: uncomment the next line and submit the form with `Top Right` selected to console.log `topRightElements`, 
    // console.log('topRightElements: ', topRightElements);
    // TODO: what javascript type is being stored in `topRightElements` by getElementsByClassName
    // ANSWER HERE:

    // TODO: set topRightSection equal to the first element in topRightElements
    const topRightSection;
    topRightSection.appendChild(div);
  }

  if (chosenDestination === 'bottom-left') {
    const bottomLeftSection = document.querySelector('section:nth-child(3)');

    // TODO: uncomment the next line and submit the form with `Bottom Left` selected to console.log `bottomLeftSection`, 
    // console.log('bottomLeftSection: ', bottomLeftSection);
    // TODO: what javascript type is being stored in `bottomLeftSection` by querySelector 
    // ANSWER HERE:

    bottomLeftSection.appendChild(div);
  }

  if (chosenDestination === 'bottom-right') {
    const bottomRightElements = document.getElementsByTagName('article');
    // TODO: uncomment the next line and submit the form with `Bottom Right` selected to console.log `bottomRightElements`, 
    // console.log('bottomRightElements: ', bottomRightElements);
    // TODO: what javascript type is being stored in `bottomRightElements`  by getElementsByTagName
    // ANSWER HERE:
   
    // TODO: set bottomRightArticle equal to the first element in bottomRightElements
    const bottomRightArticle;
    bottomRightArticle.appendChild(div);
  }
}
