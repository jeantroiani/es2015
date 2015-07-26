'use strict';
//Learning ES2015

//String Methods

//YOU CAN ITERATE OVER STRINGS:

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = 'abc'[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var character = _step.value;

		console.log('character: ' + character);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator['return']) {
			_iterator['return']();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

//TURN STRINGS INTO ARRAYS:  NOT WORKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let myNameToArray = [...'Jean'];
// ['J', 'e', 'a', 'n'];

//CHECKING FOR CONTAINMENT AND REPEATING STRINGS

console.log('My car is blue'.startsWith('My'));
//true
console.log('My car is blue'.endsWith('ue'));
//true
console.log('My car is blue'.includes(' i'));
//true
//Each of these methods has a position as an optional second parameter, which specifies where the string to be searched starts or ends:
console.log('My car is blue'.startsWith('y c', 1));
//true
console.log('My car is blue'.endsWith('car', 6));
//trims the line from left to right with the second argument
//true
console.log('My car is blue'.includes('car', 3));
//true
console.log('My car is blue'.includes('car', 4));
//false
console.log('My '.repeat(2));
// My My