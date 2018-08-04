var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/ru', function (req, res) {
  res.render('about');
});

app.get('/facebook', function(req, res) {
  res.redirect('https://www.facebook.com/helena.karpova.5');
});

app.get('/linkedin', function(req, res) {
  res.redirect('https://www.linkedin.com/in/elenakarpova93/');
});

app.get('/mail', function(req, res) {
  res.redirect('mailto:elena.karpova93@gmail.com');
});

app.get('/instagram', function(req, res) {
  res.redirect('https://www.instagram.com/robbylittlerabbit/');
});


var server = app.listen(app.get('port'), function(){
  console.log('Listening on port' + app.get('port'))
});