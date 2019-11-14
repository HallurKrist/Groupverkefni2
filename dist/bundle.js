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

    theImg.classList.add('img--fit');

    theGroup.appendChild(document.createTextNode(`${data.category}`));
    theTitle.appendChild(document.createTextNode(`${data.title}`));

    element.appendChild(theCard);
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
    const cards = document.querySelector('.cards');
    for (const dataCard of data){
      card(cards, dataCard);
    }
  }

}());
//# sourceMappingURL=bundle.js.map
