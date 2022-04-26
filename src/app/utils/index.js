const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {

  /**
   *  Generate a password hash
   * @param string password
   * @returns string
   */
  async generatePasswordHash(password) {
    const passwordHash = await bcrypt.hash(password, 8);
    return passwordHash;
  },

  /**
   * Check if password match
   * @param string password
   * @param string hashedPassword
   * @returns boolean
   */
  async isValidPassword(password, hashedPassword) {
    const isValidPassword = await bcrypt.compare(password, hashedPassword);
    return isValidPassword;
  },

  /**
   * Generate an access token
   * @param int userId
   * @returns string
   */
  generateToken(userId) {
    return jwt.sign({ user_id: userId }, process.env.JWT_SECRET, { expiresIn: '30d' });
  },

  /**
   * Decode an access token
   * @param string token
   * @returns string
   */
  async decodeToken(token) {
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    return decodedToken;
  },

  /**
 * Convert string to slug, removing all accents and spaces
 *
 * @param string str
 * @return string
 */
  slugify(str) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036F]/g, '') // Remove acentos
      .replace(/([^\w]+|\s+)/g, '-') // Substitui espaço e outros caracteres por hífen
      .replace(/--+/g, '-') // Substitui multiplos hífens por um único hífen
      .replace(/(^-+|-+$)/, '') // Remove hífens extras do final ou do inicio da string
      .toLowerCase();
  },
};
