const assert = require('assert');
//supertest for making fake http request through command
const request = require('supertest');

const app = require('../app');

describe('The express app', () => {
	// http request or faking them, it will be async in nature
	it('handles a get request to /api', (done) => {
		request(app)
			.get('/api')
			.end((err, res) => {
				assert(res.body.hi === 'there');
				done();
			});
	});
});

// mocha --recursive -R min
// --recurive means to look through nested folders in test directory
// -R specifies test reporter to user
// min = minimun reporter

/* 
 our router /api, is gonna have a bunch of code that will specify a
 route and a method of request. Depending on the route and request method,
 it will specify a different function to run
 */