"use strict";

var _list = _interopRequireDefault(require("./lib/list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
  } else {
    const list = new _list.default();
    list.load();
    debugger;
  }
});