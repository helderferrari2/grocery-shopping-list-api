const { generateToken, isValidPassword } = require('../utils');
const { User } = require('../models');

module.exports = {
  async authenticate(request, response) {
    try {
      const { email, password } = request.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return response.status(401).json({ error: 'User not found' });
      }

      const passwordMatched = await isValidPassword(password, user.password);
      if (!passwordMatched) {
        return response.status(401).json({ error: "Password doesn't match" });
      }

      const token = await generateToken(user.id);
      return response.json({ user, token });
    } catch (e) {
      return response.status(400).json({ error: 'Failed on Login' });
    }
  },
};
