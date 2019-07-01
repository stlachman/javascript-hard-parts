console.log("I am at the beginning of the code");

function time() {
  console.log("I am in the setTimeout callback function");
}
setTimeout(time, 200);

console.log("I am at the end of the code");
