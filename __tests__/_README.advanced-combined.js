

const v_rifier = require('..');

(async () => {
  await v_rifier.loadBuiltIns();

  // Create a custom type
  console.log(await v_rifier.register('customType', async (value) => (await v_rifier('number', value) && value > 0))); //> true

  // Or other way...
  console.log(await v_rifier.isCustomType(123)); //> true
  console.log(await v_rifier.isCustomType(-123)); //> false

  console.log(await v_rifier.isCustomType("-123")); //> false

})();
