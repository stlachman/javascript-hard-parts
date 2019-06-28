// Challenge 1
function createFunction() {
  function sayHello() {
    console.log("hello");
  }
  return sayHello;
}

const function1 = createFunction();
// now we'll call the function we just created
function1(); //should console.log('hello');

// Challenge 2
function createFunctionPrinter(input) {
  function print() {
    console.log(input);
  }
  return print;
}

const printSample = createFunctionPrinter("sample");
const printHello = createFunctionPrinter("hello");
// now we'll call the functions we just created
printSample(); //should console.log('sample');
printHello(); //should console.log('hello');

// Challenge 3

function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
// counter 1
willCounter();
// counter 2
willCounter();
// counter 3

jasCounter();
// counter 1
willCounter();
// counter 4

// Challenge 4
function addByX(x) {
  function sum(y) {
    return x + y;
  }
  return sum;
}

const addByTwo = addByX(2);
addByTwo(1);
//should return 3
// now call addByTwo with an input of 1
// now call addByTwo with an input of 2
addByTwo(2);
//should return 4
