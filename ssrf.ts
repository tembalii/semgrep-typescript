import http from 'http';
import fetch from 'node-fetch';

http.createServer((req, res) => {
  const target = req.url?.slice(1); // user input used directly

  // This line is vulnerable and will trigger the SSRF rule
  fetch(target!).then(response => response.text()).then(data => {
    res.end(data);
  });
}).listen(8080);
