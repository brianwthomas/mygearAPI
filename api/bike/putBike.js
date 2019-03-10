const AWS = require('aws-sdk');
const config = require('../../config');
const uuid = require('uuid/v4');
const helper = require('../../tools/helpers');

let ddb = new AWS.DynamoDB.DocumentClient({region: config.database.region});

const PUT_PARAMETERS = {
  REQUIRED: [
    "name"
  ],
  OPTIONAL: [
    "components",
    "distanceUsed",
    "lastUsedDate",
    "timeUsed"    
  ]
}

module.exports = async (req, res) => {

  console.log("putBike API call made");           
  helper.validateParameters(req.body, res, PUT_PARAMETERS);

  let params = {
      TableName: config.database.bikes.tableName,
      Item: {
        bikeId: uuid(),
        userId: "11", // TODO
        name: req.body.name,
        createdDate: Math.floor(Date.now() / 1000), // epoch in seconds
        components: req.body.components,
        distanceUsed: req.body.distanceUsed,
        lastUsedDate: req.body.lastUsedDate,
        timeUsed: req.body.timeUsed      
      }
    };

    console.log('params = ' + JSON.stringify(params));
    
    let response = await ddb.put(params).promise();
    console.log('response = ' + response.$response);

    if (response.$response.httpResponse.statusCode === 200)
        return params.Item;
    else
        return res.error(500, "Bike Database Error. Please Try Again.")    
}