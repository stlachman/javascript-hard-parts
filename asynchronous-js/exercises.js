console.log("I am at the beginning of the code");

// Challenge 1
function time() {
  console.log("I am in the setTimeout callback function");
}
setTimeout(time, 200);

console.log("I am at the end of the code");

// Challenge 2

function helloInterval() {
  console.log("Interval Hello!");
}

const hello = setInterval(helloInterval, 2000);

function stop() {
  clearInterval(hello);
}
setTimeout(stop, 10000);

// Challenge 3
function sayHowdy() {
  console.log("Howdy");
}

function everyXsecsForYsecs(func, interval, totalTime) {
  const passed = setInterval(func, interval);

  function stop() {
    clearInterval(passed);
  }

  setTimeout(stop, totalTime);
}

// function everyXsecsForYsecs(func, interval, totalTime) {
//   for (let i = 0; i < totalTime; i += interval) {
//     setTimeout(sayHowdy, i)
//   }
// }

everyXsecsForYsecs(sayHowdy, 1000, 5000);

// Challenge 4
const delays = [2000, 5000, 0, 3500];

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

function delayLog(delayTime, i) {
  function printElement() {
    console.log(`printing element ${i}`);
  }
  setTimeout(printElement, delayTime);
}

forEach(delays, delayLog);

// Challenge 5
function changeColor() {
  if (document.body.style.background === "rgb(221, 238, 255)") {
    document.body.style.background = "rgb(255, 238, 221)";
  } else {
    document.body.style.background = "rgb(221, 238, 255)";
  }
}

const activate = document.getElementById("activate");

activate.addEventListener("click", activateButton);

function activateButton(event) {
  console.log("clicked #1");
  const secondButton = document.getElementById("color");
  secondButton.addEventListener("click", changeBackground);
}

function changeBackground() {
  console.log("clicked #2");
  changeColor();
}
