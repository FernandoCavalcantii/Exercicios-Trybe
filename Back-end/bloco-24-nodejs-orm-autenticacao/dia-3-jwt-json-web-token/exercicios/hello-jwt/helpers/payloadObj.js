module.exports = (body) => {
  const { username, password } = body;
  if (username === 'admin' && password === 's3nh4S3gur4???') {
    return {
      username,
      admin: true,
    };
  }
  return {
    username,
    admin: false,
  };
};
