'use strict';

const catbutton = document.getElementById('catbutton');

const handleCatButtonClick = function(){
  const catsFromLS = JSON.parse(localStorage.cats);
  console.log('allCats array after retrieving from local storage', allCats);
  for (let i = 0; i < catsFromLS.length; i++){
    const newCat = new Cat(catsFromLS[i].name);
    newCat.render();
  }
  console.log('allCats array after reinstantiating through our Cat constructor', allCats);
};

catbutton.addEventListener('click', handleCatButtonClick);
