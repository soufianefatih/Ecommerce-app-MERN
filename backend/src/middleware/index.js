const isAuthorized = require("./isAuthorized");
const virifylogin = require("./virifyLogin")
const userRole = require("./roleAuthorized");

module.exports = {
  isAuthorized,
  virifylogin,
   userRole
};
