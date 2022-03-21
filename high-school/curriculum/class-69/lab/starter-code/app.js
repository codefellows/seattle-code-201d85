'use strict';

const form = document.getElementsByTagName('FORM')[0];

form.addEventListener('submit', makeNewArticle);

function makeNewArticle(event){
  event.preventDefault();
  const title = event.target.title.value;
  const journal = event.target.content.value;
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  h2.textContent = title;
  article.appendChild(h2);
  const p = document.createElement('p');
  p.textContent = journal;
  article.appendChild(p);
  const main = document.querySelector('main');
  main.appendChild(article);
}
