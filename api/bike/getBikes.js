let AWS = require('aws-sdk');
let config = require('../../config');

let ddb = new AWS.DynamoDB.DocumentClient({region: config.database.region});

module.exports = async (req, res) => {
  console.log("getBikes API call made");

  let params = {
      TableName: config.database.bikes.tableName,
      IndexName: config.database.bikes.gsi.userId.indexName,
      KeyConditionExpression: `${config.database.bikes.gsi.userId.partitionKey} = :userId`,
      ExpressionAttributeValues: {
        ":userId": req.params.userId,
      }
    };

  console.log('params = ' + JSON.stringify(params));

  let response = await ddb.query(params).promise();  
  console.log(response.$response);     
  
  if (response.$response.httpResponse.statusCode === 200)
    return response;
  else
    return res.error(500, "Bike Database Error. Please Try Again.")    
}