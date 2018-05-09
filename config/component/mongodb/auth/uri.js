const {format} = require('mongodb-uri');
const mongoUriSchema = {
    hosts: [
        {
            host: process.env.DATABASE_AUTH_HOST
        }
    ],
    database: process.env.DATABASE_AUTH_DB
};

module.exports = format(mongoUriSchema);