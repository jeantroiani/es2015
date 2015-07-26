'use strict';

//DEFAULT PARAMETER

var addTwo = function addTwo() {
	var startNumber = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	var callback = arguments.length <= 1 || arguments[1] === undefined ? function (arg) {
		console.log(arg += 2);
	} : arguments[1];

	callback(startNumber);
};
var addThree = function addThree(arg) {
	console.log(3 + arg);
};
addTwo(); //2
addTwo(8); //10
addTwo(2, addThree); //5

//You can use the word undefined to use the default value and skip one..

var multiply = function multiply() {
	var startNumber = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	var callback = arguments.length <= 1 || arguments[1] === undefined ? function (arg) {
		return console.log(arg * multiplyBy);
	} : arguments[1];
	var multiplyBy = arguments.length <= 2 || arguments[2] === undefined ? 2 : arguments[2];
	return (function () {
		callback(startNumber);
	})();
};

multiply(2, undefined, 3); //6
multiply(2, addThree, 3); //5

//REST PARAMETERS
//it's call Rest because, is the rest of the parameters you are passing, with no limit.
//And you can easily iterate starting zero of the Rest parameter.

var onePlus = function onePlus() {
	var one = 0;

	for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
		rest[_key] = arguments[_key];
	}

	for (var i = 0; i < rest.length; i++) {
		one += rest[i];
	}
	return one;
};

onePlus(2, 3, 4); // 10

//DESTRUCTURE PARAMETERS

var alumn = function alumn(name, age) {
	var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	var gender = _ref.gender;
	var course = _ref.course;
	var allergies = _ref.allergies;

	console.log(name);
	console.log(gender);
};

var jean = alumn('Jean', 33, { gender: 'Male', couse: '5th', allergies: 'Ham' }); //Jean Male

//SPREAD OPERATOR
//similar to Rest, but accepts an array and splits it in different arguments.

var findMax = function findMax() {
	for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		rest[_key2] = arguments[_key2];
	}

	if (rest.length <= 1) throw new Error();
	var max = rest[0];
	for (var i = 1; i < rest.length; i++) {
		max < rest[i] ? max = rest[i] : max = max;
	};
	return max;
};

// console.log(findMax(22)); //error
var values = [8, 21, 33, 14, 13];
//what we can do to prevent errors
console.log(findMax.apply(undefined, values)); //33
//es2015 solution
console.log(findMax.apply(undefined, values)); //33