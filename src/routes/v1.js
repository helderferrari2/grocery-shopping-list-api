const { Router } = require('express');

const routes = new Router();

const UserController = require('../app/controllers/UserController');
const AuthController = require('../app/controllers/AuthController');
const ItemController = require('../app/controllers/ItemController');
const ListController = require('../app/controllers/ListController');
const ListItemController = require('../app/controllers/ListItemController');
const AuthenticateMiddleware = require('../app/middlewares/authenticate');
const validate = require('../app/middlewares/requestValidate');

/**
 * PUBLIC ROUTES
 */
routes.get('/', (request, response) => response.json({ message: 'Welcome to Grocery Shopping List API' }));
routes.post('/register', validate('users.register'), UserController.register);
routes.post('/login', validate('auth.login'), AuthController.authenticate);

/**
 * PRIVATE ROUTES
 */
routes.use(AuthenticateMiddleware);
routes.get('/me', AuthController.me);
routes.get('/items', ItemController.index);
routes.put('/users/:id', validate('users.update'), UserController.update);
routes.delete('/users/:id', UserController.delete);
routes.get('/lists', ListController.index);
routes.post('/lists', validate('lists.store'), ListController.store);
routes.put('/lists/:id', validate('lists.update'), ListController.update);
routes.delete('/lists/:id', ListController.delete);
routes.post('/list-items', validate('list-items.store'), ListItemController.store);
routes.get('/list-items/:list_id', ListItemController.show);
routes.put('/list-items/:id', validate('list-items.update'), ListItemController.update);
routes.delete('/list-items/:id', ListItemController.delete);

module.exports = routes;
