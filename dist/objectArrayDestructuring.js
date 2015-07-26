'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

//OBJECT DESTRUCTURING
/*important: if the right side of the destructuring assigment evaluates to null or undefined throws an error */

//usually people do somethign like this

var person = {
	name: 'Jean',
	lastName: 'Troiani'
};

// let localUserName = person.name;
// let localUserLastName = person.lastName;

//with ES2015 you can destructure it this way and have the same result.

var localUserName = person.name;
var localUserLastName = person.lastName;

console.log(localUserName); //'Jean'
console.log(localUserLastName); //'Troiani'

//if you want to keep the original names, you can omit the new ones like this:

var name = person.name;
var lastName = person.lastName;

console.log(name); //'Jean'
console.log(lastName); //'Troiani'

//Destructuring can handle nesting:

var office = {
	open: true,
	employees: {
		number: 10
	}
};

var open = office.open;
var number = office.employees.number;

console.log(open); //true
console.log(number); // 10

/*If you want to re assign values(not using var, let, const), you can add parenthesis so it does not look like a block*/
open = office.open;
number = office.employees.number;

//ARRAY DESTRUCTURING

var animals = ['dog', 'giraffe', 'elephant'];
var firstAnimal = animals[0];
var secondAnimal = animals[1];
var thirdAnimal = animals[2];

console.log(firstAnimal); //'dog'

//Array nesting

var colours = ['Orange', ['Pink', 'blue'], 'Red'];
var firstColour = colours[0];

var _colours$1 = _slicedToArray(colours[1], 2);

var secondColour = _colours$1[0];
var thirdColour = _colours$1[1];
var fourthColour = colours[2];

console.log(secondColour); // 'Pink'
console.log(thirdColour); // 'Blue'

//Mixed Destructuring

var classes = {
	one: 'Tom',
	two: 'Gina',
	classTwo: ['Larry', 'Phill']
};

var localClassesTom = classes.one;

var _classes$classTwo = _slicedToArray(classes.classTwo, 1);

var Larry = _classes$classTwo[0];

console.log(localClassesTom); // Tom
console.log(Larry); //Larry