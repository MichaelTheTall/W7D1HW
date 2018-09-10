const PubSub = require('../helpers/pub_sub.js');

const FormView = function () {

};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
      const number_form_input = event.target.number.value;
      PubSub.publish('FormView:number-input', number_form_input);
  });
};

module.exports = FormView;
