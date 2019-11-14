import '@babel/polyfill'
import { card , header , makeMain, makeButtons } from './lib/helpers';




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
  
});

function makePage(data) {
  const frontpage = document.querySelector('.frontpage');
  header(frontpage, null, true);
  const main = makeMain(frontpage);
  makeButtons(main);
  for (const dataCard of data){
    card(main, dataCard);
  }
}
