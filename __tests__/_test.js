const v_rifier = require('../src');

(async () => {

  console.log(v_rifier);


  await v_rifier.loadBuiltIns();

  console.log(v_rifier.toString());

  console.log('string', await v_rifier('string', 12312312312));
  console.log('bool', await v_rifier('bool', 12312312312));




  console.log(v_rifier);
  // List Types After Registering Few New Ones
  console.log(await v_rifier.listTypes());


  //? Test Custom Types

  //? Names
  //! Bad
  console.log('name', await v_rifier('name', 12312312312));
  console.log('name', await v_rifier('name', "slavko.vulet ic92@gmail.com"));
  console.log('name', await v_rifier('name', "Slavko VuleticSlavko VuleticSlavko Vuletic"));
  //* Good 
  console.log('name', await v_rifier('name', "Slavko Vuletic"));
  console.log('name', await v_rifier('name', "Miki Yea Rrrr"));


  //? Emails
  //! Bad
  console.log('email', await v_rifier('email', "Slavko VuleticSlavko VuleticSlavko Vuletic"));
  console.log('email', await v_rifier('email', "slavko.vulet ic92@gmail.com"));
  console.log('email', await v_rifier('email', "slavko.@vuletic92@gmail.com"));
  //* Good
  console.log('email', await v_rifier('email', "slavko.vuletic92@gmail.com"));
  console.log('email', await v_rifier('email', "slavko_vuletic@hotmail.com"));


  //? Passwords
  //! Bad
  console.log('password[false]:', await v_rifier('password', "Slavko VuleticSlavko VuleticSlavko Vuletic"));
  console.log('password[false]:', await v_rifier('password', "Slavko VuleticSlavko VuleticSlavko Vuletic", "Slavko VuleticSlavko VuleticSlavko Vuletic"));
  console.log('password[false]:', await v_rifier('password', "Slavko_32123123", "123123123"));
  //* Good
  console.log('password[true]:', await v_rifier('password', "Slavko_32123123", "Slavko_32123123"));
  console.log('password[true]:', await v_rifier('password', 123123, 123123));



  //! Try to unregister ALL types 
  //! NOTE: Will only remove custom registered types.
  (await v_rifier.listTypes()).forEach(async (type) => {
    console.log('Un-register Type:', type, await v_rifier.unregister(type));
  });

  console.log(await v_rifier.listTypes());


})();
