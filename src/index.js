

const  email= require('./schema/email');
const  password= require('./schema/password');
const  username= require('./schema/username');

  
module.exports = {
  email: email.verify,
  password: password.verify,
  username: username.verify,
};
