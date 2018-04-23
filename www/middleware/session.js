const expressSession = require('express-session');
const {component: {server: {session}}} = require('../../config');

module.exports = expressSession(session);