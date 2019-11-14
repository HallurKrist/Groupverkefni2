export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}


export function card(element, data) {
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

function el(elType, elClass) {
  const element = document.createElement(`${elType}`);
  element.classList.add(`${elClass}`)
  return element;
}