var Calculator = require('./../js/calculator.js').calculatorModule;
//import { Calculator } from './../js/calculator.js';

describe('Calculator', function () {
  it('should test if an age and planet exist', function() {
    let calculator = new Calculator(18, "Mercury");
    expect(calculator.age).toEqual(10)
    expect(calculator.planet).toEqual("Hello")
  });

});
