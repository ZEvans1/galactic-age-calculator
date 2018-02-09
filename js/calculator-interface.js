import { Calculator } from './../js/calculator.js';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    let userAge = $('#user-age').val();
    let planet = $('#planet').val();
    let calculator = new Calculator(userAge, planet);
    calculator.ageToSeconds();
    calculator.convertToYears();
    console.log(calculator.ageToSeconds());
    console.log(calculator.convertToYears());
  });
});
