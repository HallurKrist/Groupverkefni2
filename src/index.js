import '@babel/polyfill'
import { cards , header , makeMainNGrid, makeButtons } from './lib/helpers';




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
  
   debugger;
});

export function makePage(data, isLecture) {
  debugger;
  if (isLecture) {
    console.log('on lecture page');
  } else {
    const frontpage = document.querySelector  ('.frontpage');
    header(frontpage, null, true);
    const grid = makeMainNGrid(frontpage);
    makeButtons(grid);
    cards(grid, data);
  }
}
