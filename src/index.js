

const schema = require('./schema');

module.exports = {
  email: schema.email.verify,
  password: schema.password.verify,
  username: schema.username.verify,
  name: schema.name.verify,
  text: schema.text.verify,
  number: schema.number.verify,
  integer: schema.integer.verify,
};
