const { Router } = require('express');
const HomeController = require('./controllers/HomeController');

const routes = Router();

routes.get('', HomeController.index);

module.exports = routes;
