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

// Extension: Challenge 5
function once(func) {
  // callback as input = return function sum with parameter 2
  let counter = 0;
  let storedValue;
  return function(input) {
    if (counter < 1) {
      counter++;
      storedValue = func(input);
      return func(input);
    } else {
      return storedValue;
    }
  };
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4)); //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6

function after(count, func) {
  let counter = 0;
  return function() {
    counter++;
    if (count == counter) {
      return func();
    }
  };
}

var called = function() {
  console.log("hello");
};
var afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed

// Extension: Challenge 6
function delay(func, wait) {
  setTimeout(func, wait);
}
const sayHello = () => console.log("hello");
delay(sayHello, 500);
