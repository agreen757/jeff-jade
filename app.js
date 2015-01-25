var express = require('express'),
    jade = require('jade');

var app = express();

app.set('view engine','jade');

app.get('/', function(req,res){
	res.render('index');
})

app.listen(3000, function(){
    console.log('listening on port 3000');
})