const {Router} = require('express');
const route = Router();

const error = require('./error');
const user = require('./user');
const login = require('./login');

login(route);
user(route);

route.use(error.errorHandle);
route.use(error.notFound);

module.exports = route;