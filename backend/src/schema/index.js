const validateCreateProduct= require("./productSchema");
const  categorySchema = require("./categoryShema")
const authSchema  = require("./userSchema")
// const loginSchema  = require("./loginSchema")





module.exports = {
  validateCreateProduct,
  categorySchema ,authSchema
};
