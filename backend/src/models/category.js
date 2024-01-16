import mongoose from "mongoose";
const Schema = mongoose.Schema

const categorySchema = mongoose.Schema({

    name : {
        type : String,
        required : true
    }
   
},{
    timestamps : true

})

const Category = mongoose.model('Category',categorySchemaSchema)

export default Category