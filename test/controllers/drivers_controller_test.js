const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const Driver = mongoose.model('driver');

describe('Drivers controller', () => {
	it('Posts to /api/drivers creates a new driver', () => {
		Driver.count().then(count => {
			request(app)
				.post('/api/drivers')
				// to post along data we use .send
				.send({ email: 'test@test.com' })
				.end((err, res) => {
					Driver.count().then(newCount => {
						assert(count + 1 === newCount);
						done();
					});
				});
		});
	});
});