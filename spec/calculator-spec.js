import { Calculator } from './../js/calculator.js';

describe('Calculator', function () {
  it('should test if an age and planet exist', function() {
    let calculator = new Calculator(18, "Mercury");
    expect(calculator.userAge).toEqual(18)
    expect(calculator.planet).toEqual("Mercury")
  });

  it('should test if difference works', function() {
    let calculator = new Calculator(1, "Mercury");
    expect(calculator.convertToYears()).not.toEqual(1)
  });
});
