const { decodeToken } = require('../utils');

module.exports = async (request, response, next) => {
  try {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      return response.status(401).json({ error: 'Token not provided' });
    }

    const token = authHeader.split(' ')[1];

    const decoded = await decodeToken(token);
    request.user_id = decoded.user_id;
    return next();
  } catch (e) {
    return response.status(401).json({ error: 'Unauthenticated' });
  }
};
