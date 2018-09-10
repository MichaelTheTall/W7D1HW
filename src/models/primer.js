const PubSub = require('../helpers/pub_sub.js');

const Primer = function () {

};

Primer.prototype.is_prime = function (number_in) {
  for(var i = 2; i < number_in; i++) {
      if(number_in % i === 0) {
          return `${number_in} is not a Prime!`;
      }
  }
  return `${number_in} is a Prime!`;
};

Primer.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-input', (event) => {
    const input_number = event.detail;
    const result = this.is_prime(input_number);
    PubSub.publish('Primer:result-out', result);
  });
};

module.exports = Primer;
