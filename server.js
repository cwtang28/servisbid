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


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
    }
});


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

app.get('/projectDetails', function(req,res){
	res.render('profile.html')
})

app.get('/yourProjectDetails', function(req,res){
	res.render('/profile.html')
})

app.post('/projectDetails', function(req, res){
    var user = req.param('name');
    var category = req.param('category');
    var location = req.param('location');
    var service = req.param('service');
    var lowestBid = req.param('lowestBid');
    var description = req.param('description');
    var key = req.param('key');
    var id = req.param('creator');

    res.render('projectDetails.html', { 
    	user:user, 
    	category:category,
    	location:location,
    	service:service, 
    	lowestBid:lowestBid, 
    	description:description,
    	key:key,
    	creator:id
    });
});

app.post('/yourProjectDetails', function(req,res){
 	var user = req.param('name');
    var category = req.param('category');
    var location = req.param('location');
    var service = req.param('service');
    var lowestBid = req.param('lowestBid');
    var description = req.param('description');
    var key = req.param('key');
    var id = req.param('creator');

    res.render('yourProjectDetails.html', { 
    	user:user, 
    	category:category,
    	location:location,
    	service:service, 
    	lowestBid:lowestBid, 
    	description:description,
    	key:key,
    	creator:id
    });
});

app.post('/doneWithProject', function(req,res){
    var userFinished = req.param('name');
    var category = req.param('category');
    var makerEmail = req.param('makeEmail')

    // var mailOptions = {
    //     from: , 
    //     to: makerEmail,
    //     subject: req.body.subject, 
    //     text: "your project is done",
    // };
    // transporter.sendMail(mailOptions, function(error, info){
    //     if(error){
    //         console.log(error);
    //     }

    // });
    
    res.redirect('index.html');
})


// app.use(function(req, res, next) {
//   	var err = new Error('Not Found');
//   	err.status = 404;
//   	next(err);
// });

app.listen(8000)
console.log('running on 8000');
