const PubSub = require('../helpers/pub_sub.js');

const Primer = function () {

};

Primer.prototype.is_prime = function (number_in) {

};

Primer.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-input', (event) => {
    const input_number = event.detail;
    const result = this.is_prime(input_number);
    PubSub.publish('Primer:result-out', result);
  });
};

module.exports = Primer;
