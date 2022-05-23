const v_rifier = require('..');

(async () => {
  let sampleVerifier = await v_rifier({ builtIns: false });

  console.log(await sampleVerifier.listTypes()); //> []

  // Create a custom type
  console.log(await sampleVerifier.register('customType', async (value) => (!isNaN(value) && value > 0))); //> true

  console.log(await sampleVerifier.listTypes()); //> [ 'customtype' ]

  // Use it

  // One way...
  console.log(await sampleVerifier('customType', 123)); //> true
  console.log(await sampleVerifier('customType', -123)); //> false

  // Or other way...
  console.log(await sampleVerifier.isCustomType(123)); //> true
  console.log(await sampleVerifier.isCustomType(-123)); //> false

  // Or Unregister It (if you want)
  console.log(await sampleVerifier.unregister('customType')); //> true

  console.log(await sampleVerifier.listTypes()); //> []

})();
