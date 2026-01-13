const  AppErrors = require('./error-handlers');

class ClientError extends AppErrors{
    constructor(name,message,explanation,statusCode){
        super(name,
            message,
            explanation,
            statusCode
        );
    }
   
}
module.exports = ClientError  ;