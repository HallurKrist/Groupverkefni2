(function () {
  'use strict';

  function empty(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }


  function card(element, data) {
    const theCards = el('div', 'row');
    const theCard = el('div', 'card');
    const imgDiv = el('div', 'image');
    const textDiv = el('div', 'text');
    const theImg = el('img', 'img');
    const theGroup = el('h3', 'group');
    const theTitle = el('h1', 'title');

    imgDiv.appendChild(theImg);
    textDiv.appendChild(theGroup);
    textDiv.appendChild(theTitle);
    theCard.appendChild(imgDiv);
    theCard.appendChild(textDiv);
    theCards.appendChild(theCard);

    if ((typeof data.thumbnail) === "string"){
      theImg.setAttribute('src', `${data.thumbnail}`);
    }

    theCards.classList.add('cards');

    theGroup.appendChild(document.createTextNode(`${data.category}`));
    theTitle.appendChild(document.createTextNode(`${data.title}`));

    element.appendChild(theCards);
  }

  function header(element, data, forsida) {
    const theHeader = el('header', 'header');
    const theProtection = el('div', 'protection');
    const theEfri = el('h3', 'header__efri');
    const theNedri = el('h1', 'header__nedri');

    theProtection.appendChild(theEfri);
    theProtection.appendChild(theNedri);
    theHeader.appendChild(theProtection);

    if (forsida) {
      theEfri.appendChild(document.createTextNode('Vefforritun'));
      theNedri.appendChild(document.createTextNode('Fyrirlestrar'));
    } else {
      theEfri.appendChild(document.createTextNode(`${data.category}`));
      theNedri.appendChild(document.createTextNode(`${data.title}`));
    }
    

    element.appendChild(theHeader);
  }

  function makeMain(element) {
    const main = el('main', null);
    element.appendChild(main);
    return main;
  }

  function el(elType, elClass) {
    const element = document.createElement(`${elType}`);
    if (elClass !== null) {
      element.classList.add(`${elClass}`);
    }
    return element;
  }

  class List {
    constructor() {
      this.container = document.querySelector('.list');
    }

    load() {
      empty(this.container);
    }
  }

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
      makePage(data.lectures);
    })
    .catch(error => console.error(error));


    if (isLecturePage) ; else {
      const list = new List();
      // list.load();
    }
    
  });

  function makePage(data) {
    const frontpage = document.querySelector('.frontpage');
    header(frontpage, null, true);
    const main = makeMain(frontpage);
    
    for (const dataCard of data){
      card(main, dataCard);
    }
  }

}());
//# sourceMappingURL=bundle.js.map
