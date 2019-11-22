import { el, checkLecture } from './helpers';

export function lectureBottom(grid) {
  const check = el('p', 'lecture__check__link');
  const back = el('a', 'lecture__back__link');
  const checkDiv = document.createElement('div');
  const backDiv = document.createElement('div');

  checkDiv.classList.add('lecture__check');
  backDiv.classList.add('lecture__back');

  check.appendChild(document.createTextNode('Klára fyrirlestur'));
  back.appendChild(document.createTextNode('Tilbaka'));

  check.addEventListener('click', checkLecture);
  back.setAttribute('href', 'index.html');


  checkDiv.appendChild(check);
  backDiv.appendChild(back);

  grid.appendChild(checkDiv);
  grid.appendChild(backDiv);
}

function makeYoutube(element, data) {
  const videoDiv = document.createElement('div');
  const iframe = document.createElement('iframe');
  const URL = data.data;

  videoDiv.classList.add('lecture__video');
  iframe.classList.add('lecture__video__video');
  iframe.setAttribute('src', `${URL}?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1`);

  videoDiv.appendChild(iframe);
  element.appendChild(videoDiv);
}

function makeText(element, data) {
  const textDiv = document.createElement('div');
  // const text = document.createElement('p');

  textDiv.classList.add('lecture__text');

  // text.appendChild(document.createTextNode(data.data));

  const allText = data.data.split('\n');
  for (const paragraph of allText) { // eslint-disable-line no-restricted-syntax
    const text = document.createElement('p');
    text.classList.add('lecture__text__paragraph');
    text.appendChild(document.createTextNode(paragraph));
    textDiv.appendChild(text);
  }
  element.appendChild(textDiv);
}

function makeHeading(element, data) {
  const headDiv = document.createElement('div');
  const head = document.createElement('h2');

  headDiv.classList.add('lecture__heading');
  head.appendChild(document.createTextNode(data.data));

  headDiv.appendChild(head);
  element.appendChild(headDiv);
}

function makeList(element, data) {
  const listDiv = document.createElement('div');
  const list = document.createElement('ul');

  listDiv.classList.add('lecture__list');

  for (const listitem of data.data) { // eslint-disable-line no-restricted-syntax
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(listitem));
    list.appendChild(item);
  }
  listDiv.appendChild(list);
  element.appendChild(listDiv);
}

function makeQuote(element, data) {
  const quote = document.createElement('div');
  const quotee = document.createElement('div');
  const quoteBundle = document.createElement('div');

  quote.classList.add('lecture__quote__quote');
  quotee.classList.add('lecture__quote__quotee');
  quoteBundle.classList.add('lecture__quote');

  quote.appendChild(document.createTextNode(data.data));
  quotee.appendChild(document.createTextNode(data.attribute));

  quoteBundle.appendChild(quote);
  quoteBundle.appendChild(quotee);

  element.appendChild(quoteBundle);
}

function makeCode(element, data) {
  const codeDiv = document.createElement('div');
  const code = document.createElement('code');

  codeDiv.classList.add('lecture__code');

  const allCode = data.data.split('\n');
  for (let line of allCode) { // eslint-disable-line no-restricted-syntax
    if (line === '') {
      line = ' ';
    }
    const text = document.createElement('pre');
    text.appendChild(document.createTextNode(line));
    codeDiv.appendChild(text);
  }
  codeDiv.appendChild(code);
  element.appendChild(codeDiv);
}

function makeImage(element, data) {
  const img = document.createElement('img');
  const imgDiv = document.createElement('div');
  const imgCaption = document.createElement('div');

  imgDiv.classList.add('lecture__image');
  imgCaption.classList.add('lecture__image__caption');
  img.classList.add('lecture__image__img');

  const url = data.data;

  imgCaption.appendChild(document.createTextNode(data.caption));
  img.setAttribute('src', url);

  imgDiv.appendChild(img);
  imgDiv.appendChild(imgCaption);

  element.appendChild(imgDiv);
}

export function makeLecturePart(element, data) {
  const { type } = data;
  if (type === 'youtube') {
    makeYoutube(element, data);
  } else if (type === 'text') {
    makeText(element, data);
  } else if (type === 'image') {
    makeImage(element, data);
  } else if (type === 'quote') {
    makeQuote(element, data);
  } else if (type === 'code') {
    makeCode(element, data);
  } else if (type === 'heading') {
    makeHeading(element, data);
  } else if (type === 'list') {
    makeList(element, data);
  }
  document.querySelector('main').classList.add('lecture__main');
}
