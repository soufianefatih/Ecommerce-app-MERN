const { Schema, model} = require("mongoose");

const productSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    description : {
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

    image: {
        type : Object,
        default : {
            url : "",
            publicId : null,
        }
    },

    category : {
              type: Schema.Types.ObjectId,
              ref : 'Category'
    },
   
},{
        timestamps : true
})

const Product = model("Product", productSchema);

module.exports = Product