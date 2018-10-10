var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send(data)
});

router.get('/userData', function(req,res,next){
	res.redirect('/')
})

module.exports = router;

var data = {
	"arrivalInfo" : {
		"time": "5:39",
			"ampm": "PM",
			"arrival":"Estimated Arrival at DFW Int'l Airport - Terminal E",
			"shortenedDest":"DFW Int'l Airport"
	},
	"destinationInfo" : {
		"fare": "$65 - $75",
			"passengers": "1 - 5",
			"payment": "Amex01",
			"address1": "499 Flora St.",
			"address2": "Dallas, Texas 75202",
			"destination1": "DFW International Airport",
			"destination2": "American Airlines Terminal E",
			"destination3": "Irving, Texas 75261",
			"request": "Can you drop me off at AA International bag drop please?"
	},
	"driver": "Steph",
		"driverInfo": "Steph Festiculma is a graduate of Parsons New School in New York and fluent in Portuguese, Spanish, and English. Steph has been driving with Alto since 2018.",
		"vehicle": "Alto 09",
		"model": "2019 Volkswagen Atlas",
		"color": "Pure White",
		"music": "Vaporwave Beats",
}