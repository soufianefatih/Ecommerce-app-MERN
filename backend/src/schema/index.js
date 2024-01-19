const validateCreateProduct= require("./productSchema");
const  createSchema = require("./categoryShema")
const  updateSchema = require("./categoryShema")
const authSchema  = require("./userSchema")
// const loginSchema  = require("./loginSchema")





module.exports = {
  validateCreateProduct,
  createSchema, updateSchema ,authSchema
};
