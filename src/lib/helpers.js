export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function cards(element, data) {
  const theCards = el('div', 'row');

  theCards.classList.add('cards');

  for (const dataCard of data){
    card(theCards, dataCard);
  }

  element.appendChild(theCards);
}

export function card(element, data) {
  const theCol = el('div', 'col');
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
  theCol.appendChild(theCard);

  if ((typeof data.thumbnail) === "string"){
    theImg.setAttribute('src', `${data.thumbnail}`);
  } else {
    imgDiv.classList.add('img--noImg')
  }

  theGroup.appendChild(document.createTextNode(`${data.category}`));
  theTitle.appendChild(document.createTextNode(`${data.title}`));

  element.appendChild(theCol);
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

export function makeMainNGrid(element) {
  const main = el('main', null);
  const grid = el('div', 'grid');
  main.appendChild(grid);
  element.appendChild(main);
  return grid;
}

export function makeButtons(element) {
  const buttons = el('div', 'row');
  const button1 = el('button','button__header');
  const button2 = el('button','button__header');
  const button3 = el('button','button__header');

  buttons.appendChild(button1);
  buttons.appendChild(button2);
  buttons.appendChild(button3);

  button1.appendChild(document.createTextNode('HTML'));
  button2.appendChild(document.createTextNode('CSS'));
  button3.appendChild(document.createTextNode('JavaScript'));

  button1.addEventListener('click', toggle);
  button2.addEventListener('click', toggle);
  button3.addEventListener('click', toggle);

  buttons.classList.add('buttons');

  element.appendChild(buttons);
}

function toggle(){
  this.classList.toggle('button__active');
  console.log('actived');
}

function el(elType, elClass) {
  const element = document.createElement(`${elType}`);
  if (elClass !== null) {
    element.classList.add(`${elClass}`)
  }
  return element;
}