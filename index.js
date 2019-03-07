'use strict';
const api = require('lambda-api')()

api.get('/bikes/:userId', require('./api/bike/getBikes'));


api.routes(true);
exports.handler = async (event, context, callback) => {
    //event.multiValueHeaders = "";
    console.log(event);
    var test = await api.run(event, context);    
    console.log(test);
    //return test
    callback(null, test);
}

