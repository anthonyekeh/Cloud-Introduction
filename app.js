// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!\n');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
<<<<<<< HEAD
});
// This is the main branch
// this is so amazing, I figured it out!!!!
// edited from git UI

// This comment is from 'master branch'
=======
}); 
// just testing
>>>>>>> 4b15dc05b84659ac7be9ec2c869cd61dd0a54e86
