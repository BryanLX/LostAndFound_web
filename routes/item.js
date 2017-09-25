
function itemRoute(itemData, router) {
	// search functionality
	var close_dist = 2;
	function searchItem(req, res) {
		var location = JSON.parse(req.body.location);
		var input =  {
			location: [parseInt(location[0]), parseInt(location[1])],
			name: req.body.name,
			color: req.body.color
		};
		console.log(input);
		var condition = {
			name: input.name,
			color: input.color
		}
		itemData.find(condition, function(err, items){
			if (err) {
				console.log("item look up error");
				return res.sendStatus(400);
			}
			var result = [];
			for (var i in items) {
				var x = items[i].location[0];
				var y = items[i].location[1];
				if (x > input.location[0] - close_dist 
					&& x < input.location[0] + close_dist
					&& y > input.location[1] - close_dist
					&& y < input.location[1] + close_dist) {
					result.push(items[i]);
				}
			}
			if(result.length > 0)
				console.log("items found.");
			res.render("result2.html", {result: JSON.stringify(result)});
		});
	}

	function uploadItem(req, res) {
		var location = JSON.parse(req.body.location);
		var questions = [];
		for (var i in req.body.questions) {
			var item = {
				question: req.body.questions[i],
				answer: req.body.answer[i]
			}
			questions.push(item);
		}
		console.log(questions);
		var input = {
			location: [parseInt(location[0]), parseInt(location[1])],
			name: req.body.name,
			color: req.body.color,
			questions: JSON.stringify(questions),
			email: req.session.email,
			founder: req.session.username,
			img: req.body.img
		};
		new itemData(input).save(function(err, success) {
			if (err) {
				console.log("item upload error");
				return res.sendStatus(400);
			}
			res.render("profile.html", {msg: "Upload successful!"});
		})
	}

	router.post("/search", searchItem);
	router.post("/upload", uploadItem);
}

module.exports = itemRoute;