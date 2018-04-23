const {format} = require('mongodb-uri');
const mongoUriSchema = {
    hosts: [
        {
            host: '127.0.0.1'
        }
    ],
    database: 'userpass'
};

module.exports = format(mongoUriSchema);