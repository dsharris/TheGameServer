var express = require('express');
var router = express.Router();
var tokens = [];

/* GET home page. */
router.get('/', function(req, res) {
	res.status(200);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");

	var data = {
		token : '135467u6564354',
		success: true
	};
  res.end(JSON.stringify(data));
});

module.exports = router;
