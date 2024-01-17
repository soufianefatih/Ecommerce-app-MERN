const bcrypt = require("bcrypt");

const hashPassword = async function (next) {
  try {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
  } catch (error) {
    next(error);
  }
};

const hashedPassword = async function (password) {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

module.exports = { hashPassword, hashedPassword };
