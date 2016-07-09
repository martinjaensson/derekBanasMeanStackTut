var express = require('express');

var app = express();

app.disable('x-powered-by');

app.set('PORT', process.env.PORT || 3000);

app.get('/', function(req, res) {
	res.send('Hello World');
});

app.listen(app.get('PORT'), function(){
	console.log("App is running on port 3000");
});