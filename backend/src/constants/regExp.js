const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const password = /^[a-zA-Z0-9\-!@#$%^&*()_+,.:;'"?/]+$/;
const name = /^[a-zA-Z0-9 !@#$%^&*()_+,.:;'"?/-]+$/;


const isValidObjectId = (_id) => {
  return /^[0-9a-fA-F]{24}$/.test(_id);
};



module.exports = {
  email,
  password,
  name,
  isValidObjectId
};
