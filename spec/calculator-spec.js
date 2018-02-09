import { Calculator } from './../js/calculator.js';

describe('Calculator', function () {
  let reusableCalculator;

  beforeEach(function() {
    reusableCalculator = new Calculator(2018, "Earth", 100);
  });

  it('should test if an age and planet exist', function() {
    let calculator = reusableCalculator;
    expect(calculator.userAge).toEqual(2018)
    expect(calculator.planet).toEqual("Earth")
    expect(calculator.expectancy).toEqual(100)
  });

  it('should test if differnce is being applied', function() {
    let calculator = reusableCalculator;
    expect(calculator.ageToSeconds()).not.toEqual(100)
  });

  //why does this test return a string? it works in console logs correctly
  it('should test that seconds are being converted', function() {
  let calculator = reusableCalculator;
  expect(calculator.convertToYears()).toEqual('0.11')
  });

  it('should test that expectancy is calculated', function() {
    let calculator = reusableCalculator;
    expect(calculator.userExpectancy()).not.toEqual(100)
  });

});
