const get = require('./get');

module.exports = route => {
    route.get('/user', get);
};