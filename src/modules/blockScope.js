'use strict';
//Block Scope variable declarations let, const.

var blockScope = function () {
	{
		let myName = `Jean`;
		{
			const myLastName = `Troiani`;
			myLastName = `Rojas`;
			//Error because const cannot be re-assigned.
		}
		let myName = `Piero`
		//Error because was already declared.
	}
};

//______________
// Let in for loops adds a new let definition on every run
boxOfFunctions = [];
for (let i = 0; i < 3; i++) {
	boxOfFunctions.push(
    function() {
      return console.log(i)
    }
  );
}

boxOfFunctions.map((x) => x());