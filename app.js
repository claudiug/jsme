
var express = require('express');

var handlebars = require('express-handlebars');

var app = express();

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

var fortunes = [
  "Conquer your fears or they will conquer you.", "Rivers need springs.",
  "Do not fear what you don't know.",
  "You will have a pleasant surprise.", "Whenever possible, keep it simple.",
];

app.get('/', function(req, res) {
  res.render('home');
})


app.get('/about', function(req, res) {
  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', {fortune: randomFortune});
})


//ERRORS//
//404
app.use(function(req, req) {
  res.status(404);
  res.render('404')
});

//500
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

// START THE APP

app.listen(app.get('port'), function() {
  console.log('We Start again...');
});
