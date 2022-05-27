let myVerifier = require('../src')();

(async () => {

  console.log(myVerifier.toString());

  console.log('string', await myVerifier('string', 12312312312));
  console.log('bool', await myVerifier('bool', 12312312312));


  console.log(myVerifier);
  // List Types After Registering Few New Ones
  console.log(await myVerifier.listTypes());


  //? Test Custom Types

  //? Names
  //! Bad
  console.log('name', await myVerifier('name', 12312312312));
  console.log('name', await myVerifier('name', "slavko.vulet ic92@gmail.com"));
  console.log('name', await myVerifier('name', "Slavko VuleticSlavko VuleticSlavko Vuletic"));
  //* Good 
  console.log('name', await myVerifier('name', "Slavko Vuletic"));
  console.log('name', await myVerifier('name', "Miki Yea Rrrr"));


  //? Emails
  //! Bad
  console.log('email', await myVerifier('email', "Slavko VuleticSlavko VuleticSlavko Vuletic"));
  console.log('email', await myVerifier('email', "slavko.vulet ic92@gmail.com"));
  console.log('email', await myVerifier('email', "slavko.@vuletic92@gmail.com"));
  //* Good
  console.log('email', await myVerifier('email', "slavko.vuletic92@gmail.com"));
  console.log('email', await myVerifier('email', "slavko_vuletic@hotmail.com"));


  //? Passwords
  //! Bad
  console.log('password[false]:', await myVerifier('password', "Slavko VuleticSlavko VuleticSlavko Vuletic"));
  console.log('password[false]:', await myVerifier('password', "Slavko VuleticSlavko VuleticSlavko Vuletic", "Slavko VuleticSlavko VuleticSlavko Vuletic"));
  console.log('password[false]:', await myVerifier('password', "Slavko_32123123", "123123123"));
  //* Good
  console.log('password[true]:', await myVerifier('password', "Slavko_32123123", "Slavko_32123123"));
  console.log('password[true]:', await myVerifier('password', 123123, 123123));



  //! Try to unregister ALL types 
  //! NOTE: Will only remove custom registered types.
  (await myVerifier.listTypes()).forEach(async (type) => {
    console.log('Un-register Type:', type, await myVerifier.unregister(type));
  });

  console.log(await myVerifier.listTypes());


})();
