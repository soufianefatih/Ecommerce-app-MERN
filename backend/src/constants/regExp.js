const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const password = /^[a-zA-Z0-9\-!@#$%^&*()_+,.:;'"?/]+$/;
const name = /^[a-zA-Z0-9 !@#$%^&*()_+,.:;'"?/-]+$/;

module.exports = {
  email,
  password,
  name,
};
