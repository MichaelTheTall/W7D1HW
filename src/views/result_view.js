const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Primer:result-out', (event) => {
    const prime_result = event.detail;
    this.displayResult(prime_result);
  });
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement .textContent = `${result}`;
};


module.exports = ResultView;
