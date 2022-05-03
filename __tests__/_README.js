
const v_rifier = require('..');

(async () => {
  await v_rifier.loadBuiltIns();

  console.log(await v_rifier.isArray([1, 2, 3])); //> true
  console.log(await v_rifier.isArray(true)); //> false



  console.log(await v_rifier.isBool(true)); //> true
  console.log(await v_rifier.isBool(false)); //> true
  console.log(await v_rifier('bool', true)); //> true
  console.log(await v_rifier('bool', false)); //> true
  console.log(await v_rifier.isBool(112)); //> false
  console.log(await v_rifier('bool', 0)); //> false
  console.log(await v_rifier.isBool("true")); //> false
  console.log(await v_rifier('bool', "true")); //> false



  console.log(await v_rifier.isEmail('slavko.vuletic92@gmail.com'));
  console.log(await v_rifier('email', 'slavko.vuletic92@gmail.com'));



  const sampleFunc = async () => {
    return console.log('yea');
  };

  console.log(await v_rifier.isFunction(sampleFunc)); //> true
  console.log(await v_rifier('function', sampleFunc )); //> true
  console.log(await v_rifier.isFunction(11)); //> false
  console.log(await v_rifier('function', 'function' )); //> false

})();
