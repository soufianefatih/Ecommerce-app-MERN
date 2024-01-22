const validate= require("./productSchema");
const  categorySchema = require("./categoryShema")
const authSchema  = require("./userSchema")
// const loginSchema  = require("./loginSchema")





module.exports = {
  validate,
  categorySchema ,authSchema
};
