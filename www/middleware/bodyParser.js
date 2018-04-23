const bodyParser = require('body-parser');
const {component: {server: {body}}} = require('../../config');

module.exports = [
    bodyParser.urlencoded(body.urlencoded)
];