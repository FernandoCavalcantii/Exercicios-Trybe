function verifyName(req, res, next) {
	const { name } = req.body;
	if(name.length < 5) {
		return res.status(400).json({ message: 'Invalid data'});
	}

  next();
}

module.exports = verifyName;