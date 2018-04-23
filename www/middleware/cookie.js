const cookieParser = require('cookie-parser');
const {component: {server: cookie}} = require('../../config');

module.exports = cookieParser(cookie.secret);