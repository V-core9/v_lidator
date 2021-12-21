

const  email= require('./schema/email');
const  password= require('./schema/password');
const  username= require('./schema/username');

const  name= require('./schema/name');

  
module.exports = {
  email: email.verify,
  password: password.verify,
  username: username.verify,
  name: name.verify,
};
