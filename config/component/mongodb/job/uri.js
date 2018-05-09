const {format} = require('mongodb-uri');
const mongoUriSchema = {
    hosts: [
        {
            host: process.env.DATABASE_JOB_HOST
        }
    ],
    database: process.env.DATABASE_JOB_DB
};

module.exports = format(mongoUriSchema);