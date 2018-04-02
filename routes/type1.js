var express = require('express');
var router = express.Router();
// Load the data model
var type1model = require('../models/type1model');

//*************************************************//
// All of these routes are relative to /users      //
//*************************************************//

// GET to Add Character page
router.get('/addtype1', index);

// POST data from
router.post('/record', record_data);


//
// Functions responding to HTTP requests
//
function index(req, res, next) {
	// parameters for res.render(par1, par2)
	// par1 : a view in the views folder
	// par2 : data to be used when rendering the view
  res.render(
  	'type1',
  	{ title: 'Add Type 1',
  	  type1: type1model
  	}
  	);
}

function record_data(req, res, next) {
	console.log(req.body); // show in the console what the user entered
	type1model.push(req.body); // Add the user data to the users_data dataset
	res.redirect('/type1/addtype1');	// reload the page
}

// Export the router, required in app.js
module.exports = router;
