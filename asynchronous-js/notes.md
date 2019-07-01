# Asynchronous JavaScript

JavaScript is single threaded - one commanded executing at a time
JavaScript synchronous execution model - each line executed in order the code appears.

- Thread of execution
- Memory/variable environment
- Call stack

- Web Browser APIs/Node background threads
- Callback/Message/Task Queue
- Event Loop

## Web Browser APIs / Features

JavaScript runtime environment and web browser background features

1. Hold each deferred function in a queue (callback queue) when the API completes
2. Add the function the call stack (i.e. execute the function) ONLY when teh call stack is totally empty
