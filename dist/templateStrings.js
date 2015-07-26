'use strict';

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//Learning Template Strings

//this function gets called from a  tagged string and evaluates two arrays, one for strings and one for the variables that have to evaluate. It always start and ends in string.

var string = function string(literals) {
  var string = '';
  var upperCaseName = function upperCaseName(name) {
    var newString = name;
    if (newString === 'jean') {
      newString = 'Jean';
    };
    return newString;
  };

  for (var _len = arguments.length, evaluate = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    evaluate[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < evaluate.length; i = 1 + i) {
    string = string + ' ' + literals[i];
    string = string + ' ' + upperCaseName(evaluate[i]);
  }
  string = string + literals[literals.length - 1];
  // return evaluate;
  // return literals;
  return string;
};

//You can save variables and have template string using backticks `` then interpolate them using ${  }, also you can call functions adding a word in front of it.
var name = 'jean';
var currentYear = 2015;
var yearBorn = 1981;
var message = string(_taggedTemplateLiteral(['In', '', 'has', ''], ['In', '', 'has', '']), currentYear, name, currentYear - yearBorn);

console.log(message);