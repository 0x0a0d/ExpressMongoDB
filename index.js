const result = require('dotenv').config({silent: true});
if (result.error) {
    throw result.error
}

const {server} = require('./www');
const {mongoConnection} = require('./helper/database');
const {component: {mongodb, server: serverConfig}} = require('./config');
const {job, auth} = mongodb;

mongoConnection([job, auth])
    .then(()=>{
        server(serverConfig);
    });