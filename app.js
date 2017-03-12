// node is an environment; a js interpreter in commandline; outside of the browser env
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

// .json() means that any incoming request, we will assume it is json and parse it into an object for us
// ***important to use bodyParser before routes(app)
app.use(bodyParser.json());
routes(app);

module.exports = app;

/*
	By default, express doesn't do a good job of handling the body of the request.
	It doesn't parse the request body and end up as something that is viewable and access
	directly via js code
	Instead we will need to use bodyParser
	once available, it will be accessible as req.body

	body parser used to be a default part of express but eventually split into separate libraries
*/