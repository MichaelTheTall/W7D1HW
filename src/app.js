const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');
const Primer = require('./models/primer.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const formView = new FormView();
  formView.bindEvents();

  const primer = new Primer();
  primer.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

});
