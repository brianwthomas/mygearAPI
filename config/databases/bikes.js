module.exports = {
    tableName: "mygear-bikes",
    partitionKey: "bikeId",
    gsi: {
        userId: {
            indexName: "userId-index",
            partitionKey: "userId",
        }
    }
}