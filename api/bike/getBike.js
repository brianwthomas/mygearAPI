let AWS = require('aws-sdk');
let config = require('../../config');

let ddb = new AWS.DynamoDB.DocumentClient({region: config.database.region});

module.exports = async (req, res) => {
    console.log("getBike API call made");

    let params = {
        TableName: config.database.bikes.tableName,
        Key: {
            bikeId: req.params.bikeId
        }
    };

    console.log('params = ' + JSON.stringify(params));
    let response = await ddb.get(params).promise();
    console.log(response.$response);     
    
    if (response.$response.httpResponse.statusCode === 200)
        return response;
    else
        return res.error(500, "Bike Database Error. Please Try Again.")  
}