module.exports = {
    database: {
        region: "us-west-2",
        bikes: require("./config/databases/bikes"),
        components: require("./config/databases/components")
    }
};