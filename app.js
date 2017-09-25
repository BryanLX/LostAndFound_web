var express = require('express');
var app = express();
var path = require('path');
var itemData = require('./database/itemdata');
var userData = require('./database/userdata');

var nunjucks = require('nunjucks');
var itemRoute = require('./routes/item');
var userRoute = require('./routes/user');
var session = require('express-session');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ secret: 'I am actually a potato', resave: false, saveUninitialized: false }));
app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});
nunjucks.configure(path.join(__dirname, "./frontend/final\ project"), { autoescape: true, express: app });
app.use(express.static(path.join(__dirname, "./frontend/final\ project")));
// Expose session variables to views
itemRoute(itemData, app);
userRoute(userData, app);
app.get("/", function(req, res) {
	if (req.session.username) {
		res.render("profile.html");
	} else {
		res.render("lostandfound.html");
	}
});

app.get("/signupPage", function(req, res) {
	res.render("signup.html");
});
app.get("/signinPage", function(req, res) {
	res.render("signin.html");
});
app.get("/guest", function(req, res) {
	res.render("guest.html");
});
app.listen(3000, function () {
  console.log('listening on port 3000!');
});
