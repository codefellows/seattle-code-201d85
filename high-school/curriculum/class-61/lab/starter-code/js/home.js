'use strict';

// TODO: set the starting slide index
let slideIndex = 0;
carousel();
function carousel() {
  let i;
  let fishImgs = document.getElementsByClassName('carouselImg');
  for (i = 0; i < fishImgs.length; i++) {
    fishImgs[i].style.display = 'none';
  }
  // TODO: increment the slideIndex
  slideIndex++;
  if (slideIndex > fishImgs.length) { slideIndex = 1; }
  fishImgs[slideIndex - 1].style.display = 'block';
  setTimeout(carousel, 1000);
}
