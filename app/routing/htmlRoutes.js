var path = require ("path");

module.exports = function (app) {

	//GET route for survey
	app.get("/survey", function (req, res) {
		res.sendFile(path.join(__dirname + "/../public/survey.html"))
	});

	//GET route for any other input from the browser URL
	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"))
	});
}