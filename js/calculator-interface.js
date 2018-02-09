import { Calculator } from './../js/calculator.js';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    let userAge = $('#user-age').val();
    let planet = $('#planet').val();
    let expectancy = parseInt($('#expectancy').val());
    let calculator = new Calculator(userAge, planet, expectancy);
    $("#hide").show();
    $("#age-result").text(calculator.convertToYears());
    $(".planet-choice").text(calculator.planet);
    $("#expectancy-result").text(calculator.userExpectancy());
  });
});
