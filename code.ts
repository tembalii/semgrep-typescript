import http from 'http';
import fetch from 'node-fetch';

const server = http.createServer((req, res) => {
  const parsedUrl = req.url?.replace('/', ''); // still risky
  if (parsedUrl) {
    fetch(parsedUrl).then(response => response.text()).then(content => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(content);
    }).catch(err => {
      res.writeHead(500);
      res.end('Error occurred');
    });
  } else {
    res.end('No URL provided');
  }
});

server.listen(4000, () => {
  console.log('Server listening on port 4000');
});
