const { Schema, model} = require("mongoose");

const categorySchema = new Schema({

    name : {
        type : String,
        trim: true,
    }
   
},{
    timestamps : true

})

const Category = model("Category", categorySchema);

module.exports = Category