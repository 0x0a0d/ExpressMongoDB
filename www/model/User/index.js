const {component: {mongodb: {auth: {conn: auth}}}} = require('../../../config');
const {User: {schema}} = require('../../../model');

schema.methods.validPassword = function (password) {
    return this.password === password;
};

module.exports = auth.model('user', schema);