const post = require('./post');
const get = require('./get');

module.exports = route => {
    route.get('/login', get);
    route.post('/login', post);
};