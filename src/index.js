import '@babel/polyfill'
import List from './lib/list';




document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains
  ('lecture-page');

  fetch('https://raw.githubusercontent.com/HallurKrist/Groupverkefni2/master/lectures.json')
  .then((result) => {
    debugger;
    if (!result.ok) {
      throw new Error('Non 200 status');
    }
    return result.json();
  })
  .then(data => {
    debugger; 
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
  debugger;
}
