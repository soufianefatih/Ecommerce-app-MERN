const { Schema, model} = require("mongoose");

const orderSchema = new Schema({

    ProductName: {
        type : String,
        required : true
    },
  
    qty : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    total : {
        type : Number,
        required : true
    },

   
    user : {
            type: Schema.Types.ObjectId,
            ref : 'User'
    },
   
},{
        timestamps : true
})

const Order = model("Order", orderSchema);

module.exports = Order