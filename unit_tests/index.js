//var getBike = 

module.exports = {
    ...require('./bike/getBike'),
    ...require('./bike/putBike'),  
    ...require('./bike/deleteBike'),  
    ...require('./bike/getBikes'),      
    ...require('./component/putComponent'),  
    ...require('./component/deleteComponent'),  
}