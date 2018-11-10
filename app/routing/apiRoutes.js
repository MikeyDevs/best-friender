var path = require ("path");
var friends = require("../data/friends.js")

module.exports = function (app) {

	//GET route for refreshing the page
	app.get("/api/friends", function (req, res) {
		res.json(friends);
	});


	//API post to handle the AJAX post response from the browser
	app.post("/api/friends", function (req, res) {
		var newFriend = req.body;
		console.log(newFriend);


		//Make sure all scores are numbers
		for(var i = 0; i < newFriend.scores.length; i++) {
			newFriend.scores[i] = parseInt(newFriend.scores[i]);
		}


		//Logic for comparing the current user to a matched friend
		var comparisonArray = [];

		for(var i = 0; i < friends.length; i++) {

			var matchFriend = friends[i];
			var totalDifference = 0;
			
			for(var j = 0; j < matchFriend.scores.length; j++) {
				var differenceOneScore = Math.abs(matchFriend.scores[j] - newFriend.scores[j]);
				totalDifference += differenceOneScore;
			}

			comparisonArray[i] = totalDifference;
		}

		var bestFriendNum = comparisonArray[0];
		var bestFriendIndex = 0;

		for(var i = 1; i < comparisonArray.length; i++) {
			if(comparisonArray[i] < bestFriendNum) {
				bestFriendNum = comparisonArray[i];
				bestFriendIndex = i;
			}
		}

		//pushing the new friend to the current friends data array
		friends.push(newFriend);

		//responding with the current data
		res.json(friends[bestFriendIndex]);

	})

}

