export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function fetchData() {
  fetch('https://raw.githubusercontent.com/HallurKrist/Groupverkefni2/master/lectures.json')
  .then((result) => {
    debugger;
    if (!result.ok) {
      throw new Error('Non 200 status');
    }
    return result.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));


  // const r = new XMLHttpRequest();

  // // Sækjum slóð með GET              async
  // r.open('GET', 'https://raw.githubusercontent.com/HallurKrist/Groupverkefni2/master/lectures.json', true);
  // debugger;
  // // Fall sem keyrir við svar frá vefþjón
  // // r mun innihalda gögn um HTTP kall
  // r.onload = () => {
  //   debugger;
  // if (r.status >= 200 && r.status < 400) {
  //   message('thad tokst?');

  //   return r.response;
  // } else {
  //   console.log('villa!', r);
  // }
  // };
  // // Fall sem keyrir ef villa kemur upp
  // r.onerror = () => {
  //   console.log('villa í tengingu');
  // };

  // // Senda af stað -- verðum að kalla í þetta!
  // r.send();
}

function message(text) {
  console.log(text);
}
