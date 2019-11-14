export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}


export function card(element, data) {
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

  theCards.classList.add('cards')

  theGroup.appendChild(document.createTextNode(`${data.category}`));
  theTitle.appendChild(document.createTextNode(`${data.title}`));

  element.appendChild(theCards);
}

export function header(element, data, forsida) {
  const theHeader = el('header', 'header');
  const theProtection = el('div', 'header__protection');
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

export function makeMain(element) {
  const main = el('main', null);
  const grid = el('div', 'grid');
  main.appendChild(grid);
  element.appendChild(main);
  return main;
}

export function makeButtons(element) {

}

function el(elType, elClass) {
  const element = document.createElement(`${elType}`);
  if (elClass !== null) {
    element.classList.add(`${elClass}`)
  }
  return element;
}