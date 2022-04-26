module.exports = async (exception, request, response, next) => {
  if (process.env.APP_ENV === 'development') {
    return response.status(500).json({ error: 'Something went wrong' });
  }
  return response.status(500).json({ error: 'Internal server error' });
};
