module.exports = {
    tableName: "mygear-components",
    partitionKey: "componentId",
    gsi: {
        userId: {
            indexName: "userId-index",
            partitionKey: "userId"
        },
        bikeId: {
            indexName: "bikeId-index",
            partitionKey: "bikeId"
        }
    }
}