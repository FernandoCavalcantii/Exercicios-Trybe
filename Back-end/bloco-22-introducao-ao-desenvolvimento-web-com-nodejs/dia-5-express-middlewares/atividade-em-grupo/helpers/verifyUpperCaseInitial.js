function verifyUpperCaseInitial(req, res, next) {
  const { initials } = req.body;

  const numUpper = initials.length - initials.replace(/[A-Z]/g, '').length;
  if(numUpper > 3) {
    return res.status(400).json({ message: 'Invalid data'})
  };

  next()
} 

module.exports = verifyUpperCaseInitial;