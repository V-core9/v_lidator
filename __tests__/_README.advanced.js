const v_rifier = require('..');

(async () => {

  console.log(await v_rifier.listTypes()); //> []

  // Create a custom type
  console.log(await v_rifier.register('customType', async (value) => (!isNaN(value) && value > 0))); //> true

  console.log(await v_rifier.listTypes()); //> ["customType"]

  // Use it

  // One way...
  console.log(await v_rifier('customType', 123)); //> true
  console.log(await v_rifier('customType', -123)); //> false

  // Or other way...
  console.log(await v_rifier.isCustomType(123)); //> true
  console.log(await v_rifier.isCustomType(-123)); //> false

  // Or Unregister It (if you want)
  console.log(await v_rifier.unregister('customType')); //> true

  console.log(await v_rifier.listTypes()); //> []

})();
