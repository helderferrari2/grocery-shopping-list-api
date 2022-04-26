const { List, ListItem } = require('../models');

module.exports = {
  async store(request, response) {
    try {
      const { list_id, name, category } = request.body;

      const list = await List.findByPk(list_id);
      if (!list) {
        return response.status(404).json({ error: 'List not found' });
      }

      const payload = {
        list_id,
        user_id: request.user_id,
        name,
        category,
      };

      const listItem = await ListItem.create(payload);
      return response.json(listItem);
    } catch (e) {
      return response.status(400).json({ error: 'Failed on store new list item' });
    }
  },

  async show(request, response) {
    try {
      const list = await List.findByPk(request.params.list_id, { include: [{ model: ListItem, as: 'list-items' }] });
      if (!list) {
        return response.status(404).json({ error: 'List not found' });
      }

      return response.json(list);
    } catch (e) {
      return response.status(400).json({ error: 'Something went wrong' });
    }
  },

  async update(request, response) {
    try {
      const { id } = request.params;
      const {
        list_id, name, category, checked, price, quantity,
      } = request.body;

      const list = await List.findByPk(list_id);
      if (!list) {
        return response.status(404).json({ error: 'List not found' });
      }

      const listItem = await ListItem.findByPk(id);
      if (!listItem) {
        return response.status(404).json({ error: 'List item not found' });
      }

      const payload = {
        name,
        category,
        checked,
        price,
        quantity,
      };
      await listItem.update(payload);
      return response.json(listItem);
    } catch (e) {
      return response.status(400).json({ error: 'Failed on update list item' });
    }
  },

  async delete(request, response) {
    try {
      const listItem = await ListItem.findByPk(request.params.id);
      if (!listItem) {
        return response.status(404).json({ error: 'List Item not found' });
      }

      await listItem.destroy();
      return response.status(204).json('Successfully');
    } catch (e) {
      return response.status(400).json({ error: 'Something went wrong' });
    }
  },
};
