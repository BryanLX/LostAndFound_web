function userRoute(userData, router) {
	function login(req, res) {
		var input = {
			email: req.body.email
		};
		userData.findOne(input, function(err, user) {
			if (err) {
				throw err;
			}
			if (user && req.body.password == user.password) {
				req.session.username = user.fullname;
				req.session.email = user.email;
				res.render("profile.html", {username: user.fullname});
			} else {
				res.render("signin.html", {error: "Invalid username or password."});
			}
		});
	}

	function signup(req, res) {
		var input = {
			fullname: req.body.firstname + " " + req.body.lastname,
			password: req.body.password,
			email: req.body.email
		};
		var newUser = new userData(input);
		newUser.save(function(err, success){
			if (err) {
				console.log("new user adding error.");
				throw err;
			} else {
				req.session.username = input.fullname;
				req.session.email = input.email;
				res.render("profile.html", {username: input.fullname});
			}
		});
	}

	function serialCode(req, res) {
		var input = {
			email: req.session.email
		}
		userData.findOne(input, function(err, user) {
			if (err) {
				console.log("error finding user");
			}
			if (!user) {
				console.log("user does not exist");
				return res.sendStatus(400);
			} else {
				res.render("profile.html", {serial: user._id, msg: "Generate successfull!"});
			}
		});
	}

	function signout(req, res) {
		req.session.destroy();
  		res.redirect('/');
	}
	router.post("/login", login);
	router.post("/signup", signup);
	router.get("/serial", serialCode);
	router.get("/signout", signout);
}
module.exports = userRoute;