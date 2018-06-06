var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/View/index.html');
});

var server = app.listen(app.get('port'), function(){
  console.log('Listening on port' + app.get('port'))
});