

const schema = require('./schema');

module.exports = {
  email: schema.email.verify,
  password: schema.password.verify,
  username: schema.username.verify,
  name: schema.name.verify,
};
