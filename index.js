var express = require('express');

var app = express();

app.disable('x-powered-by');

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// MORE IMPORTS HERE

app.set('PORT', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home');
});

app.listen(app.get('PORT'), function(){
	console.log("App is running on port 3000");
});