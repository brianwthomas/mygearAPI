'use strict';
const api = require('lambda-api')()

api.get('/bike/:bikeId', require('./api/bike/getBike'));
api.delete('/bike/:bikeId', require('./api/bike/deleteBike'));
api.put('/bike', require('./api/bike/putBike'));
api.get('/bikes/:userId', require('./api/bike/getBikes'));
api.put('/component', require('./api/component/putComponent'));
api.delete('/component/:componentId', require('./api/component/deleteComponent'));

exports.handler = async (event, context, callback) => {    
    // log event because... It's smart
    console.log(event);
    
    let response = await api.run(event, context);    
    // log response before we send it back
    console.log(response);
    
    callback(null, response);
}