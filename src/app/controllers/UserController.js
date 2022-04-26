const { generatePasswordHash } = require('../utils');
const { User } = require('../models');

module.exports = {
  async register(request, response) {
    try {
      const { name, email, password } = request.body;
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return response.status(400).json({ error: 'The e-mail has already been taken.' });
      }

      const encryptedPassword = await generatePasswordHash(password);
      const user = await User.create({ name, email, password: encryptedPassword });
      return response.json(user);
    } catch (e) {
      return response.status(400).json({ error: 'Something went wrong' });
    }
  },

  async update(request, response) {
    try {
      const { id } = request.params;
      const { name, email, password } = request.body;

      const user = await User.findByPk(id);
      if (!user) {
        return response.status(404).json({ error: 'User not found' });
      }

      if (user.id !== request.user_id) {
        return response.status(403).json({ error: 'Forbidden' });
      }

      if (email !== user.email) {
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
          return response.status(400).json({ error: 'The e-mail has already been taken.' });
        }
      }

      const payload = { name, email };
      if (password) {
        payload.password = await generatePasswordHash(password);
      }

      await user.update(payload);
      return response.json(user);
    } catch (e) {
      return response.status(400).json({ error: 'Something went wrong' });
    }
  },

  async delete(request, response) {
    try {
      const { id } = request.params;
      const user = await User.findByPk(id);
      if (!user) {
        return response.status(404).json({ error: 'User not found' });
      }

      if (user.id !== request.user_id) {
        return response.status(403).json({ error: 'Forbidden' });
      }

      await user.destroy();

      return response.status(204).json('Successfully');
    } catch (e) {
      return response.status(400).json({ error: 'Something went wrong' });
    }
  },
};
