const validateCreateProduct= require("./productSchema");
const  createSchema = require("./categoryShema")
const  updateSchema = require("./categoryShema")
const registerSchema = require("./userSchema")
const loginSchema = require("./userSchema")




module.exports = {
  validateCreateProduct,
  createSchema, updateSchema ,registerSchema,loginSchema
};
