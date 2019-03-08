'use strict';
const api = require('lambda-api')()

api.get('/bikes/:userId', require('./api/bike/getBikes'));
api.put('/bike', require('./api/bike/putBike'));


exports.handler = async (event, context, callback) => {    
    // log event because... It's smart
    console.log(event);
    let response = await api.run(event, context);    
    // log response before we send it back
    console.log(response);
    
    callback(null, response);
}