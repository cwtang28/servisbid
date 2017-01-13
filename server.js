var express = require('express')
var app = express();
var firebase = require('firebase');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname));
app.set('view engine', 'html');


app.set('views', __dirname);
app.engine('html', engines.mustache);

app.get('/', function (req, res) {
	res.render('index.html');
});

app.listen(8000)
console.log('Listening on 8000');
