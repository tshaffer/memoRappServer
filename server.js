var express = require('express');
const path = require('path');

var app = express();

const mongoose = require('mongoose');
const mongoDB = 'mongodb://ted:memoRappTed0524@ds243607.mlab.com:43607/memorapp';

var Restaurant = require('./models/restaurant')

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
console.log('listen on port: ' + port)
app.listen(port);

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// let uri = 'mongodb://user:pass@host:port/dbname';
// let uri = 'mongodb://heroku_wnqnvnm0:uiscq0d0r4j18regceb577773i@ds129090.mlab.com:29090/heroku_wnqnvnm0';
// mongoose.connect(uri);
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback() {
//   console.log('db open successful');
// });

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('memoRapp db open successful');

  let restaurantInfo = { id: '69', name: 'La Costena' }
  console.log('create restaurant');
  var restaurant = new Restaurant(restaurantInfo);
  console.log(restaurant);
  console.log('save restaurant');

  restaurant.save((err) => {
    console.log('restaurant saved');
    if (err) {
      console.log('err: ', err);
      return
    }
    console.log('New Restaurant: ' + restaurant);
  });
});


