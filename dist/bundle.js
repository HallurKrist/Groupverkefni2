(function () {
  'use strict';

  function empty(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
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
    debugger;
  }

}());
//# sourceMappingURL=bundle.js.map
