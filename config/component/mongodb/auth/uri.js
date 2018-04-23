const {format} = require('mongodb-uri');
const mongoUriSchema = {
    hosts: [
        {
            host: '127.0.0.1'
        }
    ],
    database: 'vn'
};

module.exports = format(mongoUriSchema);