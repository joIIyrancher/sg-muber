const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
	// Must define a request handler to respond to incoming requests
	// Watch for incoming requests for method GET
	// to the route http://localhost:3050/api
	app.get('/api', DriversController.greeting);

	app.post('/api/drivers', DriversController.create);

	app.put('/api/drivers/:id', DriversController.edit);
};