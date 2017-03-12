module.exports = {
	// es6 way
	greeting(req, res) {
		res.send({ hi: 'there' });
	},
	// es5 way
	greeting1: function (req, res) {
		res.send({ hi: 'there' });
	},


	create(req, res) {
		console.log(req.body);
		res.send({ hi: 'there' });
	}
};