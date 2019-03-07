var AWS = require('aws-sdk');
var ddb = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

module.exports = async (req, res) => {
    console.log("GET BIKES");
    let params = {
        TableName: "mygear-bikes",
        IndexName: "userId-index",
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
          ":userId": req.params.userId,
        },
      };
    let response = await ddb.query(params).promise();     
    console.log(response);     
    if ( response.Count > 0) {        
        //res.send({status: "OK"});
       //res.send(response.Items);
        
        return response.Items;
    }    
}