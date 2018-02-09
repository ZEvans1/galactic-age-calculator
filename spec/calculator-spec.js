import { Calculator } from './../js/calculator.js';

describe('Calculator', function () {
  it('should test if an age and planet exist', function() {
    let calculator = new Calculator(18, "Mercury", 100);
    expect(calculator.userAge).toEqual(18)
    expect(calculator.planet).toEqual("Mercury")
    expect(calculator.expectancy).toEqual(100)
  });

  it('should test if difference works', function() {
    let calculator = new Calculator(1000, "Mercury", 100);
    expect(calculator.convertToYears()).not.toEqual(1)
  });

  it('should test if an age is converted', function() {
    let calculator = new Calculator(31536000, "Earth", 100)
    expect(calculator.convertToYears()).toEqual(1)
  });
});
