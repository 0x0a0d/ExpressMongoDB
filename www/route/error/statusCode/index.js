const  statusCode = {
    400: require('./400.js'),
    404: require('./404.js'),
    500: require('./500.js'),
    get(code) {
        return this[code] || null
    }
}

module.exports = code => {
    const errorHandle = statusCode.get(code);
    if (errorHandle == null) {
        console.log(code, 'errorHandle Not found')
        return statusCode.get(500);
    }
    else {
        return errorHandle;
    }
};