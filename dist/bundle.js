(function () {
  'use strict';

  function empty(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }


  function card(element, data) {
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
    if ((typeof data.thumbnail) === "string"){
      theImg.setAttribute('src', `${data.thumbnail}`);
    }
    theGroup.appendChild(document.createTextNode(`${data.category}`));
    theTitle.appendChild(document.createTextNode(`${data.title}`));

    element.appendChild(theCard);
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

  function el(elType, elClass) {
    const element = document.createElement(`${elType}`);
    element.classList.add(`${elClass}`);
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
    const cards = document.querySelector('.cards');

    header(frontpage, null, true);
    debugger;
    card(cards, data[0]);
    for (const dataCard of data){
      card(cards, dataCard);
    }
  }

}());
//# sourceMappingURL=bundle.js.map
