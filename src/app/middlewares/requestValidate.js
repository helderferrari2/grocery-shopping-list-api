const Yup = require('yup');

const schemas = (method) => {
  switch (method) {
    case 'users.register':
      return Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
      });

    case 'users.update':
      return Yup.object().shape({
        name: Yup.string(),
        email: Yup.string().email(),
        password: Yup.string().min(6),
      });

    case 'auth.login':
      return Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
      });

    case 'lists.store':
      return Yup.object().shape({
        name: Yup.string().required().min(1),
      });

    case 'lists.update':
      return Yup.object().shape({
        name: Yup.string().required().min(1),
      });

    case 'list-items.store':
      return Yup.object().shape({
        list_id: Yup.number().required().positive().integer(),
        name: Yup.string().required().min(1),
        category: Yup.string(),
      });

    case 'list-items.update':
      return Yup.object().shape({
        list_id: Yup.number().required().positive().integer(),
        checked: Yup.boolean(),
        name: Yup.string().required().min(1),
        category: Yup.string().nullable(true),
        price: Yup.number().nullable(true),
        quantity: Yup.number().positive().integer(),
      });

    default:
  }
};

const validate = (method) => async (req, res, next) => {
  try {
    const schema = schemas(method);
    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (e) {
    return res.status(422).json({ error: e.name, messages: e.errors });
  }
};

module.exports = validate;
