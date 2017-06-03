const mongoose = require('mongoose');

before(done => {
	// this is not in app.js because only here can we explicitly 
	// call done() callback once a connection is open in testing
	mongoose.connect('mongodb://localhost/muber_test');
	mongoose.connection
		.once('open', () => done())
		.on('error', err => {
			console.warn('Warning', error);
		});
});

beforeEach(done => {
	const { drivers } = mongoose.connection.collections;
	drivers.drop()
		.then(() => done())
		// .catch is for catching the very first time when our test
		// is run, where drivers collection doesn't exist yet. but we
		// still want to continue our tests, which is why we say done()
		.catch(() => done());
});