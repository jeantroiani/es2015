'use strict';

//OBJECT DESTRUCTURING 
/*important: if the right side of the destructuring assigment evaluates to null or undefined throws an error */

//usually people do somethign like this

let person = {
	name: 'Jean',
	lastName: 'Troiani'
}

// let localUserName = person.name;
// let localUserLastName = person.lastName;

//with ES2015 you can destructure it this way and have the same result.

let {name: localUserName, lastName: localUserLastName } = person;
console.log(localUserName);			//'Jean'
console.log(localUserLastName);	//'Troiani'

//if you want to keep the original names, you can omit the new ones like this:

let {name, lastName} = person;
console.log(name); 		//'Jean'
console.log(lastName);//'Troiani'

//Destructuring can handle nesting:

let office = {
	open: true,
	employees: {
		number: 10
	}
};

let {open, employees:{number}} = office
console.log(open); 	//true
console.log(number);// 10

/*If you want to re assign values(not using var, let, const), you can add parenthesis so it does not look like a block*/
({open, employees:{number}} = office);

//ARRAY DESTRUCTURING

let animals = ['dog', 'giraffe', 'elephant'];
let [firstAnimal, secondAnimal, thirdAnimal] = animals;

console.log(firstAnimal); //'dog'

//Array nesting

let colours = ['Orange', ['Pink', 'blue'], 'Red'];
let [firstColour,[secondColour,thirdColour],fourthColour] = colours;
console.log(secondColour);// 'Pink'
console.log(thirdColour); // 'Blue'

//Mixed Destructuring

let classes = {
	one: 'Tom',
	two: 'Gina',
	classTwo: ['Larry', 'Phill'] 
}

let {one: localClassesTom, classTwo:[Larry] } = classes;

console.log(localClassesTom); 	// Tom
console.log(Larry); //Larry

