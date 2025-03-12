// Create web server
// 1. Import the express module
// 2. Create an instance of the express module
// 3. Create a function that will be called when the server receives a request
// 4. Create a route that will call the function when the server receives a request to the /comments route
// 5. Start the server on port 8080

// 1. Import the express module
const express = require('express');

// 2. Create an instance of the express module
const app = express();

// 3. Create a function that will be called when the server receives a request
function commentsHandler(req, res) {
  res.send('This is the comments page');
}

// 4. Create a route that will call the function when the server receives a request to the /comments route
app.get('/comments', commentsHandler);

// 5. Start the server on port 8080
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});