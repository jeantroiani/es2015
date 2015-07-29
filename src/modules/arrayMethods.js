//ARRAY METHODS ES5

var array = [1, 2, 3, 4];

var divider = function (elem) {
  console.log(elem / 2);
}

var obj = {
  multiplier: 10,
  biggerThan: function (elem) {
    console.log((elem * this.multiplier));
  }
};

//MAP

//Accepts a callback.
array.map(divider);

//Also a a second parameter can pass index.
array.map(function(elem, index) {
  console.log('index: ' + index + ' elem: ' + elem);
});

//You can pass THIS value as a second paramenter.
array.map(obj.biggerThan, obj);

//IS ARRAY
var array2 = [1, 2, 3];
Array.isArray(array2); //true

//Concat

var numbers = [1, 2, 3];
var fruits = ['pear', 'apples']
fruits.concat(numbers); //[pears, apples, 1, 2, 3];

//Every 
var numbers2 = [1, 2, 3, 4, 5, 6];
numbers2.every(function (num) {
  return num < 10;
}); //true

//Filter
var numbers3 = [1, 2, 3, 4, 5, 6];
numbers3.filter(function (num) {
  return num < 4;
});

//ARRAY METHODS ES2015
//Array from (instance from an array-like or iterable object.)
function foo () {
  return Array.from(arguments);
}

foo(1,2,3); // [1, 2, 3]

Array.from("Hello"); //['H', 'e', 'l', 'l', 'o']

