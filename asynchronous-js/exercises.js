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

// Challenge 6
console.log("Start of Challenge 6");
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ["Aaron", "Barbara", "Chris"];
  setTimeout(callback(database[id]), 0);
}
// ...your code below

function storeData(data) {
  dataReceived = data;
}

ajaxSimulate(1, storeData);
console.log(dataReceived);

console.log("End of Challenge 6");

// Challenge 7

// Fetch API
const url = "https://rest.bandsintown.com/artists/radiohead?app_id=jshp";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    display(myJson);
  });

const container = document.getElementById("ch2");
async function display(data) {
  const message = await data;
  const bandImg = document.createElement("img");
  bandImg.src = message.image_url;
  container.append(bandImg);
}

display(data);

// XML Request Obj
const Http = new XMLHttpRequest();
const url = "https://rest.bandsintown.com/artists/radiohead?app_id=jshp";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    handleRequest(JSON.parse(Http.responseText));
  }
};

const container = document.getElementById("ch2");

function handleRequest(data) {
  const bandImg = document.createElement("img");
  bandImg.src = data.image_url;
  container.append(bandImg);
}

// Challenge 8
const Http = new XMLHttpRequest();
const url =
  "https://rest.bandsintown.com/artists/iron%20and%20wine/events?app_id=jshp&date=upcoming";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    handleRequest(JSON.parse(Http.responseText));
  }
};

const container = document.getElementById("ch2");

function handleRequest(data) {
  for (let i = 0; i < data.length; i++) {
    let item = document.createElement("div");
    item.append(data[i].venue.name);
    container.append(item);
  }
}

// Challenge 9
const Http = new XMLHttpRequest();
const url =
  "https://rest.bandsintown.com/artists/iron%20and%20wine/events?app_id=jshp&date=upcoming";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    handleRequest(JSON.parse(Http.responseText));
  }
};

const container = document.getElementById("ch2");

function handleRequest(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data);
    let item = document.createElement("div");
    if (data[i].venue.country === "United States") {
      item.append(data[i].venue.city);
      container.append(item);
    }
  }
}
