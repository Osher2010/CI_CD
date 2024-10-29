// Import the http module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send response data
  res.end('Hello, World!\n');
});

// Listen for incoming requests on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
