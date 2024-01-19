const validateCreateProduct= require("./productSchema");
const  createSchema = require("./categoryShema")
const  updateSchema = require("./categoryShema")
const registerSchema  = require("./registerSchema")
const loginSchema  = require("./loginSchema")





module.exports = {
  validateCreateProduct,
  createSchema, updateSchema ,registerSchema ,loginSchema
};
