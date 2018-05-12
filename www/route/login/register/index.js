const get = require('./get.js');
const post = require('./post.js');

module.exports = route => {
    route
        .route('/login/register')
        .get(get)
        .post(post)
};
