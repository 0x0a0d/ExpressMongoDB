const http = require('http');
module.exports = config => {
    const app = require('./app');
    http.createServer(app).listen(config.http.port, config.http.host, err => {
        if (err) {
            throw err;
        }
        console.log(`Server is listening on http://${config.http.host}:${config.http.port}`)
    })
};