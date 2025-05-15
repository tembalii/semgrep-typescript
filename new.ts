import http from 'http';
import axios from 'axios';

http.createServer((req, res) => {
  const target = req.url?.slice(1); // risky user-controlled input
  if (target) {
    axios.get(target)
      .then(response => {
        res.end(response.data);
      })
      .catch(error => {
        res.end('Error occurred');
      });
  } else {
    res.end('No URL provided');
  }
}).listen(3000);

console.log("Server running on port 3000");
