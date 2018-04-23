const {Router} = require('express');
const route = Router();

const user = require('./user');
const login = require('./login');

login(route);
user(route);

module.exports = route;