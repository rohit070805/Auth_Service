const  AppErrors = require('./error-handlers');
const {StatusCodes}= require('http-status-codes');
class ValidationError extends AppErrors{
    constructor(error){
        let explanation = [];
        let errorName = error.name;
        error.errors.forEach((err) => {
            explanation.push(err.message);
        });
        super(errorName,
            'Not able to validate the data sent in request',
            explanation,
            StatusCodes.BAD_REQUEST
        );
    }
   
}
module.exports = ValidationError;