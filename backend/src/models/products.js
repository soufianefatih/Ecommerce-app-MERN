import mongoose from "mongoose";


const productSchema = mongoose.Schema({

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
        type : String,
        required : true
    },




})