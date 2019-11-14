import '@babel/polyfill'
import List from './lib/list';
import { card , header } from './lib/helpers';




document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains
  ('lecture-page');

  fetch('https://raw.githubusercontent.com/HallurKrist/Groupverkefni2/master/lectures.json')
  .then((result) => {
    if (!result.ok) {
      throw new Error('Non 200 status');
    }
    return result.json();
  })
  .then(data => {
    makePage(data.lectures)
  })
  .catch(error => console.error(error));


  if (isLecturePage) {
  } else {
    const list = new List();
    // list.load();
  }
  
});

function makePage(data) {
  const page = data;
  const frontpage = document.querySelector('.frontpage');
  const cards = document.querySelector('.cards');

  header(frontpage, null, true);
  debugger;
  card(cards, data[0]);
  const cards = document.querySelector('.cards');
  for (const dataCard of data){
    card(cards, dataCard);
  }
}
