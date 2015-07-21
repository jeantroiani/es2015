'use strict';
//Learning Template Strings

//this function gets called from a  tagged string and evaluates two arrays, one for strings and one for the variables that have to evaluate. It always start and ends in string.

let string = function (literals,...evaluate) {
  let string = ``;
  let upperCaseName = function(name){
    let newString = name;
    if (newString === 'jean') {
      newString = 'Jean'
    };
    return newString;
  };

  for(let i = 0; i < evaluate.length; i = 1 + i) {
    string = `${string} ${literals[i]}`;
    string = `${string} ${upperCaseName(evaluate[i])}`;
  }
  string = string + literals[literals.length-1];
  // return evaluate;
  // return literals;
  return string;
}

//You can save variables and have template string using backticks `` then interpolate them using ${  }, also you can call functions adding a word in front of it.
let name = 'jean';
let currentYear = 2015;
let yearBorn = 1981;
let message = string`In${currentYear}${name}has${currentYear - yearBorn}`

console.log(message);

