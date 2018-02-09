export class Calculator {
  constructor(userAge, planet) {
    this.userAge = userAge;
    this.planet = planet;
    console.log(userAge);
    console.log(planet);
  }

  ageToSeconds() {
    let seconds = Date.parse(this.userAge) / 1000;
    const currentSeconds = new Date().getTime() / 1000;
    let difference = currentSeconds - seconds;
    return difference;
  }

  convertToYears() {
    let years = this.ageToSeconds() / 31536000;
    return years;
  }
};
