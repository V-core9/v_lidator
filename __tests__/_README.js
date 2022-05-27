const v_rifier = require('..');
const myVerifier = v_rifier();

(async () => {

  console.log("true : ", await myVerifier.isArray([1, 2, 3])); //> true

  console.log("false : ", await myVerifier.isArray(true)); //> false



  console.log("true : ", await myVerifier.isBool(true)); //> true
  console.log("true : ", await myVerifier.isBool(false)); //> true
  console.log("true : ", await myVerifier('bool', true)); //> true
  console.log("true : ", await myVerifier('bool', false)); //> true

  console.log("false : ", await myVerifier.isBool(112)); //> false
  console.log("false : ", await myVerifier('bool', 0)); //> false
  console.log("false : ", await myVerifier.isBool("true")); //> false
  console.log("false : ", await myVerifier('bool', "true")); //> false



  console.log("true : ", await myVerifier.isEmail('slavko.vuletic92@gmail.com'));
  console.log("true : ", await myVerifier('email', 'slavko.vuletic92@gmail.com'));


  const sampleFunc = async () => {
    return console.log('yea');
  };

  console.log("true : ", await myVerifier.isFunction(sampleFunc)); //> true
  console.log("true : ", await myVerifier('function', sampleFunc )); //> true

  console.log("false : ", await myVerifier.isFunction(11)); //> false
  console.log("false : ", await myVerifier('function', 'function' )); //> false

})();
