// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

// console.log(map([1, 2, 3], addTwo));
// Challege 4

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// var alphabet = "";
// var letters = ["a", "b", "c", "d"];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet);
// 'abcd'

// Extension 1

function mapWith(array, callback) {
  let result = [];
  forEach(array, index => {
    result.push(callback(index));
  });
  return result;
}

mapWith([1, 2, 3], addTwo);
// [3, 4, 5]

// Extension 2

function reduce(array, callback, initialValue) {
  let value = initialValue;
  for (let i = 0; i < array.length; i++) {
    value = callback(value, array[i]);
  }
  return value;
}

var nums = [4, 1, 3];
var add = function(a, b) {
  return a + b;
};
reduce(nums, add, 0);
// 8

// Extension 3 Intersection
function intersection(arrays) {
  let result = [];
  let mergedArray = [];
  let numArr = arguments.length;

  for (let i = 0; i < arguments.length; i++) {
    mergedArray = mergedArray.concat(arguments[i]);
  }

  let itemCount = {};

  for (let j = 0; j < mergedArray.length; j++) {
    itemCount[mergedArray[j]] = itemCount[mergedArray[j]] + 1 || 1;
  }

  for (let prop in itemCount) {
    if (itemCount[prop] === numArr) {
      result.push(Number(prop));
    }
  }
  return result;
}

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);
// should log: [5, 15]

// Extension 4 Union

function union(arrays) {
  let result = [];

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (!result.includes(arguments[i][j])) {
        result.push(arguments[i][j]);
      }
    }
  }
  return result;
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Extension 5 Object of Matches
function objOfMatches(array1, array2, callback) {
  let matches = {};
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      matches[array1[i]] = array2[i];
    }
  }
  return matches;
}

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function(str) {
      return str.toUpperCase();
    }
  )
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  let map = {};
  for (let i = 0; i < arrVals.length; i++) {
    map[arrVals[i]] = [];
    for (let j = 0; j < arrCallbacks.length; j++) {
      map[arrVals[i]].push(arrCallbacks[j](arrVals[i]));
    }
  }
  return map;
}

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function(str) {
        return str.toUpperCase();
      },
      function(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function(str) {
        return str + str;
      }
    ]
  )
);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
