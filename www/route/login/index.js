const post = require('./post');
const get = require('./get');
const register = require('./register');


module.exports = route => {
    route
        .route('/login')
        .get(get)
        .post(post);

    register(route);
};