'use strict';
//Learning ARROW FUNCTIONS

//Basic sintax

let printName = function(name) {
    return `Hello ${name}`;
};
console.log(printName(`Jean`));

let printLastName = lastName => `Hello ${lastName}`;
console.log(printLastName(`Troiani`));

let returnObj = (theObject) => ({ contains: theObject });
let box = returnObj("candy");
console.log(box.contains);

//_____________________________________________________

let dog = {
  name: 'Spike',
  bark: function(name) {
    return `woof ${this.name}`;
  }
}

console.log(dog.bark());

//_____________________________________________________

let dogA = {
  name: 'Spike',
  prefixes: [`I am`, `My name`, `People call me`],
  bark: function() {
    this.prefixes.map(function(item){
      console.log( `${item} ${this.name}`);
    });
  }
}

dogA.bark();

//_____________________________________________________

//This bound to outer Scope.
//No arguments array is available.

let dogB = {
  name: 'Spike',
  prefixes: [`I am`, `My name`, `People call me`],
  bark: function() {
    var self =this
    this.prefixes.map(item => console.log(`Rrrgggg ${item} ${this.name}`));
  }
}

dogB.bark();
