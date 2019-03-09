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
    "bikeId",
    "brand",
    "distanceUsed",
    "lastUsedDate",
    "model",
    "timeUsed",
    "type"    
  ]
}

module.exports = async (req, res) => {
  console.log("putComponent API call made");         
  helper.validateParameters(req.body, res, PUT_PARAMETERS);
  let params = {
      TableName: config.database.components.tableName,
      Item: {
        // set automatically
        componentId: uuid(),
        userId: "11", // TODO
        createdDate: Math.floor(Date.now() / 1000), // epoch in seconds        
        
        // required
        name: req.body.name,
        
        //optional
        bikeId: req.body.bikeId,
        brand: req.body.brand,
        distanceUsed: req.body.distanceUsed,
        lastUsedDate: req.body.lastUsedDate,
        model: req.body.model,
        timeUsed: req.body.timeUsed,
        type: req.body.type
      }
    };
    console.log(`params = ${params}`);
    let response = await ddb.put(params).promise();
    console.log(`response = ${response.$response}`);
    return response;
}