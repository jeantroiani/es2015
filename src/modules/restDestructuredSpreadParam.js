'use strict';

//DEFAULT PARAMETER

let addTwo = function (startNumber = 0, callback = function(arg){ console.log(arg += 2)}) {
	 callback(startNumber); 
};
let addThree = function (arg) {
	console.log(3 + arg);
};
addTwo(); 						//2
addTwo(8); 						//10
addTwo(2, addThree); 	//5

//You can use the word undefined to use the default value and skip one..

let multiply = function (startNumber = 1, callback = (arg) => console.log(arg * multiplyBy), multiplyBy = 2) {
	callback(startNumber);
};

multiply(2, undefined, 3); //6
multiply(2, addThree, 3); //5

//REST PARAMETERS
//it's call Rest because, is the rest of the parameters you are passing, with no limit.
//And you can easily iterate starting zero of the Rest parameter.

var onePlus = function (...rest) {
	let one = 0;
	for (let i = 0; i < rest.length; i++ ) {
		one += rest[i];
	}
	return one;
};

onePlus(2, 3, 4); // 10

//DESTRUCTURE PARAMETERS

let alumn = function (name, age, {gender, course, allergies} = {}) {
	console.log(name);
	console.log(gender);
};

let jean = alumn('Jean', 33, {gender: 'Male', couse: '5th', allergies: 'Ham'}); //Jean Male

//SPREAD OPERATOR 
//similar to Rest, but accepts an array and splits it in different arguments.

let findMax = function (...rest) {
	if (rest.length <= 1) throw new Error;
		let max = rest[0];
	for(let i = 1; i < rest.length; i++ ) {
		max < rest[i] ? max = rest[i]: max = max;
		};
	return max;
};

// console.log(findMax(22)); //error
let values = [8,21,33,14,13];
//what we can do to prevent errors
console.log(findMax.apply(undefined, values)); //33
//es2015 solution
console.log(findMax(...values)); //33
