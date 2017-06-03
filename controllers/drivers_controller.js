const Driver = require('../models/driver');

module.exports = {
	// es6 way
	greeting(req, res) {
		res.send({ hi: 'there' });
	},
	// es5 way
	greeting1: function (req, res) {
		res.send({ hi: 'there' });
	},


	// next is key for error handling
	create(req, res, next) {
		const driverProps = req.body;
		Driver.create(driverProps)
			.then(driver => res.send(driver))
			.catch(next);
	},

	edit(req, res, next) {
		const driverId = req.params.id;
		const driverProps = req.body;

		Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
			// findByIdAndUpdate returns some statistics about what might have been updated and not a driver obj
			.then(() => Driver.findById({ _id: driverId }))
			.then(driver => res.send(driver))
			.catch(next);
	}
};