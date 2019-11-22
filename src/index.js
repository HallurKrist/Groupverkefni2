import '@babel/polyfill'
import { cards , header , makeMainNGrid, makeButtons, el } from './lib/helpers';
import { makeLecturePart } from './lib/lecture';




document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains
  ('lecture-page');
  let theData;

   fetch('https://raw.githubusercontent.com/HallurKrist/Groupverkefni2/master/lectures.json')
   .then((result) => {
     if (!result.ok) {
       throw new Error('Non 200 status');
     }
     return result.json();
   })
   .then(data => {
     makePage(data.lectures, isLecturePage);
   })
   .catch(error => console.error(error));

});

export function makePage(data, isLecture) {

  if(isLecture) {
    console.log('on lecture page');
    const lecturePage = document.querySelector('.lecture-page');
    const theLect = JSON.parse(window.localStorage.getItem('lecture'));
    const lectArray = theLect.content;

    header(lecturePage, theLect, false);

    const grid = makeMainNGrid(lecturePage);
    
    for(const lectPart of lectArray) {
      makeLecturePart(grid,lectPart);
    }

    const check = el('p','lectCheck');
    const back = el('a','tilbaka');

    check.appendChild(document.createTextNode('Klára fyrirlestur'));
    back.appendChild(document.createTextNode('Tilbaka'));

    //check.addEventListener('click', '');
    back.setAttribute('href', 'index.html');

    grid.appendChild(check);
    grid.appendChild(back);
  } else {
    const frontpage = document.querySelector('.frontpage');
    header(frontpage, null, true);
    const grid = makeMainNGrid(frontpage);
    makeButtons(grid);
    window.localStorage.setItem('data', JSON.stringify  (data));
    cards(grid, data);
  }
}


