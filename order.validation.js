
const orderValidate = (schema,propertyName)=>{
    return (req,res,next)=>{
        /* Agenda : Validate API parameters
           If validation succeed: move to next middleware
           If validate false: return with error
        */

        //get property using "propertyName" from "req" 
        const property = req[propertyName];
        //validate the property or parameters using JOI validate method
        const {error} = schema.validate(property);
        //chech if error null
        const valid = error == null
        //if error null then move to next middle ware
        if (valid) {
            next();
        } else {
            return res.status(400).json({
                error
            });
        }
    }
}

module.exports = orderValidate;
