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

    if (calculator.userExpectancy() == true) {
      $("#expectancy-result").text("You are living beyond the average life expectancy");
    } else {
      $("#expectancy-result").text(calculator.userExpectancy());
    }

    if (calculator.ageToSeconds() <= 0) {
      alert("You must be more than 0 years old to use this.")
      $("#age-result").text("(negative years old!?!?)");
      $("#expectancy-result").text("invalid calculation");
    }
  });
});
