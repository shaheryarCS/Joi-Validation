const express = require("express");
const bodyParser = require("body-parser");
const joi = require("joi");

const app = express();

const orderValidate = require("./order.validation");

app.use(bodyParser.json("application/json"));

const orderSchema = {
    orderPost:joi.object().keys({
        name: joi.string().required()
    })
} 

app.get('/api/order',orderValidate(orderSchema.orderPost,"query"),(req,res,next)=>{
    res.send('JOI validation passed');    
});

app.listen(3000,()=>{
    console.log("server started");
})