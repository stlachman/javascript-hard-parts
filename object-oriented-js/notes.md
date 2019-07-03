OOP - paradigm for structuring complex code

- Easy to add features and functionality
- Performant (efficient in terms of memory)
- Easy for us and other developers to reason about (clear structure)

Encapsulation - binding together the data and functions that manipulate the data

```js
// Different ways to create objects

let user1 = {
  name: "Will",
  score: 3,
  increment: function() {
    user1.score++;
  }
};

user1.increment(); // user1.score -> 4

let user2 = {};

user2.name = "Tim";
user2.score = 6;
user2.increment = function() {
  user2.score++;
};

let user3 = Object.create(null);

user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
  user3.score++;
};

// Generate objects using a function
function userCreator(name, score) {
  let newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  };
  return newUser;
}

let user1 = userCreator("Will", 3);
let user2 = userCreator("Tim", 5);
user1.increment();
user2.increment();
```

## Prototypal natue of JS

```js
function userCreator(name, score) {
  let newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

let userFunctionStore = {
  increment: function() {
    this.score++;
  },
  login: function() {
    console.log("You're logged in");
  }
};

let user1 = userCreator("Will", 3);
let user2 = userCreator("Tim", 5);
user1.increment();
```

## New Keyword

new keyword: creates an empty object and assigns it to this

```js
function User(name, score) {
  this.name = name;
  this.score = score;
}

User.prototype.increment = function() {
  this.score++;
};

User.prototype.login = function() {
  console.log("login");
};

let user1 = new User("Eva", 9);

user1.increment();
```

new keyword is doing this behind the scenes
this = Object.create(User.prototype)

## Class Syntactic Sugar

```js

class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log('login)
  }
}

let user1 = new User("Eva", 9);

user1.increment();
```
