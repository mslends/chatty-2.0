var express = require('express');
var bodyParser = require('body-parser');

var messages = [];
// calling the express module
var app = express();


// Handles every request coming into the server. Any request coming into the server will first be passed through any functions inside your `app.use()`
app.use(bodyParser.json());

app.get('/', function(req, res, next) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
});

app.post('/', function(req, res, next) {

  messages.push({
    message: req.body.message,
    time: new Date()
  });

    res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
});


app.options('/', function(req, res, next) {

res.status(200).set({
'Content-Type': 'application/json',
'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
'X-XSS-Protection': '1; mode=block',
'X-Frame-Options': 'SAMEORIGIN',
'Content-Security-Policy': "default-src 'self' devmountain.github.io"
}).send(JSON.stringify(messages));

});

// choosing which port to "listen" for
var port = 8989;
app.listen(port, function() {
  console.log('Listening on port, ' + port + '!');
})
