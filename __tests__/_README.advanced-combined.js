
const v_rifier = require('..');

(async () => {
  let demoVerifier = await v_rifier();

  // Create a custom type
  console.log(await demoVerifier.register('customType', async (value) => (await demoVerifier('number', value) && value > 0))); //> true

  // Or other way...
  console.log(await demoVerifier.isCustomType(123)); //> true
  console.log(await demoVerifier.isCustomType(-123)); //> false

  console.log(await demoVerifier.isCustomType("-123")); //> false

})();
