function verifyCountry(req, res, next) {
  const { country } = req.body;
  if(country.length <= 3) {
		return res.status(400).json({ message: 'Invalid data'});
	}

  next();
}

module.exports = verifyCountry;