'use strict';
//Block Scope variable declarations let, const.

var blockScope = function blockScope() {
  {
    var myName = 'Jean';
    {
      var myLastName = 'Troiani';
      // myLastName = `Rojas`;
      //Error because const cannot be re-assigned.
    }
    // let myName = `Piero`
    //Error because was already declared.
  }
};

//______________
// Let in for loops adds a new let definition on every run
boxOfFunctions = [];

var _loop = function (i) {
  boxOfFunctions.push(function () {
    return console.log(i);
  });
};

for (var i = 0; i < 3; i++) {
  _loop(i);
}

boxOfFunctions.map(function (x) {
  return x();
});