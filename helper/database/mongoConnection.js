const {Mongoose} = require('mongoose');

async function mongoConnection(connectionName, onConnected) {
    connectionName.conn = new Mongoose();
    connectionName.conn.connection
        .once('connected', onConnected)
        .once('connected', () => {
            connectionName.conn.connection.removeAllListeners('disconnected');
            connectionName.conn.connection.on('disconnected', () => {
                console.log('MongoDb disconnected');
            })
        })
        .on('connected', () => {
            console.info(`${connectionName.conn.connection.name}: DB connected.`);
        })
        .on('disconnected', ()=>{
            console.log('disconnected');
            setTimeout(()=>{
                connectionName.conn.connect(connectionName.uri, connectionName.option).catch(e=>{})
            }, 500)
        })
        .once('reconnected', () => {
            console.log('Reconnected')
        });
    connectionName.conn.connect(connectionName.uri, connectionName.option).catch(e=>{console.error(e.message)})
}

module.exports = (connections) => {
    if (! Array.isArray(connections)) {
        connections = [connections];
    }
    return Promise.all(connections.map(connection=>new Promise(resolve => mongoConnection(connection, resolve))));
};