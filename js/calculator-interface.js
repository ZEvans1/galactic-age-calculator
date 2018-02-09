import { Calculator } from './../js/calculator.js';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    let userAge = $('#user-age').val();
    let planet = $('#planet').val();
    // var output = pingPong(goal);
    // output.forEach(function(element) {
    //   $('#solution').append("<li>" + element + "</li>");
    // });
    console.log(userAge);
    console.log(planet);
  });
});
