import fetch from 'node-fetch';
import http from 'http';

function greet(name: string): string {
  return `Hello, ${name}`;
}

http.createServer((req, res) => {
  const url = req.url?.slice(1); // risky
  fetch(url!).then(r => r.text()).then(data => {
    res.end(data);
  });
}).listen(3000);

console.log("Running server...");
console.log(greet("world"));
