'use strict';
//Learning ARROW FUNCTIONS

//Basic sintax

var printName = function printName(name) {
  return 'Hello ' + name;
};
console.log(printName('Jean'));

var printLastName = function printLastName(lastName) {
  return 'Hello ' + lastName;
};
console.log(printLastName('Troiani'));

var returnObj = function returnObj(theObject) {
  return { contains: theObject };
};
var box = returnObj('candy');
console.log(box.contains);

//_____________________________________________________

var dog = {
  name: 'Spike',
  bark: function bark(name) {
    return 'woof ' + this.name;
  }
};

console.log(dog.bark());

//_____________________________________________________

var dogA = {
  name: 'Spike',
  prefixes: ['I am', 'My name', 'People call me'],
  bark: function bark() {
    this.prefixes.map(function (item) {
      console.log(item + ' ' + this.name);
    });
  }
};

dogA.bark();

//_____________________________________________________

//This bound to outer Scope.
//No arguments array is available.

var dogB = {
  name: 'Spike',
  prefixes: ['I am', 'My name', 'People call me'],
  bark: function bark() {
    var _this = this;

    var self = this;
    this.prefixes.map(function (item) {
      return console.log('Rrrgggg ' + item + ' ' + _this.name);
    });
  }
};

dogB.bark();