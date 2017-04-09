var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var engines = require('consolidate');
var nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.set('view engine', 'html');
app.set('views', __dirname+'/views');
app.engine('html', engines.mustache);
app.use(express.static(__dirname + '/public'));



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
	res.render('test.html');
})

app.get('/projectDetails', function(req,res){
	res.render('projectDetails.html')
})

app.get('/yourProjectDetails', function(req,res){
	res.render('/yourProjectDetails.html')
})

app.get('/myprojects', function (req, res) {
    res.render('myprojects.html');
});

app.get('/pending', function (req, res) {
    res.render('pending.html');
});

app.get('/accepted', function (req, res) {
    res.render('accepted.html');
});

app.get('/completed', function (req, res) {
    res.render('completed.html');
});

app.get('/projects', function(req,res){
		res.render('projects.html', {
			query:""
		})
})

app.get('/logout', function(req,res){
    res.render('index.html')
});

app.post('/projectDetails', function(req, res){
    var user = req.param('name');
    var category = req.param('category');
    var location = req.param('location');
    var service = req.param('service');
    var highestbid = req.param('highestbid');
    var description = req.param('description');
    var key = req.param('key');
    var id = req.param('creator');
    var date = req.param('deadline');

    res.render('projectDetails.html', {
    	user:user,
    	category:category,
    	location:location,
    	service:service,
    	highestbid:highestbid,
    	description:description,
    	key:key,
    	creator:id,
        deadline: date
    });
});

app.post('/yourProjectDetails', function(req,res){
 	var user = req.param('name');
    var category = req.param('category');
    var location = req.param('location');
    var service = req.param('service');
    var highestbid = req.param('highestbid');
    var description = req.param('description');
    var key = req.param('key');
    var id = req.param('creator');
    var date = req.param('date')
    console.log(date)
    res.render('yourProjectDetails.html', {
    	user:user,
    	category:category,
    	location:location,
    	service:service,
    	highestbid:highestbid,
    	description:description,
    	key:key,
    	creator:id,
        deadline:date
    });
});

app.post('/doneWithProject', function(req,res){
    var userFinished = req.param('name');
    var category = req.param('category');
    var makerEmail = req.param('makeEmail')
    var location = req.param('location');
    var service = req.param('service');
    res.redirect('/test')
})

app.post('/search', function(req,res){
    var query = req.param('query');
		res.render('projects.html', {
			query:query
		})
})


app.listen(8000);
console.log('running on 8000');
