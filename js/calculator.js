export class Calculator {
  constructor(userAge, planet, expectancy) {
    this.userAge = userAge;
    this.planet = planet;
    this.expectancy = expectancy;
    console.log(userAge);
    console.log(planet);
    console.log(expectancy);
  }

  ageToSeconds() {
    let seconds = Date.parse(this.userAge) / 1000;
    let currentSeconds = new Date().getTime() / 1000;
    let difference = currentSeconds - seconds;
    return difference;
  }

  convertExpectancy() {
    const mercuryYear = 0.24;
    const venusYear = 0.62;
    const earthYear = 1.0;
    const marsYear = 1.88;
    const jupiterYear = 11.86;
    let convertedExpectancy = this.expectancy;

    if (this.planet === "Mercury") {
      return convertedExpectancy * mercuryYear;
    } else if (this.planet === "Venus") {
      return convertedExpectancy * venusYear;
    } else if (this.planet === "Earth") {
      return convertedExpectancy * earthYear;
    } else if (this.planet === "Mars") {
      return convertedExpectancy * marsYear;
    } else if (this.planet === "Jupiter") {
      return convertedExpectancy * jupiterYear;
    } else {
      return "no planet selected"
    }
  }

  convertToYears() {
    let years = this.ageToSeconds() / 31536000;
    const mercuryYear = 0.24;
    const venusYear = 0.62;
    const earthYear = 1.0;
    const marsYear = 1.88;
    const jupiterYear = 11.86;
    if (this.planet === "Mercury") {
      return years * mercuryYear;
    } else if (this.planet === "Venus") {
      return years * venusYear;
    } else if (this.planet === "Earth") {
      return years * earthYear;
    } else if (this.planet === "Mars") {
      return years * marsYear;
    } else if (this.planet === "Jupiter") {
      return years * jupiterYear;
    } else {
      return "no planet selected"
    }
  }

  userExpectancy() {
    let expectancyYears = this.convertExpectancy() - this.convertToYears();
    if (expectancyYears < 0) {
      return "You are living beyond the average life expectancy"
    } else {
      return expectancyYears + " years";
    }
  }

};
