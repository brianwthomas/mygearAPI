exports.validateParameters = (body, res, params) => {  
  for (var i = 0; i < params.REQUIRED.length; i++) {
    if (!Object.keys(body).includes(params.REQUIRED[i]))    
      return res.error(400, "Missing or Invalid Required Parameters");
  }
    
  for (var property in body) {
    if (body.hasOwnProperty(property)) {      
      if (!(params.REQUIRED.includes(property)) && !(params.OPTIONAL.includes(property))) {
        return res.error(400, "Invalid Optional Parameters");
      }
    }
  }
}