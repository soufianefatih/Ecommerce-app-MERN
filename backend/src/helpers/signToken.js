const jwt = require("jsonwebtoken");
require('dotenv').config();
const { SECRET_KEY } = process.env;

const signToken = function () {
  const payload = { id: this._id ,role: this.role};
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "30d" });
};

module.exports = signToken;
