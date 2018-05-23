/**
 * JS 101 Workshop
 *
 * Whistle stop introduction to JavaScript
 */

/**
 * Numbers
 */

var i = 2;

console.log(i);
// 2

console.log(typeof i);
// number

console.log(i + 2);
// 4

var o = new Number(7);

console.log(o);
// Number {7}

console.log(i + o);
// 9

console.log(typeof o);
// object

/**
 * Strings
 */

var string = 'my string';

console.log(string);
// 'my string'

/**
 * String methods
 */

console.log(string.length);
// 9

console.log(string.split(' '));
// ['my', 'string']

console.log(string.toUpperCase());
// MY STRING

// Original value has not changed
console.log(string);
// my string

// Altered the original value
string = string.toUpperCase();

console.log(string);
// MY STRING

/**
 * Boolean
 */

var isTrue = true;

console.log(isTrue);
// true

isTrue = false;

console.log(isTrue);
// false

/**
 * Objects
 */

// Create an object
var flower = {
  color: 'yellow',
  petals: 6
}

console.log(flower)
// {color: 'yellow', petals: 6}

// Access a value
console.log(flower.color)
// yellow

// Change a value
flower.color = 'blue';

console.log(flower.color);
// blue

// Add a property
flower.isAlive = true;
// {color: 'blue', petals: 6, isAlive: true}


/**
 * Let and Const
 */

// If declared but not assigned, it will be 'undefined'
let chicken;

// Now has a value, so is not 'undefined'
chicken = 'tasty';

// Will throw an error as a `const` muste be declared and defined at the same time
//const duck; // Uncomment to cause an error

/// Declare and assign
const duck = 'tasty too';

// Assigned value cannot be changed
// duck = 'not so tasty'; // Uncomment to cause an error

/**
 * Objects Pt. 2
 */

// Create an object. Makes a reference
const burrito = {
  isTasty: true
}

// Not changing the assigned value (burrito), just changing a property on burrito.
burrito.isTasty = false;

console.log(burrito.isTasty);
// false

// Add a property
burrito.filling = 'Vegetables';

console.log(burrito);
// {isTasty: true, filling: 'Vegetables'}

/**
 * Equality
 */

let a = 2;

// Strict equality
console.log(a === '2');
// false

console.log(a === 2);
// true

// Loose equality
console.log(a == '2');
// true

// Not equal to
console.log(a !== '2');
// true

/**
 * Comparison
 */

console.log(a > 0);
// true

console.log(a > 3);
// false

console.log(a >= 2);
// true

/**
 * Statements
 */

if (a > 0) { //
  console.log('a is grater than 0');
}
// a s grater than 0

let bool = true;

if (bool) {
  console.log('Bool is true');
} else {
  console.log('Bool is false')
}
// Bool is true

/**
 * Functions
 */

const speak = function() {
  console.log('Say hello');
}
// Say hello

const subtractNumbers = function(a, b) {
  return a - b;
};

const addNumbers = (a, b) => {
  return a + b;
}

// Passing two numbers will add them
const myCalculation = addNumbers(1, 2);

console.log(myCalculation);
// 3 (number)

// Passing a number and a string will concatenate them into a string
const mySecondCalculation = addNumbers(12, '34');

console.log(mySecondCalculation);
// 1234 (string)

// Sort of a 'basic' unit test to check if what we got back was a number
if (Number.isInteger(mySecondCalculation)) {
  console.log('Is a number');
} else {
  console.log('Is not a number')
}
// Is not a number

/**
 * Variable Scope
 */

let globalValue = 'Daniel';

const updateValue = (newValue) => {
  let localValue = 'George';

  console.log(localValue);

  // Update the global value
  globalValue = newValue;
}
// George

// console.log(localValue); // Uncomment to cause an error
// Error: localValue is not defined

updateValue('Derek');

console.log(`New value is ${globalValue}`);
// New value is Derek

/**
 * Arrays
 */

let people = ['Daniel', 'Nicky', 'Boris'];

console.log(people);
// ['Daniel', 'Nicky', 'Boris']

for (let person of people) {

  // We have a local variable with the value of the item in the array
  console.log(`Hello ${person}`);
}
// Hello Daniel
// Hello Nicky
// Hello Boris

let animals = ['dog', 'cat', 'aadvark'];

// Accessing arrays can have unexpected results when using 'x in y'
for (var index in animals) {

  // We directly update the original array
  animals[index] = 'chicken';
}

console.log(animals);
// ['chicken', 'chicken', 'chicken'];

let moreAnimals = ['dog', 'cat', 'aadvark'];

console.log(moreAnimals);
// ['dog', 'cat', 'aadvark']

// Copy the moreAnimals array
let yesMoreAnimals = [...moreAnimals];

console.log(yesMoreAnimals);
// ['dog', 'cat', 'aadvark']

yesMoreAnimals[0] = 'ant';

console.log(yesMoreAnimals);
// ['ant', 'cat', 'aadvark']

console.log(moreAnimals);
// ['dog', 'cat', 'aadvark']

/**
 * Loops
*/

for (let x = 0; x < 5; x++) {
  console.log(x);
}
// 1
// 2
// 3
// 4
// 5

// Create an empty array
let greetAnimals = [];

// Add items to it
for (let x = 0; x < yesMoreAnimals.length; x++) {
  greetAnimals.push('Hey ' + yesMoreAnimals[x]);
}

console.log(greetAnimals);
// ['Hey ant', 'Hey cat', 'Hey aadvark']

/**
 * Array Map
 */

// Map, can be used to get a new array of modified values
const greetMoreAnimals = yesMoreAnimals.map(animal => {
  return `Hello ${animal}`;
});

console.log(greetMoreAnimals);
// ['Hello squid', 'Hello cat', 'Hello aadvark']

/**
 * Array Filter
 */

const excludeSquid = yesMoreAnimals.filter(animal => {
  return animal !== 'squid';
});

console.log(excludeSquid);
// ['cat', 'aadvark']
