"use strict";
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const anis = new Person("Anis", 2000);
const shakil = new Person("Shakil", 2002);
console.log(anis instanceof Person);
console.log(anis);
console.log(shakil);

Person.prototype.calcAge = function () {
  console.log(2050 - this.birthYear);
};

anis.calcAge();
shakil.calcAge();

console.log(anis.__proto__);
console.log(anis.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 4, 5, 6];
console.log(arr.__proto__);

console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.dir((x) => x + 1);

// Class
// const PersonCl = class {};

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jassica = new PersonCl("Jassica", 1990);
console.log(jassica);

jassica.calcAge();

console.log(jassica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}, welcome`);
};

jassica.greet();
