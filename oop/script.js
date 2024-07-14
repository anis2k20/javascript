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
