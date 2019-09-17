const path = require('path');
const express = require('express')
const app = express()
const port = 3333

const pathToIndex = path.join(__dirname, 'public', 'index.html');
const pathToCSS = path.join(__dirname, 'public', 'css', 'app.css');
const pathToBundle = path.join(__dirname, 'public', 'build', 'bundle.js');

app.get('*', function (req, res) {
  switch (req.url) {
    case '/':
    case '/index.html':
      res.sendFile(pathToIndex);
      break;
    case '/css/app.css':
      res.sendFile(pathToCSS);
      break;
    case '/build/bundle.js':
      res.sendFile(pathToBundle);
      break;
  }
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
