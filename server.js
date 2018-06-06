var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(app.get('port'), function(){
  console.log('Listening on port' + app.get('port'))
});