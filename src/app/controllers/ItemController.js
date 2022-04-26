const { Item } = require('../models');

module.exports = {
  async index(request, response) {
    try {
      const items = await Item.findAll();
      return response.json(items);
    } catch (e) {
      return response.status(404).json({ error: 'Item not found' });
    }
  },
};
