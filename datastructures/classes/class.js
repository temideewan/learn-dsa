class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) return "you are expelled";
    return ` ${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum =  this.scores.reduce(function (a, b) {
      return a + b;
    });

    return sum / this.scores.length;
  }
}

let temidayo = new Student("temidayo", "abraham", 5);
let michael = new Student("michael", "omoyajowo", 5);
console.log(temidayo.tardies);
console.log(temidayo.markLate());
console.log(temidayo.tardies);
console.log(temidayo.markLate());
console.log(temidayo.tardies);
console.log(temidayo.markLate());
console.log(temidayo.tardies);
console.log(temidayo.scores);
console.log(temidayo.addScore(98));
console.log(temidayo.addScore(75));
console.log(temidayo.calculateAverage());
