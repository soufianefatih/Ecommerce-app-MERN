const validateCreateProduct= require("./productSchema");
const  createSchema = require("./categoryShema")
const  updateSchema = require("./categoryShema")
const registerSchema = require("./userSchema")



module.exports = {
  validateCreateProduct,
  createSchema, updateSchema ,registerSchema
};
