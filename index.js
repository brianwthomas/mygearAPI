'use strict';
const api = require('lambda-api')()

exports.handler = async (event, context, callback) => {    
    // log event because... It's smart
    console.log(event);
    api.get('/bike/:bikeId', require('./api/bike/getBike'));
    api.get('/bikes/:userId', require('./api/bike/getBikes'));
    api.put('/bike', require('./api/bike/putBike'));
    api.put('/component', require('./api/bike/putComponent'));
    
    let response = await api.run(event, context);    
    // log response before we send it back
    console.log(response);
    
    callback(null, response);
}