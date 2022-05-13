const { List } = require('../models');

module.exports = {
  async index(request, response) {
    try {
      const lists = await List.findAll({
        where: { user_id: request.user_id },
        order: [['id', 'DESC']],
      });
      return response.json(lists);
    } catch (e) {
      return response.status(400).json({ error: 'Something went wrong' });
    }
  },

  async store(request, response) {
    try {
      const { name } = request.body;
      const list = await List.create({ user_id: request.user_id, name });
      return response.json(list);
    } catch (e) {
      return response.status(400).json({ error: 'Something went wrong' });
    }
  },

  async update(request, response) {
    try {
      const { name } = request.body;

      const list = await List.findByPk(request.params.id);
      if (!list) {
        return response.status(404).json({ error: 'List not found' });
      }

      await list.update({ name });

      return response.json(list);
    } catch (e) {
      return response.status(400).json({ error: 'Something went wrong' });
    }
  },

  async delete(request, response) {
    try {
      const list = await List.findByPk(request.params.id);
      if (!list) {
        return response.status(404).json({ error: 'List not found' });
      }

      await list.destroy();
      return response.status(204).json('Successfully');
    } catch (e) {
      return response.status(400).json({ error: 'Something went wrong' });
    }
  },
};
