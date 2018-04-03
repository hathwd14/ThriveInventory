
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', sam);

function sam(req, res, next) {
	res.render('index',
		{title: "Inventory Types"});
}

module.exports = router;
