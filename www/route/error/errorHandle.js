const statusCode = require('./statusCode');

module.exports = (err, req, res, next) => {
    const {code = 500} = err;
    statusCode(code)(err, res, res, next);
}