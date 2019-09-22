// import path = require('path');
import * as path from 'path';
import express = require('express');
const app = express();

import mongoose = require('mongoose');

const mongoDB = 'mongodb://ted:memoRappTed0524@ds243607.mlab.com:43607/memorapp';

const pathToIndex = path.join(__dirname, 'public', 'index.html');
const pathToCSS = path.join(__dirname, 'public', 'css', 'app.css');
const pathToBundle = path.join(__dirname, 'public', 'build', 'bundle.js');

app.get('*', (req, res) => {
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

let port: any = process.env.PORT;
if (port == null || port === '') {
  port = 8000;
}
console.log('listen on port: ' + port)
app.listen(port);

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('memoRapp db open successful');
});


