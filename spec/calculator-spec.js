import { Calculator } from './../js/calculator.js';

describe('Calculator', function () {
  it('should test if an age and planet exist', function() {
    let calculator = new Calculator(18, "Mercury");
    expect(calculator.userAge).toEqual(18)
    expect(calculator.planet).toEqual("Mercury")
  });

describe('Calculator', function () {
  it('should test if a year can be converted to seconds', function() {
    let calculator = new Calculator(1, "Mercury");
    expect(calculator.ageToSeconds()).toEqual(31536001)
  });


});
