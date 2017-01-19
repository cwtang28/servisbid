var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var engines = require('consolidate');

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname));
app.set('view engine', 'html');
app.set('views', __dirname+'/views');
app.engine('html', engines.mustache);

app.get('/', function (req, res) {
	res.render('index.html');
});

app.get('/register', function (req, res) {
	res.render('register.html');
});

app.get('/login', function (req, res) {
	res.render('login.html');
});

app.get('/createProject', function(req, res){
	res.render('create.html');
})

app.get('/profile', function(req, res){
	res.render('profile.html');
})

app.post('/projectDetails', function(req, res){
    // var user = req.param('name');
    // console.log(user);
    // res.render('login.html', { user:user } );
});

app.listen(8000)
console.log('running on 8000');
