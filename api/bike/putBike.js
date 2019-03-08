const AWS = require('aws-sdk');
const config = require('../../config');
const uuid = require('uuid/v4');

let ddb = new AWS.DynamoDB.DocumentClient({region: config.database.region});

const PUT_PARAMETERS = [
  "name",
  "userId",
]

let validation = (body) => {
  // Check body matches
  let returnValue = true;
  Object.keys(body).forEach((key) => {    
    if (!PUT_PARAMETERS.includes(key)) {
      returnValue = false;
    }       
  });
  return returnValue;
}

module.exports = async (req, res) => {
    console.log("putBike API call made");    
    if (!validation(req.body))
      return res.error(400, "Invalid Parameters");
    let params = {
        TableName: config.database.bikes.tableName,
        Item: {
          bikeId: uuid(),
          userId: "11",
          name: "Super Cool API bike"
        }
      };
    //let response = await ddb.put(params).promise();
    //console.log(response.$response);     
    //return response;
}