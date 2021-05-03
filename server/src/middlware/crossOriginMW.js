module.exports = function crossOrigin(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS, HEAD',
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, Content-Type, Authorization, account',
	);
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('X-Content-Type-Options', 'nosniff');
	res.setHeader('X-Frame-Options', 'DENY');

	if (req.method === 'OPTIONS') {
		res.sendStatus(200);
	} else {
		next();
	}
}
